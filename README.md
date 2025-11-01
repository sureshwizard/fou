README.md
# Frames of Us (FOU)

> Cooked by Gemini. Served with Heart.  
> Turn raw videos, voices, and photos into cinematic stories — privately and offline.

---

## 🧩 Tech Stack
**Frontend:** React + Vite + Tailwind + Framer Motion  
**Backend:** Flask (Python) + ffmpeg (for stitching/trim)  
**AI:** Chrome Built-in AI (Prompt, Summarizer, Writer, Rewriter, Proofreader APIs)  
**Storage:** IndexedDB / File System API (local)  

---

## 🚀 Run Instructions

### 1️⃣ Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python server.py


Server runs at http://localhost:4080

2️⃣ Frontend
cd frontend
npm install
npm run dev


Open http://localhost:5173

🧠 What It Does

Upload videos, audio, images, and notes.

Generate a multimodal storyblok using Chrome’s AI.

Preview, edit scenes, and export platform-ready videos (YouTube, Instagram, LinkedIn, etc).

🧩 Architecture

Inputs → Ingest/Preprocess → AI (Gemini Nano) → Storyblok → Render → Export


---

## 🐍 Step 2 — Backend  

Use the Flask-based backend you received earlier.  
Here are the key files summarized quickly:

### `backend/requirements.txt`
```text
Flask==2.3.3
python-dotenv==1.0.0
ffmpeg-python==0.3.0
moviepy==1.0.3
werkzeug==2.3.7
pydub==0.25.1