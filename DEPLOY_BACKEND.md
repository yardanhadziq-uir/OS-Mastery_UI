# 🚀 Panduan Deploy Backend ke Render.com

## Langkah 1: Persiapan Repository
✅ Kode sudah di-push ke GitHub

## Langkah 2: Deploy ke Render.com (GRATIS)

### A. Buat Akun dan Web Service

1. **Buka** https://render.com
2. **Sign Up** menggunakan akun GitHub kamu
3. **Authorize** Render untuk akses ke repository
4. **Klik** "New +" di dashboard
5. **Pilih** "Web Service"

### B. Konfigurasi Web Service

1. **Connect Repository:**
   - Cari dan pilih repository: `OS-Mastery_UI`
   - Klik "Connect"

2. **Basic Settings:**
   ```
   Name: os-mastery-backend
   Region: Singapore (atau yang terdekat)
   Branch: main
   Root Directory: (kosongkan)
   Runtime: Node
   ```

3. **Build & Start Commands:**
   ```
   Build Command: npm install
   Start Command: node server/index.js
   ```

4. **Plan:**
   - Pilih: **Free** (gratis, tapi akan sleep setelah 15 menit tidak aktif)

### C. Environment Variables

Klik "Advanced" dan tambahkan environment variables berikut:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `3000` |
| `MONGODB_URI` | `mongodb+srv://yardanbusiness_db_user:pHNmMAGB9XODQLhf@os-mastery-cluster.tfhtvkx.mongodb.net/os-mastery?retryWrites=true&w=majority` |
| `JWT_SECRET` | `7bb04c16fe70cce5cd0d67d03cd40532c7024fdedb9a588bd31e36ae892ddc06198f45734946551d2a34668b8970ab9a96d7f9fb5879435287b9a3226807226e2` |
| `FRONTEND_URL` | `https://yardanhadziq-uir.github.io` |

### D. Deploy!

1. **Klik** "Create Web Service"
2. **Tunggu** proses deployment (sekitar 2-5 menit)
3. **Catat URL backend** yang diberikan (contoh: `https://os-mastery-backend.onrender.com`)

---

## Langkah 3: Update Frontend Configuration

Setelah backend berhasil di-deploy, kamu akan mendapat URL seperti:
```
https://os-mastery-backend-xxxx.onrender.com
```

### A. Tambahkan Secret di GitHub

1. **Buka** https://github.com/yardanhadziq-uir/OS-Mastery_UI/settings/secrets/actions
2. **Klik** "New repository secret"
3. **Tambahkan:**
   ```
   Name: VITE_API_URL
   Value: https://os-mastery-backend-xxxx.onrender.com/api
   ```
   ⚠️ **PENTING:** Ganti `xxxx` dengan URL backend kamu yang sebenarnya
   ⚠️ **Jangan lupa** tambahkan `/api` di akhir URL!

### B. Trigger Rebuild

1. **Buka** tab "Actions" di repository GitHub
2. **Klik** workflow "Deploy to GitHub Pages" yang terakhir
3. **Klik** "Re-run all jobs"
   
   ATAU
   
   Push perubahan kecil ke repository:
   ```bash
   cd /media/exxie/Main\ Disk/Yardan/SEMESTER\ 7/DESAIN/PRAK/os-mastery-1/os-mastery
   git commit --allow-empty -m "Trigger rebuild with backend URL"
   git push origin main
   ```

---

## Langkah 4: Testing

1. **Tunggu** GitHub Actions selesai rebuild (cek di tab Actions)
2. **Buka** https://yardanhadziq-uir.github.io/OS-Mastery_UI/
3. **Test Register:**
   - Masukkan nama, email, password
   - Klik "Daftar Sekarang"
   - Seharusnya berhasil tanpa error
4. **Test Login:**
   - Login dengan akun yang baru dibuat
   - Seharusnya redirect ke dashboard

---

## ⚠️ PENTING - Render Free Tier

Backend gratis di Render akan **sleep setelah 15 menit tidak aktif**.

**Solusinya:**
- **Request pertama** setelah sleep akan lambat (15-30 detik) karena backend perlu "bangun"
- **Request selanjutnya** akan cepat
- Ini normal untuk free tier

Jika ingin backend selalu aktif 24/7, upgrade ke plan berbayar ($7/bulan).

---

## 🐛 Troubleshooting

### Backend tidak bisa diakses
- Cek logs di Render dashboard
- Pastikan MONGODB_URI benar
- Pastikan semua environment variables sudah di-set

### Frontend masih error "Tidak dapat terhubung ke server"
- Pastikan VITE_API_URL secret sudah di-set di GitHub
- Pastikan sudah rebuild (cek tab Actions)
- Cek console browser (F12) untuk lihat URL yang digunakan
- Pastikan URL backend diakhiri dengan `/api`

### CORS Error
- Pastikan FRONTEND_URL di backend environment variables sudah benar
- Seharusnya: `https://yardanhadziq-uir.github.io`

---

## 📝 Checklist Deployment

- [ ] Backend deployed di Render.com
- [ ] URL backend sudah dicatat
- [ ] VITE_API_URL secret ditambahkan di GitHub
- [ ] GitHub Actions rebuild berhasil
- [ ] Frontend bisa diakses tanpa blank page
- [ ] Register berfungsi (tidak ada error koneksi)
- [ ] Login berfungsi
- [ ] User data muncul di Dashboard

---

## 🎉 Selesai!

Jika semua langkah sudah diikuti, aplikasi kamu seharusnya sudah berfungsi penuh dengan:
- ✅ Frontend di GitHub Pages
- ✅ Backend di Render.com  
- ✅ Database di MongoDB Atlas
- ✅ Register & Login berfungsi
- ✅ User data dinamis

**URL Aplikasi:** https://yardanhadziq-uir.github.io/OS-Mastery_UI/
