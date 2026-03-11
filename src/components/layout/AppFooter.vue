<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { newsletterSchema } from '@/schemas/newsletter'
import AppLogo from './AppLogo.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

// Footer con columnas de links, newsletter con validación Zod y redes sociales
const { t } = useI18n()

const email = ref('')
const subscribeMessage = ref('')
const subscribeError = ref(false)

function handleSubscribe() {
  const result = newsletterSchema.safeParse({ email: email.value })
  if (result.success) {
    subscribeMessage.value = t('footer.newsletter.success')
    subscribeError.value = false
    email.value = ''
  } else {
    subscribeMessage.value = t('footer.newsletter.error')
    subscribeError.value = true
  }
}

const columns = [
  {
    titleKey: 'footer.columns.services.title',
    links: [
      'footer.columns.services.uiux',
      'footer.columns.services.webdev',
      'footer.columns.services.custom',
      'footer.columns.services.consulting'
    ]
  },
  {
    titleKey: 'footer.columns.company.title',
    links: [
      'footer.columns.company.about',
      'footer.columns.company.projects',
      'footer.columns.company.team',
      'footer.columns.company.blog'
    ]
  },
  {
    titleKey: 'footer.columns.resources.title',
    links: [
      'footer.columns.resources.docs',
      'footer.columns.resources.support',
      'footer.columns.resources.faq',
      'footer.columns.resources.contact'
    ]
  }
]
</script>

<template>
  <footer class="border-t border-border bg-background">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
        <!-- Logo y Newsletter -->
        <div class="lg:col-span-2 space-y-4">
          <AppLogo />
          <p class="text-sm text-muted-foreground max-w-xs mt-4">
            {{ t('footer.newsletter.label') }}
          </p>
          <form @submit.prevent="handleSubscribe" class="flex gap-2 max-w-sm">
            <Input
              v-model="email"
              type="email"
              :placeholder="t('footer.newsletter.placeholder')"
              class="flex-1"
            />
            <Button type="submit" size="sm">
              {{ t('footer.newsletter.button') }}
            </Button>
          </form>
          <p
            v-if="subscribeMessage"
            :class="['text-xs mt-1', subscribeError ? 'text-destructive' : 'text-primary']"
          >
            {{ subscribeMessage }}
          </p>
        </div>

        <!-- Columnas de links -->
        <div v-for="col in columns" :key="col.titleKey" class="space-y-3">
          <h4 class="text-sm font-semibold text-foreground">{{ t(col.titleKey) }}</h4>
          <ul class="space-y-2">
            <li v-for="linkKey in col.links" :key="linkKey">
              <a href="#" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {{ t(linkKey) }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator class="my-8" />

      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-muted-foreground">
          {{ t('footer.copyright') }} &bull; &copy; {{ new Date().getFullYear() }}
        </p>
        <div class="flex items-center gap-3">
          <a href="https://x.com" target="_blank" aria-label="X" class="text-muted-foreground hover:text-foreground transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
          </a>
          <a href="https://github.com" target="_blank" aria-label="GitHub" class="text-muted-foreground hover:text-foreground transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" class="text-muted-foreground hover:text-foreground transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
