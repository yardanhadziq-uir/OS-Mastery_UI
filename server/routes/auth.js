import express from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', async (req, res) => {
  try {
    console.log('📥 Registration request received:', { 
      fullName: req.body.fullName, 
      email: req.body.email,
      passwordProvided: !!req.body.password 
    })
    
    const { fullName, email, password } = req.body

    // Validate input
    if (!fullName || !email || !password) {
      console.log('❌ Validation failed: Missing fields')
      return res.status(400).json({
        success: false,
        message: 'Semua field wajib diisi'
      })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      console.log('❌ Email already registered:', email)
      return res.status(400).json({
        success: false,
        message: 'Email sudah terdaftar'
      })
    }

    console.log('➡️ Creating new user...')
    // Create new user
    const user = await User.create({
      fullName,
      email,
      password
    })

    console.log('✅ User created successfully:', user._id)
    
    // Generate token
    const token = generateToken(user._id)

    console.log('✅ Token generated, sending response')
    
    res.status(201).json({
      success: true,
      message: 'Pendaftaran berhasil',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    })
  } catch (error) {
    console.error('❌ Register error:', error)
    console.error('❌ Error stack:', error.stack)
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan saat mendaftar',
      error: error.message
    })
  }
})

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email dan password wajib diisi'
      })
    }

    // Find user by email
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Email atau password salah'
      })
    }

    // Check password
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: 'Email atau password salah'
      })
    }

    // Generate token
    const token = generateToken(user._id)

    res.json({
      success: true,
      message: 'Login berhasil',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan saat login',
      error: error.message
    })
  }
})

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.userId)
    
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
})

export default router
