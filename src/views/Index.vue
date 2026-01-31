<template>
  <div class="index-page" :class="{ dark: isDarkMode }">
    <!-- Theme Toggle -->
    <button class="theme-toggle" @click="toggleTheme" title="Toggle dark mode">
      {{ isDarkMode ? '☀️' : '🌙' }}
    </button>

    <!-- Hero Section -->
    <section id="hero" class="hero-section">
      <div class="particles">
        <div class="particle" v-for="i in 20" :key="i" :style="getParticleStyle(i)"></div>
      </div>
      
      <div class="hero-content">
        <div class="badge">🚀 Platform Pembelajaran Terminal #1 di Indonesia</div>
        <h1 class="hero-title">
          <span class="gradient-text">OS Mastery</span>
        </h1>
        <p class="hero-subtitle">
          Kuasai Linux & Terminal dengan Metode Interaktif.<br>
          Belajar, Praktik, dan Optimalkan Sistem Operasi Anda.
        </p>
        
        <div class="button-group">
          <button class="btn btn-primary" @click="$router.push('/register')">
            <span>Mulai Gratis</span>
            <span class="arrow">→</span>
          </button>
          <button class="btn btn-secondary" @click="$router.push('/login')">
            <span>Login</span>
          </button>
        </div>

        <div class="stats">
          <div class="stat-item">
            <div class="stat-number">1.2K+</div>
            <div class="stat-label">Pengguna Aktif</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">50+</div>
            <div class="stat-label">Materi Interaktif</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">4.9★</div>
            <div class="stat-label">Rating Pengguna</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features-section">
      <h2 class="section-title">Kenapa Memilih OS Mastery?</h2>
      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="how-section">
      <h2 class="section-title">Cara Kerja</h2>
      <div class="steps-container">
        <div class="step-card" v-for="(step, index) in steps" :key="index">
          <div class="step-number">{{ index + 1 }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-description">{{ step.description }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="cta" class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">Siap Menjadi Master Linux?</h2>
        <p class="cta-subtitle">Bergabung dengan ribuan pelajar dan profesional yang sudah memulai perjalanan mereka</p>
        <button class="btn btn-cta" @click="$router.push('/register')">
          Daftar Sekarang - Gratis
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>OS Mastery</h3>
          <p>Platform pembelajaran terminal interaktif untuk semua level</p>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Platform</h4>
            <button @click="scrollToSection('hero')" class="footer-link">Beranda</button>
            <button @click="scrollToSection('features')" class="footer-link">Fitur</button>
            <button @click="$router.push('/pricing')" class="footer-link">Harga</button>
          </div>
          <div class="footer-column">
            <h4>Sumber Daya</h4>
            <button @click="$router.push('/academy')" class="footer-link">Dokumentasi</button>
            <button @click="scrollToSection('how-it-works')" class="footer-link">Tutorial</button>
            <button @click="$router.push('/academy')" class="footer-link">Materi</button>
          </div>
          <div class="footer-column">
            <h4>Dukungan</h4>
            <button @click="scrollToSection('features')" class="footer-link">FAQ</button>
            <button @click="showAboutModal = true" class="footer-link">Tentang Saya</button>
            <button @click="$router.push('/register')" class="footer-link">Bergabung</button>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 OS Mastery. All rights reserved.</p>
      </div>
    </footer>

    <!-- About Developer Modal -->
    <transition name="modal-fade">
      <div v-if="showAboutModal" class="modal-overlay" @click="showAboutModal = false">
        <div class="modal-card" @click.stop>
          <button class="modal-close" @click="showAboutModal = false">×</button>
          
          <div class="modal-content">
            <div class="developer-image-wrapper">
              <img src="@/assets/yardan_cropped.png" alt="Yardan Hadziq" class="developer-image" />
              <div class="image-border"></div>
            </div>
            
            <div class="developer-info">
              <h2 class="developer-name">Yardan Hadziq</h2>
              <div class="developer-role">Mahasiswa</div>
              
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-icon">🎓</div>
                  <div class="info-details">
                    <div class="info-label">Universitas</div>
                    <div class="info-value">Universitas Islam Riau (UIR)</div>
                  </div>
                </div>
                
                <div class="info-item">
                  <div class="info-icon">📚</div>
                  <div class="info-details">
                    <div class="info-label">Jurusan</div>
                    <div class="info-value">Teknik Informatika</div>
                  </div>
                </div>
                
                <div class="info-item">
                  <div class="info-icon">🆔</div>
                  <div class="info-details">
                    <div class="info-label">NPM</div>
                    <div class="info-value">223510469</div>
                  </div>
                </div>
                
                <div class="info-item">
                  <div class="info-icon">📅</div>
                  <div class="info-details">
                    <div class="info-label">Angkatan</div>
                    <div class="info-value">2022</div>
                  </div>
                </div>
              </div>
              
              <div class="developer-bio">
                <p>Mahasiswa Teknik Informatika yang passionate dalam pengembangan web dan sistem operasi. Menciptakan OS Mastery sebagai platform pembelajaran interaktif untuk membantu orang lain menguasai Linux dan Terminal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDarkMode, toggleTheme } = useTheme()
const showAboutModal = ref(false)

const features = [
  {
    icon: '💻',
    title: 'Terminal Sandbox',
    description: 'Praktik langsung di terminal simulator yang aman tanpa risiko merusak sistem'
  },
  {
    icon: '🎓',
    title: 'Materi Terstruktur',
    description: 'Kurikulum lengkap dari basic hingga advanced dengan video dan artikel'
  },
  {
    icon: '🔧',
    title: 'Tools Optimasi',
    description: 'Akses ke berbagai tools untuk troubleshooting dan optimasi sistem'
  },
  {
    icon: '🤖',
    title: 'AI Assistant',
    description: 'Smart troubleshooting assistant untuk membantu menyelesaikan masalah'
  },
  {
    icon: '🏆',
    title: 'Sistem Misi',
    description: 'Selesaikan misi dan challenge untuk meningkatkan skill Anda'
  },
  {
    icon: '📱',
    title: 'Akses Selamanya',
    description: 'Belajar kapan saja, dimana saja dengan akses unlimited'
  }
]

const steps = [
  {
    title: 'Daftar Gratis',
    description: 'Buat akun dan dapatkan akses ke materi dasar secara gratis'
  },
  {
    title: 'Pilih Paket',
    description: 'Pilih paket yang sesuai dengan kebutuhan pembelajaran Anda'
  },
  {
    title: 'Mulai Belajar',
    description: 'Akses materi, praktik di terminal sandbox, dan selesaikan misi'
  },
  {
    title: 'Kuasai Skill',
    description: 'Dapatkan sertifikat dan tingkatkan karir sebagai Linux expert'
  }
]

const getParticleStyle = (index) => {
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${Math.random() * 4 + 2}px`,
    height: `${Math.random() * 4 + 2}px`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${Math.random() * 10 + 10}s`
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 20 // offset 20px dari top
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.index-page {
  min-height: 100vh;
  background: #fafafa;
  color: #2c3e50;
  transition: background 0.3s ease, color 0.3s ease;
  position: relative;
  overflow-x: hidden;
}

.index-page.dark {
  background: #0a0a0a;
  color: #e0e0e0;
}

/* Theme Toggle */
.theme-toggle {
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: rgba(255, 255, 255, 0.95);
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
  z-index: 1000;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.theme-toggle:hover {
  transform: scale(1.1) rotate(15deg);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.index-page.dark .theme-toggle {
  background: rgba(42, 42, 42, 0.95);
  border-color: #333;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.particle {
  position: absolute;
  background: #ffffff;
  border-radius: 50%;
  opacity: 0.15;
  animation: float linear infinite;
}

.index-page.dark .particle {
  background: #ffffff;
  opacity: 0.08;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

.hero-content {
  max-width: 900px;
  text-align: center;
  z-index: 1;
  animation: fadeInUp 0.8s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.badge {
  display: inline-block;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(240, 240, 240, 0.15) 100%);
  color: #333;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  border: 1px solid rgba(200, 200, 200, 0.3);
  animation: pulse 2s ease infinite;
}

.index-page.dark .badge {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(240, 240, 240, 0.1) 100%);
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.2);
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.hero-title {
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.gradient-text {
  background: linear-gradient(135deg, #333333 0%, #666666 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.index-page.dark .gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #666;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.index-page.dark .hero-subtitle {
  color: #aaa;
}

.button-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(135deg, #333333 0%, #1a1a1a 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.index-page.dark .btn-primary {
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  color: #000;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.index-page.dark .btn-primary:hover {
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.3);
}

.btn-primary .arrow {
  transition: transform 0.3s ease;
}

.btn-primary:hover .arrow {
  transform: translateX(5px);
}

.btn-secondary {
  background: white;
  color: #333;
  border: 2px solid #333;
}

.index-page.dark .btn-secondary {
  background: #2a2a2a;
  color: #ffffff;
  border-color: #ffffff;
}

.btn-secondary:hover {
  background: #333;
  color: white;
  transform: translateY(-2px);
}

.index-page.dark .btn-secondary:hover {
  background: #ffffff;
  color: #0a0a0a;
}

.stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #333333 0%, #666666 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.25rem;
}

.index-page.dark .stat-number {
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.875rem;
  color: #666;
}

.index-page.dark .stat-label {
  color: #aaa;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: #e0e0e0;
}

.index-page.dark .stat-divider {
  background: #333;
}

/* Features Section */
.features-section {
  padding: 6rem 2rem;
  background: white;
}

.index-page.dark .features-section {
  background: #1a1a1a;
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 4rem;
  color: #2c3e50;
}

.index-page.dark .section-title {
  color: #e0e0e0;
}

.features-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #fafafa;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.index-page.dark .feature-card {
  background: #2a2a2a;
  border-color: #333;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.index-page.dark .feature-card:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.index-page.dark .feature-title {
  color: #e0e0e0;
}

.feature-description {
  color: #666;
  line-height: 1.6;
}

.index-page.dark .feature-description {
  color: #aaa;
}

/* How It Works Section */
.how-section {
  padding: 6rem 2rem;
  background: #fafafa;
}

.index-page.dark .how-section {
  background: #0a0a0a;
}

.steps-container {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
}

.step-card {
  text-align: center;
  padding: 2rem;
  position: relative;
}

.step-number {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #333333 0%, #1a1a1a 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.index-page.dark .step-number {
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  color: #000;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.step-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #2c3e50;
}

.index-page.dark .step-title {
  color: #e0e0e0;
}

.step-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

.index-page.dark .step-description {
  color: #aaa;
}

/* CTA Section */
.cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #2c3e50 0%, #1a1a1a 100%);
  color: white;
  text-align: center;
}

.index-page.dark .cta-section {
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  color: #000;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-subtitle {
  font-size: 1.125rem;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}

.btn-cta {
  padding: 1.125rem 3rem;
  background: white;
  color: #1a1a1a;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.index-page.dark .btn-cta {
  background: #1a1a1a;
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.index-page.dark .btn-cta:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
}

/* Footer */
.footer {
  background: white;
  padding: 4rem 2rem 2rem;
  border-top: 1px solid #e0e0e0;
}

.index-page.dark .footer {
  background: #1a1a1a;
  border-top-color: #333;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #2c3e50;
}

.index-page.dark .footer-brand h3 {
  color: #e0e0e0;
}

.footer-brand p {
  color: #666;
  line-height: 1.6;
}

.index-page.dark .footer-brand p {
  color: #aaa;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
}

.footer-column h4 {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.index-page.dark .footer-column h4 {
  color: #e0e0e0;
}

.footer-link {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  color: #666;
  margin-bottom: 0.5rem;
  padding: 0.25rem 0;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: inherit;
}

.index-page.dark .footer-link {
  color: #aaa;
}

.footer-link:hover {
  color: #333;
  transform: translateX(5px);
}

.index-page.dark .footer-link:hover {
  color: #ffffff;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
  color: #666;
  font-size: 0.875rem;
}

.index-page.dark .footer-bottom {
  border-top-color: #333;
  color: #aaa;
}

/* About Developer Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
  backdrop-filter: blur(4px);
}

.modal-card {
  background: white;
  border-radius: 24px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease;
}

.index-page.dark .modal-card {
  background: #2a2a2a;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  color: #333;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.index-page.dark .modal-close {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.2);
  transform: rotate(90deg);
}

.index-page.dark .modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.modal-content {
  padding: 3rem 2.5rem;
}

.developer-image-wrapper {
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto 2rem;
}

.developer-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;
}

.index-page.dark .developer-image {
  border-color: #2a2a2a;
}

.image-border {
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #333333 0%, #666666 100%);
  z-index: 1;
  animation: rotateGradient 3s linear infinite;
}

.index-page.dark .image-border {
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
}

@keyframes rotateGradient {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.developer-info {
  text-align: center;
}

.developer-name {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.index-page.dark .developer-name {
  color: #e0e0e0;
}

.developer-role {
  font-size: 1.125rem;
  color: #666;
  margin-bottom: 2rem;
  font-weight: 500;
}

.index-page.dark .developer-role {
  color: #aaa;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  text-align: left;
}

.info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.25rem;
  background: #fafafa;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.index-page.dark .info-item {
  background: #1a1a1a;
  border-color: #333;
}

.info-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.index-page.dark .info-item:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.info-icon {
  font-size: 1.75rem;
  line-height: 1;
}

.info-details {
  flex: 1;
}

.info-label {
  font-size: 0.75rem;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.index-page.dark .info-label {
  color: #666;
}

.info-value {
  font-size: 0.95rem;
  color: #2c3e50;
  font-weight: 600;
}

.index-page.dark .info-value {
  color: #e0e0e0;
}

.developer-bio {
  padding: 1.5rem;
  background: #f5f5f5;
  border-radius: 12px;
  border-left: 4px solid #333;
}

.index-page.dark .developer-bio {
  background: #1a1a1a;
  border-left-color: #ffffff;
}

.developer-bio p {
  color: #666;
  line-height: 1.7;
  margin: 0;
  font-size: 0.95rem;
}

.index-page.dark .developer-bio p {
  color: #aaa;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-card {
  animation: modalSlideIn 0.3s ease;
}

.modal-fade-leave-active .modal-card {
  animation: modalSlideOut 0.3s ease;
}

@keyframes modalSlideOut {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .stats {
    gap: 2rem;
  }
  
  .stat-divider {
    display: none;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .steps-container {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .button-group {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
  
  .modal-content {
    padding: 2rem 1.5rem;
  }
  
  .developer-image-wrapper {
    width: 150px;
    height: 150px;
  }
  
  .developer-name {
    font-size: 1.5rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .theme-toggle {
    top: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
  
  .hero-section {
    padding: 1rem;
  }
  
  .badge {
    font-size: 0.75rem;
    padding: 0.375rem 1rem;
  }
}
</style>