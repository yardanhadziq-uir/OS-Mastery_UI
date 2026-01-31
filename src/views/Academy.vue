<template>
  <div class="academy-page" :class="{ dark: isDarkMode }">
    <div class="academy-container">
      <div class="academy-header">
        <div>
          <h1 class="page-title">Academy.</h1>
          <p class="page-subtitle">Kurikulum berbasis praktek.</p>
        </div>
        <button class="close-btn" @click="$router.push('/welcome')">
          ✕ Tutup
        </button>
      </div>

      <div class="courses-grid">
        <div class="course-card" @click="$router.push('/file-system')">
          <span class="course-badge free">FREE</span>
          <h3>File System 101</h3>
          <p>Memahami struktur root, home, dan perbedaan drive Windows vs Linux.</p>
          <button class="course-btn">Mulai Baca →</button>
        </div>

        <div class="course-card unlocked" @click="$router.push('/simulator')">
          <span class="course-badge unlocked">PREMIUM - UNLOCKED</span>
          <h3>Basic Commands</h3>
          <p>Praktek langsung: cd, ls, mkdir, rm di lingkungan aman.</p>
          <button class="course-btn">Lanjutkan →</button>
        </div>

        <div class="course-card locked">
          <span class="course-badge pro">PRO ONLY</span>
          <div class="locked-overlay">
            <div class="lock-icon">🔒</div>
          </div>
          <h3>Network Scanning</h3>
          <p>Simulasi Ping, Nmap, Netstat, dan analisa port jaringan lengkap.</p>
          <button class="course-btn disabled">Lihat Detail</button>
        </div>

        <div class="course-card locked">
          <span class="course-badge pro">PRO ONLY</span>
          <div class="locked-overlay">
            <div class="lock-icon">🔒</div>
          </div>
          <h3>Cyber Security Basic</h3>
          <p>Memahami firewall, permission file (chmod).</p>
          <button class="course-btn disabled">Lihat Detail</button>
        </div>

        <div class="course-card" @click="$router.push('/terminal-basics')">
          <span class="course-badge free">FREE</span>
          <h3>Terminal Basics</h3>
          <p>Pengenalan command line interface dan navigasi dasar.</p>
          <button class="course-btn">Mulai Baca →</button>
        </div>

        <div class="course-card locked">
          <span class="course-badge pro">PRO ONLY</span>
          <div class="locked-overlay">
            <div class="lock-icon">🔒</div>
          </div>
          <h3>Shell Scripting</h3>
          <p>Automation dengan bash scripting dan cron jobs.</p>
          <button class="course-btn disabled">Lihat Detail</button>
        </div>
      </div>

      <div class="upgrade-section">
        <h3>🎓 Unlock All Premium Courses</h3>
        <p>Dapatkan akses unlimited ke semua materi dan terminal sandbox interaktif</p>
        <button class="upgrade-btn" @click="$router.push('/pricing')">
          Lihat Paket Premium
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'

const { isDarkMode } = useTheme()
</script>

<style scoped>
.academy-page {
  min-height: 100vh;
  background: #ffffff;
  color: #000;
  padding: 2rem;
  transition: all 0.3s ease;
}

.academy-page.dark {
  background: #0a0a0a;
  color: #fff;
}

.academy-container {
  max-width: 1200px;
  margin: 0 auto;
}

.academy-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #000;
}

.academy-page.dark .page-title {
  color: #fff;
}

.page-subtitle {
  font-size: 1.125rem;
  color: #666;
}

.academy-page.dark .page-subtitle {
  color: #aaa;
}

.close-btn {
  background: transparent;
  border: 1px solid #e0e0e0;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  color: #666;
  transition: all 0.3s;
  font-weight: 500;
}

.close-btn:hover {
  background: #f5f5f5;
  color: #000;
}

.academy-page.dark .close-btn {
  border-color: #333;
  color: #aaa;
}

.academy-page.dark .close-btn:hover {
  background: #1a1a1a;
  color: #fff;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.course-card {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  padding: 2rem;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.course-card:not(.locked):hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: #000;
}

.academy-page.dark .course-card {
  background: #1a1a1a;
  border-color: #333;
}

.academy-page.dark .course-card:not(.locked):hover {
  border-color: #fff;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
}

.course-card.locked {
  opacity: 0.7;
  cursor: not-allowed;
}

.locked-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.lock-icon {
  font-size: 3rem;
  opacity: 0.5;
}

.course-badge {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.course-badge.free {
  background: #d4edda;
  color: #155724;
}

.course-badge.unlocked {
  background: #000;
  color: #fff;
}

.course-badge.pro {
  background: #dc3545;
  color: #fff;
}

.academy-page.dark .course-badge.free {
  background: #1e4620;
  color: #a8daad;
}

.academy-page.dark .course-badge.unlocked {
  background: #fff;
  color: #000;
}

.course-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #000;
  font-weight: 600;
}

.academy-page.dark .course-card h3 {
  color: #fff;
}

.course-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.academy-page.dark .course-card p {
  color: #aaa;
}

.course-btn {
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

.course-btn:hover:not(.disabled) {
  background: #333;
}

.course-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.academy-page.dark .course-btn {
  background: #fff;
  color: #000;
}

.academy-page.dark .course-btn:hover:not(.disabled) {
  background: #e0e0e0;
}

.upgrade-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem;
  border-radius: 16px;
  text-align: center;
  color: white;
}

.upgrade-section h3 {
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
}

.upgrade-section p {
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2rem;
  font-size: 1.125rem;
}

.upgrade-btn {
  padding: 1rem 3rem;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.upgrade-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .academy-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .courses-grid {
    grid-template-columns: 1fr;
  }
}
</style>
