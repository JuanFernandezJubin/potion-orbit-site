<script setup lang="ts">
import { cn } from '@/lib/utils'

// Componente Separator: línea divisoria horizontal o vertical
defineProps<{
  orientation?: 'horizontal' | 'vertical'
  class?: string
}>()
</script>

<template>
  <div
    role="separator"
    :class="cn(
      'shrink-0 bg-border',
      orientation === 'vertical' ? 'h-full w-px' : 'h-px w-full',
      $props.class
    )"
  />
</template>
