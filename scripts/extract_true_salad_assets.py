import struct, zlib, os
from collections import deque

def decode_png(path):
    with open(path, 'rb') as f: data = f.read()
    pos = 8; raw_idat = []
    while pos < len(data):
        l = struct.unpack('>I', data[pos:pos+4])[0]
        ct = data[pos+4:pos+8]; cd = data[pos+8:pos+8+l]; pos += 12 + l
        if ct == b'IHDR': w, h = struct.unpack('>II', cd[:8])
        elif ct == b'IDAT': raw_idat.append(cd)
        elif ct == b'IEND': break
    decomp = zlib.decompress(b''.join(raw_idat))
    stride = w * 4; pix = bytearray(w * h * 4); sp = 0
    prow = bytearray(stride); crow = bytearray(stride)
    for y in range(h):
        filt = decomp[sp]; sp += 1
        raw = decomp[sp:sp+stride]; sp += stride
        if filt == 0: crow[:] = raw
        elif filt == 1:
            for x in range(stride):
                l = crow[x-4] if x >= 4 else 0
                crow[x] = (raw[x] + l) & 0xff
        elif filt == 2:
            for x in range(stride): crow[x] = (raw[x] + prow[x]) & 0xff
        elif filt == 3:
            for x in range(stride):
                l = crow[x-4] if x >= 4 else 0
                crow[x] = (raw[x] + ((l + prow[x]) // 2)) & 0xff
        elif filt == 4:
            for x in range(stride):
                l = crow[x-4] if x >= 4 else 0
                u = prow[x]; ul = prow[x-4] if x >= 4 else 0; p = l + u - ul
                pa, pb, pc = abs(p - l), abs(p - u), abs(p - ul)
                pr = l if (pa <= pb and pa <= pc) else (u if pb <= pc else ul)
                crow[x] = (raw[x] + pr) & 0xff
        pix[y*stride:(y+1)*stride] = crow; prow[:] = crow
    return w, h, pix

def encode_png(width, height, pixels):
    def make_chunk(chunk_type, data):
        return struct.pack('>I', len(data)) + chunk_type + data + struct.pack('>I', zlib.crc32(chunk_type + data) & 0xffffffff)
    ihdr = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    raw_lines = bytearray(); stride = width * 4
    for y in range(height):
        raw_lines.append(0)
        raw_lines.extend(pixels[y*stride:(y+1)*stride])
    idat = zlib.compress(raw_lines, 9)
    return b'\x89PNG\r\n\x1a\n' + make_chunk(b'IHDR', ihdr) + make_chunk(b'IDAT', idat) + make_chunk(b'IEND', b'')

def extract_all():
    src_path = '/Users/thaxx/.gemini/antigravity/brain/bac2e8f4-53e2-4d50-986a-bfe43870b315/.user_uploaded/media_1793774572403_39b3a5e7.png'
    w, h, pix = decode_png(src_path)
    print(f'Decoded source photo: {w}x{h}')

    # Layer IDs:
    # 0: Bowl
    # 1: Lettuce
    # 2: Tomatoes
    # 3: Cucumber
    # 4: Corn & Veg
    # 5: Beans
    # 6: Paneer
    # 7: Cheese
    # 8: Herbs

    assignments = [-1] * (w * h)

    # 1. Pre-identify Right Bean Component (x in 375..412, y in 306..335)
    # Keeps the whole kidney bean in Beans layer (layer 5), completely out of Paneer
    right_bean_pts = set()
    visited = set()
    q = deque([(390, 320)])
    visited.add((390, 320))
    while q:
        cx, cy = q.popleft()
        right_bean_pts.add((cx, cy))
        for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
            nx, ny = cx + dx, cy + dy
            if 370 <= nx < 420 and 305 <= ny < 336 and (nx, ny) not in visited:
                idx = (ny * w + nx) * 4
                if pix[idx+3] > 40:
                    visited.add((nx, ny))
                    q.append((nx, ny))

    # 2. Pre-identify Left Green Bell Pepper (x in 195..235, y in 491..523)
    left_pep_pts = set()
    visited = set()
    q = deque([(215, 510)])
    visited.add((215, 510))
    while q:
        cx, cy = q.popleft()
        left_pep_pts.add((cx, cy))
        for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
            nx, ny = cx + dx, cy + dy
            if 190 <= nx < 236 and 490 <= ny < 524 and (nx, ny) not in visited:
                idx = (ny * w + nx) * 4
                if pix[idx+3] > 40 and pix[idx+1] > pix[idx]:
                    visited.add((nx, ny))
                    q.append((nx, ny))

    # 3. Pre-identify Right Green Bell Pepper (x in 400..450, y in 479..522)
    right_pep_pts = set()
    visited = set()
    q = deque([(425, 510)])
    visited.add((425, 510))
    while q:
        cx, cy = q.popleft()
        right_pep_pts.add((cx, cy))
        for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
            nx, ny = cx + dx, cy + dy
            if 395 <= nx < 450 and 475 <= ny < 522 and (nx, ny) not in visited:
                idx = (ny * w + nx) * 4
                if pix[idx+3] > 40 and pix[idx+1] > pix[idx]:
                    visited.add((nx, ny))
                    q.append((nx, ny))

    # 4. Pre-identify Center Top Green Bell Pepper chunk in Corn (x in 255..316, y in 460..480)
    center_pep_pts = set()
    visited = set()
    q = deque([(285, 470)])
    visited.add((285, 470))
    while q:
        cx, cy = q.popleft()
        center_pep_pts.add((cx, cy))
        for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
            nx, ny = cx + dx, cy + dy
            if 250 <= nx < 320 and 458 <= ny < 482 and (nx, ny) not in visited:
                idx = (ny * w + nx) * 4
                if pix[idx+3] > 40 and pix[idx+1] > pix[idx] and pix[idx+1] > pix[idx+2]:
                    visited.add((nx, ny))
                    q.append((nx, ny))

    # 5. Pre-identify ALL Cucumber Slices across entire width (x in 170..510, y in 468..595)
    # This captures the full 3D cubic and wedge shapes from their upper peaks at y=470 down to y=594,
    # preventing horizontal slicing across the cucumber tops!
    cuke_pts = set()
    for seed_x, seed_y in [(235, 560), (330, 560), (410, 560), (480, 560), (190, 560)]:
        if (seed_x, seed_y) in cuke_pts:
            continue
        visited = set()
        q = deque([(seed_x, seed_y)])
        visited.add((seed_x, seed_y))
        while q:
            cx, cy = q.popleft()
            cuke_pts.add((cx, cy))
            for dx, dy in [(-1,0), (1,0), (0,-1), (0,1)]:
                nx, ny = cx + dx, cy + dy
                if 170 <= nx < 510 and 468 <= ny < 595 and (nx, ny) not in visited:
                    if (nx, ny) in left_pep_pts or (nx, ny) in right_pep_pts or (nx, ny) in center_pep_pts:
                        continue
                    nidx = (ny * w + nx) * 4
                    if pix[nidx+3] > 40:
                        nr, ng, nb = pix[nidx], pix[nidx+1], pix[nidx+2]
                        # Exclude tomatoes:
                        if nr > 130 and nr > ng + 25:
                            continue
                        # Exclude golden sweet corn:
                        if nr > 175 and ng > 130 and nb < 85 and nr >= ng - 5:
                            continue
                        visited.add((nx, ny))
                        q.append((nx, ny))

    print(f'Identified {len(cuke_pts)} full-depth cucumber slice pixels (y: 470..594)')

    for y in range(h):
        for x in range(w):
            idx = (y * w + x) * 4
            a = pix[idx+3]
            if a <= 15:
                continue
            r, g, b = pix[idx], pix[idx+1], pix[idx+2]
            
            assigned = -1
            
            # Region 1: Herbs & Cheese vs Paneer (y < 225)
            # All cotija cheese stays strictly at y < 192, eliminating ghost stains in the gap!
            if y < 192:
                is_green_herb = (g > 60 and g > r + 8 and g > b) or (g > 80 and g > b + 15)
                if is_green_herb:
                    assigned = 8 # Herbs
                else:
                    assigned = 7 # Crumbled Artisanal Cheese
            elif y < 220:
                is_green_herb = (g > 60 and g > r + 8 and g > b)
                if is_green_herb:
                    assigned = 8 # Herbs
                else:
                    # Clean separation: only genuine paneer cube pixels
                    if r > 115 and g > 45:
                        assigned = 6 # Paneer
                    else:
                        assigned = -1 # Clear out ghost dust
                    
            # Region 2: Paneer vs Kidney Beans (y: 220..340)
            # Paneer cubes end cleanly with flame-grilled boundaries (no ragged dangling shreds!)
            elif y < 305:
                assigned = 6 # Paneer
            elif y < 336:
                if (x, y) in right_bean_pts:
                    assigned = 5 # Kidney Beans (100% whole)
                elif x in range(245, 325) and y <= 326 and (r > 115 and g > 45 and g > b + 12):
                    assigned = 6 # Center Paneer Cube (clean bottom edge at y=326)
                elif x in range(185, 245) and y <= 318 and (r > 115 and g > 45):
                    assigned = 6 # Left Paneer Cube (clean bottom edge at y=318)
                elif y < 318:
                    assigned = 6 # Paneer
                else:
                    assigned = 5 # Beans
                    
            # Region 3: Kidney Beans vs Corn & Veg (y: 336..435)
            elif y < 405:
                assigned = 5 # Beans
            elif y < 426:
                is_bean = (r > g + 12 and r > b + 10 and g < 95 and b < 85 and r < 165)
                if is_bean:
                    assigned = 5 # Beans (plump rounded lower curves)
                else:
                    assigned = 4 # Corn & Veg
                    
            # Region 4: Corn & Veg vs Cucumber (y: 426..535)
            # Cucumber slices are 100% intact with zero horizontal flat-cutting!
            elif y < 470:
                assigned = 4 # Corn & Veg
            elif y < 535:
                if (x, y) in cuke_pts:
                    assigned = 3 # Cucumber (full 3D shapes)
                elif (x, y) in left_pep_pts or (x, y) in right_pep_pts or (x, y) in center_pep_pts:
                    assigned = 4 # Sweet Corn & Garden Veg (whole bell peppers)
                elif (r > 170 and g > 125 and b < 90) or (r > 160 and g > 150 and b > 130 and g <= r + 5):
                    assigned = 4 # Corn kernels & translucent onion
                elif y < 510:
                    assigned = 4 # Corn & Veg
                else:
                    assigned = 3 # Cucumber
                    
            # Region 5: Cucumber vs Tomatoes (y: 535..620)
            elif y < 593:
                assigned = 3 # Cucumber
            elif y < 598:
                is_cuke_tip = (x > 450 and (g > r or (g > 70 and g > b)))
                if is_cuke_tip:
                    assigned = 3 # Cucumber
                else:
                    assigned = 2 # Tomatoes
                    
            # Region 6: Tomatoes vs Lettuce (y: 620..765)
            elif y < 663:
                is_tomato = (x in range(220, 445) and r > 130 and r > g + 30)
                if is_tomato:
                    assigned = 2 # Tomatoes
                else:
                    assigned = 1 # Lettuce
                    
            # Region 7: Lettuce vs Bowl (y >= 765)
            # Full purple radicchio leaves restored to Lettuce; bowl ceramic is clean!
            elif y < 770:
                assigned = 1 # Lettuce
            elif y < 828:
                is_green_leaf = (g > 45 and g > b + 10 and g > r - 15)
                is_purple_leaf = (x in range(140, 275) and y < 815 and (r > 50 and r > g + 5 and b > 25))
                if is_green_leaf or is_purple_leaf:
                    assigned = 1 # Lettuce
                else:
                    assigned = 0 # Bowl
            else:
                assigned = 0 # Bowl
                
            assignments[y * w + x] = assigned

    # Eliminate any stray specks in cheese in y in 190..225
    for y in range(190, 225):
        for x in range(w):
            if assignments[y * w + x] == 7:
                assignments[y * w + x] = -1

    # Taper / curve bottom green lettuce tip (y in 822..828)
    for y in range(822, 828):
        for x in range(345, 385):
            idx = y * w + x
            if assignments[idx] == 1:
                if y == 827:
                    assignments[idx] = -1
                elif y == 826 and (x < 366 or x > 373):
                    assignments[idx] = -1
                elif y == 825 and (x < 362 or x > 374):
                    assignments[idx] = -1
                elif y == 824 and (x < 355):
                    assignments[idx] = -1

    # Build layer bytearrays
    layer_pix = [bytearray(w * h * 4) for _ in range(9)]
    counts = [0] * 9

    for y in range(h):
        for x in range(w):
            assigned = assignments[y * w + x]
            if assigned >= 0:
                idx = (y * w + x) * 4
                layer_pix[assigned][idx:idx+4] = pix[idx:idx+4]
                counts[assigned] += 1

    names = ['Bowl', 'Lettuce', 'Tomatoes', 'Cucumber', 'Corn & Veg', 'Beans', 'Paneer', 'Cheese', 'Herbs']
    print('Refined pixel counts per layer:')
    for i in range(9):
        print(f'  Layer {i} ({names[i]:16}): {counts[i]:6d} pixels')

    # Composite Cheese + Herbs
    cheese_herbs_pix = bytearray(w * h * 4)
    for i in range(len(pix)):
        cheese_herbs_pix[i] = layer_pix[7][i] | layer_pix[8][i]

    # Reconstruct Bowl Ceramic with Infill across entire rim and inner surface:
    # Smooth horizontal interpolation fills any cavity covered by lettuce with matte ceramic
    bowl_arr = bytearray(layer_pix[0])
    for y in range(770, 835):
        row_xs = [x for x in range(w) if bowl_arr[(y*w+x)*4 + 3] > 100]
        if len(row_xs) >= 2:
            left_x = min(row_xs)
            right_x = max(row_xs)
            l_idx = (y * w + left_x) * 4
            r_idx = (y * w + right_x) * 4
            lr, lg, lb = bowl_arr[l_idx], bowl_arr[l_idx+1], bowl_arr[l_idx+2]
            rr, rg, rb = bowl_arr[r_idx], bowl_arr[r_idx+1], bowl_arr[r_idx+2]
            for x in range(left_x + 1, right_x):
                idx = (y * w + x) * 4
                if bowl_arr[idx+3] < 50:
                    t = (x - left_x) / (right_x - left_x)
                    bowl_arr[idx] = int(lr * (1 - t) + rr * t)
                    bowl_arr[idx+1] = int(lg * (1 - t) + rg * t)
                    bowl_arr[idx+2] = int(lb * (1 - t) + rb * t)
                    bowl_arr[idx+3] = 255

    # Bowl Front Lip (y=840 downwards)
    bowl_front_pix = bytearray(w * h * 4)
    for y in range(840, h):
        for x in range(w):
            idx = (y * w + x) * 4
            if bowl_arr[idx+3] > 0:
                bowl_front_pix[idx:idx+4] = bowl_arr[idx:idx+4]

    # Bowl Rear Rim (y < 825)
    bowl_rear_pix = bytearray(w * h * 4)
    for y in range(770, 825):
        for x in range(w):
            idx = (y * w + x) * 4
            if bowl_arr[idx+3] > 0:
                bowl_rear_pix[idx:idx+4] = bowl_arr[idx:idx+4]

    dest_dirs = [
        '/Users/thaxx/Desktop/kaazos-food/assets/images',
        '/Users/thaxx/Desktop/kaazos-food/public/salad/extracted'
    ]

    files_to_save = [
        ('salad-layer-herbs.png', layer_pix[8]),
        ('salad-layer-cheese.png', layer_pix[7]),
        ('salad-layer-cheese-herbs.png', cheese_herbs_pix),
        ('salad-layer-paneer.png', layer_pix[6]),
        ('salad-layer-beans.png', layer_pix[5]),
        ('salad-layer-corn-veg.png', layer_pix[4]),
        ('salad-layer-cucumber.png', layer_pix[3]),
        ('salad-layer-tomatoes.png', layer_pix[2]),
        ('salad-layer-lettuce.png', layer_pix[1]),
        ('salad-layer-bowl.png', bowl_arr),
        ('salad-layer-bowl-body.png', bowl_arr),
        ('salad-layer-bowl-rear-rim.png', bowl_rear_pix),
        ('salad-layer-bowl-rear.png', bowl_rear_pix),
        ('salad-layer-bowl-front-rim.png', bowl_front_pix),
        ('salad-layer-bowl-front.png', bowl_front_pix),
        ('salad-source-original.png', pix)
    ]

    for d in dest_dirs:
        os.makedirs(d, exist_ok=True)
        for filename, data in files_to_save:
            p = os.path.join(d, filename)
            encoded = encode_png(w, h, data)
            with open(p, 'wb') as f:
                f.write(encoded)
            print(f'Saved {filename} to {os.path.basename(d)} ({len(encoded)} bytes)')

    print('\nAll refined layers successfully extracted and saved!')

if __name__ == '__main__':
    extract_all()
