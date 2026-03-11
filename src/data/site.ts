import {
  Palette,
  CodeXml,
  Smartphone,
  Search,
  Headset,
  TrendingUp
} from 'lucide-vue-next'
import type { Feature, ProcessStep, Testimonial } from '@/types'

// Datos estáticos del sitio: features, pasos, testimonios
// Las claves de traducción se resuelven con vue-i18n en cada componente

export const features: Feature[] = [
  { icon: Palette, titleKey: 'features.items.uiux.title', descriptionKey: 'features.items.uiux.description' },
  { icon: CodeXml, titleKey: 'features.items.webdev.title', descriptionKey: 'features.items.webdev.description' },
  { icon: Smartphone, titleKey: 'features.items.custom.title', descriptionKey: 'features.items.custom.description' },
  { icon: Search, titleKey: 'features.items.seo.title', descriptionKey: 'features.items.seo.description' },
  { icon: Headset, titleKey: 'features.items.support.title', descriptionKey: 'features.items.support.description' },
  { icon: TrendingUp, titleKey: 'features.items.consulting.title', descriptionKey: 'features.items.consulting.description' }
]

export const processSteps: ProcessStep[] = [
  { titleKey: 'process.steps.discovery.title', descriptionKey: 'process.steps.discovery.description', imagePath: '/images/light/connect.svg' },
  { titleKey: 'process.steps.design.title', descriptionKey: 'process.steps.design.description', imagePath: '/images/light/optimize.svg' },
  { titleKey: 'process.steps.development.title', descriptionKey: 'process.steps.development.description', imagePath: '/images/light/track.svg' },
  { titleKey: 'process.steps.launch.title', descriptionKey: 'process.steps.launch.description', imagePath: '/images/light/launch.svg' }
]

export const testimonials: Testimonial[] = [
  { quoteKey: 'testimonials.items.testimonial1.quote', name: 'Laura Méndez', roleKey: 'testimonials.items.testimonial1.role', avatarUrl: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/SarahM19' },
  { quoteKey: 'testimonials.items.testimonial2.quote', name: 'Carlos Rivera', roleKey: 'testimonials.items.testimonial2.role', avatarUrl: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/atinux' },
  { quoteKey: 'testimonials.items.testimonial3.quote', name: 'Ana Gutiérrez', roleKey: 'testimonials.items.testimonial3.role', avatarUrl: 'https://ipx.nuxt.com/f_auto,s_192x192/gh_avatar/benjamincanac' }
]

// Identificadores de las secciones para el scrollspy
export const sectionIds = ['features', 'pricing', 'testimonials']
