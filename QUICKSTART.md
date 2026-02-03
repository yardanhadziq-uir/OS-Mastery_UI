# 🚀 Quick Start Guide - OS Mastery

## Langkah-langkah Memulai

### 1. Pastikan Semua Dependencies Terinstall

```bash
npm install
```

### 2. Jalankan Aplikasi (Backend + Frontend)

```bash
npm start
```

Perintah ini akan menjalankan:
- Backend di `http://localhost:3000`
- Frontend di `http://localhost:5173`

### 3. Buka Browser

Akses aplikasi di: **http://localhost:5173**

### 4. Coba Fitur Authentication

#### Register User Baru:
1. Klik tombol "Daftar" atau navigasi ke `/register`
2. Isi form:
   - Nama Lengkap: (minimal 3 karakter)
   - Email: (format email yang valid)
   - Password: (minimal 8 karakter)
3. Centang "Saya setuju dengan Syarat & Ketentuan"
4. Klik "DAFTAR SEKARANG"

✅ User akan otomatis login dan redirect ke halaman Welcome

#### Login User:
1. Navigasi ke `/login`
2. Masukkan email dan password yang sudah terdaftar
3. Klik "LOGIN SEKARANG"

✅ Akan redirect ke halaman Welcome setelah login berhasil

## 🧪 Test Backend API Secara Manual

### Test Health Check:
```bash
curl http://localhost:3000/api/health
```

### Test Register:
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Test Login:
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

## 📊 Monitoring

### Check Backend Status:
Terminal yang menjalankan backend akan menampilkan:
```
✅ MongoDB Connected: [host]
🚀 Server running on port 3000
📍 Environment: development
🔗 Frontend URL: http://localhost:5173
```

### Check Frontend Status:
Terminal yang menjalankan frontend akan menampilkan:
```
VITE v[version] ready in [time] ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

## 🔍 Debugging

### Backend Logs:
Server menggunakan nodemon, jadi setiap perubahan file akan auto-restart.
Lihat log di terminal backend untuk error atau info.

### Frontend Logs:
Buka browser DevTools (F12) untuk melihat:
- Console logs
- Network requests
- Vue DevTools (jika terinstall)

## 🛑 Menghentikan Aplikasi

### Jika menggunakan `npm start`:
Tekan `Ctrl + C` di terminal

### Jika menjalankan terpisah:
Tekan `Ctrl + C` di masing-masing terminal (backend dan frontend)

## 💡 Tips

1. **Dark Mode**: Klik tombol 🌙/☀️ di pojok kanan atas untuk toggle dark mode

2. **Password Strength**: Saat register, akan muncul indikator kekuatan password:
   - Merah = Lemah (< 8 karakter)
   - Kuning = Sedang (8-11 karakter)
   - Hijau = Kuat (≥ 12 karakter)

3. **Toast Notifications**: Notifikasi akan muncul untuk setiap aksi (success/error)

4. **Auto-login**: Setelah register, user otomatis login dengan JWT token

5. **Token Storage**: JWT token disimpan di localStorage browser

## ⚠️ Common Issues

### Port sudah digunakan:
```bash
# Check port 3000
lsof -i :3000
# Kill process
kill -9 [PID]
```

### MongoDB connection failed:
- Periksa koneksi internet
- Pastikan connection string benar di `.env`

### Frontend tidak terhubung ke backend:
- Pastikan backend running di port 3000
- Check CORS settings di `server/index.js`
- Pastikan `VITE_API_URL` tidak diset (akan default ke localhost:3000)

## 📖 Next Steps

Setelah aplikasi berjalan:
1. Explore halaman-halaman yang tersedia
2. Baca [BACKEND_README.md](./BACKEND_README.md) untuk detail API
3. Baca [README.md](./README.md) untuk overview lengkap
4. Mulai develop fitur baru!

---

Happy Coding! 🎉
