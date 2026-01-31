<template>
  <div class="pricing-page" :class="{ dark: isDarkMode }">
    <div class="pricing-container">
      <button class="back-btn" @click="$router.push('/welcome')">
        ← Kembali ke Home
      </button>

      <div class="header">
        <h1 class="page-title">Package</h1>
        <p class="page-subtitle">Pilih Paket Belajar</p>
        <p class="page-description">Investasi kecil untuk keamanan data laptop Anda.</p>
      </div>

      <div class="pricing-grid">
        <!-- Visitor Plan -->
        <div class="pricing-card">
          <h3 class="plan-name">Visitor</h3>
          <div class="price">
            <span class="currency">Rp</span>
            <span class="amount">0</span>
          </div>
          <p class="billing">/ bulan (Harga Pelajar)</p>
          
          <ul class="features">
            <li class="included">✓ Akses Artikel Basic</li>
            <li class="included">✓ Troubleshooting Guide</li>
            <li class="excluded">✗ Interactive Sandbox</li>
          </ul>
          
          <button class="select-btn" @click="handleSelectPlan('visitor')">
            Lanjut Gratis
          </button>
        </div>

        <!-- Premium Member Plan -->
        <div class="pricing-card">
          <h3 class="plan-name">Premium Member</h3>
          <div class="price">
            <span class="currency">Rp</span>
            <span class="amount">29.000</span>
          </div>
          <p class="billing">/ bulan (Harga Pelajar)</p>
          
          <ul class="features">
            <li class="included">✓ Akses Basic Commands</li>
            <li class="included">✓ Download Premium Optimization</li>
            <li class="included">✓ Interactive Sandbox</li>
          </ul>
          
          <button class="select-btn" @click="handleSelectPlan('premium')">
            ✓ Berlangganan
          </button>
        </div>

        <!-- Pro Member Plan -->
        <div class="pricing-card featured">
          <div class="badge">BEST VALUE</div>
          <h3 class="plan-name">Pro Member</h3>
          <div class="price">
            <span class="currency">Rp</span>
            <span class="amount">49.000</span>
          </div>
          <p class="billing">/ bulan (Harga Pelajar)</p>
          
          <ul class="features">
            <li class="included">✓ Interactive Sandbox</li>
            <li class="included">✓ Download Premium Optimization</li>
            <li class="included">✓ "Safe-kill" Environment</li>
            <li class="included">✓ Misi Hacking Dasar</li>
            <li class="included">✓ Prioritas Support</li>
          </ul>
          
          <button class="select-btn primary" @click="handleSelectPlan('pro')">
            Bayar & Upgrade
          </button>
        </div>
      </div>

      <div class="info-section">
        <p>💡 Semua paket mendukung Debian & Arch Linux terminal</p>
        <p>🎓 Diskon khusus untuk pelajar dan mahasiswa</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useTheme } from '../composables/useTheme'

const router = useRouter()
const { isDarkMode } = useTheme()

const handleSelectPlan = (plan) => {
  // Simpan info paket yang dipilih di localStorage
  localStorage.setItem('selectedPlan', plan)
  
  // Jika paket visitor/gratis, langsung ke simulator
  if (plan === 'visitor') {
    router.push('/simulator')
  } else {
    // Untuk premium/pro, bisa ditambahkan payment flow nanti
    // Untuk sekarang langsung ke simulator juga
    alert(`Paket ${plan} dipilih! Mengarahkan ke simulator...`)
    router.push('/simulator')
  }
}
</script>

<style scoped>
.pricing-page {
  min-height: 100vh;
  background: #ffffff;
  color: #000;
  padding: 2rem;
  transition: all 0.3s ease;
}

.pricing-page.dark {
  background: #0a0a0a;
  color: #fff;
}

.pricing-container {
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

.pricing-page.dark .back-btn {
  color: #aaa;
}

.pricing-page.dark .back-btn:hover {
  color: #fff;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #000;
}

.pricing-page.dark .page-title {
  color: #fff;
}

.page-subtitle {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.pricing-page.dark .page-subtitle {
  color: #aaa;
}

.page-description {
  font-size: 1rem;
  color: #888;
}

.pricing-page.dark .page-description {
  color: #777;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.pricing-card {
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  position: relative;
  transition: all 0.3s;
}

.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  border-color: #000;
}

.pricing-page.dark .pricing-card {
  background: #1a1a1a;
  border-color: #333;
}

.pricing-page.dark .pricing-card:hover {
  border-color: #fff;
  box-shadow: 0 12px 32px rgba(255, 255, 255, 0.1);
}

.pricing-card.featured {
  background: #000;
  color: #fff;
  border-color: #000;
}

.pricing-page.dark .pricing-card.featured {
  background: #fff;
  color: #000;
  border-color: #fff;
}

.badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background: #ffd700;
  color: #000;
  padding: 0.375rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #333;
}

.pricing-card.featured .plan-name {
  color: #fff;
}

.pricing-page.dark .plan-name {
  color: #fff;
}

.pricing-page.dark .pricing-card.featured .plan-name {
  color: #000;
}

.price {
  margin-bottom: 0.5rem;
}

.currency {
  font-size: 1.5rem;
  vertical-align: super;
  font-weight: 600;
}

.amount {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
}

.billing {
  color: #666;
  font-size: 0.875rem;
  margin-bottom: 2rem;
}

.pricing-card.featured .billing {
  color: #ccc;
}

.pricing-page.dark .billing {
  color: #aaa;
}

.pricing-page.dark .pricing-card.featured .billing {
  color: #666;
}

.features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.features li {
  padding: 0.875rem 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0.95rem;
}

.features li.included {
  color: #000;
}

.features li.excluded {
  color: #999;
  text-decoration: line-through;
}

.pricing-card.featured .features li {
  border-bottom-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.pricing-page.dark .features li {
  border-bottom-color: #2a2a2a;
}

.pricing-page.dark .features li.included {
  color: #fff;
}

.pricing-page.dark .pricing-card.featured .features li {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  color: #000;
}

.select-btn {
  width: 100%;
  padding: 1rem;
  background: #000;
  color: white;
  border: 2px solid #000;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.select-btn:hover {
  background: #333;
  border-color: #333;
}

.select-btn.primary {
  background: #fff;
  color: #000;
  border-color: #fff;
}

.select-btn.primary:hover {
  background: #f0f0f0;
  border-color: #f0f0f0;
}

.pricing-page.dark .select-btn {
  background: #fff;
  color: #000;
  border-color: #fff;
}

.pricing-page.dark .select-btn:hover {
  background: #e0e0e0;
  border-color: #e0e0e0;
}

.pricing-page.dark .select-btn.primary {
  background: #000;
  color: #fff;
  border-color: #000;
}

.pricing-page.dark .select-btn.primary:hover {
  background: #333;
  border-color: #333;
}

.info-section {
  text-align: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  color: #666;
}

.info-section p {
  margin: 0.5rem 0;
}

.pricing-page.dark .info-section {
  background: #1a1a1a;
  color: #aaa;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .pricing-grid {
    grid-template-columns: 1fr;
  }
}
</style>
