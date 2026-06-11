from PIL import Image

def remove_white_bg(input_path, output_path, tolerance=230):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # Check if the pixel is near white
        avg = (item[0] + item[1] + item[2]) / 3
        if avg > tolerance:
            # Scale alpha to provide some anti-aliasing
            # When avg is 255, alpha should be 0.
            # When avg is tolerance, alpha should be 255.
            ratio = (avg - tolerance) / (255 - tolerance)
            alpha = int(255 * (1 - ratio))
            
            # To prevent white halos, we can also darken the pixel colors slightly towards the logo color
            # But the simplest is just to make the transparent pixel have the original color.
            # We'll just set alpha.
            new_data.append((item[0], item[1], item[2], alpha))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_white_bg("public/logo.png", "public/logo-transparent.png")
