import jwt from 'jsonwebtoken'

export const protect = async (req, res, next) => {
  try {
    let token

    // Check for token in Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Akses ditolak. Token tidak ditemukan.'
      })
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.userId = decoded.userId
      next()
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Token tidak valid'
      })
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
}
