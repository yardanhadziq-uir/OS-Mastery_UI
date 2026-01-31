<template>
  <div class="terminal-basics-page" :class="{ dark: isDarkMode }">
    <div class="content-container">
      <!-- Header -->
      <div class="page-header">
        <button class="back-btn" @click="$router.push('/academy')">
          ← Kembali ke Academy
        </button>
        <span class="course-badge free">FREE</span>
      </div>

      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="course-title">Terminal Basics</h1>
          <p class="course-description">
            Pengenalan command line interface dan navigasi dasar untuk pemula. 
            Pelajari fundamental yang akan menjadi fondasi skill Linux Anda.
          </p>
          <div class="course-meta">
            <div class="meta-item">
              <span class="icon">📚</span>
              <span>6 Module</span>
            </div>
            <div class="meta-item">
              <span class="icon">⏱️</span>
              <span>45 Menit</span>
            </div>
            <div class="meta-item">
              <span class="icon">📊</span>
              <span>Beginner</span>
            </div>
          </div>
        </div>
        <div class="hero-illustration">
          <div class="terminal-window">
            <div class="terminal-header">
              <div class="terminal-buttons">
                <span class="btn-red"></span>
                <span class="btn-yellow"></span>
                <span class="btn-green"></span>
              </div>
              <span class="terminal-title">terminal</span>
            </div>
            <div class="terminal-body">
              <div class="terminal-line">
                <span class="prompt">user@os-mastery:~$</span>
                <span class="command typing">ls -la</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="progress-section">
        <div class="progress-header">
          <span class="progress-label">Progress Anda</span>
          <span class="progress-percentage">{{ courseProgress }}%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: courseProgress + '%' }"></div>
        </div>
      </div>

      <!-- Course Modules -->
      <div class="modules-section">
        <h2 class="section-title">Daftar Materi</h2>
        
        <div class="modules-list">
          <div 
            v-for="(module, index) in modules" 
            :key="index"
            class="module-card"
            :class="{ 
              completed: module.completed, 
              locked: module.locked,
              current: currentModule === index 
            }"
            @click="!module.locked && openModule(index)"
          >
            <div class="module-number">{{ index + 1 }}</div>
            <div class="module-content">
              <h3 class="module-title">{{ module.title }}</h3>
              <p class="module-description">{{ module.description }}</p>
              <div class="module-footer">
                <span class="module-duration">
                  <span class="icon">⏱️</span> {{ module.duration }}
                </span>
                <span v-if="module.completed" class="module-status completed">
                  ✓ Selesai
                </span>
                <span v-else-if="module.locked" class="module-status locked">
                  🔒 Locked
                </span>
                <span v-else class="module-status">
                  Mulai
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Module Content Modal -->
      <transition name="modal-fade">
        <div v-if="showModuleContent" class="modal-overlay" @click="closeModule">
          <div class="module-modal" @click.stop>
            <div class="modal-header">
              <h2>{{ modules[currentModule]?.title }}</h2>
              <button class="close-btn" @click="closeModule">✕</button>
            </div>
            <div class="modal-body">
              <div class="module-video">
                <div class="video-placeholder">
                  <div class="play-icon">▶️</div>
                  <p>Video Tutorial</p>
                </div>
              </div>
              
              <div class="module-text-content">
                <h3>{{ moduleContent[currentModule]?.subtitle }}</h3>
                <div v-html="moduleContent[currentModule]?.content"></div>
                
                <div class="code-example" v-if="moduleContent[currentModule]?.codeExample">
                  <div class="code-header">
                    <span>💻 Contoh Command</span>
                  </div>
                  <pre><code>{{ moduleContent[currentModule]?.codeExample }}</code></pre>
                </div>

                <div class="module-tips" v-if="moduleContent[currentModule]?.tips">
                  <div class="tips-header">💡 Tips</div>
                  <p>{{ moduleContent[currentModule]?.tips }}</p>
                </div>
              </div>

              <div class="module-actions">
                <button 
                  v-if="currentModule > 0" 
                  class="btn-secondary" 
                  @click="previousModule"
                >
                  ← Sebelumnya
                </button>
                <button 
                  class="btn-primary" 
                  @click="completeAndNext"
                >
                  {{ currentModule < modules.length - 1 ? 'Selesai & Lanjut →' : 'Selesai ✓' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- Call to Action -->
      <div class="cta-section">
        <h2>Siap Praktik Langsung?</h2>
        <p>Gunakan Terminal Simulator untuk mencoba command yang sudah Anda pelajari</p>
        <button class="btn-cta" @click="$router.push('/simulator')">
          Buka Terminal Simulator →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDarkMode } = useTheme()

const currentModule = ref(0)
const showModuleContent = ref(false)

const modules = ref([
  {
    title: 'Apa itu Terminal?',
    description: 'Memahami konsep dasar terminal dan command line interface',
    duration: '5 menit',
    completed: false,
    locked: false
  },
  {
    title: 'Membuka Terminal',
    description: 'Cara membuka terminal di berbagai sistem operasi',
    duration: '3 menit',
    completed: false,
    locked: false
  },
  {
    title: 'Struktur Command',
    description: 'Memahami anatomi command: command, options, dan arguments',
    duration: '8 menit',
    completed: false,
    locked: false
  },
  {
    title: 'Navigasi Dasar',
    description: 'Perintah pwd, cd, dan ls untuk navigasi direktori',
    duration: '10 menit',
    completed: false,
    locked: false
  },
  {
    title: 'Getting Help',
    description: 'Menggunakan man pages dan --help untuk bantuan',
    duration: '7 menit',
    completed: false,
    locked: false
  },
  {
    title: 'Command History',
    description: 'Menggunakan history dan shortcuts keyboard',
    duration: '12 menit',
    completed: false,
    locked: false
  }
])

const moduleContent = ref([
  {
    subtitle: 'Pengenalan Terminal',
    content: `
      <p>Terminal adalah antarmuka berbasis teks yang memungkinkan Anda berkomunikasi langsung dengan sistem operasi. Berbeda dengan GUI (Graphical User Interface), terminal menggunakan perintah teks untuk menjalankan berbagai operasi.</p>
      
      <h4>Kenapa Belajar Terminal?</h4>
      <ul>
        <li>Lebih cepat dan efisien untuk banyak tugas</li>
        <li>Memungkinkan otomasi dengan scripting</li>
        <li>Akses ke fitur-fitur advanced yang tidak tersedia di GUI</li>
        <li>Essential skill untuk developer, sysadmin, dan DevOps</li>
      </ul>
    `,
    codeExample: '# Contoh command sederhana\necho "Hello, Terminal!"',
    tips: 'Jangan takut salah! Terminal adalah tempat yang aman untuk belajar, terutama di simulator kami.'
  },
  {
    subtitle: 'Cara Membuka Terminal',
    content: `
      <h4>Linux (Ubuntu/Debian):</h4>
      <ul>
        <li>Tekan <strong>Ctrl + Alt + T</strong></li>
        <li>Atau cari "Terminal" di aplikasi menu</li>
      </ul>
      
      <h4>macOS:</h4>
      <ul>
        <li>Tekan <strong>Cmd + Space</strong>, ketik "Terminal"</li>
        <li>Atau buka Applications → Utilities → Terminal</li>
      </ul>
      
      <h4>Windows:</h4>
      <ul>
        <li>Gunakan WSL (Windows Subsystem for Linux)</li>
        <li>Atau gunakan PowerShell/CMD (berbeda dengan Unix terminal)</li>
      </ul>
    `,
    tips: 'Untuk latihan tanpa risiko, gunakan Terminal Simulator di OS Mastery!'
  },
  {
    subtitle: 'Anatomi Command',
    content: `
      <p>Setiap command memiliki struktur dasar:</p>
      
      <h4>Format Umum:</h4>
      <p><code>command [options] [arguments]</code></p>
      
      <ul>
        <li><strong>Command</strong>: Program yang akan dijalankan</li>
        <li><strong>Options</strong>: Flag untuk memodifikasi behavior (biasanya dimulai dengan - atau --)</li>
        <li><strong>Arguments</strong>: Input atau target untuk command</li>
      </ul>
    `,
    codeExample: 'ls -la /home\n\n# ls = command\n# -la = options (l=long format, a=all files)\n# /home = argument (direktori target)',
    tips: 'Options biasanya bisa digabung: -l -a sama dengan -la'
  },
  {
    subtitle: 'Navigasi Direktori',
    content: `
      <h4>Perintah Penting:</h4>
      
      <p><strong>pwd</strong> (Print Working Directory)</p>
      <p>Menampilkan lokasi direktori saat ini</p>
      
      <p><strong>ls</strong> (List)</p>
      <p>Menampilkan isi direktori</p>
      
      <p><strong>cd</strong> (Change Directory)</p>
      <p>Berpindah ke direktori lain</p>
      
      <h4>Shortcut Penting:</h4>
      <ul>
        <li><code>~</code> = Home directory</li>
        <li><code>.</code> = Direktori saat ini</li>
        <li><code>..</code> = Direktori parent</li>
        <li><code>-</code> = Direktori sebelumnya</li>
      </ul>
    `,
    codeExample: 'pwd                 # Cek lokasi saat ini\nls                  # Lihat isi direktori\ncd Documents        # Masuk ke folder Documents\ncd ..              # Kembali ke parent directory\ncd ~               # Kembali ke home',
    tips: 'Gunakan Tab untuk auto-complete nama file dan direktori!'
  },
  {
    subtitle: 'Mendapatkan Bantuan',
    content: `
      <p>Tidak perlu menghapal semua command! Ada beberapa cara untuk mendapatkan bantuan:</p>
      
      <h4>Man Pages (Manual)</h4>
      <p>Dokumentasi lengkap untuk setiap command</p>
      
      <h4>--help Flag</h4>
      <p>Quick reference untuk options yang tersedia</p>
      
      <h4>Navigasi Man Pages:</h4>
      <ul>
        <li><strong>Space</strong>: Scroll ke bawah</li>
        <li><strong>b</strong>: Scroll ke atas</li>
        <li><strong>/keyword</strong>: Search</li>
        <li><strong>q</strong>: Quit</li>
      </ul>
    `,
    codeExample: 'man ls              # Buka manual untuk ls\nls --help           # Quick help untuk ls\nman -k search       # Cari command yang berkaitan',
    tips: 'Man pages bisa terlihat intimidating, tapi sangat powerful. Mulai dengan membaca bagian DESCRIPTION dan EXAMPLES.'
  },
  {
    subtitle: 'Command History & Shortcuts',
    content: `
      <h4>Command History:</h4>
      <ul>
        <li><strong>↑/↓</strong>: Navigasi history command</li>
        <li><strong>Ctrl + R</strong>: Reverse search history</li>
        <li><strong>history</strong>: Lihat semua command history</li>
      </ul>
      
      <h4>Keyboard Shortcuts:</h4>
      <ul>
        <li><strong>Ctrl + C</strong>: Cancel command yang sedang running</li>
        <li><strong>Ctrl + L</strong>: Clear screen (sama dengan command 'clear')</li>
        <li><strong>Ctrl + A</strong>: Ke awal line</li>
        <li><strong>Ctrl + E</strong>: Ke akhir line</li>
        <li><strong>Ctrl + U</strong>: Hapus dari cursor ke awal line</li>
        <li><strong>Ctrl + K</strong>: Hapus dari cursor ke akhir line</li>
      </ul>
    `,
    codeExample: 'history              # Lihat semua history\nhistory | grep cd    # Cari command cd di history\n!123                 # Jalankan command nomor 123\n!!                   # Repeat last command',
    tips: 'Ctrl + R adalah game changer! Tekan Ctrl + R lalu mulai ketik command yang pernah Anda jalankan.'
  }
])

const courseProgress = computed(() => {
  const completed = modules.value.filter(m => m.completed).length
  return Math.round((completed / modules.value.length) * 100)
})

const openModule = (index) => {
  currentModule.value = index
  showModuleContent.value = true
}

const closeModule = () => {
  showModuleContent.value = false
}

const completeAndNext = () => {
  modules.value[currentModule.value].completed = true
  
  if (currentModule.value < modules.value.length - 1) {
    currentModule.value++
  } else {
    showModuleContent.value = false
  }
}

const previousModule = () => {
  if (currentModule.value > 0) {
    currentModule.value--
  }
}
</script>

<style scoped>
.terminal-basics-page {
  min-height: 100vh;
  background: #fafafa;
  color: #2c3e50;
  transition: all 0.3s ease;
}

.terminal-basics-page.dark {
  background: #0a0a0a;
  color: #e0e0e0;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.back-btn {
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

.back-btn:hover {
  background: #f5f5f5;
  color: #000;
  transform: translateX(-5px);
}

.terminal-basics-page.dark .back-btn {
  border-color: #333;
  color: #aaa;
}

.terminal-basics-page.dark .back-btn:hover {
  background: #1a1a1a;
  color: #fff;
}

.course-badge {
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
}

.course-badge.free {
  background: #d4edda;
  color: #155724;
}

.terminal-basics-page.dark .course-badge.free {
  background: #1e4620;
  color: #a8daad;
}

/* Hero Section */
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  align-items: center;
}

.course-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #333 0%, #666 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.terminal-basics-page.dark .course-title {
  background: linear-gradient(135deg, #fff 0%, #aaa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.course-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #666;
  margin-bottom: 2rem;
}

.terminal-basics-page.dark .course-description {
  color: #aaa;
}

.course-meta {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #666;
}

.terminal-basics-page.dark .meta-item {
  color: #aaa;
}

.meta-item .icon {
  font-size: 1.25rem;
}

/* Terminal Illustration */
.terminal-window {
  background: #2d2d2d;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.terminal-header {
  background: #1e1e1e;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.terminal-buttons {
  display: flex;
  gap: 0.5rem;
}

.terminal-buttons span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.btn-red { background: #ff5f56; }
.btn-yellow { background: #ffbd2e; }
.btn-green { background: #27c93f; }

.terminal-title {
  font-size: 0.875rem;
  color: #888;
}

.terminal-body {
  padding: 1.5rem;
  font-family: 'Courier New', monospace;
  min-height: 120px;
}

.terminal-line {
  display: flex;
  gap: 0.5rem;
  color: #fff;
}

.prompt {
  color: #27c93f;
}

.command {
  color: #61dafb;
}

.typing {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Progress Section */
.progress-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  border: 1px solid #e0e0e0;
}

.terminal-basics-page.dark .progress-section {
  background: #1a1a1a;
  border-color: #333;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: #e0e0e0;
  border-radius: 6px;
  overflow: hidden;
}

.terminal-basics-page.dark .progress-bar {
  background: #333;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #27c93f, #22a83a);
  border-radius: 6px;
  transition: width 0.5s ease;
}

/* Modules Section */
.modules-section {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.modules-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.module-card {
  display: flex;
  gap: 1.5rem;
  background: white;
  border: 2px solid #e0e0e0;
  padding: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.terminal-basics-page.dark .module-card {
  background: #1a1a1a;
  border-color: #333;
}

.module-card:hover:not(.locked) {
  transform: translateX(8px);
  border-color: #333;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.terminal-basics-page.dark .module-card:hover:not(.locked) {
  border-color: #fff;
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.1);
}

.module-card.current {
  border-color: #27c93f;
  background: #f0fff4;
}

.terminal-basics-page.dark .module-card.current {
  background: #1a2f1f;
}

.module-card.completed {
  opacity: 0.7;
}

.module-card.locked {
  opacity: 0.5;
  cursor: not-allowed;
}

.module-number {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #333 0%, #666 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
}

.terminal-basics-page.dark .module-number {
  background: linear-gradient(135deg, #fff 0%, #aaa 100%);
  color: #000;
}

.module-card.completed .module-number {
  background: linear-gradient(135deg, #27c93f 0%, #22a83a 100%);
  color: white;
}

.module-content {
  flex: 1;
}

.module-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.module-description {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.terminal-basics-page.dark .module-description {
  color: #aaa;
}

.module-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
}

.module-duration {
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.terminal-basics-page.dark .module-duration {
  color: #aaa;
}

.module-status {
  padding: 0.375rem 0.875rem;
  border-radius: 12px;
  font-weight: 600;
  background: #e0e0e0;
  color: #666;
}

.module-status.completed {
  background: #d4edda;
  color: #155724;
}

.module-status.locked {
  background: #f8d7da;
  color: #721c24;
}

/* Module Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
  overflow-y: auto;
}

.module-modal {
  background: white;
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.terminal-basics-page.dark .module-modal {
  background: #1a1a1a;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid #e0e0e0;
}

.terminal-basics-page.dark .modal-header {
  border-bottom-color: #333;
}

.modal-header h2 {
  font-size: 1.75rem;
  font-weight: 700;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s;
}

.close-btn:hover {
  background: #f5f5f5;
  color: #000;
  transform: rotate(90deg);
}

.terminal-basics-page.dark .close-btn {
  color: #aaa;
}

.terminal-basics-page.dark .close-btn:hover {
  background: #2a2a2a;
  color: #fff;
}

.modal-body {
  padding: 2rem;
}

.video-placeholder {
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, #2d2d2d 0%, #1e1e1e 100%);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: white;
}

.play-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.module-text-content {
  line-height: 1.7;
}

.module-text-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.module-text-content h4 {
  font-size: 1.125rem;
  margin: 1.5rem 0 0.75rem;
  font-weight: 700;
}

.module-text-content ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.module-text-content li {
  margin-bottom: 0.5rem;
  color: #666;
}

.terminal-basics-page.dark .module-text-content li {
  color: #aaa;
}

.code-example {
  margin: 2rem 0;
  background: #2d2d2d;
  border-radius: 8px;
  overflow: hidden;
}

.code-header {
  background: #1e1e1e;
  padding: 0.75rem 1rem;
  color: #aaa;
  font-size: 0.875rem;
}

.code-example pre {
  padding: 1.5rem;
  margin: 0;
  overflow-x: auto;
}

.code-example code {
  font-family: 'Courier New', monospace;
  color: #61dafb;
  font-size: 0.95rem;
  line-height: 1.6;
}

.module-tips {
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  margin-top: 2rem;
}

.terminal-basics-page.dark .module-tips {
  background: #3d3416;
  border-left-color: #ffc107;
}

.tips-header {
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.module-tips p {
  margin: 0;
  color: #856404;
  line-height: 1.6;
}

.terminal-basics-page.dark .module-tips p {
  color: #ffc107;
}

.module-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: flex-end;
}

.btn-primary,
.btn-secondary {
  padding: 0.875rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background: #000;
  color: white;
}

.btn-primary:hover {
  background: #333;
  transform: translateY(-2px);
}

.terminal-basics-page.dark .btn-primary {
  background: #fff;
  color: #000;
}

.terminal-basics-page.dark .btn-primary:hover {
  background: #e0e0e0;
}

.btn-secondary {
  background: transparent;
  color: #666;
  border: 1px solid #e0e0e0;
}

.btn-secondary:hover {
  background: #f5f5f5;
  color: #000;
}

.terminal-basics-page.dark .btn-secondary {
  border-color: #333;
  color: #aaa;
}

.terminal-basics-page.dark .btn-secondary:hover {
  background: #2a2a2a;
  color: #fff;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #2c3e50 0%, #1a1a1a 100%);
  padding: 3rem;
  border-radius: 16px;
  text-align: center;
  color: white;
}

.terminal-basics-page.dark .cta-section {
  background: linear-gradient(135deg, #fff 0%, #e0e0e0 100%);
  color: #000;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-section p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.btn-cta {
  padding: 1rem 2.5rem;
  background: white;
  color: #1a1a1a;
  border: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.terminal-basics-page.dark .btn-cta {
  background: #1a1a1a;
  color: #fff;
}

/* Modal Animations */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-section {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .course-title {
    font-size: 2rem;
  }

  .hero-illustration {
    order: -1;
  }

  .course-meta {
    flex-direction: column;
    gap: 0.75rem;
  }

  .module-card {
    flex-direction: column;
    gap: 1rem;
  }

  .module-actions {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .content-container {
    padding: 1rem;
  }

  .modal-overlay {
    padding: 0;
  }

  .module-modal {
    border-radius: 0;
    max-height: 100vh;
  }
}
</style>
