# Deploy ke Vercel - Panduan Lengkap

## 🚀 Cara Deploy ke Vercel

### 1️⃣ Persiapan

Pastikan semua perubahan sudah di-commit dan di-push ke GitHub:

```bash
cd /media/exxie/Main\ Disk/Yardan/SEMESTER\ 7/DESAIN/PRAK/os-mastery-1/os-mastery
git add .
git commit -m "Update configuration for Vercel deployment"
git push origin main
```

### 2️⃣ Deploy ke Vercel

1. **Buka https://vercel.com dan login** dengan akun GitHub

2. **Klik "Add New Project"**

3. **Import repository GitHub**:
   - Pilih repository: `OS-Mastery_UI`
   - Klik "Import"

4. **Konfigurasi Project**:
   - Framework Preset: **Vite**
   - Root Directory: `./` (default)
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Tambahkan Environment Variables**:
   Klik "Environment Variables" dan tambahkan:

   | Name | Value |
   |------|-------|
   | `MONGODB_URI` | `mongodb+srv://yardanbusiness_db_user:pHNmMAGB9XODQLhf@os-mastery-cluster.tfhtvkx.mongodb.net/` |
   | `JWT_SECRET` | `7bb04c16fe70cce5cd0d67d03cd40532c7024fdedb9a588bd31e36ae892ddc06198f45734946551d2a34668b8970ab9a96d7f9fb5879435287b9a3226807226e2` |
   | `NODE_ENV` | `production` |
   | `FRONTEND_URL` | (kosongkan dulu, akan diisi setelah deploy pertama kali) |

6. **Klik "Deploy"** dan tunggu proses selesai (biasanya 1-2 menit)

### 3️⃣ Update Frontend URL

Setelah deployment selesai:

1. Copy URL Vercel app kamu (contoh: `https://os-mastery-ui-xxx.vercel.app`)

2. Kembali ke **Project Settings → Environment Variables**

3. Edit variable `FRONTEND_URL` dan isi dengan URL yang baru didapat

4. **Redeploy** aplikasi:
   - Klik "Deployments" tab
   - Klik titik tiga (...) di deployment terakhir
   - Klik "Redeploy"

### 4️⃣ Testing

Setelah redeploy selesai, test aplikasi:

1. Buka URL Vercel app kamu
2. Coba register akun baru
3. Login dengan akun yang baru dibuat
4. Pastikan nama user muncul di dashboard

## ✅ Keuntungan Vercel

- ✨ **Serverless Functions** - Backend otomatis jalan sebagai serverless function
- 🚀 **Auto Deploy** - Setiap push ke GitHub otomatis deploy
- 🌍 **Global CDN** - Website cepat di seluruh dunia
- 🔒 **HTTPS Gratis** - SSL certificate otomatis
- 💰 **Free Tier** - Gratis untuk hobby projects
- 📊 **Analytics** - Built-in analytics dan monitoring

## 🐛 Troubleshooting

### Error: "Cannot connect to server"
- Pastikan environment variables sudah diset dengan benar
- Check di Vercel Dashboard → Settings → Environment Variables
- Redeploy setelah menambah/mengubah env variables

### Error: "MongoDB connection failed"
- Pastikan MongoDB Atlas whitelist IP `0.0.0.0/0` (allow from anywhere)
- Check connection string di MONGODB_URI

### Backend tidak merespon
- Check Vercel Functions logs di Dashboard → Deployments → [pilih deployment] → Functions tab
- Pastikan route `/api/*` sudah benar di vercel.json

## 📝 Catatan Penting

- Setiap kali push ke GitHub, Vercel otomatis deploy versi baru
- Environment variables hanya perlu diset sekali
- Vercel menyediakan preview deployment untuk setiap branch
- Backend berjalan sebagai Serverless Functions (tidak perlu server terpisah)

## 🔗 Link Penting

- Vercel Dashboard: https://vercel.com/dashboard
- MongoDB Atlas: https://cloud.mongodb.com/
- GitHub Repository: https://github.com/yardanhadziq-uir/OS-Mastery_UI
