# 🚀 QUICK START - Deploy ke Vercel (UPDATED)

## ✨ Apa yang Sudah Diperbaiki?

Backend sekarang menggunakan **Vercel Serverless Functions** di folder `api/`:
- ✅ `/api/auth/register` - Register user baru
- ✅ `/api/auth/login` - Login user
- ✅ `/api/auth/me` - Get current user

Frontend dan backend **dalam 1 project** - tidak perlu deploy terpisah!

## 📋 Langkah Deploy (5 Menit)

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
- Build Command: `npm run build` (default)
- Output Directory: `dist` (default)
- Install Command: `npm install` (default)

### 4. Environment Variables ⚠️ PENTING!
Klik **"Environment Variables"** dan tambahkan 3 variabel berikut:

| Name | Value |
|------|-------|
| `MONGODB_URI` | `mongodb+srv://yardanbusiness_db_user:pHNmMAGB9XODQLhf@os-mastery-cluster.tfhtvkx.mongodb.net/` |
| `JWT_SECRET` | `7bb04c16fe70cce5cd0d67d03cd40532c7024fdedb9a588bd31e36ae892ddc06198f45734946551d2a34668b8970ab9a96d7f9fb5879435287b9a3226807226e2` |
| `NODE_ENV` | `production` |

**CATATAN:** Pastikan ketiga environment variables ini ter-set dengan benar! Tanpa ini, backend tidak akan jalan.

### 5. Deploy
- Klik **"Deploy"**
- Tunggu 1-2 menit
- Jangan tutup halaman sampai selesai!

### 6. Test Website ✅
Setelah deploy selesai:
1. Klik link website yang muncul (contoh: `https://os-mastery-ui-xxx.vercel.app`)
2. Klik **"Daftar"** untuk register
3. Isi form:
   - Nama: `Test User`
   - Email: `test@example.com`
   - Password: `password123`
4. Klik "DAFTAR SEKARANG"
5. Jika berhasil, akan redirect ke dashboard ✨
6. Cek apakah nama "Test User" muncul di dashboard

## 🎯 Yang Harus Muncul Jika Berhasil:

1. ✅ Tombol "DAFTAR SEKARANG" loading sebentar
2. ✅ Redirect otomatis ke dashboard (`/welcome`)
3. ✅ Nama user muncul di dashboard (bukan "Yardan Hadziq" lagi)
4. ✅ TIDAK ADA error "Tidak dapat terhubung ke server"

## 🐛 Troubleshooting

### Error: "Tidak dapat terhubung ke server"
**Solusi:**
1. Buka Vercel Dashboard → [Project Name] → Settings → Environment Variables
2. Pastikan semua 3 variables ada dan benar:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV`
3. Klik tab **"Deployments"**
4. Klik titik tiga (...) di deployment paling atas
5. Klik **"Redeploy"** → centang "Use existing Build Cache" → **Redeploy**

### Error: "Terjadi kesalahan saat mendaftar"
**Cek:**
1. Pastikan password minimal 8 karakter
2. Email harus format yang benar (ada @ dan domain)
3. Buka browser DevTools (F12) → Console tab
4. Lihat error message detail di console

### Cara Cek Logs Serverless Function:
1. Buka Vercel Dashboard
2. Klik project → **"Deployments"** tab
3. Klik deployment terakhir
4. Klik **"Functions"** tab
5. Pilih function (contoh: `/api/auth/register`)
6. Lihat logs error di sini

## 📌 Catatan Penting

- ✨ **Auto Deploy:** Setiap push ke GitHub otomatis deploy baru
- 🌍 **Global CDN:** Website cepat di seluruh dunia
- 🔒 **HTTPS:** Otomatis SSL certificate
- 💰 **Gratis:** Free tier cukup untuk project ini
- 🚀 **Serverless:** Backend auto-scale tanpa server management

## 🔗 Link Penting

- Vercel Dashboard: https://vercel.com/dashboard
- MongoDB Atlas: https://cloud.mongodb.com/
- GitHub Repository: https://github.com/yardanhadziq-uir/OS-Mastery_UI

---

## 🎉 Selesai!

Jika sudah deploy dan test berhasil, website sudah production-ready!

