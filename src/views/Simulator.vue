<template>
  <div class="simulator-page">
    <div class="simulator-layout">
      <!-- Left Panel - Mission -->
      <aside class="mission-panel">
        <button class="exit-btn" @click="$router.push('/academy')">
          ← Exit Simulator
        </button>

        <div class="mission-header">
          <span class="mission-badge">MISI 1 / 5</span>
          <h2>Create Directory (mkdir)</h2>
        </div>

        <div class="mission-content">
          <p class="mission-description">
            Selamat datang di Premium Sandbox. Di sini Anda aman dari kesalahan. Mari belajar
            membuat folder melalui Command Line Interface (CLI).
          </p>

          <p class="mission-instruction">
            Perintah <code class="inline-code">mkdir</code> adalah singkatan dari "Make Directory".
          </p>

          <div class="instruction-box">
            <h3>INSTRUKSI:</h3>
            <p>Buatlah sebuah folder baru dengan nama <strong>"project_skripsi"</strong>.</p>
            <p>Ketikkan perintah ini di layar kanan:</p>
            <code class="command-example">mkdir project_skripsi</code>
          </div>

          <button class="check-btn" @click="checkAnswer">Cek Jawaban</button>
        </div>
      </aside>

      <!-- Right Panel - Terminal -->
      <div class="terminal-panel">
        <div class="terminal-header">
          <div class="terminal-controls">
            <span class="control red"></span>
            <span class="control yellow"></span>
            <span class="control green"></span>
          </div>
          <div class="terminal-title">root@web-sandbox:~ (bash)</div>
        </div>

        <div class="terminal-content">
          <div class="terminal-output">
            <div class="output-line">OS Mastery Hub Linux 5.15.0-generic x86_64</div>
            <div class="output-line">Welcome to OS Mastery Secure Shell. Type 'help' for instructions.</div>
            <div class="output-line terminal-blank"></div>
            <div class="output-line">
              <span class="prompt">root@sandbox:~$</span>
              <span class="command-text">ls</span>
            </div>
            <div class="output-line">Documents Downloads Pictures Music</div>
            <div class="output-line terminal-blank"></div>
            
            <!-- User input area -->
            <div v-for="(cmd, index) in commandHistory" :key="index" class="output-line">
              <span class="prompt">root@sandbox:~$</span>
              <span class="command-text">{{ cmd.input }}</span>
            </div>
            <div v-for="(cmd, index) in commandHistory" :key="'output-' + index">
              <div v-if="cmd.output" class="output-line" v-html="cmd.output"></div>
            </div>

            <!-- Current input line -->
            <div class="output-line current-line">
              <span class="prompt">root@sandbox:~$</span>
              <input 
                v-model="currentCommand" 
                @keyup.enter="executeCommand"
                class="terminal-input"
                ref="terminalInput"
                autofocus
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentCommand = ref('')
const commandHistory = ref([])
const terminalInput = ref(null)
const completedMissions = ref([])

const executeCommand = () => {
  const cmd = currentCommand.value.trim()
  if (!cmd) return

  let output = ''
  
  if (cmd === 'mkdir project_skripsi') {
    output = `<span class="success-text">> [System] Creating directory...</span><br>
              <span class="success-text">> [Success] Directory 'project_skripsi' created successfully.</span><br>
              <span class="xp-text">> [XP] +50 Points added to your profile.</span>`
    completedMissions.value.push('mkdir')
  } else if (cmd === 'ls') {
    output = 'Documents Downloads Pictures Music project_skripsi'
  } else if (cmd === 'pwd') {
    output = '/home/user'
  } else if (cmd === 'help') {
    output = `Available commands:
    ls     - List directory contents
    pwd    - Print working directory
    mkdir  - Make directory
    cd     - Change directory
    clear  - Clear terminal`
  } else if (cmd === 'clear') {
    commandHistory.value = []
    currentCommand.value = ''
    return
  } else {
    output = `<span class="error-text">bash: ${cmd}: command not found</span>`
  }

  commandHistory.value.push({
    input: cmd,
    output: output
  })

  currentCommand.value = ''
}

const checkAnswer = () => {
  if (completedMissions.value.includes('mkdir')) {
    alert('✅ Selamat! Anda telah menyelesaikan misi ini!')
  } else {
    alert('❌ Belum selesai. Coba jalankan perintah yang diminta di terminal.')
  }
}

onMounted(() => {
  terminalInput.value?.focus()
})
</script>

<style scoped>
.simulator-page {
  min-height: 100vh;
  background: #f5f5f5;
}

.simulator-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
}

.mission-panel {
  background: white;
  padding: 2rem;
  overflow-y: auto;
  border-right: 1px solid #e0e0e0;
}

.exit-btn {
  background: transparent;
  border: none;
  color: #666;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-bottom: 2rem;
  transition: color 0.3s;
}

.exit-btn:hover {
  color: #000;
}

.mission-header {
  margin-bottom: 2rem;
}

.mission-badge {
  display: inline-block;
  background: #000;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.mission-header h2 {
  font-size: 1.75rem;
  color: #000;
  margin-top: 0.5rem;
}

.mission-content {
  color: #333;
  line-height: 1.6;
}

.mission-description {
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.mission-instruction {
  margin-bottom: 1.5rem;
}

.inline-code {
  background: #f0f0f0;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Courier New', monospace;
  color: #d63384;
  font-weight: 600;
}

.instruction-box {
  background: #f8f9fa;
  border-left: 4px solid #000;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 4px;
}

.instruction-box h3 {
  font-size: 0.875rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000;
}

.instruction-box p {
  margin-bottom: 0.75rem;
}

.instruction-box strong {
  color: #000;
}

.command-example {
  display: block;
  background: #000;
  color: #ff006e;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Courier New', monospace;
  margin-top: 0.5rem;
  font-weight: 600;
}

.check-btn {
  width: 100%;
  padding: 1rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 2rem;
}

.check-btn:hover {
  background: #333;
  transform: translateY(-2px);
}

.terminal-panel {
  background: #1e1e1e;
  display: flex;
  flex-direction: column;
}

.terminal-header {
  background: #323232;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.terminal-controls {
  display: flex;
  gap: 0.5rem;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.red {
  background: #ff5f56;
}

.control.yellow {
  background: #ffbd2e;
}

.control.green {
  background: #27c93f;
}

.terminal-title {
  color: #ccc;
  font-size: 0.875rem;
  font-family: 'Monaco', 'Courier New', monospace;
}

.terminal-content {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
}

.terminal-output {
  color: #0f0;
}

.output-line {
  margin-bottom: 0.25rem;
  line-height: 1.5;
}

.terminal-blank {
  height: 1rem;
}

.prompt {
  color: #0f0;
  margin-right: 0.5rem;
}

.command-text {
  color: #fff;
}

.current-line {
  display: flex;
  align-items: center;
}

.terminal-input {
  flex: 1;
  background: transparent;
  border: none;
  color: #fff;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
  outline: none;
  caret-color: #0f0;
}

.success-text {
  color: #27c93f;
}

.error-text {
  color: #ff5f56;
}

.xp-text {
  color: #ffbd2e;
}

/* Dark mode support */
:global(.dark) .mission-panel {
  background: #1a1a1a;
  border-right-color: #333;
}

:global(.dark) .exit-btn {
  color: #aaa;
}

:global(.dark) .exit-btn:hover {
  color: #fff;
}

:global(.dark) .mission-header h2 {
  color: #fff;
}

:global(.dark) .mission-content {
  color: #ccc;
}

:global(.dark) .inline-code {
  background: #2a2a2a;
  color: #ff6b9d;
}

:global(.dark) .instruction-box {
  background: #2a2a2a;
  border-left-color: #fff;
}

:global(.dark) .instruction-box h3,
:global(.dark) .instruction-box strong {
  color: #fff;
}
</style>
