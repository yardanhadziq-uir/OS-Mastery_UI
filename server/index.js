import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/database.js'
import authRoutes from './routes/auth.js'

// Load environment variables
dotenv.config()

// Initialize Express app
const app = express()

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true)
    
    // Allow localhost on any port (for development)
    if (origin.includes('localhost') || origin.includes('127.0.0.1')) {
      return callback(null, true)
    }
    
    // Allow GitHub Pages domain
    if (origin && origin.includes('yardanhadziq-uir.github.io')) {
      return callback(null, true)
    }
    
    // Allow configured frontend URL
    if (origin === process.env.FRONTEND_URL) {
      return callback(null, true)
    }
    
    // Log rejected origins for debugging
    console.log('⚠️ CORS: Origin not allowed:', origin)
    callback(null, false)
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Request logging middleware
app.use((req, res, next) => {
  console.log(`📝 ${req.method} ${req.path}`, req.body ? { body: '...' } : '')
  next()
})

// Routes
app.use('/api/auth', authRoutes)

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  })
})

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err)
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📍 Environment: ${process.env.NODE_ENV}`)
  console.log(`🔗 Frontend URL: ${process.env.FRONTEND_URL}`)
})
