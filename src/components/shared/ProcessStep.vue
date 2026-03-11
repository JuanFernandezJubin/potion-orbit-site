<script setup lang="ts">
import { useI18n } from 'vue-i18n'

// Componente para cada paso del proceso con numeración, imagen e info
defineProps<{
  stepNumber: number
  titleKey: string
  descriptionKey: string
  imagePath: string
  reversed?: boolean
}>()

const { t } = useI18n()
</script>

<template>
  <div :class="[
    'flex flex-col gap-8 items-center',
    reversed ? 'md:flex-row-reverse' : 'md:flex-row'
  ]">
    <div class="flex-1 space-y-4">
      <div class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
          {{ stepNumber }}
        </span>
        <h3 class="text-2xl font-bold text-foreground">{{ t(titleKey) }}</h3>
      </div>
      <p class="text-muted-foreground leading-relaxed max-w-md">
        {{ t(descriptionKey) }}
      </p>
    </div>
    <div class="flex-1 flex justify-center">
      <img :src="imagePath" :alt="t(titleKey)" class="w-full max-w-sm rounded-xl" />
    </div>
  </div>
</template>
