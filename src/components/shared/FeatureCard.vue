<script setup lang="ts">
import type { Component } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

// Tarjeta de feature con icono, título y descripción
defineProps<{
  icon: Component
  title: string
  description: string
}>()
</script>

<template>
  <Card class="group hover:border-primary/50 transition-colors">
    <CardHeader>
      <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
        <component :is="icon" class="h-6 w-6" />
      </div>
      <CardTitle>{{ title }}</CardTitle>
      <CardDescription class="mt-2">{{ description }}</CardDescription>
    </CardHeader>
  </Card>
</template>
