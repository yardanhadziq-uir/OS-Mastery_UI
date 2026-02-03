/**
 * API Service - Local Storage Version
 * Tidak menggunakan backend server, semua data disimpan di localStorage
 */

import * as userStorage from './userStorage.js'

// Auth API untuk kompatibilitas dengan komponen yang sudah ada
export const authAPI = {
  // Register new user
  register: async (userData) => {
    try {
      console.log('🔵 Attempting registration with:', { ...userData, password: '***' })
      
      const result = userStorage.registerUser(userData)
      
      console.log('✅ Registration successful:', result)
      
      return result
    } catch (error) {
      console.error('❌ Registration error:', error)
      throw { message: error.message || 'Terjadi kesalahan saat mendaftar' }
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      console.log('🔵 Attempting login with:', { ...credentials, password: '***' })
      
      const result = userStorage.loginUser(credentials)
      
      console.log('✅ Login successful:', result)
      
      return result
    } catch (error) {
      console.error('❌ Login error:', error)
      throw { message: error.message || 'Terjadi kesalahan saat login' }
    }
  },

  // Get current user
  getCurrentUser: async () => {
    const user = userStorage.getCurrentUser()
    if (!user) {
      throw { message: 'User tidak ditemukan' }
    }
    return {
      success: true,
      user
    }
  },

  // Logout
  logout: () => {
    userStorage.logoutUser()
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return userStorage.isAuthenticated()
  },

  // Get stored user data
  getStoredUser: () => {
    return userStorage.getCurrentUser()
  }
}

export default authAPI

