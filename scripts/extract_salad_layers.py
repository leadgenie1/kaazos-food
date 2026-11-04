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

# Layers:
# 0: bowl
# 1: lettuce
# 2: tomatoes
# 3: cucumber
# 4: corn_veg
# 5: beans
# 6: paneer
# 7: cheese_herbs

layer_pix = [bytearray(w * h * 4) for _ in range(8)]
bowl_front_pix = bytearray(w * h * 4)

counts = [0] * 8

for y in range(h):
    for x in range(w):
        idx = (y * w + x) * 4
        a = pix[idx+3]
        if a <= 5:
            continue
        r, g, b = pix[idx], pix[idx+1], pix[idx+2]
        
        assigned = -1
        
        # 1. Cheese & Herbs vs Paneer
        if y < 196:
            assigned = 7 # cheese & herbs
        elif y < 220:
            # Check if white cheese crumb or small floating herb
            is_white_cheese = (r > 190 and g > 180 and b > 150) or (r > 230 and g > 200)
            is_herb = (g > r + 15 and g > b)
            # Floating cheese crumbs outside the main paneer cubes
            if is_white_cheese or is_herb or (y <= 218 and x in range(337, 348)) or (y <= 215 and x in range(380, 425)):
                assigned = 7
            else:
                assigned = 6
        # 2. Paneer vs Kidney Beans
        elif y < 318:
            assigned = 6 # paneer
        elif y < 330:
            # bottom of paneer cube at x in 254..315
            if x in range(253, 316) and (r > 120 and g > 55 and g > b + 25):
                assigned = 6 # paneer
            else:
                assigned = 5 # kidney beans
        # 3. Kidney Beans vs Corn & Veggies
        elif y < 406:
            assigned = 5 # kidney beans
        elif y < 425:
            # bottom-right kidney bean at x in 375..442
            is_dark_bean = (x in range(374, 443) and r < 145 and g < 75 and b < 40)
            if is_dark_bean:
                assigned = 5 # kidney beans
            else:
                assigned = 4 # corn & veg
        # 4. Corn & Veggies vs Cucumber
        elif y < 512:
            assigned = 4 # corn & veg
        elif y < 516:
            # corn kernel at x in 288..316
            if x in range(288, 316) and (r > 170 and g > 130 and b < 60):
                assigned = 4 # corn & veg
            else:
                assigned = 3 # cucumber
        # 5. Cucumber vs Tomatoes
        elif y < 593:
            assigned = 3 # cucumber
        elif y < 595:
            # transition
            if (r > 140 and g < 110):
                assigned = 2 # tomato
            else:
                assigned = 3 # cucumber
        # 6. Tomatoes vs Lettuce
        elif y < 663:
            # In y=640..663, check if it's the tomatoes (center x=205..445 and red/tomato seed colors)
            # Lettuce tips are at x < 215 or x > 440
            if (x < 215 or x > 442) and (g > r or (g > 70 and g > b)):
                assigned = 1 # lettuce
            else:
                assigned = 2 # tomatoes
        # 7. Lettuce vs Bowl
        elif y < 790:
            assigned = 1 # lettuce
        elif y < 828:
            # Lettuce curly leaf tip is at x in 348..425 with green color
            is_leaf_tip = (x in range(348, 426) and (g > r + 5 or (g > 60 and g > b)))
            if is_leaf_tip:
                assigned = 1 # lettuce
            else:
                assigned = 0 # bowl
        else:
            assigned = 0 # bowl
            
        layer_pix[assigned][idx:idx+4] = pix[idx:idx+4]
        counts[assigned] += 1

print('Pixel counts per layer:')
names = ['Bowl', 'Lettuce', 'Tomatoes', 'Cucumber', 'Corn & Veg', 'Beans', 'Paneer', 'Cheese & Herbs']
for i in range(8):
    print(f'  Layer {i} ({names[i]}): {counts[i]} pixels')

# Complete the bowl cavity under the leaf tip:
# For the small region x in 350..425, y in 805..827:
# The bowl interior is smooth dark ceramic. Interpolate from left (x=340..348) and right (x=426..435)
bowl_arr = layer_pix[0]
for y in range(800, 828):
    left_x = 345
    right_x = 428
    l_idx = (y * w + left_x) * 4
    r_idx = (y * w + right_x) * 4
    if bowl_arr[l_idx+3] > 0 and bowl_arr[r_idx+3] > 0:
        lr, lg, lb = bowl_arr[l_idx], bowl_arr[l_idx+1], bowl_arr[l_idx+2]
        rr, rg, rb = bowl_arr[r_idx], bowl_arr[r_idx+1], bowl_arr[r_idx+2]
        for x in range(left_x + 1, right_x):
            idx = (y * w + x) * 4
            # only fill if empty in bowl layer
            if bowl_arr[idx+3] == 0:
                t = (x - left_x) / (right_x - left_x)
                bowl_arr[idx] = int(lr * (1 - t) + rr * t)
                bowl_arr[idx+1] = int(lg * (1 - t) + rg * t)
                bowl_arr[idx+2] = int(lb * (1 - t) + rb * t)
                bowl_arr[idx+3] = 255

# Create Bowl Front (from y=855 downwards, outer bowl wall & rim)
for y in range(855, h):
    for x in range(w):
        idx = (y * w + x) * 4
        if bowl_arr[idx+3] > 0:
            bowl_front_pix[idx:idx+4] = bowl_arr[idx:idx+4]

# Output files
out_dir = '/Users/thaxx/Desktop/kaazos-food/assets/images'
files = [
    ('salad-layer-bowl.png', layer_pix[0]),
    ('salad-layer-bowl-front.png', bowl_front_pix),
    ('salad-layer-lettuce.png', layer_pix[1]),
    ('salad-layer-tomatoes.png', layer_pix[2]),
    ('salad-layer-cucumber.png', layer_pix[3]),
    ('salad-layer-corn-veg.png', layer_pix[4]),
    ('salad-layer-beans.png', layer_pix[5]),
    ('salad-layer-paneer.png', layer_pix[6]),
    ('salad-layer-cheese-herbs.png', layer_pix[7]),
]

for filename, data in files:
    out_path = os.path.join(out_dir, filename)
    encoded = encode_png(w, h, data)
    with open(out_path, 'wb') as f:
        f.write(encoded)
    print(f'Wrote {filename}: {len(encoded)} bytes')

