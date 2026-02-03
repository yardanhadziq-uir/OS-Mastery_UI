# OS Mastery - Local Storage Version

## ✨ Cara Kerja Sistem Auth

Website ini **TIDAK menggunakan backend server**. Semua data user disimpan di **localStorage browser** Anda.

### 🔐 Autentikasi

- **Register**: Data user baru disimpan di `localStorage` browser
- **Login**: Verifikasi email & password dari `localStorage`
- **Logout**: Hapus token dan data user dari `localStorage`

### 💾 Penyimpanan Data

Data disimpan di browser dengan key:
- `os_mastery_users` - Array semua user yang terdaftar
- `os_mastery_token` - Token autentikasi user yang sedang login
- `os_mastery_current_user` - Data user yang sedang login

### ⚠️ Catatan Penting

1. **Data hanya ada di browser Anda**
   - Jika clear cache/localStorage, semua data hilang
   - Data tidak bisa diakses dari browser/device lain
   
2. **Tidak aman untuk production**
   - Password di-hash dengan fungsi sederhana (bukan bcrypt)
   - Tidak ada validasi email
   - Tidak ada enkripsi data di localStorage
   
3. **Hanya untuk demo/prototype**
   - Cocok untuk testing UI/UX
   - Cocok untuk demo tanpa setup server
   - TIDAK cocok untuk aplikasi production

## 🚀 Cara Menggunakan

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production
```bash
npm run preview
```

## 📝 Test Flow

1. **Buka website** di browser
2. **Klik "Daftar"**
3. **Isi form registrasi:**
   - Nama: `John Doe`
   - Email: `john@example.com`
   - Password: `password123` (min 8 karakter)
4. **Submit** - Otomatis redirect ke dashboard
5. **Logout** - Kembali ke halaman login
6. **Login lagi** dengan email & password yang sama
7. **Nama user** akan muncul di dashboard

## 🔍 Cek Data di Browser

Buka **DevTools (F12)** → **Application** → **Local Storage** → `http://localhost:5175`

Anda akan melihat:
- `os_mastery_users`: Array user yang pernah daftar
- `os_mastery_token`: Token session
- `os_mastery_current_user`: User yang sedang login

## 🛠️ Struktur Code

```
src/
├── services/
│   ├── userStorage.js    # Fungsi localStorage (register, login, logout)
│   └── api.js           # Wrapper untuk kompatibilitas komponen
├── views/
│   ├── Register.vue     # Halaman register
│   ├── Login.vue        # Halaman login
│   ├── Welcome.vue      # Dashboard (protected)
│   └── Profile.vue      # Profile page (protected)
└── router/
    └── index.js         # Route guard untuk proteksi halaman
```

## 📊 User Data Structure

```javascript
{
  id: "1733245678901",           // Timestamp sebagai ID
  fullName: "John Doe",
  email: "john@example.com",
  password: "hashedpassword",    // Hash sederhana
  createdAt: "2026-02-03T10:30:00.000Z"
}
```

## 🎯 Fitur

- ✅ Register user baru
- ✅ Login dengan email & password
- ✅ Logout
- ✅ Route protection (redirect jika belum login)
- ✅ Persistent session (data tetap ada setelah refresh)
- ✅ Validasi email & password
- ✅ Cek email duplikat saat register

## 🚫 Limitasi

- ❌ Tidak ada reset password
- ❌ Tidak ada email verification
- ❌ Tidak ada role/permission system
- ❌ Tidak ada file upload/database
- ❌ Password hash sangat sederhana
- ❌ Data hilang jika clear cache

## 💡 Tips

- Gunakan **email berbeda** untuk setiap test user
- Jika lupa password, **clear localStorage** dan daftar ulang
- Data user bisa di-export/import lewat DevTools

---

**Perfect untuk:** Demo, Prototype, Testing UI
**TIDAK untuk:** Production, Real Application, Storing Sensitive Data
