import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

// MongoDB connection
let cachedDb = null

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb
  }

  const conn = await mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 5000,
  })

  cachedDb = conn
  return conn
}

// User Schema
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  createdAt: Date,
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

// Serverless function handler
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization')

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    // Connect to database
    await connectToDatabase()

    // Get token from header
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Tidak ada token, akses ditolak'
      })
    }

    const token = authHeader.substring(7)

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.userId)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User tidak ditemukan'
      })
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    })
  } catch (error) {
    console.error('Get user error:', error)
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan',
      error: error.message
    })
  }
}
