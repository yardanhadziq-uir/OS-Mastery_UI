import { ref, watch } from 'vue'

const isDarkMode = ref(false)

// Load theme from localStorage
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('theme')
  isDarkMode.value = saved === 'dark'
}

// Watch for changes and save to localStorage
watch(isDarkMode, (newValue) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newValue)
  }
})

export function useTheme() {
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
  }

  return {
    isDarkMode,
    toggleTheme
  }
}
