<script setup lang="ts">
import { cn } from '@/lib/utils'

// Componente Avatar para mostrar imágenes de perfil con fallback
defineProps<{
  src?: string
  alt?: string
  fallback?: string
  class?: string
}>()
</script>

<template>
  <span :class="cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', $props.class)">
    <img
      v-if="src"
      :src="src"
      :alt="alt || ''"
      class="aspect-square h-full w-full object-cover"
    />
    <span
      v-else
      class="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium"
    >
      {{ fallback || '?' }}
    </span>
  </span>
</template>
