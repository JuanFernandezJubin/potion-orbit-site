<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { useI18n } from 'vue-i18n'

// Tarjeta de testimonio con avatar, cita y datos del cliente
defineProps<{
  quoteKey: string
  name: string
  roleKey: string
  avatarUrl: string
}>()

const { t } = useI18n()
</script>

<template>
  <Card class="flex flex-col">
    <CardContent class="flex-1 pt-6">
      <blockquote class="text-sm leading-relaxed text-muted-foreground italic">
        "{{ t(quoteKey) }}"
      </blockquote>
      <div class="mt-6 flex items-center gap-3">
        <Avatar :src="avatarUrl" :alt="name" :fallback="name.charAt(0)" class="h-10 w-10" />
        <div>
          <p class="text-sm font-semibold text-foreground">{{ name }}</p>
          <p class="text-xs text-muted-foreground">{{ t(roleKey) }}</p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
