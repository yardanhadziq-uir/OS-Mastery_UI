<template>
  <div class="optimization-page" :class="{ dark: isDarkMode }">
    <div class="optimization-container">
      <button class="back-btn" @click="$router.push('/welcome')">
        ← Kembali ke Home
      </button>

      <div class="header">
        <h1 class="page-title">Optimization Store</h1>
        <p class="page-subtitle">Download tools, themes, dan software yang aman untuk optimasi sistem</p>
      </div>

      <div class="store-grid">
        <div class="store-card">
          <div class="store-icon">🎨</div>
          <h3>Dark Theme Pack</h3>
          <p>Kumpulan tema dark mode untuk terminal dan IDE favorit Anda</p>
          <div class="store-info">
            <span class="store-category free">Free</span>
            <span class="downloads">4.2K downloads</span>
          </div>
          <button class="btn-download">Download</button>
        </div>

        <div class="store-card">
          <div class="store-icon">⚡</div>
          <h3>Speed Optimizer Tool</h3>
          <p>Software ringan untuk optimasi startup dan background processes</p>
          <div class="store-info">
            <span class="store-category free">Free</span>
            <span class="downloads">8.1K downloads</span>
          </div>
          <button class="btn-download">Download</button>
        </div>

        <div class="store-card">
          <div class="store-icon">🛡️</div>
          <h3>Privacy Guard</h3>
          <p>Tool untuk manage permissions dan privacy settings</p>
          <div class="store-info">
            <span class="store-category free">Free</span>
            <span class="downloads">3.5K downloads</span>
          </div>
          <button class="btn-download">Download</button>
        </div>

        <div class="store-card premium">
          <span class="premium-badge">Premium</span>
          <div class="store-icon">💎</div>
          <h3>Pro Theme Collection</h3>
          <p>100+ premium themes untuk berbagai aplikasi dan OS</p>
          <div class="store-info">
            <span class="store-category premium">Premium</span>
            <span class="downloads">12K downloads</span>
          </div>
          <button class="btn-download locked" @click="$router.push('/pricing')">Unlock</button>
        </div>

        <div class="store-card premium">
          <span class="premium-badge">Premium</span>
          <div class="store-icon">🚀</div>
          <h3>Ultimate Optimizer Suite</h3>
          <p>All-in-one optimization toolkit dengan AI automation</p>
          <div class="store-info">
            <span class="store-category premium">Premium</span>
            <span class="downloads">9.8K downloads</span>
          </div>
          <button class="btn-download locked" @click="$router.push('/pricing')">Unlock</button>
        </div>

        <div class="store-card premium">
          <span class="premium-badge">Premium</span>
          <div class="store-icon">🔐</div>
          <h3>Security Pro Pack</h3>
          <p>Advanced security tools dan encryption software</p>
          <div class="store-info">
            <span class="store-category premium">Premium</span>
            <span class="downloads">7.3K downloads</span>
          </div>
          <button class="btn-download locked" @click="$router.push('/pricing')">Unlock</button>
        </div>
      </div>

      <div class="featured-section">
        <h2>✨ Featured This Week</h2>
        <p>Pilihan terbaik dari komunitas untuk optimasi sistem Anda</p>
        <div class="featured-grid">
          <div class="featured-item">
            <div class="featured-icon">🎯</div>
            <div class="featured-info">
              <h4>Clean Master Pro</h4>
              <p>Deep cleaning tool dengan AI detection</p>
            </div>
            <button class="btn-featured">View</button>
          </div>
          <div class="featured-item">
            <div class="featured-icon">⚙️</div>
            <div class="featured-info">
              <h4>System Tweaker</h4>
              <p>Advanced system settings optimizer</p>
            </div>
            <button class="btn-featured">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTheme } from '../composables/useTheme'

const { isDarkMode } = useTheme()
</script>

<style scoped>
.optimization-page {
  min-height: 100vh;
  background: #ffffff;
  color: #000;
  padding: 2rem;
  transition: all 0.3s ease;
}

.optimization-page.dark {
  background: #0a0a0a;
  color: #fff;
}

.optimization-container {
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

.optimization-page.dark .back-btn {
  color: #aaa;
}

.optimization-page.dark .back-btn:hover {
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

.optimization-page.dark .page-title {
  color: #fff;
}

.page-subtitle {
  font-size: 1.125rem;
  color: #666;
}

.optimization-page.dark .page-subtitle {
  color: #aaa;
}

.store-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.store-card {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  padding: 2rem;
  border-radius: 16px;
  transition: all 0.3s;
  position: relative;
}

.store-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: #000;
}

.optimization-page.dark .store-card {
  background: #1a1a1a;
  border-color: #333;
}

.optimization-page.dark .store-card:hover {
  border-color: #fff;
  box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
}

.store-card.premium {
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

.store-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.store-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #000;
  font-weight: 600;
}

.optimization-page.dark .store-card h3 {
  color: #fff;
}

.store-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.optimization-page.dark .store-card p {
  color: #aaa;
}

.store-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.store-category {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.store-category.free {
  background: #d4edda;
  color: #155724;
}

.store-category.premium {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.optimization-page.dark .store-category.free {
  background: #1e4620;
  color: #a8daad;
}

.downloads {
  color: #666;
  font-size: 0.875rem;
}

.optimization-page.dark .downloads {
  color: #aaa;
}

.btn-download {
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

.btn-download:hover:not(.locked) {
  background: #333;
  transform: translateY(-2px);
}

.btn-download.locked {
  cursor: pointer;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.optimization-page.dark .btn-download {
  background: #fff;
  color: #000;
}

.optimization-page.dark .btn-download:hover:not(.locked) {
  background: #e0e0e0;
}

.optimization-page.dark .btn-download.locked {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.featured-section {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  padding: 3rem;
  border-radius: 16px;
}

.optimization-page.dark .featured-section {
  background: #1a1a1a;
  border-color: #333;
}

.featured-section h2 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: #000;
}

.optimization-page.dark .featured-section h2 {
  color: #fff;
}

.featured-section > p {
  color: #666;
  margin-bottom: 2rem;
}

.optimization-page.dark .featured-section > p {
  color: #aaa;
}

.featured-grid {
  display: grid;
  gap: 1.5rem;
}

.featured-item {
  background: white;
  border: 1px solid #e0e0e0;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s;
}

.featured-item:hover {
  border-color: #000;
  transform: translateX(8px);
}

.optimization-page.dark .featured-item {
  background: #000;
  border-color: #333;
}

.optimization-page.dark .featured-item:hover {
  border-color: #fff;
}

.featured-icon {
  font-size: 2.5rem;
}

.featured-info {
  flex: 1;
}

.featured-info h4 {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: #000;
}

.optimization-page.dark .featured-info h4 {
  color: #fff;
}

.featured-info p {
  color: #666;
  font-size: 0.9rem;
}

.optimization-page.dark .featured-info p {
  color: #aaa;
}

.btn-featured {
  padding: 0.625rem 1.5rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-featured:hover {
  background: #333;
}

.optimization-page.dark .btn-featured {
  background: #fff;
  color: #000;
}

.optimization-page.dark .btn-featured:hover {
  background: #e0e0e0;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .store-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-section {
    padding: 2rem 1.5rem;
  }
}
</style>
