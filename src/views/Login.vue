<template>
  <div class="login-page" :class="{ dark: isDarkMode }">
    <button class="theme-toggle" @click="toggleTheme" title="Toggle dark mode">
      {{ isDarkMode ? '☀️' : '🌙' }}
    </button>
    <div class="login-container">
      <div class="login-box">
        <h2 class="login-title">Selamat Datang!</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label>Email</label>
            <input 
              type="email" 
              v-model="email" 
              placeholder="Email" 
              required 
              :class="{ 'has-value': email }"
              @focus="emailFocused = true"
              @blur="emailFocused = false"
            />
            <div class="input-underline" :class="{ active: emailFocused }"></div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <div class="password-wrapper">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                v-model="password" 
                placeholder="Password" 
                required 
                :class="{ 'has-value': password }"
                @focus="passwordFocused = true"
                @blur="passwordFocused = false"
              />
              <button 
                type="button" 
                class="password-toggle"
                @click="showPassword = !showPassword"
              >
                {{ showPassword ? '👁️' : '👁️‍🗨️' }}
              </button>
            </div>
            <div class="input-underline" :class="{ active: passwordFocused }"></div>
          </div>
          <button type="submit" class="btn btn-login" :disabled="isLoading">
            <span v-if="!isLoading">LOGIN SEKARANG</span>
            <div v-else class="loading-spinner"></div>
          </button>
        </form>
        <p class="signup-link">
          Belum punya akun? <router-link to="/register" class="link-highlight">Daftar</router-link>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from '../composables/useTheme'
import ToastNotification from '../components/ToastNotification.vue'

const router = useRouter()
const { isDarkMode, toggleTheme } = useTheme()
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const emailFocused = ref(false)
const passwordFocused = ref(false)
const isLoading = ref(false)
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('info')

const handleLogin = async () => {
  isLoading.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  isLoading.value = false
  toastMessage.value = '✅ Login berhasil! Mengalihkan...'
  toastType.value = 'success'
  showToast.value = true
  
  setTimeout(() => {
    router.push('/welcome')
  }, 1000)
}
</script>

<style scoped>
.login-page {
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

.login-page.dark {
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

.login-page.dark .theme-toggle {
  background: rgba(42, 42, 42, 0.9);
  border-color: #333;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.login-container {
  width: 100%;
  max-width: 440px;
  animation: slideIn 0.6s ease;
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

.login-box {
  background: white;
  padding: 3rem 2.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.login-page.dark .login-box {
  background: #2a2a2a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.login-box:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.login-page.dark .login-box:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

.login-title {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #2c3e50;
}

.login-page.dark .login-title {
  color: #e0e0e0;
}

.form-group {
  margin-bottom: 2rem;
  position: relative;
}

.form-group label {
  display: block;
  margin-bottom: 0.75rem;
  color: #555;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s;
}

.login-page.dark .form-group label {
  color: #b0b0b0;
}

.form-group input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
  color: #333;
}

.login-page.dark .form-group input {
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

.login-page.dark .form-group input:focus {
  background: #2a2a2a;
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
}

.form-group input.has-value {
  background: white;
  border-color: #ccc;
}

.login-page.dark .form-group input.has-value {
  background: #2a2a2a;
  border-color: #555;
}

.input-underline {
  height: 2px;
  background: #667eea;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
}

.login-page.dark .input-underline {
  background: #667eea;
}

.input-underline.active {
  transform: scaleX(1);
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

.btn-login {
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
  margin-top: 1.5rem;
  position: relative;
  overflow: hidden;
}

.btn-login:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.btn-login:active:not(:disabled) {
  transform: translateY(0);
}

.btn-login:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.btn-login .loading-spinner {
  width: 24px;
  height: 24px;
  margin: 0 auto;
}

.signup-link {
  text-align: center;
  margin-top: 2rem;
  color: #666;
  font-size: 0.95rem;
}

.login-page.dark .signup-link {
  color: #aaa;
}

.link-highlight {
  color: #667eea;
  font-weight: 700;
  transition: all 0.3s;
  position: relative;
}

.login-page.dark .link-highlight {
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

.login-page.dark .link-highlight::after {
  background: #8899ff;
}

.link-highlight:hover::after {
  transform: scaleX(1);
}

@media (max-width: 768px) {
  .login-box {
    padding: 2rem 1.5rem;
  }
  
  .login-title {
    font-size: 1.5rem;
  }
}
</style>
