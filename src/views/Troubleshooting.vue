<template>
  <div class="troubleshooting-page" :class="{ dark: isDarkMode }">
    <div class="troubleshooting-container">
      <button class="back-btn" @click="$router.push('/welcome')">
        ← Kembali ke Home
      </button>

      <div class="header">
        <h1 class="page-title">Smart Troubleshooting</h1>
        <p class="page-subtitle">Panduan interaktif untuk diagnosa masalah laptop/PC Anda</p>
      </div>

      <div class="diagnostic-grid">
        <div class="diagnostic-card">
          <div class="diagnostic-icon">🔧</div>
          <h3>System Health Check</h3>
          <p>Analisa kondisi sistem secara menyeluruh dan dapatkan rekomendasi perbaikan</p>
          <button class="diagnostic-btn" @click="runDiagnostic('health')">
            Jalankan Diagnosa
          </button>
        </div>

        <div class="diagnostic-card">
          <div class="diagnostic-icon">⚡</div>
          <h3>Performance Monitor</h3>
          <p>Monitor penggunaan CPU, RAM, dan resource sistem real-time</p>
          <button class="diagnostic-btn" @click="runDiagnostic('performance')">
            Buka Monitor
          </button>
        </div>

        <div class="diagnostic-card">
          <div class="diagnostic-icon">💾</div>
          <h3>Disk Clean Up</h3>
          <p>Bersihkan file temporary, cache, dan optimalkan storage</p>
          <button class="diagnostic-btn" @click="runDiagnostic('cleanup')">
            Mulai Cleanup
          </button>
        </div>

        <div class="diagnostic-card premium">
          <span class="premium-badge">Premium</span>
          <div class="diagnostic-icon">🔒</div>
          <h3>Security Scan</h3>
          <p>Scan keamanan menyeluruh untuk deteksi malware dan vulnerabilities</p>
          <button class="diagnostic-btn locked" @click="$router.push('/pricing')">
            Upgrade Required
          </button>
        </div>

        <div class="diagnostic-card premium">
          <span class="premium-badge">Premium</span>
          <div class="diagnostic-icon">🌐</div>
          <h3>Network Diagnostic</h3>
          <p>Troubleshoot masalah koneksi, DNS, dan kecepatan internet</p>
          <button class="diagnostic-btn locked" @click="$router.push('/pricing')">
            Upgrade Required
          </button>
        </div>

        <div class="diagnostic-card premium">
          <span class="premium-badge">Premium</span>
          <div class="diagnostic-icon">🔄</div>
          <h3>Auto Optimizer</h3>
          <p>Optimasi otomatis sistem untuk performa maksimal</p>
          <button class="diagnostic-btn locked" @click="$router.push('/pricing')">
            Upgrade Required
          </button>
        </div>
      </div>

      <div class="chat-section">
        <h2>🤖 AI Troubleshooting Assistant</h2>
        <p>Ceritakan masalah yang Anda hadapi, AI kami akan membantu mendiagnosa dan memberikan solusi</p>
        
        <div class="chat-interface">
          <div class="chat-messages" ref="chatMessages">
            <div v-for="(msg, index) in messages" :key="index" class="message" :class="msg.type">
              <div class="message-avatar">{{ msg.type === 'bot' ? '🤖' : '👤' }}</div>
              <div class="message-content">{{ msg.text }}</div>
            </div>
          </div>
          
          <div class="chat-input-wrapper">
            <input 
              v-model="userMessage" 
              @keyup.enter="sendMessage"
              type="text" 
              placeholder="Ketik masalah Anda di sini..." 
              class="chat-input"
            />
            <button class="send-btn" @click="sendMessage" :disabled="!userMessage.trim()">
              Kirim
            </button>
          </div>
        </div>
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
const { isDarkMode } = useTheme()

const userMessage = ref('')
const messages = ref([
  {
    type: 'bot',
    text: 'Halo! Saya Smart Troubleshooting Assistant. Ceritakan masalah apa yang Anda hadapi dengan laptop/PC Anda.'
  }
])

const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('info')

const runDiagnostic = (type) => {
  toastMessage.value = '🔍 Menjalankan diagnosa...'
  toastType.value = 'info'
  showToast.value = true
}

const sendMessage = () => {
  if (!userMessage.value.trim()) return
  
  messages.value.push({
    type: 'user',
    text: userMessage.value
  })
  
  const userMsg = userMessage.value
  userMessage.value = ''
  
  // Simulate AI response
  setTimeout(() => {
    messages.value.push({
      type: 'bot',
      text: `Saya memahami masalah "${userMsg}". Biarkan saya menganalisa... Untuk masalah ini, saya merekomendasikan untuk menjalankan System Health Check terlebih dahulu.`
    })
  }, 1000)
}
</script>

<style scoped>
.troubleshooting-page {
  min-height: 100vh;
  background: #ffffff;
  color: #000;
  padding: 2rem;
  transition: all 0.3s ease;
}

.troubleshooting-page.dark {
  background: #0a0a0a;
  color: #fff;
}

.troubleshooting-container {
  max-width: 1200px;
  margin: 0 auto;
}

.back-btn {
  background: transparent;
  border: none;
  color: #666;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.75rem 0;
  margin-bottom: 2rem;
  transition: color 0.3s;
  font-weight: 500;
}

.back-btn:hover {
  color: #000;
}

.troubleshooting-page.dark .back-btn {
  color: #aaa;
}

.troubleshooting-page.dark .back-btn:hover {
  color: #fff;
}

.header {
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #000;
}

.troubleshooting-page.dark .page-title {
  color: #fff;
}

.page-subtitle {
  font-size: 1.125rem;
  color: #666;
}

.troubleshooting-page.dark .page-subtitle {
  color: #aaa;
}

.diagnostic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.diagnostic-card {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  padding: 2rem;
  border-radius: 16px;
  transition: all 0.3s;
  position: relative;
}

.diagnostic-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: #000;
}

.troubleshooting-page.dark .diagnostic-card {
  background: #1a1a1a;
  border-color: #333;
}

.troubleshooting-page.dark .diagnostic-card:hover {
  border-color: #fff;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
}

.diagnostic-card.premium {
  opacity: 0.8;
}

.premium-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.375rem 0.875rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
}

.diagnostic-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.diagnostic-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #000;
  font-weight: 600;
}

.troubleshooting-page.dark .diagnostic-card h3 {
  color: #fff;
}

.diagnostic-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.troubleshooting-page.dark .diagnostic-card p {
  color: #aaa;
}

.diagnostic-btn {
  width: 100%;
  padding: 0.875rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.diagnostic-btn:hover:not(.locked) {
  background: #333;
  transform: translateY(-2px);
}

.diagnostic-btn.locked {
  opacity: 0.7;
  cursor: pointer;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.troubleshooting-page.dark .diagnostic-btn {
  background: #fff;
  color: #000;
}

.troubleshooting-page.dark .diagnostic-btn:hover:not(.locked) {
  background: #e0e0e0;
}

.troubleshooting-page.dark .diagnostic-btn.locked {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.chat-section {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  padding: 3rem;
  border-radius: 16px;
}

.troubleshooting-page.dark .chat-section {
  background: #1a1a1a;
  border-color: #333;
}

.chat-section h2 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: #000;
}

.troubleshooting-page.dark .chat-section h2 {
  color: #fff;
}

.chat-section > p {
  color: #666;
  margin-bottom: 2rem;
}

.troubleshooting-page.dark .chat-section > p {
  color: #aaa;
}

.chat-interface {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
}

.troubleshooting-page.dark .chat-interface {
  background: #000;
  border-color: #333;
}

.chat-messages {
  padding: 2rem;
  min-height: 300px;
  max-height: 500px;
  overflow-y: auto;
}

.message {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.message-avatar {
  font-size: 2rem;
  flex-shrink: 0;
}

.message-content {
  background: #f0f0f0;
  padding: 1rem 1.25rem;
  border-radius: 12px;
  max-width: 80%;
  line-height: 1.6;
  color: #333;
}

.troubleshooting-page.dark .message-content {
  background: #2a2a2a;
  color: #ccc;
}

.message.bot .message-content {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
  border-left: 3px solid #667eea;
}

.message.user {
  flex-direction: row-reverse;
}

.message.user .message-content {
  background: #000;
  color: white;
}

.troubleshooting-page.dark .message.user .message-content {
  background: #fff;
  color: #000;
}

.chat-input-wrapper {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-top: 1px solid #e0e0e0;
}

.troubleshooting-page.dark .chat-input-wrapper {
  background: #1a1a1a;
  border-top-color: #333;
}

.chat-input {
  flex: 1;
  padding: 0.875rem 1.25rem;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  color: #333;
  font-size: 1rem;
  transition: all 0.3s;
}

.chat-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.troubleshooting-page.dark .chat-input {
  background: #2a2a2a;
  border-color: #333;
  color: #fff;
}

.send-btn {
  padding: 0.875rem 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.send-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .diagnostic-grid {
    grid-template-columns: 1fr;
  }
  
  .chat-section {
    padding: 2rem 1.5rem;
  }
}
</style>
