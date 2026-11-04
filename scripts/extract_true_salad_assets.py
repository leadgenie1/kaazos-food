import struct, zlib, os

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

src_path = '/Users/thaxx/.gemini/antigravity/brain/bac2e8f4-53e2-4d50-986a-bfe43870b315/.user_uploaded/media_1793774572403_39b3a5e7.png'
w, h, pix = decode_png(src_path)

# 0: Bowl
# 1: Lettuce
# 2: Tomatoes
# 3: Cucumber
# 4: Corn & Veg
# 5: Beans
# 6: Paneer
# 7: Cheese
# 8: Herbs

layer_pix = [bytearray(w * h * 4) for _ in range(9)]
counts = [0] * 9

for y in range(h):
    for x in range(w):
        idx = (y * w + x) * 4
        a = pix[idx+3]
        if a <= 10:
            continue
        r, g, b = pix[idx], pix[idx+1], pix[idx+2]
        
        assigned = -1
        
        # Region 1: Top (Herbs & Cheese) vs Paneer
        if y < 196:
            # Distinguish herbs vs cheese
            is_green_herb = (g > 60 and g > r + 8 and g > b) or (g > 80 and g > b + 15)
            if is_green_herb:
                assigned = 8 # Herbs
            else:
                assigned = 7 # Cheese
        elif y < 218:
            # In y=196..218:
            # Check for cheese crumbs or stray herb sprig
            is_white_cheese = (r > 190 and g > 180 and b > 140) or (r > 230 and g > 200) or (r > 180 and g > 160 and b > 110 and x in range(370, 435))
            is_green_herb = (g > 60 and g > r + 8 and g > b)
            if is_green_herb:
                assigned = 8 # Herbs
            elif is_white_cheese:
                assigned = 7 # Cheese
            else:
                assigned = 6 # Paneer
        # Region 2: Paneer vs Kidney Beans
        elif y < 318:
            assigned = 6 # Paneer
        elif y < 332:
            # Bottom paneer cube is at x in 245..315
            is_paneer_cube = (x in range(245, 316) and (r > 115 and g > 45 and g > b + 15))
            if is_paneer_cube:
                assigned = 6 # Paneer
            else:
                assigned = 5 # Beans
        # Region 3: Kidney Beans vs Corn & Veg
        elif y < 408:
            assigned = 5 # Beans
        elif y < 424:
            # Bottom-right kidney bean at x in 395..445, dark reddish brown
            is_dark_bean = (x in range(390, 448) and r < 145 and g < 75 and b < 40)
            if is_dark_bean:
                assigned = 5 # Beans
            else:
                assigned = 4 # Corn & Veg
        # Region 4: Corn & Veg vs Cucumber
        elif y < 513:
            assigned = 4 # Corn & Veg
        elif y < 517:
            # Corn kernel at x in 280..325
            is_corn_kernel = (x in range(275, 328) and r > 160 and g > 110 and b < 45)
            if is_corn_kernel:
                assigned = 4 # Corn & Veg
            else:
                assigned = 3 # Cucumber
        # Region 5: Cucumber vs Tomatoes
        elif y < 593:
            assigned = 3 # Cucumber
        elif y < 596:
            # Far right cucumber tip (x > 450)
            is_cuke_tip = (x > 450 and (g > r or (g > 70 and g > b)))
            if is_cuke_tip:
                assigned = 3 # Cucumber
            else:
                assigned = 2 # Tomatoes
        # Region 6: Tomatoes vs Lettuce
        elif y < 663:
            # Center tomatoes (x in 220..440)
            is_tomato = (x in range(220, 445) and r > 130 and r > g + 30)
            if is_tomato:
                assigned = 2 # Tomatoes
            else:
                assigned = 1 # Lettuce
        # Region 7: Lettuce vs Bowl
        elif y < 770:
            assigned = 1 # Lettuce
        elif y < 828:
            # Curly green leaf tip in center at x in 335..435
            # Or purple lettuce leaf at x in 180..330, y < 795
            is_green_leaf = (g > 45 and g > b + 10 and g > r - 15)
            is_purple_leaf = (y < 795 and r > 55 and b > 35 and g < 50)
            if is_green_leaf or is_purple_leaf:
                assigned = 1 # Lettuce
            else:
                assigned = 0 # Bowl
        else:
            assigned = 0 # Bowl
            
        layer_pix[assigned][idx:idx+4] = pix[idx:idx+4]
        counts[assigned] += 1

names = ['Bowl', 'Lettuce', 'Tomatoes', 'Cucumber', 'Corn & Veg', 'Beans', 'Paneer', 'Cheese', 'Herbs']
print('Pixel counts per layer:')
for i in range(9):
    print(f'  Layer {i} ({names[i]:16}): {counts[i]:6d} pixels')

# Composite Cheese + Herbs
cheese_herbs_pix = bytearray(w * h * 4)
for i in range(len(pix)):
    cheese_herbs_pix[i] = layer_pix[7][i] | layer_pix[8][i]

# Clean Bowl Infill:
# The lettuce leaf at x in 335..435, y in 795..827 covered a small section of the bowl cavity.
# Reconstruct the dark ceramic inner surface by smoothly interpolating the bowl curvature.
bowl_arr = bytearray(layer_pix[0])
for y in range(790, 830):
    # Find left bowl pixel and right bowl pixel at this row
    left_x = None
    right_x = None
    for x in range(320, 360):
        if bowl_arr[(y*w+x)*4 + 3] > 100:
            left_x = x
    for x in range(450, 410, -1):
        if bowl_arr[(y*w+x)*4 + 3] > 100:
            right_x = x
    if left_x is not None and right_x is not None and right_x > left_x:
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

# Bowl Front Lip (y=840 downwards: outer front wall and lower lip)
bowl_front_pix = bytearray(w * h * 4)
for y in range(840, h):
    for x in range(w):
        idx = (y * w + x) * 4
        if bowl_arr[idx+3] > 0:
            bowl_front_pix[idx:idx+4] = bowl_arr[idx:idx+4]

# Bowl Rear Rim (y < 820: rear top rim of bowl)
bowl_rear_pix = bytearray(w * h * 4)
for y in range(770, 825):
    for x in range(w):
        idx = (y * w + x) * 4
        if bowl_arr[idx+3] > 0:
            bowl_rear_pix[idx:idx+4] = bowl_arr[idx:idx+4]

# Output to both directories: assets/images and public/salad/extracted
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

print('\nDone! All layers successfully extracted and saved.')
