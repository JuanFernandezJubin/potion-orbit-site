<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

// Componente Badge para etiquetas de estado o destacados
interface Props {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const variantClasses: Record<string, string> = {
  default: 'bg-primary text-primary-foreground border-transparent',
  secondary: 'bg-secondary text-secondary-foreground border-transparent',
  outline: 'text-foreground border-border',
  destructive: 'bg-destructive text-destructive-foreground border-transparent'
}

const classes = computed(() =>
  cn(
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
    variantClasses[props.variant],
    props.class
  )
)
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
