import { ref, onMounted, onUnmounted } from 'vue'

// Composable para detectar qué sección es visible en pantalla (scrollspy)
export function useScrollspy(sectionIds: string[]) {
  const activeSection = ref('')

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { activeSection }
}
