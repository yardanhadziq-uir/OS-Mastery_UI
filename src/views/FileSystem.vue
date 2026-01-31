<template>
  <div class="filesystem-page" :class="{ dark: isDarkMode }">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">OS Mastery Club</div>
        <div class="nav-links">
          <router-link to="/welcome" class="nav-link">Dashboard</router-link>
          <router-link to="/academy" class="nav-link active">Academy</router-link>
          <router-link to="/pricing" class="nav-link">Plans</router-link>
          <router-link to="/" class="nav-link">Docs</router-link>
          <router-link to="/profile" class="nav-link">Profile</router-link>
        </div>
      </div>
    </nav>

    <div class="filesystem-content">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/academy">Academy</router-link>
          <span class="separator">/</span>
          <span>Materi 1: Basic Commands</span>
        </div>

        <div class="content-layout">
          <aside class="sidebar">
            <h3>File System 101</h3>
            <ul class="lesson-list">
              <li class="active">1. Intro: Apa itu File System?</li>
              <li>2. Basic Navigation Commands</li>
              <li>3. File & Directory Operations</li>
              <li>4. File Permissions</li>
              <li>5. Links: Hard vs Symbolic</li>
              <li>6. Disk Usage & Management</li>
            </ul>
          </aside>

          <main class="main-content">
            <article class="lesson-content">
              <h1>File System 101</h1>
              <p class="intro">
                Di Linux, filesystem mengatur bagaimana data disimpan dan diambil dari penyimpanan. 
                Berbeda dengan Windows yang menggunakan drive letters (C:, D:), Linux menggunakan 
                struktur hierarki yang dimulai dari root (/).
              </p>

              <h2>Linux Filesystem Hierarchy</h2>
              <div class="code-block">
                <pre>/                  # Root directory
├── bin            # Essential user binaries
├── boot           # Boot loader files
├── dev            # Device files
├── etc            # System configuration
├── home           # User home directories
│   └── user       # Individual user folder
├── lib            # System libraries
├── media          # Removable media mount points
├── mnt            # Temporary mount points
├── opt            # Optional software
├── proc           # Process information
├── root           # Root user home
├── sbin           # System binaries
├── tmp            # Temporary files
├── usr            # User programs
└── var            # Variable data</pre>
              </div>

              <h2>Basic Navigation Commands</h2>
              <div class="command-section">
                <div class="command-item">
                  <h3><code>pwd</code> - Print Working Directory</h3>
                  <p>Menampilkan direktori saat ini</p>
                  <div class="code-block">
                    <pre>$ pwd
/home/user</pre>
                  </div>
                </div>

                <div class="command-item">
                  <h3><code>ls</code> - List Directory Contents</h3>
                  <p>Menampilkan isi direktori</p>
                  <div class="code-block">
                    <pre>$ ls -la
total 48
drwxr-xr-x  6 user user 4096 Jan 30 10:00 .
drwxr-xr-x 12 user user 4096 Jan 28 14:30 ..
-rw-r--r--  1 user user  220 Jan 28 14:30 .bashrc
drwxr-xr-x  2 user user 4096 Jan 29 09:15 Documents</pre>
                  </div>
                </div>

                <div class="command-item">
                  <h3><code>cd</code> - Change Directory</h3>
                  <p>Berpindah antar direktori</p>
                  <div class="code-block">
                    <pre>$ cd Documents
$ cd ..          # Naik satu level
$ cd ~           # Ke home directory
$ cd /etc        # Ke direktori absolute</pre>
                  </div>
                </div>
              </div>

              <div class="practice-section">
                <h2>Uji Coba Terminal</h2>
                <p>Coba command di atas langsung di terminal sandbox:</p>
                <button class="btn btn-practice">Buka Terminal Sandbox</button>
              </div>
            </article>
          </main>
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
.filesystem-page {
  min-height: 100vh;
  background: #ffffff;
  color: #000;
  transition: all 0.3s ease;
}

.filesystem-page.dark {
  background: #0a0a0a;
  color: #fff;
}

.navbar {
  background: #ffffff;
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.filesystem-page.dark .navbar {
  background: rgba(0, 0, 0, 0.8);
  border-bottom-color: rgba(255, 255, 255, 0.1);
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

.filesystem-page.dark .nav-brand {
  color: #fff;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.95rem;
}

.nav-link:hover,
.nav-link.active {
  color: #000;
}

.filesystem-page.dark .nav-link {
  color: #a0a0a0;
}

.filesystem-page.dark .nav-link:hover,
.filesystem-page.dark .nav-link.active {
  color: white;
}

.filesystem-content {
  padding: 2rem;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.breadcrumb {
  margin-bottom: 2rem;
  color: #666;
  font-size: 0.9rem;
}

.filesystem-page.dark .breadcrumb {
  color: #a0a0a0;
}

.breadcrumb a {
  color: #666;
  text-decoration: none;
}

.filesystem-page.dark .breadcrumb a {
  color: #a0a0a0;
}

.breadcrumb a:hover {
  color: #000;
}

.filesystem-page.dark .breadcrumb a:hover {
  color: white;
}

.separator {
  margin: 0 0.5rem;
}

.content-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
}

.sidebar {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem;
  height: fit-content;
  position: sticky;
  top: 2rem;
}

.filesystem-page.dark .sidebar {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.sidebar h3 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: #000;
}

.filesystem-page.dark .sidebar h3 {
  color: #fff;
}

.lesson-list {
  list-style: none;
  padding: 0;
}

.lesson-list li {
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  color: #666;
}

.filesystem-page.dark .lesson-list li {
  color: #a0a0a0;
}

.lesson-list li:hover {
  background: #e0e0e0;
  color: #000;
}

.filesystem-page.dark .lesson-list li:hover {
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.lesson-list li.active {
  background: rgba(102, 126, 234, 0.2);
  color: #000;
  border-left: 3px solid #667eea;
}

.filesystem-page.dark .lesson-list li.active {
  color: white;
}

.main-content {
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 3rem;
}

.filesystem-page.dark .main-content {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.lesson-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000;
}

.filesystem-page.dark .lesson-content h1 {
  color: #fff;
}

.intro {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 2rem;
}

.filesystem-page.dark .intro {
  color: #ccc;
}

.lesson-content h2 {
  font-size: 1.75rem;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e0e0e0;
  color: #000;
}

.filesystem-page.dark .lesson-content h2 {
  border-bottom-color: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.code-block {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  overflow-x: auto;
}

.filesystem-page.dark .code-block {
  background: #000;
  border-color: rgba(255, 255, 255, 0.1);
}

.code-block pre {
  margin: 0;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  color: #0f0;
}

.command-section {
  margin: 2rem 0;
}

.command-item {
  margin-bottom: 2rem;
}

.command-item h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #000;
}

.filesystem-page.dark .command-item h3 {
  color: #fff;
}

.command-item code {
  color: #667eea;
}

.command-item p {
  color: #666;
  margin-bottom: 0.75rem;
}

.filesystem-page.dark .command-item p {
  color: #a0a0a0;
}

.practice-section {
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border-radius: 12px;
  text-align: center;
}

.practice-section h2 {
  border: none;
  margin-top: 0;
}

.btn-practice {
  margin-top: 1rem;
  padding: 1rem 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-practice:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}
</style>
