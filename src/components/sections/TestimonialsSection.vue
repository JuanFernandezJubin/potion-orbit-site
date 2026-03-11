<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { testimonials } from '@/data/site'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import TestimonialCard from '@/components/shared/TestimonialCard.vue'

// Sección de testimonios: 3 tarjetas con citas de clientes
const { t } = useI18n()
</script>

<template>
  <section id="testimonials" class="py-20 sm:py-24 bg-muted/30">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        :title="t('testimonials.title')"
        :description="t('testimonials.description')"
      />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TestimonialCard
          v-for="item in testimonials"
          :key="item.name"
          :quote-key="item.quoteKey"
          :name="item.name"
          :role-key="item.roleKey"
          :avatar-url="item.avatarUrl"
        />
      </div>
    </div>
  </section>
</template>
