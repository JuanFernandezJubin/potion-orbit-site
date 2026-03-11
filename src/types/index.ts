import type { Component } from 'vue'

// Interfaz para las features/servicios de la landing
export interface Feature {
  icon: Component
  titleKey: string
  descriptionKey: string
}

// Interfaz para los planes de precio
export interface PricingPlan {
  titleKey: string
  descriptionKey: string
  priceKey: string
  billingPeriodKey: string
  billingCycleKey: string
  featuresKeys: string[]
  buttonLabelKey: string
  buttonVariant: 'default' | 'secondary' | 'outline'
  highlighted: boolean
}

// Interfaz para los testimonios de clientes
export interface Testimonial {
  quoteKey: string
  name: string
  roleKey: string
  avatarUrl: string
}

// Interfaz para los pasos del proceso de trabajo
export interface ProcessStep {
  titleKey: string
  descriptionKey: string
  imagePath: string
}

// Interfaz para las columnas del footer
export interface FooterColumn {
  titleKey: string
  links: { labelKey: string }[]
}
