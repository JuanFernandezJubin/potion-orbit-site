import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { copyFileSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Plugin que copia index.html a 404.html para SPA en GitHub Pages
function spa404Plugin(): Plugin {
  return {
    name: 'spa-404',
    closeBundle() {
      const outDir = resolve(__dirname, 'dist')
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    }
  }
}

export default defineConfig({
  base: '/potion-orbit-site/',
  plugins: [vue(), tailwindcss(), spa404Plugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
