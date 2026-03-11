<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { processSteps } from '@/data/site'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import ProcessStepComponent from '@/components/shared/ProcessStep.vue'

// Sección de proceso: 4 pasos alternados con imagen y texto
const { t } = useI18n()
</script>

<template>
  <section class="py-20 sm:py-24 bg-muted/30">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        :title="t('process.title')"
        :description="t('process.description')"
      />
      <div class="space-y-16 mt-12">
        <ProcessStepComponent
          v-for="(step, idx) in processSteps"
          :key="step.titleKey"
          :step-number="idx + 1"
          :title-key="step.titleKey"
          :description-key="step.descriptionKey"
          :image-path="step.imagePath"
          :reversed="idx % 2 !== 0"
        />
      </div>
    </div>
  </section>
</template>
