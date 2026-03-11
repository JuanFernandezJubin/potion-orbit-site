import { ref, watch } from 'vue'

// Composable para gestionar el tema claro/oscuro con persistencia en localStorage
const isDark = ref(false)

function initTheme() {
  const stored = localStorage.getItem('theme')
  if (stored) {
    isDark.value = stored === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
}

function applyTheme() {
  document.documentElement.classList.toggle('dark', isDark.value)
}

function toggleTheme() {
  isDark.value = !isDark.value
}

watch(isDark, () => {
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme()
})

export function useTheme() {
  return { isDark, initTheme, toggleTheme }
}
