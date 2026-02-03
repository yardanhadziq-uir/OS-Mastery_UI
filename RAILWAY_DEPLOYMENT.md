# 🚂 Deploy Backend ke Railway (5 Menit)

Railway adalah platform gratis yang sangat mudah untuk deploy Express.js backend.

## 📋 Langkah Deploy Backend

### 1. Buka Railway
- Kunjungi: **https://railway.app**
- Klik **"Login"** → **"Login with GitHub"**
- Authorize Railway untuk akses GitHub

### 2. Create New Project
- Klik **"New Project"**
- Pilih **"Deploy from GitHub repo"**
- Pilih repository: **OS-Mastery_UI**
- Klik repository untuk deploy

### 3. Configure Environment Variables
Setelah project dibuat, klik project → klik **"Variables"** tab:

Tambahkan 4 environment variables:

| Variable Name | Value |
|--------------|-------|
| `MONGODB_URI` | `mongodb+srv://yardanbusiness_db_user:pHNmMAGB9XODQLhf@os-mastery-cluster.tfhtvkx.mongodb.net/` |
| `JWT_SECRET` | `7bb04c16fe70cce5cd0d67d03cd40532c7024fdedb9a588bd31e36ae892ddc06198f45734946551d2a34668b8970ab9a96d7f9fb5879435287b9a3226807226e2` |
| `NODE_ENV` | `production` |
| `PORT` | `3000` |

### 4. Configure Build Settings
- Klik **"Settings"** tab
- Di bagian **"Build"**:
  - Start Command: `node server/index.js`
  - Install Command: `npm install`

### 5. Deploy
- Railway akan otomatis deploy
- Tunggu sampai status menjadi **"Active"** (biasanya 1-2 menit)

### 6. Copy Backend URL
- Klik **"Settings"** tab
- Klik **"Generate Domain"** untuk mendapatkan public URL
- Copy URL yang muncul (contoh: `https://os-mastery-backend-production.up.railway.app`)

### 7. Test Backend
Buka browser dan test endpoint:
```
https://your-app.up.railway.app/api/health
```

Seharusnya muncul response:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2026-02-03T..."
}
```

## ✅ Backend Sudah Jalan!

Sekarang lanjut deploy frontend ke Vercel.

---

## 🎨 Deploy Frontend ke Vercel

### 1. Buka Vercel
- Kunjungi: **https://vercel.com**
- Login dengan GitHub

### 2. Import Project
- Klik **"Add New..." → "Project"**
- Pilih **"OS-Mastery_UI"**
- Klik **"Import"**

### 3. Configure Project
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 4. Add Environment Variable
Tambahkan **1 variable saja**:

| Name | Value |
|------|-------|
| `VITE_API_URL` | URL Railway yang sudah di-copy tadi + `/api` <br>(contoh: `https://os-mastery-backend-production.up.railway.app/api`) |

### 5. Deploy
- Klik **"Deploy"**
- Tunggu selesai

### 6. Update CORS di Railway
Setelah dapat URL Vercel (contoh: `https://os-mastery.vercel.app`):

1. Kembali ke Railway Dashboard
2. Klik project → **"Variables"** tab
3. Tambahkan 1 variable baru:
   - `FRONTEND_URL` = URL Vercel kamu
4. Railway akan otomatis redeploy

## 🎉 Selesai!

Website sekarang sudah bisa:
- ✅ Register user baru
- ✅ Login dengan user yang dibuat
- ✅ Menyimpan data ke MongoDB
- ✅ Menampilkan nama user di dashboard

## 💡 Tips

- **Auto Deploy**: Setiap push ke GitHub, Railway dan Vercel otomatis deploy
- **Gratis**: Railway free tier = $5/month credit (cukup untuk hobby project)
- **Logs**: Check logs di Railway dashboard jika ada error
- **Database**: Data tersimpan permanen di MongoDB Atlas

## 🐛 Troubleshooting

### Error: "Cannot connect to server"
1. Check Railway logs: Dashboard → project → "Deployments" → View Logs
2. Pastikan environment variables sudah diset
3. Pastikan MongoDB Atlas whitelist IP `0.0.0.0/0`

### Error: "CORS blocked"
1. Pastikan FRONTEND_URL di Railway sudah diset
2. Pastikan tidak ada typo di URL
3. Redeploy Railway setelah update variable

---

**Railway Dashboard**: https://railway.app/dashboard  
**Vercel Dashboard**: https://vercel.com/dashboard
