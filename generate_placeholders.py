import os
from PIL import Image, ImageDraw

os.makedirs("assets/her", exist_ok=True)
os.makedirs("assets/diary", exist_ok=True)
os.makedirs("assets/us", exist_ok=True)
os.makedirs("assets/music", exist_ok=True)

def create_placeholder(filename, title, subtitle, width=800, height=1000, bg_color=(20, 10, 15), accent_color=(212, 175, 55)):
    img = Image.new("RGB", (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Draw dark gradient border
    draw.rectangle([10, 10, width - 10, height - 10], outline=(74, 14, 23), width=4)
    draw.rectangle([20, 20, width - 20, height - 20], outline=accent_color, width=2)
    
    # Draw inner box
    draw.rectangle([40, 40, width - 40, height - 40], outline=(40, 20, 28), width=1)
    
    cx, cy = width // 2, height // 2
    
    draw.text((cx, cy - 60), "♡ HEER & FOZIYA ♡", fill=accent_color, anchor="mm")
    draw.text((cx, cy), title, fill=(247, 231, 206), anchor="mm")
    draw.text((cx, cy + 50), subtitle, fill=(180, 160, 140), anchor="mm")
    draw.text((cx, height - 60), "[ Replace with: " + os.path.basename(filename) + " ]", fill=(120, 100, 90), anchor="mm")
    
    img.save(filename, "JPEG", quality=90)

# 10 Her photos
for i in range(1, 11):
    create_placeholder(
        f"assets/her/her{i}.jpg",
        f"Heer's Photo #{i}",
        f"Special Memory {i}/10",
        bg_color=(15, 8, 12)
    )

# 18 Diary photos
for i in range(1, 19):
    create_placeholder(
        f"assets/diary/diary{i}.jpg",
        f"Diary Page #{i}",
        f"Handwritten Memory {i}/18",
        width=700,
        height=900,
        bg_color=(18, 12, 10),
        accent_color=(190, 150, 60)
    )

# Us photos
create_placeholder("assets/us/my-photo.jpg", "My Photo", "The One Who Loves You", bg_color=(12, 15, 20), accent_color=(100, 180, 220))
create_placeholder("assets/us/her-photo.jpg", "Heer's Photo", "My Gorgeous Girl", bg_color=(20, 12, 18), accent_color=(220, 140, 180))

print("All placeholder images created successfully.")
