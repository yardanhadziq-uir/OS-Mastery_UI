<template>
  <div class="welcome-page" :class="{ dark: isDarkMode }">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">OS Mastery Hub.</div>
        <div class="nav-menu">
          <router-link to="/troubleshooting" class="nav-link">Troubleshoot</router-link>
          <router-link to="/academy" class="nav-link">Academy</router-link>
          <router-link to="/optimization" class="nav-link">Store</router-link>
          <router-link to="/pricing" class="nav-link">Package</router-link>
          <div class="nav-actions">
            <button class="theme-toggle" @click="toggleTheme" title="Toggle dark mode">
              {{ isDarkMode ? '☀️' : '🌙' }}
            </button>
            <router-link to="/profile" class="avatar">YH</router-link>
            <button class="logout-btn" @click="handleLogout">Log out</button>
          </div>
        </div>
      </div>
    </nav>

    <div class="welcome-content">
      <div class="container">
        <div class="welcome-header">
          <h1 class="welcome-title">Selamat Datang,<br>Yardan Hadziq.</h1>
          <p class="welcome-subtitle">
            Akses semua fitur premium dan simulator terminal langsung dari dashboard Anda.
          </p>
          <button class="btn btn-start" @click="$router.push('/academy')">Lanjutkan Belajar</button>
        </div>

        <div class="features-grid">
          <div class="feature-card" @click="$router.push('/troubleshooting')">
            <div class="feature-icon">🔧</div>
            <h3>Smart Troubleshooting</h3>
            <p>Panduan interaktif untuk diagnosa masalah laptop Anda.</p>
            <button class="card-btn">Mulai Diagnosa</button>
          </div>

          <div class="feature-card" @click="$router.push('/pricing')">
            <div class="feature-icon">💻</div>
            <h3>Terminal Sandbox</h3>
            <p>Simulasi coding CMD/Linux langsung di browser (Premium).</p>
            <button class="card-btn">Buka Simulator</button>
          </div>

          <div class="feature-card" @click="$router.push('/optimization')">
            <div class="feature-icon">✨</div>
            <h3>Optimization Store</h3>
            <p>Download tema dan software yang aman.</p>
            <button class="card-btn">Buka Store</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useTheme } from '../composables/useTheme'

const router = useRouter()
const { isDarkMode, toggleTheme } = useTheme()

const handleLogout = () => {
  if (confirm('Apakah Anda yakin ingin keluar?')) {
    router.push('/')
  }
}
</script>

<style scoped>
.welcome-page {
  min-height: 100vh;
  background: #ffffff;
  color: #000;
  transition: all 0.3s ease;
}

.welcome-page.dark {
  background: #000;
  color: #fff;
}

.navbar {
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 1rem 0;
  transition: all 0.3s ease;
}

.welcome-page.dark .navbar {
  background: #1a1a1a;
  border-bottom-color: #333;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.25rem;
  font-weight: 600;
  color: #000;
}

.welcome-page.dark .nav-brand {
  color: #fff;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.95rem;
  font-weight: 500;
}

.nav-link:hover {
  color: #000;
}

.welcome-page.dark .nav-link {
  color: #aaa;
}

.welcome-page.dark .nav-link:hover {
  color: #fff;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  background: transparent;
  border: 1px solid #e0e0e0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.theme-toggle:hover {
  background: #f5f5f5;
  transform: scale(1.1);
}

.welcome-page.dark .theme-toggle {
  border-color: #333;
}

.welcome-page.dark .theme-toggle:hover {
  background: #2a2a2a;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.3s;
}

.avatar:hover {
  transform: scale(1.1);
}

.welcome-page.dark .avatar {
  background: #fff;
  color: #000;
}

.logout-btn {
  padding: 0.5rem 1.5rem;
  background: transparent;
  color: #dc3545;
  border: 1px solid #dc3545;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.logout-btn:hover {
  background: #dc3545;
  color: white;
  transform: translateY(-2px);
}

.welcome-content {
  padding: 4rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-header {
  text-align: center;
  margin-bottom: 4rem;
}

.welcome-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: #000;
}

.welcome-page.dark .welcome-title {
  color: #fff;
}

.welcome-subtitle {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 2rem;
}

.welcome-page.dark .welcome-subtitle {
  color: #aaa;
}

.btn-start {
  padding: 1rem 3rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-start:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.welcome-page.dark .btn-start {
  background: #fff;
  color: #000;
}

.welcome-page.dark .btn-start:hover {
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: #000;
}

.welcome-page.dark .feature-card {
  background: #1a1a1a;
  border-color: #333;
}

.welcome-page.dark .feature-card:hover {
  border-color: #fff;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #000;
}

.welcome-page.dark .feature-card h3 {
  color: #fff;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.welcome-page.dark .feature-card p {
  color: #aaa;
}

.card-btn {
  padding: 0.75rem 2rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.card-btn:hover {
  background: #333;
}

.welcome-page.dark .card-btn {
  background: #fff;
  color: #000;
}

.welcome-page.dark .card-btn:hover {
  background: #e0e0e0;
}

@media (max-width: 768px) {
  .nav-menu {
    gap: 1rem;
    font-size: 0.85rem;
  }
  
  .welcome-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
