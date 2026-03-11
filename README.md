# 📄 Resume Builder Web Application

A functional resume builder prototype that allows users to create, preview, and download resumes as PDFs, with data stored in Supabase.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, JavaScript, HTML, CSS |
| Backend / Database | Supabase |
| PDF Generation | html2pdf.js |
| Dev Tools | Vite, Node.js, npm |

---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Dhanush-1213/resume-builder.git
cd resume-builder
```

### 2. Install Dependencies

Navigate to the client folder and install:
```bash
cd client
npm install
```

### 3. Configure Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Go to **Table Editor** and create a table called `resumes` with the following columns:

| Column | Type |
|---|---|
| `id` | int8 (primary key) |
| `name` | text |
| `email` | text |
| `phone` | text |
| `summary` | text |
| `template` | text |

### 4. Add Supabase Configuration

Create the file `src/supabaseClient.js` and add:
```javascript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "YOUR_PROJECT_URL";
const supabaseKey = "YOUR_ANON_PUBLIC_KEY";

export const supabase = createClient(supabaseUrl, supabaseKey);
```

### 5. Run the Application

Inside the `client` folder:
```bash
npm run dev
```

Then open your browser at: [http://localhost:5173](http://localhost:5173)

---

## ✨ Features

### Resume Creation
- Fill in your **Name**, **Email**, **Phone**, and **Professional Summary**
- Edit resume fields at any time

### Resume Templates
- **Free Templates:** Modern, Classic
- **Premium Templates:** Premium, Premium Pro *(unlocked via simulated upgrade)*

### Template Preview
Select and preview templates before downloading

### Resume Download
Download your resume as a PDF using `html2pdf.js`

### AI Assistance
Auto-generates a professional summary based on your name.

### Database Storage
All resume data is stored persistently in Supabase, enabling future editing capability

---

## 📌 Assumptions

- Premium template payment is **simulated** — no real payment gateway is integrated
- AI summary generation is **rule-based** — no external AI API is used
- **User authentication is not implemented**
- Each resume is stored as a separate record in the database
- This is designed as a **simple functional prototype**
