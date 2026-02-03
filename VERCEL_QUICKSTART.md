# 🚀 QUICK START - Deploy ke Vercel

## Langkah Deploy (5 menit)

### 1. Buka Vercel
- Kunjungi: https://vercel.com
- Klik **"Login"** dan pilih **"Continue with GitHub"**

### 2. Import Project
- Klik **"Add New..." → "Project"**
- Pilih repository: **OS-Mastery_UI**
- Klik **"Import"**

### 3. Konfigurasi Project
Isi seperti berikut:

**Framework Preset:** Vite

**Build & Development Settings:**
- Build Command: `npm run vercel-build`
- Output Directory: `dist`
- Install Command: `npm install`

### 4. Environment Variables
Klik **"Environment Variables"** dan tambahkan 3 variabel berikut:

| Name | Value |
|------|-------|
| `MONGODB_URI` | `mongodb+srv://yardanbusiness_db_user:pHNmMAGB9XODQLhf@os-mastery-cluster.tfhtvkx.mongodb.net/` |
| `JWT_SECRET` | `7bb04c16fe70cce5cd0d67d03cd40532c7024fdedb9a588bd31e36ae892ddc06198f45734946551d2a34668b8970ab9a96d7f9fb5879435287b9a3226807226e2` |
| `NODE_ENV` | `production` |

### 5. Deploy
- Klik **"Deploy"**
- Tunggu 1-2 menit

### 6. Test Website
Setelah deploy selesai:
1. Klik link website yang muncul (contoh: `https://os-mastery-ui-xxx.vercel.app`)
2. Klik **"Daftar"** untuk register
3. Isi form dan submit
4. Login dengan akun yang baru dibuat
5. Cek apakah nama muncul di dashboard ✅

## ✨ Selesai!

Website dan backend sekarang sudah berjalan di Vercel!

### Auto Deploy
Setiap kali push ke GitHub, Vercel otomatis deploy versi baru.

### Troubleshooting
Jika ada error "Cannot connect to server":
1. Buka Vercel Dashboard → Project → Settings → Environment Variables
2. Pastikan semua 3 variables sudah terisi
3. Klik "Deployments" → Redeploy

---

**Website URL:** https://vercel.com/dashboard
