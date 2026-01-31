# OS Mastery - Platform Edukasi & Optimasi Sistem Operasi Premium

![OS Mastery](https://img.shields.io/badge/Vue.js-3.5-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

Website platform pembelajaran interaktif untuk mempelajari dan mensimulasikan terminal Linux secara real-time langsung dari browser.

## 🎯 Deskripsi Proyek

OS Mastery adalah platform edukasi yang dirancang untuk mahasiswa dan pelajar yang ingin mempelajari sistem operasi Linux tanpa harus menginstall OS secara langsung. Platform ini menyediakan:

- **Terminal Sandbox Interaktif** - Simulasi terminal Linux Debian dan Arch-based
- **Smart Troubleshooting** - Panduan diagnosis masalah laptop/PC
- **Optimization Store** - Download tools dan software optimasi yang aman
- **Academy** - Kurikulum pembelajaran berbasis praktek
- **Package System** - Free, Premium Basic, dan Pro Member

## ✨ Fitur Utama

### 🎓 Academy & Learning
- File System 101
- Basic Commands (Premium)
- Network Scanning (Pro Only)
- Cyber Security Basic (Pro Only)
- Shell Scripting (Pro Only)

### 💻 Terminal Sandbox
- Simulasi real-time Linux terminal
- Debian & Arch Linux support
- Interactive missions & tutorials
- XP & Achievement system
- Safe environment untuk belajar

### 🔧 Smart Troubleshooting
- System Health Check
- Disk Clean Up
- Performance Monitor
- Security Scan (Premium)
- Network Diagnostic (Premium)
- Auto Optimizer (Premium)

### 🌓 Dark Mode
- Toggle dark/light theme
- Persisten dengan localStorage
- Smooth transitions

## 🚀 Teknologi

- **Vue.js 3.5** - Progressive JavaScript Framework
- **Vue Router 4** - Official routing library
- **Vite 7** - Next generation frontend tooling
- **CSS3** - Modern styling dengan animations
- **Composables** - Reusable logic composition

## 📦 Instalasi

```bash
# Clone repository
git clone <repository-url>

# Masuk ke direktori project
cd os-mastery

# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build
```

## 🗂️ Struktur Project

```
os-mastery/
├── src/
│   ├── views/              # Halaman utama
│   │   ├── Index.vue       # Landing page
│   │   ├── Login.vue       # Form login
│   │   ├── Register.vue    # Form registrasi
│   │   ├── Welcome.vue     # Dashboard home
│   │   ├── Academy.vue     # Learning materials
│   │   ├── Pricing.vue     # Package plans
│   │   ├── Profile.vue     # User profile
│   │   ├── Simulator.vue   # Terminal sandbox
│   │   ├── FileSystem.vue  # Tutorial file system
│   │   └── OptimizationStore.vue # Tools
│   ├── components/         # Komponen reusable
│   │   ├── LoadingOverlay.vue
│   │   └── ToastNotification.vue
│   ├── composables/        # Logic composition
│   │   └── useTheme.js     # Dark mode logic
│   ├── router/             # Routing config
│   │   └── index.js
│   ├── App.vue             # Root component
│   └── main.js             # Entry point
├── public/                 # Static assets
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: `#000000` (Black)
- **Accent**: `#667eea` → `#764ba2` (Gradient)
- **Success**: `#28a745`
- **Warning**: `#ffc107`
- **Danger**: `#dc3545`
- **Background Light**: `#ffffff`
- **Background Dark**: `#0a0a0a`

### Typography
- **Font Family**: System UI fonts
- **Headings**: 700 weight
- **Body**: 400 weight
- **Small**: 500 weight

## 🔐 Package Plans

### Visitor (Free)
- Akses Artikel Basic
- Troubleshooting Guide
- Limited features

### Premium Member (Rp 29.000/bulan)
- Akses Basic Commands
- Download Premium Optimization
- Interactive Sandbox
- Debian & Arch terminal

### Pro Member (Rp 49.000/bulan)
- Semua fitur Premium
- Unlimited terminal access
- Advanced commands
- Misi Hacking Dasar
- Prioritas Support 24/7
- Sertifikat digital

## 🎯 User Experience (UX) Features

### Micro-interactions
- Hover effects pada semua interactive elements
- Button animations dengan transform
- Input focus states dengan smooth transitions
- Loading states untuk async operations

### Feedback System
- Toast notifications untuk success/error
- Loading overlays untuk long operations
- Password strength indicator
- Form validation feedback

### Navigation
- Smooth page transitions
- Breadcrumb navigation
- Back button pada sub-pages
- Clear visual hierarchy

### Accessibility
- Focus visible states
- Keyboard navigation support
- Screen reader friendly
- Semantic HTML

## 📱 Responsive Design

Website fully responsive untuk:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🛠️ Development

### Available Scripts

```bash
# Development server dengan hot-reload
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

### Code Style
- Vue 3 Composition API
- ESNext JavaScript
- CSS Scoped per component
- Semantic HTML5

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

MIT License - feel free to use this project for learning purposes.

## 👨‍💻 Author

**Yardan Hadziq**
- Mahasiswa Desain Pengalaman Pengguna
- Universitas Islam Riau

## 🙏 Acknowledgments

- Vue.js team untuk framework yang amazing
- Vite team untuk build tool yang super cepat
- Community untuk inspirasi dan support

---

**Made with ❤️ for UX Design Course** 

*Platform Edukasi & Optimasi Sistem Operasi Premium*
