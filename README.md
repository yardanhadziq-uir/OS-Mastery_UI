# OS Mastery - Platform Pembelajaran Sistem Operasi

Platform pembelajaran interaktif untuk mempelajari sistem operasi dengan antarmuka modern dan backend yang terintegrasi dengan MongoDB.

## 🚀 Tech Stack

### Frontend
- **Vue 3** - Progressive JavaScript Framework
- **Vue Router** - Official router for Vue.js
- **Vite** - Next Generation Frontend Tooling
- **Axios** - Promise based HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database (MongoDB Atlas)
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing

## 📋 Prerequisites

- Node.js (v20.19.0 atau >=22.12.0)
- npm atau yarn
- MongoDB Atlas account (sudah dikonfigurasi)

## 🛠️ Installation & Setup

### 1. Clone Repository

```bash
cd os-mastery
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

File `.env` sudah dikonfigurasi dengan MongoDB connection string. Jika perlu mengubah, edit file `.env`:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## 🏃 Running the Application

### Development Mode (Recommended)

Menjalankan backend dan frontend secara bersamaan:

```bash
npm start
```

- Backend akan berjalan di: `http://localhost:3000`
- Frontend akan berjalan di: `http://localhost:5173`

### Backend Only

```bash
npm run server
```

### Frontend Only

```bash
npm run dev
```

## 📡 API Endpoints

Base URL: `http://localhost:3000/api`

### Authentication

- `POST /api/auth/register` - Register user baru
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Health Check

- `GET /api/health` - Server status check

Untuk dokumentasi API lengkap, lihat [BACKEND_README.md](./BACKEND_README.md)

## 🧪 Testing API

### Menggunakan Test Script

```bash
chmod +x test-api.sh
./test-api.sh
```

### Menggunakan cURL

**Register:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"fullName":"John Doe","email":"john@example.com","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

## 📁 Project Structure

```
os-mastery/
├── server/                 # Backend code
│   ├── config/            # Database configuration
│   ├── middleware/        # Express middleware
│   ├── models/            # Mongoose models
│   ├── routes/            # API routes
│   └── index.js           # Server entry point
├── src/                   # Frontend code
│   ├── assets/           # Static assets
│   ├── components/       # Vue components
│   ├── composables/      # Vue composables
│   ├── router/           # Vue Router configuration
│   ├── services/         # API services
│   ├── views/            # Page components
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── public/               # Public static files
├── .env                  # Environment variables
├── package.json          # Dependencies
├── vite.config.js       # Vite configuration
├── BACKEND_README.md    # Backend documentation
└── README.md            # This file
```

## 🔐 Features

### ✅ Authentication System
- User registration dengan validasi
- User login dengan JWT tokens
- Password hashing dengan bcrypt
- Protected routes dengan middleware
- Automatic token storage di localStorage

### ✅ UI/UX
- Modern dan responsive design
- Dark mode support
- Loading states
- Toast notifications
- Password strength indicator
- Form validation

### ✅ Security
- JWT-based authentication
- Password hashing (bcrypt)
- CORS protection
- Environment variables untuk sensitive data
- Input validation

## 🎨 Available Pages

- `/` - Home page
- `/login` - Login page
- `/register` - Registration page
- `/welcome` - Welcome page (after login)
- `/academy` - Learning academy
- `/simulator` - OS Simulator
- `/file-system` - File system explorer
- `/terminal-basics` - Terminal basics
- `/troubleshooting` - Troubleshooting guide
- `/pricing` - Pricing plans
- `/profile` - User profile

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Run backend + frontend concurrently |
| `npm run dev` | Run frontend only |
| `npm run server` | Run backend only |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🐛 Troubleshooting

### MongoDB Connection Error

Jika terjadi error koneksi MongoDB:
1. Pastikan connection string di `.env` benar
2. Periksa koneksi internet
3. Pastikan IP address ter-whitelist di MongoDB Atlas

### Port Already in Use

Jika port 3000 atau 5173 sudah digunakan:
1. Stop aplikasi yang menggunakan port tersebut
2. Atau ubah PORT di `.env` (backend) atau vite.config.js (frontend)

### CORS Error

Pastikan `FRONTEND_URL` di `.env` sesuai dengan URL frontend yang running.

## 📚 Documentation

- [Backend Documentation](./BACKEND_README.md) - Comprehensive backend API documentation
- [Documentation](./DOCUMENTATION.md) - General project documentation

## 🌐 Browser Compatibility

Tested on:
- Chrome/Edge (Recommended)
- Firefox
- Safari

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is for educational purposes.

## 📧 Support

Untuk pertanyaan atau bantuan, silakan hubungi tim development.

---

**Version:** 1.0.0  
**Last Updated:** February 2026

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Browser Extensions (Recommended)

- Chromium-based browsers:
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
