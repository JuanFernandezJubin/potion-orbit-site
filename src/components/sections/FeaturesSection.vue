<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { features } from '@/data/site'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import FeatureCard from '@/components/shared/FeatureCard.vue'

// Sección de features: grid de 6 tarjetas con iconos
const { t } = useI18n()
</script>

<template>
  <section id="features" class="py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        :title="t('features.title')"
        :description="t('features.description')"
      />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard
          v-for="feature in features"
          :key="feature.titleKey"
          :icon="feature.icon"
          :title="t(feature.titleKey)"
          :description="t(feature.descriptionKey)"
        />
      </div>
    </div>
  </section>
</template>
