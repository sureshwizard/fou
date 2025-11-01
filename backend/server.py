from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os, uuid, subprocess
from pathlib import Path

app = Flask(__name__)
UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)
OUTPUT_DIR = Path("outputs")
OUTPUT_DIR.mkdir(exist_ok=True)

@app.route("/api/upload", methods=["POST"])
def upload():
    files = request.files.getlist("files[]")
    out = []
    for f in files:
        fname = f"{uuid.uuid4().hex}_{secure_filename(f.filename)}"
        path = UPLOAD_DIR / fname
        f.save(path)
        out.append(str(path))
    return jsonify({"uploaded": out})

@app.route("/api/ffmpeg-stitch", methods=["POST"])
def ffmpeg_stitch():
    data = request.json
    imgs = data.get("images", [])
    audio = data.get("audio")
    out = OUTPUT_DIR / f"out_{uuid.uuid4().hex}.mp4"
    tmp = "list.txt"
    with open(tmp, "w") as f:
        for img in imgs:
            f.write(f"file '{img}'\n")
            f.write("duration 2\n")
        f.write(f"file '{imgs[-1]}'\n")
    cmd = ["ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", tmp,
           "-i", audio, "-c:v", "libx264", "-c:a", "aac", "-shortest", str(out)]
    subprocess.run(cmd, check=True)
    return jsonify({"out": str(out)})

@app.route("/api/health")
def health():
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    app.run(port=4080, debug=True)
