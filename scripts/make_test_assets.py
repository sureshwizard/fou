import os
import subprocess
from pathlib import Path

# === Configuration ===
ASSETS_DIR = Path("frontend/src/assets/sample_inputs")
ASSETS_DIR.mkdir(parents=True, exist_ok=True)

print(f"📁 Creating sample media files in: {ASSETS_DIR.resolve()}")

def run_ffmpeg(cmd):
    """Helper to run ffmpeg safely"""
    try:
        subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        print(f"✅ {' '.join(cmd[2:4])} created.")
    except Exception as e:
        print(f"⚠️ Failed: {' '.join(cmd)}")
        print(e)

# 🎥 1. Sample video
video_path = ASSETS_DIR / "family_vacation.mp4"
if not video_path.exists():
    run_ffmpeg([
        "ffmpeg", "-y",
        "-f", "lavfi", "-i", "testsrc=size=640x360:rate=25",
        "-t", "5", str(video_path)
    ])

# 🎧 2. Sample audio tone
audio_path = ASSETS_DIR / "note1.m4a"
if not audio_path.exists():
    run_ffmpeg([
        "ffmpeg", "-y",
        "-f", "lavfi", "-i", "sine=frequency=440:duration=3",
        str(audio_path)
    ])

# 🖼️ 3. Beach image (sky blue)
beach_path = ASSETS_DIR / "beach_closeup.jpg"
if not beach_path.exists():
    run_ffmpeg([
        "ffmpeg", "-y",
        "-f", "lavfi", "-i", "color=c=skyblue:s=640x360:d=1",
        "-frames:v", "1", str(beach_path)
    ])

# 🖼️ 4. Sunset gradient image
sunset_path = ASSETS_DIR / "sunset.jpg"
if not sunset_path.exists():
    run_ffmpeg([
        "ffmpeg", "-y",
        "-f", "lavfi", "-i", "gradient=duration=1:s=640x360:direction=horizontal",
        "-frames:v", "1", str(sunset_path)
    ])

# 📝 5. Text note
theme_path = ASSETS_DIR / "theme.txt"
if not theme_path.exists():
    with open(theme_path, "w", encoding="utf-8") as f:
        f.write("Theme: coming-of-age and letting go.\n")
    print("✅ theme.txt created.")

print("\n🎉 All test files generated successfully!")
print("You can now upload them via the FOU UI at http://localhost:5173")
