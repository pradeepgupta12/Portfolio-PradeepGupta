# Pradeep Gupta — Portfolio

A modern, animated portfolio built with **React + Tailwind CSS + Framer Motion**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

## 📁 Folder Structure

```
pradeep-portfolio/
├── public/
│   └── resume.pdf          ← Add your resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Floating pill navbar
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx         ← Home section with typing animation
│   │   ├── About.jsx        ← About + Education
│   │   ├── Skills.jsx       ← Skills with progress bars
│   │   ├── Projects.jsx     ← Live project cards
│   │   ├── Experience.jsx   ← Work experience + Achievements
│   │   └── Contact.jsx      ← Contact form
│   ├── data/
│   │   └── portfolioData.js ← ✅ All your info here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🖼️ Adding Your Photo

1. Add your photo to `/public/your-photo.jpg`
2. In `src/sections/Hero.jsx`, find the avatar div and replace with:
```jsx
<img src="/your-photo.jpg" alt="Pradeep Gupta" className="w-full h-full object-cover" />
```
3. Do the same in `src/sections/About.jsx`

## ✏️ Customizing Content

All your data is in **`src/data/portfolioData.js`** — edit that file to update:
- Personal info
- Skills & proficiency
- Projects
- Education
- Experience
- Achievements & Certifications

## 🎨 Tech Stack

- **React 18** — UI library
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations
- **React Icons** — Icon library
- **React Type Animation** — Typing effect
- **React Scroll** — Smooth scroll navigation
- **Vite** — Build tool

## 📦 Deploy

```bash
npm run build
# Upload the /dist folder to Netlify, Vercel, or GitHub Pages
```
