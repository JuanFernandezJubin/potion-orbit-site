<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-vue-next'

// Sección final de llamada a la acción con fondo degradado
const { t } = useI18n()
</script>

<template>
  <section class="py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
        <!-- Elementos decorativos -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

        <div class="relative z-10">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            {{ t('cta.title') }}
          </h2>
          <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {{ t('cta.description') }}
          </p>
          <div class="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg">
              {{ t('cta.primaryButton') }}
              <ArrowRight class="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              {{ t('cta.secondaryButton') }}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
