# portfolio
Here’s your complete `README.md` written in proper **Markdown format**:

```md
# 🎤 Trinav Banerjee – Singing Portfolio

A modern portfolio site built with **Next.js (App Router + TypeScript)** to showcase singing performances and blog posts. Fully styled with responsive design, dark mode support, mobile navigation, and animated page transitions.

---

## 📁 Project Structure

```

/public              → Static assets (images, icons, etc.)
/src/app
/components        → Reusable UI components (Navbar, ThemeWrapper)
/videos            → Videos page (embedded YouTube grid)
/blog              → Blog page (coming soon)
layout.tsx         → Site-wide layout wrapper
head.tsx           → Metadata and page <title>
page.tsx           → Home page (hero section, intro)
globals.css        → Global styles
page.module.css    → Page-specific shared styles
Dockerfile           → Production Docker build file
.dockerignore        → Files to exclude from Docker builds

````

---

## 🚀 Features

- 🎤 Embedded YouTube performance videos
- 🌓 Auto dark/light theme with smooth transitions
- 📱 Fully responsive and mobile-friendly
- 🧭 Navbar with animated underline and hamburger menu
- ✨ Page load animations on every route
- 📝 Blog page placeholder (“Coming soon”)
- 📦 Dockerized for deployment

---

## 🛠️ Local Development

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/singing-portfolio.git
cd singing-portfolio
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

> Visit [http://localhost:3000](http://localhost:3000)

---

## 🐳 Running with Docker

### 1. Build the Docker image

```bash
docker build -t trinav-portfolio .
```

### 2. Run the container

```bash
docker run -p 3000:3000 trinav-portfolio
```

> Open [http://localhost:3000](http://localhost:3000) in your browser

---

## ✏️ Editing Content

* **Update Videos**: Edit the `videos` array in `src/app/videos/page.tsx`
* **Change Homepage Text/Image**: Modify `src/app/page.tsx` and replace assets in `/public/`
* **Global Styles**: Adjust `globals.css` and `page.module.css`
* **Dark Mode Logic**: Controlled in `themeWrapper.tsx` using `prefers-color-scheme`

---

## 📦 Build for Production

```bash
npm run build
npm run start
```

---

## 📬 Contact

For inquiries, contact via the **navbar link** or at:
📧 [trinavbanerjee7@gmail.com](mailto:trinavbanerjee7@gmail.com)

---

Let me know if you’d like to add:

* 📝 Markdown-powered blogs
* 🌐 CI/CD with GitHub Actions
* ☁️ Deployments to Vercel, Railway, or Render

