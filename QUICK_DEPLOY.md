# ⚡ QUICK START - Railway + Vercel

## 🚂 STEP 1: Deploy Backend ke Railway (3 menit)

### 1. Buka Railway
👉 **https://railway.app** → Login with GitHub

### 2. New Project
- Klik **"New Project"**
- Pilih **"Deploy from GitHub repo"**  
- Pilih **OS-Mastery_UI** → klik untuk deploy

### 3. Add Variables
Klik **"Variables"** tab, tambahkan 4 variables:

```
MONGODB_URI = mongodb+srv://yardanbusiness_db_user:pHNmMAGB9XODQLhf@os-mastery-cluster.tfhtvkx.mongodb.net/

JWT_SECRET = 7bb04c16fe70cce5cd0d67d03cd40532c7024fdedb9a588bd31e36ae892ddc06198f45734946551d2a34668b8970ab9a96d7f9fb5879435287b9a3226807226e2

NODE_ENV = production

PORT = 3000
```

### 4. Get Backend URL
- Klik **"Settings"** tab
- Klik **"Generate Domain"**
- **COPY URL** yang muncul! (contoh: `https://os-mastery-backend-production.up.railway.app`)

### 5. Test Backend
Buka di browser:
```
https://YOUR-URL.up.railway.app/api/health
```

Harus muncul: `{"success": true, "message": "Server is running"}`

---

## 🎨 STEP 2: Deploy Frontend ke Vercel (2 menit)

### 1. Buka Vercel  
👉 **https://vercel.com** → Login with GitHub

### 2. Import Project
- **"Add New..."** → **"Project"**
- Pilih **OS-Mastery_UI** → **"Import"**

### 3. Configure
- Framework: **Vite**
- Build Command: `npm run build`
- Output: `dist`

### 4. Add Variable
**PENTING!** Tambahkan 1 variable:

```
VITE_API_URL = https://YOUR-RAILWAY-URL.up.railway.app/api
```
*(ganti dengan URL Railway dari Step 1.4)*

### 5. Deploy
Klik **"Deploy"** → tunggu selesai

### 6. Get Frontend URL
Copy URL Vercel (contoh: `https://os-mastery.vercel.app`)

---

## 🔄 STEP 3: Connect Frontend & Backend

### Kembali ke Railway:
1. Buka Railway Dashboard
2. Klik project → **"Variables"**
3. Tambahkan 1 variable baru:
```
FRONTEND_URL = https://YOUR-VERCEL-URL.vercel.app
```
4. Railway akan auto-redeploy (tunggu 30 detik)

---

## ✅ TESTING

1. Buka URL Vercel kamu
2. Klik **"Daftar"** (Register)
3. Isi form → Submit
4. Login dengan akun baru
5. Nama harus muncul di dashboard! 🎉

---

## 🎯 Summary

- ✅ Backend di Railway (gratis $5/month credit)
- ✅ Frontend di Vercel (gratis unlimited)
- ✅ Database di MongoDB Atlas (gratis 512MB)
- ✅ Auto-deploy setiap push ke GitHub
- ✅ HTTPS otomatis untuk frontend & backend

## 🆘 Troubleshooting

**Error saat register?**
1. Check Railway logs: Dashboard → "Deployments" → View Logs
2. Pastikan VITE_API_URL di Vercel benar (harus ada `/api` di akhir)
3. Pastikan FRONTEND_URL di Railway benar

**CORS error?**
1. Pastikan FRONTEND_URL di Railway sudah diset
2. Redeploy Railway setelah update variable

---

Railway: https://railway.app/dashboard  
Vercel: https://vercel.com/dashboard
