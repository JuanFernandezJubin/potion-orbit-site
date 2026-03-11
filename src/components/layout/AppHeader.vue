<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollspy } from '@/composables/useScrollspy'
import { sectionIds } from '@/data/site'
import AppLogo from './AppLogo.vue'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/shared/ThemeToggle.vue'
import LanguageSwitcher from '@/components/shared/LanguageSwitcher.vue'
import { Menu, X } from 'lucide-vue-next'

// Header sticky con navegación, scrollspy y menú móvil
const { t } = useI18n()
const { activeSection } = useScrollspy(sectionIds)
const mobileMenuOpen = ref(false)

function navigateTo(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}

const navItems = [
  { label: 'nav.services', href: '#features' },
  { label: 'nav.pricing', href: '#pricing' },
  { label: 'nav.testimonials', href: '#testimonials' }
]
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <AppLogo />

      <!-- Navegación escritorio -->
      <nav class="hidden md:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :class="[
            'px-3 py-2 text-sm font-medium rounded-md transition-colors',
            activeSection === item.href.slice(1)
              ? 'text-primary bg-primary/10'
              : 'text-muted-foreground hover:text-foreground hover:bg-accent'
          ]"
        >
          {{ t(item.label) }}
        </a>
      </nav>

      <div class="flex items-center gap-1">
        <LanguageSwitcher />
        <ThemeToggle />
        <Button variant="default" size="sm" class="hidden md:inline-flex ml-2" @click="navigateTo('#pricing')"  >
          {{ t('nav.contact') }}
        </Button>

        <!-- Botón menú móvil -->
        <Button variant="ghost" size="icon" class="md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
          <X v-if="mobileMenuOpen" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </Button>
      </div>
    </div>

    <!-- Menú móvil -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t border-border bg-background px-4 pb-4">
      <nav class="flex flex-col gap-1 pt-2">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          @click="mobileMenuOpen = false"
        >
          {{ t(item.label) }}
        </a>
        <Button variant="default" class="mt-2 w-full" @click="mobileMenuOpen = false">
          {{ t('nav.contact') }}
        </Button>
      </nav>
    </div>
  </header>
</template>
