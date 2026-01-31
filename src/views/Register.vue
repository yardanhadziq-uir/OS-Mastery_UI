<template>
  <div class="register-page" :class="{ dark: isDarkMode }">
    <button class="theme-toggle" @click="toggleTheme" title="Toggle dark mode">
      {{ isDarkMode ? '☀️' : '🌙' }}
    </button>
    <div class="register-container">
      <div class="register-box">
        <h2 class="register-title">Buat Akun Baru</h2>
        <p class="register-subtitle">Bergabunglah dengan ribuan pelajar lainnya</p>
        
        <form @submit.prevent="handleRegister">
          <div class="form-group">
            <label>Nama Lengkap</label>
            <input 
              type="text" 
              v-model="fullName" 
              placeholder="Nama Lengkap" 
              required 
              :class="{ 'has-value': fullName }"
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input 
              type="email" 
              v-model="email" 
              placeholder="Email" 
              required 
              :class="{ 'has-value': email }"
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <div class="password-wrapper">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                v-model="password" 
                placeholder="Password (min. 8 karakter)" 
                required 
                minlength="8"
                :class="{ 'has-value': password }"
              />
              <button 
                type="button" 
                class="password-toggle"
                @click="showPassword = !showPassword"
              >
                {{ showPassword ? '👁️' : '👁️‍🗨️' }}
              </button>
            </div>
            <div v-if="password" class="password-strength">
              <div class="strength-bar" :class="passwordStrength"></div>
              <p class="strength-text">{{ passwordStrengthText }}</p>
            </div>
          </div>
          <div class="form-group checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" v-model="agree" required />
              <span>Saya setuju dengan <a href="#" class="link-highlight">Syarat & Ketentuan</a></span>
            </label>
          </div>
          <button type="submit" class="btn btn-register" :disabled="isLoading || !agree">
            <span v-if="!isLoading">DAFTAR SEKARANG</span>
            <div v-else class="loading-spinner"></div>
          </button>
        </form>
        
        <p class="login-link">
          Sudah punya akun? <router-link to="/login" class="link-highlight">Login</router-link>
        </p>
      </div>
    </div>

    <ToastNotification 
      :show="showToast" 
      :message="toastMessage" 
      :type="toastType"
      @close="showToast = false"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from '../composables/useTheme'
import ToastNotification from '../components/ToastNotification.vue'

const router = useRouter()
const { isDarkMode, toggleTheme } = useTheme()
const fullName = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const agree = ref(false)
const isLoading = ref(false)
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('info')

const passwordStrength = computed(() => {
  const pwd = password.value
  if (pwd.length === 0) return ''
  if (pwd.length < 8) return 'weak'
  if (pwd.length < 12) return 'medium'
  return 'strong'
})

const passwordStrengthText = computed(() => {
  const strength = passwordStrength.value
  const texts = {
    weak: 'Lemah',
    medium: 'Sedang',
    strong: 'Kuat'
  }
  return texts[strength] || ''
})

const handleRegister = async () => {
  isLoading.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  isLoading.value = false
  toastMessage.value = '✅ Pendaftaran berhasil! Selamat datang!'
  toastType.value = 'success'
  showToast.value = true
  
  setTimeout(() => {
    router.push('/welcome')
  }, 1000)
}
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: fadeIn 0.5s ease;
  transition: background 0.3s ease;
  position: relative;
}

.register-page.dark {
  background: #1a1a1a;
}

.theme-toggle {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e0e0e0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.theme-toggle:hover {
  transform: scale(1.1) rotate(15deg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.register-page.dark .theme-toggle {
  background: rgba(42, 42, 42, 0.9);
  border-color: #333;
}

.register-container {
  width: 100%;
  max-width: 480px;
  animation: slideIn 0.6s ease;
}

.register-box {
  background: white;
  padding: 3rem 2.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.register-page.dark .register-box {
  background: #2a2a2a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.register-title {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.register-page.dark .register-title {
  color: #e0e0e0;
}

.register-subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 2.5rem;
  font-size: 0.95rem;
}

.register-page.dark .register-subtitle {
  color: #aaa;
}

.form-group {
  margin-bottom: 1.75rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.75rem;
  color: #555;
  font-size: 0.95rem;
  font-weight: 500;
}

.register-page.dark .form-group label {
  color: #b0b0b0;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"] {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
  color: #333;
}

.register-page.dark .form-group input[type="text"],
.register-page.dark .form-group input[type="email"],
.register-page.dark .form-group input[type="password"] {
  background: #1a1a1a;
  border-color: #444;
  color: #e0e0e0;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.register-page.dark .form-group input:focus {
  background: #2a2a2a;
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
}

.form-group input.has-value {
  background: white;
  border-color: #ccc;
}

.register-page.dark .form-group input.has-value {
  background: #2a2a2a;
  border-color: #555;
}

.password-wrapper {
  position: relative;
}

.password-wrapper input {
  padding-right: 3rem;
}

.password-toggle {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0.25rem;
  transition: all 0.3s;
  opacity: 0.6;
}

.password-toggle:hover {
  opacity: 1;
  transform: translateY(-50%) scale(1.1);
}

.password-strength {
  margin-top: 0.75rem;
}

.strength-bar {
  height: 4px;
  border-radius: 2px;
  transition: all 0.3s ease;
  background: #e0e0e0;
}

.strength-bar.weak {
  width: 33%;
  background: #dc3545;
}

.strength-bar.medium {
  width: 66%;
  background: #ffc107;
}

.strength-bar.strong {
  width: 100%;
  background: #28a745;
}

.strength-text {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #666;
}

.register-page.dark .strength-text {
  color: #aaa;
}

.checkbox-group {
  margin-bottom: 1.5rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  color: #555;
  font-size: 0.9rem;
}

.register-page.dark .checkbox-label {
  color: #b0b0b0;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
  cursor: pointer;
  margin-top: 0.25rem;
  transform: scale(1.2);
}

.btn-register {
  width: 100%;
  padding: 1.125rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.btn-register:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.btn-register:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-register .loading-spinner {
  width: 24px;
  height: 24px;
  margin: 0 auto;
  border-color: rgba(255, 255, 255, 0.3);
  border-top-color: white;
}

.login-link {
  text-align: center;
  margin-top: 2rem;
  color: #666;
  font-size: 0.95rem;
}

.register-page.dark .login-link {
  color: #aaa;
}

.link-highlight {
  color: #667eea;
  font-weight: 700;
  transition: all 0.3s;
  position: relative;
}

.register-page.dark .link-highlight {
  color: #8899ff;
}

.link-highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: #667eea;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.register-page.dark .link-highlight::after {
  background: #8899ff;
}

.link-highlight:hover::after {
  transform: scaleX(1);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .register-box {
    padding: 2rem 1.5rem;
  }
  
  .register-title {
    font-size: 1.5rem;
  }
}
</style>
