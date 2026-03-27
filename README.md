# 📄 Resume Builder

<div align="center">

A full-stack resume builder that lets users create, preview, customize, and download professional resumes as PDFs — with persistent storage powered by Supabase and AI-assisted summary generation.

<br/>

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-5-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

---

## 🌟 Features

| Feature | Description |
|---|---|
| 📝 **Resume Form** | Fill in name, email, phone, and professional summary |
| 🎨 **Templates** | Choose from Modern, Classic (free) and Premium Pro (paid) |
| 👁️ **Live Preview** | See your resume update in real-time as you type |
| 🤖 **AI Summary** | Auto-generate a professional summary with one click |
| 💾 **Cloud Storage** | Resumes saved persistently to Supabase |
| ✏️ **Edit & Delete** | Manage all your saved resumes from a dedicated list view |
| 📥 **PDF Download** | Export your resume as a PDF via `html2pdf.js` |
| 🔓 **Premium Unlock** | Simulated upgrade flow to unlock premium templates |

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) **React 19** | UI component library |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) **Vite 7** | Lightning-fast dev server & bundler |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) **React Router DOM v7** | Client-side routing |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) **Axios** | HTTP client for API calls |
| **html2pdf.js** | PDF generation from HTML |

### Backend

| Technology | Purpose |
|---|---|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) **Node.js** | Runtime environment |
| ![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) **Express 5** | REST API server |
| ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white) **OpenAI SDK** | AI-powered summary generation |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) **MongoDB + Mongoose** | Optional data persistence |
| **dotenv** | Environment variable management |
| **nodemon** | Auto-restart dev server |

### Database & Services

| Technology | Purpose |
|---|---|
| ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white) **Supabase** | PostgreSQL database + auto-generated REST API |

---

## 🗂️ Project Structure

```
resume-builder/
├── client/                        # React frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── ai.js              # Axios call to Express AI endpoint
│   │   ├── pages/
│   │   │   ├── CreateResume.jsx   # Resume form + save to Supabase
│   │   │   ├── ResumeList.jsx     # View, edit, delete saved resumes
│   │   │   ├── ResumePreview.jsx  # Live preview + PDF download
│   │   │   ├── Templates.jsx      # Template selector + upgrade flow
│   │   │   └── Templates.css
│   │   ├── templates/
│   │   │   ├── ClassicTemplate.jsx
│   │   │   ├── ModernTemplate.jsx
│   │   │   └── PremiumTemplate.jsx
│   │   ├── supabaseClient.js      # Supabase initialization
│   │   ├── App.jsx                # Root component + state management
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── server/                        # Express backend
    ├── models/
    │   └── Resume.js              # Mongoose schema (optional)
    ├── server.js                  # Express routes + OpenAI integration
    ├── .env                       # Environment variables
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- A [Supabase](https://supabase.com) account
- An [OpenAI](https://platform.openai.com/) API key *(for AI summary via backend)*

---

### 1. Clone the Repository

```bash
git clone https://github.com/Dhanush-1213/resume-builder.git
cd resume-builder
```

---

### 2. Set Up the Client (Frontend)

```bash
cd client
npm install
```

#### Configure Supabase

Open `src/supabaseClient.js` and replace the placeholder values:

```js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "YOUR_PROJECT_URL";
const supabaseKey = "YOUR_ANON_PUBLIC_KEY";

export const supabase = createClient(supabaseUrl, supabaseKey);
```

#### Create the Supabase Table

In your Supabase dashboard → **Table Editor** → **New Table** → name it `resumes`:

| Column | Type | Notes |
|---|---|---|
| `id` | `int8` | Primary key, auto-increment |
| `name` | `text` | |
| `email` | `text` | |
| `phone` | `text` | |
| `summary` | `text` | |
| `template` | `text` | |
| `created_at` | `timestamptz` | Default: `now()` |

#### Run the Frontend

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

### 3. Set Up the Server (Backend — Optional, for AI Summary)

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=5000
MONGO_URI=your_mongodb_connection_string   # optional
```

Start the backend:

```bash
npm start
```

The server runs at [http://localhost:5000](http://localhost:5000).

> **Note:** If the backend is not running, the app falls back to a built-in rule-based summary generator — the app will still work fully.

---

## 🎨 Resume Templates

| Template | Tier | Description |
|---|---|---|
| **Modern** | 🆓 Free | Clean, contemporary layout |
| **Classic** | 🆓 Free | Traditional, professional look |
| **Premium Pro** | 💎 Premium | Unlocked via the *Upgrade to Premium* button |

> Premium unlock is **simulated** — no real payment gateway is integrated.

---

## ✨ App Flow

```
1. Choose a Template → 2. Fill in Resume Details → 3. Generate AI Summary (optional)
         ↓
4. Live Preview updates in real-time
         ↓
5. Save to Supabase  →  Download as PDF
         ↓
6. View / Edit / Delete from Saved Resumes list
```

---

## 📌 Notes & Assumptions

- 🔐 **Authentication is not implemented** — resumes are stored without user accounts
- 🤖 **AI Summary** — the client uses a rule-based random summary; the Express backend integrates OpenAI for production-quality generation
- 💳 **Premium upgrade** is simulated with a local state flag
- 🗄️ **MongoDB / Mongoose** is included in the server dependencies for optional extended storage
- This is designed as a **functional prototype**

---

## 📦 Available Scripts

### Client

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Server

| Command | Description |
|---|---|
| `npm start` | Start Express server with Node |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

<div align="center">

Made with ❤️ by [Dhanush](https://github.com/Dhanush-1213)

</div>
