<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Card, CardContent } from '@/components/ui/card'
import { Paintbrush, Server, BarChart3 } from 'lucide-vue-next'

// Sección showcase: propuesta de valor con 3 highlights
const { t } = useI18n()

const highlights = [
  { icon: Paintbrush, titleKey: 'showcase.feature1.title', descKey: 'showcase.feature1.description' },
  { icon: Server, titleKey: 'showcase.feature2.title', descKey: 'showcase.feature2.description' },
  { icon: BarChart3, titleKey: 'showcase.feature3.title', descKey: 'showcase.feature3.description' }
]
</script>

<template>
  <section class="py-20 sm:py-24 bg-muted/30">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          {{ t('showcase.title') }}
        </h2>
        <p class="mt-4 text-lg text-muted-foreground">
          {{ t('showcase.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card v-for="item in highlights" :key="item.titleKey" class="text-center hover:shadow-md transition-shadow">
          <CardContent class="pt-8 pb-6 flex flex-col items-center">
            <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <component :is="item.icon" class="h-7 w-7" />
            </div>
            <h3 class="text-lg font-semibold text-foreground mb-2">{{ t(item.titleKey) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t(item.descKey) }}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
