from PIL import Image
import sys

def classify_pixel(r, g, b):
    # Normalize RGB to 0-1 for easier ratio comparison? No, stay in 0-255.

    # 3: ICE / SNOW
    # Very bright, high in all channels
    if r > 210 and g > 210 and b > 210:
        return '3' 
    
    # 0: OCEAN
    # Blue is dominant channel.
    # Note: Satellite images often have dark oceans.
    # If B is significantly greater than R and a bit greater than G
    if b > r + 10 and b > g + 10:
        return '0'
    # Also generic dark water (deep ocean often looks black/dark blue)
    if r < 50 and g < 60 and b < 80:
         return '0'

    # 2: DESERT
    # Yellow/Tan color: High R, High G, Low B.
    # Sand: (194, 178, 128) -> R > B, G > B, R ~= G
    if r > 160 and g > 130 and b < 140:
        if r > b + 30: # Red dominates blue
             return '2'

    # 1: LAND / FOREST
    # Green is dominant or it's a brownish land that isn't desert.
    if g > r and g > b:
        return '1'
    
    # 4: MOUNTAIN / LAND
    # Beiges, browns, darker terrain not caught by desert.
    # Just fall back to land or mountain based on brightness?
    # Darker land = Mountain
    if r < 100 and g < 100 and b < 100:
        return '4'

    # Default fallback - mix of land or desert depending on redness
    if r > g:
        return '2' # Likely dry land
    else:
        return '1' # Likely vegetation

try:
    # Requires pillow: pip install pillow
    # Ensure you have 'earth-topo.jpg' in 'public/'
    img = Image.open("public/earth-topo.jpg")
    img = img.convert("RGB")
    
    width = 128
    height = 64
    img = img.resize((width, height))
    
    pixels = img.load()
    output = []
    
    for y in range(height):
        row = ""
        for x in range(width):
            r, g, b = pixels[x, y]
            row += classify_pixel(r, g, b)
        output.append(row)
        
    print("CONST_MAP_STRING = `")
    for row in output:
        print(row)
    print("`;")
    
except Exception as e:
    print(f"Error: {e}")
