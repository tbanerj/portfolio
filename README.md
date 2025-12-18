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
docker run -d -p 3000:443 trinav-portfolio```

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

# Full Production Setup Guide (Nginx + HTTPS + Next.js)

This document contains the complete step-by-step process to run a Next.js app
behind Nginx with HTTPS using a custom SSL certificate.

Domain: trinavbanerjee.com  
App port: 3000  
HTTPS port: 443  

---

## Step 1: Stop all running services

```bash
sudo pkill -f next-server
sudo systemctl stop nginx
```

Verify no services are listening on ports 443 or 3000:

```bash
ss -tulpn | grep -E ":(443|3000)"
```

---

## Step 2: Create SSL directory

```bash
sudo mkdir -p /etc/nginx/ssl/trinavbanerjee.com
```

---

## Step 3: Move SSL certificate and private key

```bash
sudo mv ~/portfolio/singing-portfolio/certs/server.cer /etc/nginx/ssl/trinavbanerjee.com/
sudo mv ~/portfolio/singing-portfolio/certs/server.key /etc/nginx/ssl/trinavbanerjee.com/
sudo chmod 600 /etc/nginx/ssl/trinavbanerjee.com/server.key
```

---

## Step 4: Add CA bundle from certificate provider

Download the intermediate certificate (CA bundle) from your certificate provider.

Move it into the SSL directory:

```bash
sudo mv ca_bundle.crt /etc/nginx/ssl/trinavbanerjee.com/
```

---

## Step 5: Build the full certificate chain

```bash
cd /etc/nginx/ssl/trinavbanerjee.com
sudo cat server.cer ca_bundle.crt > fullchain.pem
```

The order is important: server certificate first, CA bundle second.

---

## Step 6: Configure Nginx

Edit the Nginx site configuration:

```bash
sudo nano /etc/nginx/sites-available/myapp
```

Replace the entire file with the following configuration:

```nginx
server {
    listen 443 ssl http2;
    server_name trinavbanerjee.com www.trinavbanerjee.com;

    ssl_certificate     /etc/nginx/ssl/trinavbanerjee.com/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/trinavbanerjee.com/server.key;

    ssl_protocols TLSv1.2 TLSv1.3;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Proto https;
    }
}

server {
    listen 80;
    server_name trinavbanerjee.com www.trinavbanerjee.com;
    return 301 https://$host$request_uri;
}
```

Save and exit the editor.

---

## Step 7: Disable unused Nginx configs

```bash
sudo rm /etc/nginx/sites-enabled/default
```

Confirm only one site is enabled:

```bash
ls -l /etc/nginx/sites-enabled
```

---

## Step 8: Test and start Nginx

```bash
sudo nginx -t
sudo systemctl start nginx
```

---

## Step 9: Start Next.js on port 3000

```bash
cd ~/portfolio/singing-portfolio
PORT=3000 nohup npm run start &
```

---

## Step 10: Verify ports

```bash
ss -tulpn | grep -E ":(443|3000)"
```

Expected results:
- Port 443 handled by nginx
- Port 3000 handled by next-server

---

## Step 11: Verify HTTPS

```bash
curl -I https://trinavbanerjee.com
```

The response should not contain SSL errors.

---

## Step 12: Browser verification

Open the site in a browser:

https://trinavbanerjee.com

The page should load securely over HTTPS.

---

## Restarting the website

### Restart Next.js

```bash
sudo pkill -f next-server
PORT=3000 nohup npm run start &
```

### Reload Nginx

```bash
sudo systemctl reload nginx
```

---

## Notes

- Nginx must be the only service listening on port 443.
- Next.js must run on port 3000.
- The fullchain.pem file must include intermediate certificates.
- This setup does not include automatic certificate renewal.
- For long-term stability, consider replacing nohup with pm2 or systemd.

---

## 📬 Contact

For inquiries, contact via the **navbar link** or at:
📧 [trinavbanerjee7@gmail.com](mailto:trinavbanerjee7@gmail.com)

---

Let me know if you’d like to add:

* 📝 Markdown-powered blogs
* 🌐 CI/CD with GitHub Actions
* ☁️ Deployments to Vercel, Railway, or Render

