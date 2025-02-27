# 🚀 Portfolio Website Gameplan

## 📦 Tech Stack

- **Frontend:** React.js (using Cursor for AI-powered coding)
- **Styling:** Tailwind CSS
- **PDF Embedding:**
  - **Option 1:** HTML iframe (simple)
  - **Option 2:** PDF.js (advanced)
  - **Option 3:** Google Drive Embed (for hosted PDFs)
- **Animations:** Framer Motion
- **Hosting:** Vercel or Netlify

---

## 🏗️ Project Structure

```
/portfolio-website
│
├── /public
│   ├── /pdfs (store client PDFs here)
│   └── index.html
│
├── /src
│   ├── /components
│   │   └── PDFViewer.jsx
│   ├── /pages
│   │   ├── Home.jsx
│   │   └── Portfolio.jsx
│   ├── /assets (for images, icons, etc.)
│   ├── /utils (for utility functions)
│   ├── App.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

---

## ⚡ Step 1: Setup Project

1. **Initialize Vite project** to quickly scaffold a modern React app.
2. **Install dependencies:** React, Tailwind CSS, PDF.js, and Framer Motion for smooth animations.
3. **Configure Tailwind:** Set up content paths to watch for class usage.
4. **Import Tailwind styles** into your main CSS file.

---

## 📄 Step 2: PDF Embedding

### Option 1: HTML iframe (simple)
- **Pros:** Easiest to implement.
- **Cons:** Limited control over PDF rendering.
- **Use case:** Quick display of hosted or local PDFs.

### Option 2: PDF.js (advanced)
- **Pros:** Full control over PDF rendering (zoom, annotations, etc.).
- **Cons:** More complex setup.
- **Use case:** When custom PDF interactions are needed.

### Option 3: Google Drive embed
- **Pros:** Works with hosted PDFs on Google Drive.
- **Cons:** Requires uploaded PDFs to Google Drive.
- **Use case:** When clients store their work on Google Drive.

---

## 🚀 Step 3: Building Pages

### Home Page
- **Purpose:** Introduction to the portfolio.
- **Features:** Animated headings, brief bio, and a link to the portfolio.
- **Animation:** Use Framer Motion for fade-in and smooth transitions.

### Portfolio Page
- **Purpose:** Showcase client work.
- **Features:** Embedded PDFs, project descriptions.
- **Animation:** Slide-in effects for smooth user experience.

---

## 🚢 Step 4: Hosting

1. **Push to GitHub:** Version control using Git.
2. **Deploy on Vercel:** One-command deployment for React apps.

---

## ✅ Next Steps

- Refine animations using Framer Motion.
- Integrate a **contact form** for client inquiries.
- Optimize PDFs for fast loading.
- Design custom Tailwind themes for personalized styling.
- Implement a **dark mode toggle**.
- Add smooth scrolling and page transitions.

---

Let me know if you want me to expand on any part of this gameplan!

