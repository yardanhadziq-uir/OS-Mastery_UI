# Backend Documentation - OS Mastery

## 🚀 Overview

Backend API untuk aplikasi OS Mastery menggunakan Node.js, Express, dan MongoDB dengan autentikasi JWT.

## 📋 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Environment Variables**: dotenv
- **CORS**: cors middleware

## 🛠️ Setup & Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.example` ke `.env` dan isi dengan nilai yang sesuai:

```bash
cp .env.example .env
```

Edit `.env`:

```env
MONGODB_URI=mongodb+srv://yardanbusiness_db_user:pHNmMAGB9XODQLhf@os-mastery-cluster.tfhtvkx.mongodb.net/?appName=os-mastery-cluster
JWT_SECRET=your_secure_jwt_secret
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Generate JWT Secret

Untuk keamanan, generate JWT secret yang aman:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

## 🏃 Running the Application

### Development Mode

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

**Both (Recommended):**
```bash
npm start
```

Server akan berjalan di: `http://localhost:3000`
Frontend akan berjalan di: `http://localhost:5173`

## 📡 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Authentication Endpoints

#### 1. Register User
**POST** `/api/auth/register`

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Pendaftaran berhasil",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "fullName": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Email sudah terdaftar"
}
```

#### 2. Login User
**POST** `/api/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login berhasil",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "fullName": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Email atau password salah"
}
```

#### 3. Get Current User
**GET** `/api/auth/me`

**Headers:**
```
Authorization: Bearer {token}
```

**Success Response (200):**
```json
{
  "success": true,
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "fullName": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Token tidak valid"
}
```

### Health Check

#### Check Server Status
**GET** `/api/health`

**Response (200):**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2026-02-03T10:30:00.000Z"
}
```

## 📁 Project Structure

```
server/
├── config/
│   └── database.js          # MongoDB connection
├── middleware/
│   └── auth.js              # JWT authentication middleware
├── models/
│   └── User.js              # User schema & model
├── routes/
│   └── auth.js              # Authentication routes
└── index.js                 # Main server file
```

## 🔐 Authentication Flow

1. **Register/Login**: User mengirim credentials
2. **Validation**: Server memvalidasi input
3. **Password Hash**: Password di-hash dengan bcrypt (register)
4. **JWT Token**: Server generate JWT token
5. **Response**: Token dikirim ke client
6. **Storage**: Client menyimpan token di localStorage
7. **Requests**: Client mengirim token di header Authorization
8. **Verification**: Middleware memverifikasi token untuk protected routes

## 🗄️ Database Schema

### User Model

```javascript
{
  fullName: String,      // Required, min 3 characters
  email: String,         // Required, unique, valid email
  password: String,      // Required, min 8 characters (hashed)
  createdAt: Date        // Auto-generated
}
```

## 🔒 Security Features

- **Password Hashing**: bcryptjs dengan salt rounds 10
- **JWT Authentication**: Token expires dalam 30 hari
- **CORS Protection**: Hanya frontend URL yang diizinkan
- **Input Validation**: Validasi di level schema dan routes
- **Error Handling**: Error messages yang aman untuk production

## 🧪 Testing API

### Using cURL

**Register:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Test User","email":"test@example.com","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

**Get User (replace TOKEN):**
```bash
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Using Postman

1. Import collection atau create manual requests
2. Set base URL: `http://localhost:3000/api`
3. For protected routes, add header:
   - Key: `Authorization`
   - Value: `Bearer {your_token}`

## 🐛 Troubleshooting

### MongoDB Connection Error

**Error:** `MongoNetworkError: failed to connect to server`

**Solution:**
- Periksa MONGODB_URI di `.env`
- Pastikan IP address ter-whitelist di MongoDB Atlas
- Periksa koneksi internet

### JWT Token Invalid

**Error:** `Token tidak valid`

**Solution:**
- Periksa JWT_SECRET sama antara generate dan verify
- Pastikan token disimpan dengan benar
- Token mungkin expired (30 hari)

### CORS Error

**Error:** `Access-Control-Allow-Origin`

**Solution:**
- Periksa FRONTEND_URL di `.env`
- Pastikan URL match dengan frontend yang running

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| MONGODB_URI | MongoDB connection string | mongodb+srv://... |
| JWT_SECRET | Secret key untuk JWT | random_64_char_string |
| PORT | Server port | 3000 |
| NODE_ENV | Environment mode | development/production |
| FRONTEND_URL | Frontend URL for CORS | http://localhost:5173 |

## 🚀 Deployment

### Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Generate secure JWT_SECRET
- [ ] Configure MongoDB Atlas production cluster
- [ ] Set proper CORS origins
- [ ] Enable rate limiting
- [ ] Add request logging
- [ ] Set up monitoring
- [ ] Configure SSL/TLS

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [JWT.io](https://jwt.io/)
- [Mongoose Documentation](https://mongoosejs.com/)

## 🤝 Contributing

Untuk menambah fitur baru:

1. Buat branch baru
2. Tambahkan route di `server/routes/`
3. Update dokumentasi ini
4. Test endpoint
5. Create pull request

## 📧 Support

Untuk pertanyaan atau issue, hubungi tim development.

---

**Version:** 1.0.0  
**Last Updated:** February 2026
