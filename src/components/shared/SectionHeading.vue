<script setup lang="ts">
// Componente reutilizable para títulos de sección con subtítulo opcional
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <div class="mx-auto max-w-2xl text-center mb-12">
    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-lg leading-8 text-muted-foreground">
      {{ description }}
    </p>
  </div>
</template>
