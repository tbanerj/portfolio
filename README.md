# 🎤 Trinav Banerjee – Singing Portfolio

A modern performance portfolio built with **Next.js (App Router + TypeScript)** to showcase singing performances and blog content.

Designed with:

* Responsive layout
* Dark mode support
* Animated page transitions
* Mobile navigation
* Production-ready deployment (Nginx + HTTPS + PM2)

---

# 📁 Project Structure

```
/public                  → Static assets (images, icons)
/src/app
  /components            → Reusable UI components (Navbar, ThemeWrapper)
  /videos                → Videos page (YouTube grid)
  /blog                  → Blog page (placeholder)
  layout.tsx             → Root layout wrapper
  head.tsx               → Metadata and <title>
  page.tsx               → Homepage
  globals.css            → Global styles
  page.module.css        → Shared styles
```

---

# 🚀 Features

* 🎤 Embedded YouTube performance grid
* 🌓 Auto light/dark theme (prefers-color-scheme)
* 📱 Fully responsive design
* 🧭 Animated navbar with hamburger menu
* ✨ Route transition animations
* 📝 Blog page placeholder
* 🔐 HTTPS-ready Nginx reverse proxy setup

---

# 🛠️ Local Development

## 1. Clone the repository

```bash
git clone https://github.com/yourusername/singing-portfolio.git
cd singing-portfolio
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run development server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

# 📦 Production Build

```bash
npm run build
npm run start
```

---

# ⚙️ Process Management with PM2

For production stability and auto-restart on crashes.

## Install PM2

```bash
sudo npm install pm2 -g
```

## Start app with PM2

```bash
PORT=3000 pm2 start npm --name portfolio-trinav -- start
```

## Manage PM2

```bash
pm2 ls
pm2 logs portfolio-trinav
pm2 stop portfolio-trinav
pm2 restart portfolio-trinav
```

## Enable startup on reboot

```bash
pm2 startup systemd
pm2 save
```

---

# 🌐 Full Production Setup Guide

## Nginx + HTTPS + Next.js

Domain: `trinavbanerjee.com`
Next.js Port: `3000`
HTTPS Port: `443`

---

## Step 1: Stop existing services

```bash
sudo pkill -f next-server
sudo systemctl stop nginx
```

Verify no processes are listening:

```bash
ss -tulpn | grep -E ":(443|3000)"
```

---

## Step 2: Create SSL directory

```bash
sudo mkdir -p /etc/nginx/ssl/trinavbanerjee.com
```

---

## Step 3: Move SSL Certificate and Key

```bash
sudo mv ~/portfolio/singing-portfolio/certs/server.cer /etc/nginx/ssl/trinavbanerjee.com/
sudo mv ~/portfolio/singing-portfolio/certs/server.key /etc/nginx/ssl/trinavbanerjee.com/
sudo chmod 600 /etc/nginx/ssl/trinavbanerjee.com/server.key
```

---

## Step 4: Add CA Bundle

Download intermediate certificate from your certificate provider.

```bash
sudo mv ca_bundle.crt /etc/nginx/ssl/trinavbanerjee.com/
```

---

## Step 5: Build Full Certificate Chain

```bash
cd /etc/nginx/ssl/trinavbanerjee.com
sudo cat server.cer ca_bundle.crt > fullchain.pem
```

Order matters:

1. Server certificate
2. CA bundle

---

## Step 6: Configure Nginx

Edit:

```bash
sudo nano /etc/nginx/sites-available/myapp
```

Replace with:

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

---

## Step 7: Disable Default Site

```bash
sudo rm /etc/nginx/sites-enabled/default
ls -l /etc/nginx/sites-enabled
```

Only your app should appear.

---

## Step 8: Test and Start Nginx

```bash
sudo nginx -t
sudo systemctl start nginx
```

---

## Step 9: Start Next.js

```bash
cd ~/portfolio/singing-portfolio
PORT=3000 nohup npm run start &
```

---

## Step 10: Verify Ports

```bash
ss -tulpn | grep -E ":(443|3000)"
```

Expected:

* Port 443 handled by nginx
* Port 3000 handled by next-server

---

## Step 11: Verify HTTPS

```bash
curl -I https://trinavbanerjee.com
```

There should be no SSL errors.

---

## Step 12: Browser Verification

Open:

```
https://trinavbanerjee.com
```

The page should load securely over HTTPS.

---

# 🔄 Restarting the Website

## Restart Next.js

```bash
sudo pkill -f next-server
PORT=3000 nohup npm run start &
```

## Reload Nginx

```bash
sudo systemctl reload nginx
```

---

# 📝 Editing Content

| Task                    | File Location             |
| ----------------------- | ------------------------- |
| Update videos           | `src/app/videos/page.tsx` |
| Change homepage content | `src/app/page.tsx`        |
| Replace images          | `/public/`                |
| Global styles           | `globals.css`             |
| Theme logic             | `themeWrapper.tsx`        |

---

# ⚠️ Important Notes

* Nginx must be the only service listening on port 443.
* Next.js must run on port 3000.
* `fullchain.pem` must include intermediate certificates.
* This setup does not include automatic certificate renewal.
* For long-term stability, use PM2 instead of nohup.

---

# 📬 Contact

[trinavbanerjee7@gmail.com](mailto:trinavbanerjee7@gmail.com)
Or use the website navbar contact link.

---
