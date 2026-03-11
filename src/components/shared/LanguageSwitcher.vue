<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import { Languages } from 'lucide-vue-next'

// Selector de idioma que alterna entre los locales disponibles
const { locale } = useI18n()

function toggleLanguage() {
  locale.value = locale.value === 'en' ? 'es' : 'en'
}
</script>

<template>
  <Button variant="ghost" size="sm" @click="toggleLanguage" class="gap-1.5">
    <Languages class="h-4 w-4" />
    <span class="uppercase text-xs font-semibold">{{ locale }}</span>
  </Button>
</template>
