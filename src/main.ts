import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import { useTheme } from './composables/useTheme'
import './assets/css/main.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')

// Inicializar el tema al arrancar la aplicación
const { initTheme } = useTheme()
initTheme()
