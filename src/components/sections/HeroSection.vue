<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-vue-next'

// Sección hero principal: título, descripción, CTAs e imagen de mockup
const { t } = useI18n()

function navigateTo(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- Gradiente decorativo de fondo -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div class="mx-auto max-w-3xl text-center">
        <div class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary mb-6">
          <Sparkles class="h-4 w-4" />
          <span>Web Design & App Development</span>
        </div>

        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-foreground">
          {{ t('hero.title') }}
          <span class="text-primary">{{ t('hero.highlight') }}</span>
        </h1>

        <p class="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          {{ t('hero.description') }}
        </p>

        <div class="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Button size="lg" @click="navigateTo('#pricing')">
            {{ t('cta.primaryButton') }}
            <ArrowRight class="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" @click="navigateTo('#features')">
            {{ t('cta.secondaryButton') }}
          </Button>
        </div>
      </div>

      <!-- Mockup del navegador -->
      <div class="mt-16 sm:mt-20 relative mx-auto max-w-4xl">
        <div class="rounded-xl border border-border bg-card shadow-2xl shadow-primary/5 overflow-hidden">
          <div class="flex items-center gap-2 border-b border-border px-4 py-3 bg-muted/50">
            <div class="flex gap-1.5">
              <div class="h-3 w-3 rounded-full bg-red-400" />
              <div class="h-3 w-3 rounded-full bg-yellow-400" />
              <div class="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div class="flex-1 flex justify-center">
              <div class="bg-background rounded-md border border-border px-4 py-1 text-xs text-muted-foreground w-64 text-center">
                potion.dev
              </div>
            </div>
          </div>
          <div class="aspect-video bg-gradient-to-br from-primary/10 via-background to-primary/5 flex items-center justify-center p-8">
            <div class="grid grid-cols-3 gap-4 w-full max-w-2xl">
              <div class="col-span-2 space-y-3">
                <div class="h-4 w-3/4 rounded bg-primary/20" />
                <div class="h-3 w-full rounded bg-muted" />
                <div class="h-3 w-5/6 rounded bg-muted" />
                <div class="h-3 w-2/3 rounded bg-muted" />
                <div class="mt-4 h-10 w-32 rounded-lg bg-primary/30" />
              </div>
              <div class="space-y-3">
                <div class="h-24 rounded-lg bg-primary/10 border border-primary/20" />
                <div class="h-16 rounded-lg bg-muted" />
                <div class="h-16 rounded-lg bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
