# 🧠 Daydreaming Detection System

A full‑stack AI web application that analyzes facial attributes from an uploaded image to detect behavioral cues such as **daydreaming, depressive tendencies, or normal state**.

This project integrates **computer vision APIs, a Flask backend, and a Next.js frontend** to create a complete image analysis pipeline.

⚠️ This project is for **research and educational purposes only** and is **not intended for medical or psychological diagnosis**.

---

# 🚀 Features

### Frontend
- Image upload interface
- Image preview before upload
- Displays prediction results
- Confidence score visualization
- Explanation of detected features

### Backend
- REST API built with Flask
- Image preprocessing (contrast enhancement + resizing)
- Face detection via SkyBiometry API
- Facial attribute extraction
- Rule‑based behavioral analysis

### AI Logic
The system evaluates facial attributes such as:

- Head **yaw** (side gaze)
- Head **roll** (tilt)
- Head **pitch** (looking up/down)
- **Smile detection**
- **Eye state**
- **Lip state**

These features are analyzed using a **weighted scoring system** to classify mental state.

---

# 🏗️ System Architecture
        User Uploads Image
                │
                ▼
        Next.js Frontend
                │
                ▼
         Flask Backend API
                │
                ▼
        Image Preprocessing
     (Contrast + Resizing)
                │
                ▼
    SkyBiometry Face Detection
                │
                ▼
     Facial Feature Extraction
                │
                ▼
    Rule-Based Behavioral Analysis
                │
                ▼
         Prediction Result
---
---

# ✨ Features

### Frontend
- Image upload UI
- Live preview before upload
- Displays prediction result
- Confidence score visualization
- Explanation of detected features

### Backend
- REST API using Flask
- Image preprocessing pipeline
- Integration with SkyBiometry face analysis API
- Feature extraction and scoring logic

### AI Logic

The system evaluates several facial attributes:

- **Head yaw** → side gaze detection
- **Head roll** → head tilt
- **Head pitch** → looking up or down
- **Smile detection**
- **Eye state (open/closed)**
- **Lip state**

These features are processed using a **weighted rule‑based scoring system**.

---

# 📂 Project Structure
daydreaming-detection/
│
├── frontend/                         # Next.js frontend application
│   │
│   ├── public/                       # Static assets
│   │   ├── file.svg
│   │   ├── globe.svg
│   │   ├── next.svg
│   │   ├── vercel.svg
│   │   └── window.svg
│   │
│   ├── src/
│   │   └── app/                      # Next.js App Router
│   │       ├── favicon.ico
│   │       ├── globals.css           # Global styles
│   │       ├── layout.tsx            # Root layout
│   │       ├── page.tsx              # Main upload page
│   │       └── Result.tsx            # Prediction result component
│   │
│   ├── .next/                        # Next.js build output
│   ├── node_modules/                 # Installed dependencies
│   │
│   ├── .gitignore
│   ├── next.config.mjs               # Next.js configuration (API rewrite)
│   ├── next-env.d.ts
│   ├── package.json                  # Project dependencies
│   ├── package-lock.json
│   ├── postcss.config.mjs
│   ├── tsconfig.json
│   └── README.md
│
├── backend/                          # Flask API server
│   │
│   ├── api.py                        # Main Flask API (/analyze endpoint)
│   ├── analysis.py                   # Feature extraction & scoring logic
│   ├── utils.py                      # Image preprocessing utilities
│   ├── requirements.txt              # Python dependencies
│   │
│   └── notebooks/
│       └── model_training.ipynb      # Colab notebook used for development
│
├── demo/                             # Demo media
│   └── demo.gif
│
├── screenshots/                      # README screenshots
│   ├── upload.png
│   └── result.png
│
└── README.md                         # Project documentation

📊 Prediction Categories

| Label            | Description                          |
| ---------------- | ------------------------------------ |
| normal           | Neutral facial expression            |
| daydreaming      | Side gaze or distracted cues         |
| depressive       | Downward gaze and closed expressions |
| uncertain        | Low confidence prediction            |
| no_face_detected | No detectable face                   |

---
📈 Future Improvements
  Replace rule‑based analysis with deep learning models

  Add real‑time webcam detection

  Deploy backend to cloud infrastructure

  Add analytics dashboard

  Improve accuracy with CNN-based emotion detection

---
