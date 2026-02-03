import axios from 'axios'

// Base API URL - use environment variable if set, otherwise fallback to appropriate default
const API_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.PROD ? 'https://os-mastery-backend.onrender.com/api' : '/api')

console.log('🔧 API Configuration:', {
  mode: import.meta.env.MODE,
  isProd: import.meta.env.PROD,
  apiUrl: API_URL,
  envApiUrl: import.meta.env.VITE_API_URL
})

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000 // 10 second timeout
})

// Add token to requests if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid, clear storage and redirect to login
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// Auth API
export const authAPI = {
  // Register new user
  register: async (userData) => {
    try {
      console.log('🔵 Attempting registration with:', { ...userData, password: '***' })
      console.log('🔵 API URL:', API_URL)
      
      const response = await api.post('/auth/register', userData)
      
      console.log('✅ Registration successful:', response.data)
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
      return response.data
    } catch (error) {
      console.error('❌ Registration error:', error)
      console.error('❌ Error response:', error.response)
      console.error('❌ Error data:', error.response?.data)
      
      // Throw proper error message
      if (error.response?.data) {
        throw error.response.data
      } else if (error.request) {
        throw { message: 'Tidak dapat terhubung ke server. Pastikan backend berjalan.' }
      } else {
        throw { message: error.message || 'Terjadi kesalahan saat mendaftar' }
      }
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      console.log('🔵 Attempting login with:', { ...credentials, password: '***' })
      
      const response = await api.post('/auth/login', credentials)
      
      console.log('✅ Login successful:', response.data)
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
      return response.data
    } catch (error) {
      console.error('❌ Login error:', error)
      console.error('❌ Error response:', error.response)
      
      if (error.response?.data) {
        throw error.response.data
      } else if (error.request) {
        throw { message: 'Tidak dapat terhubung ke server. Pastikan backend berjalan.' }
      } else {
        throw { message: error.message || 'Terjadi kesalahan saat login' }
      }
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const response = await api.get('/auth/me')
      return response.data
    } catch (error) {
      throw error.response?.data || { message: 'Gagal mengambil data user' }
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('token')
  },

  // Get stored user data
  getStoredUser: () => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }
}

export default api
