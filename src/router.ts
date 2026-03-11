import { createRouter, createWebHistory } from 'vue-router'

// Router mínimo para SPA con una sola ruta (landing page)
// Preparado para escalar con más páginas en el futuro
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue')
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
