<template>
  <div class="profile-page" :class="{ dark: isDarkMode }">
    <div class="profile-container">
      <button class="back-btn" @click="$router.push('/welcome')">
        ← Kembali
      </button>

      <div class="profile-card">
        <div class="profile-header">
          <div class="avatar">{{ initials }}</div>
          <h2 class="profile-name">{{ user?.fullName || 'Loading...' }}</h2>
          <p class="profile-email">{{ user?.email || 'Loading...' }}</p>
          <span class="status-badge">STATUS: FREE PLAN</span>
        </div>

        <div class="profile-actions">
          <button class="action-item upgrade" @click="$router.push('/pricing')">
            <span>Upgrade ke Premium</span>
            <span class="arrow">→</span>
          </button>

          <div class="action-item verified">
            <span>Verifikasi Pelajar</span>
            <span class="check">✓ Terverifikasi</span>
          </div>

          <button class="action-item logout" @click="handleLogout">
            <span>Keluar Akun</span>
            <span class="icon">↗</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from '../composables/useTheme'
import { authAPI } from '../services/api'

const router = useRouter()
const { isDarkMode } = useTheme()
const user = ref(null)
const initials = ref('U')

onMounted(() => {
  // Get user data from localStorage
  const storedUser = authAPI.getStoredUser()
  if (storedUser) {
    user.value = storedUser
    // Generate initials from full name
    const names = storedUser.fullName.split(' ')
    if (names.length >= 2) {
      initials.value = (names[0][0] + names[names.length - 1][0]).toUpperCase()
    } else {
      initials.value = storedUser.fullName.substring(0, 2).toUpperCase()
    }
  } else {
    // If no user data, redirect to login
    router.push('/login')
  }
})

const handleLogout = () => {
  if (confirm('Apakah Anda yakin ingin keluar?')) {
    authAPI.logout()
    router.push('/login')
  }
}
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  background: #ffffff;
  color: #000;
  padding: 2rem;
  transition: all 0.3s ease;
}

.profile-page.dark {
  background: #0a0a0a;
  color: #fff;
}

.profile-container {
  max-width: 600px;
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

.profile-page.dark .back-btn {
  color: #aaa;
}

.profile-page.dark .back-btn:hover {
  color: #fff;
}

.profile-card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 3rem 2.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.profile-page.dark .profile-card {
  background: #1a1a1a;
  border-color: #333;
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.05);
}

.profile-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #f0f0f0;
}

.profile-page.dark .profile-header {
  border-bottom-color: #2a2a2a;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  transition: all 0.3s;
}

.avatar:hover {
  transform: scale(1.05);
}

.profile-page.dark .avatar {
  background: #fff;
  color: #000;
}

.profile-name {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #000;
}

.profile-page.dark .profile-name {
  color: #fff;
}

.profile-email {
  color: #666;
  margin-bottom: 1rem;
  font-size: 1rem;
}

.profile-page.dark .profile-email {
  color: #aaa;
}

.status-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: #f0f0f0;
  color: #666;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.profile-page.dark .status-badge {
  background: #2a2a2a;
  color: #aaa;
}

.profile-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.action-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: #ffffff;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
}

.action-item:hover {
  border-color: #000;
  transform: translateX(4px);
}

.profile-page.dark .action-item {
  background: #0a0a0a;
  border-color: #333;
  color: #fff;
}

.profile-page.dark .action-item:hover {
  border-color: #fff;
}

.action-item.upgrade {
  border-color: #000;
  background: #000;
  color: #fff;
}

.action-item.upgrade:hover {
  background: #333;
  transform: translateX(8px);
}

.profile-page.dark .action-item.upgrade {
  border-color: #fff;
  background: #fff;
  color: #000;
}

.profile-page.dark .action-item.upgrade:hover {
  background: #e0e0e0;
}

.action-item.verified {
  cursor: default;
  border-color: #28a745;
  background: #f0fff4;
}

.action-item.verified:hover {
  transform: none;
}

.profile-page.dark .action-item.verified {
  background: #1a3a1e;
  border-color: #4ade80;
}

.check {
  color: #28a745;
  font-weight: 600;
}

.profile-page.dark .check {
  color: #4ade80;
}

.action-item.logout {
  border-color: #dc3545;
  color: #dc3545;
}

.action-item.logout:hover {
  background: #dc3545;
  color: #fff;
}

.arrow,
.icon {
  font-size: 1.25rem;
  transition: transform 0.3s;
}

.action-item.upgrade:hover .arrow {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .profile-card {
    padding: 2rem 1.5rem;
  }
  
  .profile-name {
    font-size: 1.5rem;
  }
}
</style>
