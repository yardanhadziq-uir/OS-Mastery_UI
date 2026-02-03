/**
 * Local User Storage
 * Sistem autentikasi menggunakan localStorage browser
 * Data user disimpan di browser, tidak ada backend server
 */

const STORAGE_KEY = 'os_mastery_users'
const TOKEN_KEY = 'os_mastery_token'
const CURRENT_USER_KEY = 'os_mastery_current_user'

/**
 * Utility untuk hash password sederhana
 * NOTE: Ini hanya untuk demo, tidak aman untuk production
 */
function simpleHash(password) {
  let hash = 0
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash.toString(36)
}

/**
 * Generate token sederhana
 */
function generateToken(userId) {
  return btoa(`${userId}_${Date.now()}_${Math.random()}`)
}

/**
 * Get semua users dari localStorage
 */
export function getAllUsers() {
  const users = localStorage.getItem(STORAGE_KEY)
  return users ? JSON.parse(users) : []
}

/**
 * Save users ke localStorage
 */
function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
}

/**
 * Register user baru
 */
export function registerUser(userData) {
  const { fullName, email, password } = userData

  // Validasi input
  if (!fullName || !email || !password) {
    throw new Error('Semua field wajib diisi')
  }

  if (password.length < 8) {
    throw new Error('Password minimal 8 karakter')
  }

  // Cek apakah email sudah terdaftar
  const users = getAllUsers()
  const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase())
  
  if (existingUser) {
    throw new Error('Email sudah terdaftar')
  }

  // Buat user baru
  const newUser = {
    id: Date.now().toString(),
    fullName,
    email: email.toLowerCase(),
    password: simpleHash(password), // Hash password
    createdAt: new Date().toISOString()
  }

  // Simpan user
  users.push(newUser)
  saveUsers(users)

  // Generate token dan simpan current user
  const token = generateToken(newUser.id)
  localStorage.setItem(TOKEN_KEY, token)
  
  const userWithoutPassword = { ...newUser }
  delete userWithoutPassword.password
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword))

  return {
    success: true,
    message: 'Pendaftaran berhasil',
    token,
    user: userWithoutPassword
  }
}

/**
 * Login user
 */
export function loginUser(credentials) {
  const { email, password } = credentials

  // Validasi input
  if (!email || !password) {
    throw new Error('Email dan password wajib diisi')
  }

  // Cari user
  const users = getAllUsers()
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase())

  if (!user) {
    throw new Error('Email atau password salah')
  }

  // Cek password
  if (user.password !== simpleHash(password)) {
    throw new Error('Email atau password salah')
  }

  // Generate token dan simpan current user
  const token = generateToken(user.id)
  localStorage.setItem(TOKEN_KEY, token)

  const userWithoutPassword = { ...user }
  delete userWithoutPassword.password
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword))

  return {
    success: true,
    message: 'Login berhasil',
    token,
    user: userWithoutPassword
  }
}

/**
 * Logout user
 */
export function logoutUser() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(CURRENT_USER_KEY)
}

/**
 * Get current user
 */
export function getCurrentUser() {
  const userStr = localStorage.getItem(CURRENT_USER_KEY)
  return userStr ? JSON.parse(userStr) : null
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated() {
  const token = localStorage.getItem(TOKEN_KEY)
  const user = getCurrentUser()
  return !!(token && user)
}

/**
 * Get stored token
 */
export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}
