# 🚀 Deployment Guide - OS Mastery

## 📋 Prerequisites

- GitHub account
- Render account (for backend) - https://render.com
- MongoDB Atlas (already configured)

## 🔧 Deployment Steps

### 1️⃣ Deploy Backend ke Render

1. **Buka Render.com** dan login
2. **Klik "New +" → "Web Service"**
3. **Connect GitHub repository** ini
4. **Konfigurasi:**
   - **Name**: `os-mastery-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`
   - **Instance Type**: Free

5. **Environment Variables** (tambahkan di Render):
   ```
   MONGODB_URI=mongodb+srv://yardanbusiness_db_user:pHNmMAGB9XODQLhf@os-mastery-cluster.tfhtvkx.mongodb.net/?appName=os-mastery-cluster
   JWT_SECRET=7bb04c16fe70cce5cd0d67d03cd40532c7024fdedb9a588bd31e36ae892ddc06198f45734946551d2a34668b8970ab9a96d7f9fb5879435287b9a3226807226e2
   PORT=3000
   NODE_ENV=production
   FRONTEND_URL=https://yardanhadziq-uir.github.io
   ```

6. **Deploy** - Render akan memberikan URL seperti: `https://os-mastery-backend.onrender.com`

### 2️⃣ Update Frontend API URL

Setelah backend deploy, update file `.env.production.local`:
```env
VITE_API_URL=https://os-mastery-backend.onrender.com/api
```
(Ganti dengan URL backend yang sebenarnya dari Render)

### 3️⃣ Deploy Frontend ke GitHub Pages

#### A. Setup GitHub Repository

1. **Push code ke GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **GitHub Settings**:
   - Buka repository di GitHub
   - Settings → Pages
   - Source: **GitHub Actions** (bukan Branch)

3. **Add Secrets**:
   - Settings → Secrets and variables → Actions
   - New repository secret:
     - Name: `VITE_API_URL`
     - Value: `https://os-mastery-backend.onrender.com/api`

#### B. Deploy

GitHub Actions akan otomatis deploy setiap kali ada push ke branch `main`.

Website akan tersedia di:
```
https://yardanhadziq-uir.github.io/OS-Mastery_UI/
```

## 🔍 Troubleshooting

### Blank/White Page

Jika halaman blank setelah deploy:

1. **Check Console** (F12) untuk errors
2. **Periksa base path** di `vite.config.js` sudah benar: `/OS-Mastery_UI/`
3. **Clear browser cache**: Ctrl+Shift+R

### API Connection Failed

1. **Verify backend URL** di browser console logs
2. **Check Render backend** status (harus running)
3. **Verify CORS** di backend sudah allow GitHub Pages URL

### Backend Sleep (Render Free Tier)

Render free tier akan sleep setelah 15 menit tidak aktif:
- **First request** akan lambat (wake up time)
- **Solution**: Upgrade ke paid plan atau use keep-alive service

## 📊 Architecture

```
GitHub Pages (Frontend)
    ↓
HTTPS Request
    ↓
Render.com (Backend)
    ↓
MongoDB Atlas (Database)
```

## 🔐 Environment Variables

### Backend (.env in Render)
```env
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=3000
NODE_ENV=production
FRONTEND_URL=https://yardanhadziq-uir.github.io
```

### Frontend (GitHub Secrets)
```env
VITE_API_URL=https://os-mastery-backend.onrender.com/api
```

## ✅ Verification

Setelah deploy, test:

1. ✅ Open: https://yardanhadziq-uir.github.io/OS-Mastery_UI/
2. ✅ Register akun baru
3. ✅ Login
4. ✅ Check console untuk API calls
5. ✅ Verify data tersimpan di MongoDB

## 📝 Notes

- **Free tier limitations**: Backend bisa sleep, first request lambat
- **CORS**: Sudah dikonfigurasi untuk accept GitHub Pages
- **HTTPS**: Both frontend & backend use HTTPS
- **Auto deploy**: Push ke main = auto deploy

## 🆘 Support

Jika ada masalah:
1. Check GitHub Actions logs
2. Check Render logs
3. Check browser console
4. Verify all environment variables

---

**Last Updated**: February 2026
