<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'
import ShowcaseSection from '@/components/sections/ShowcaseSection.vue'
import FeaturesSection from '@/components/sections/FeaturesSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import PricingSection from '@/components/sections/PricingSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
</script>

<template>
  <div>
    <HeroSection />
    <ShowcaseSection />
    <hr class="border-primary/30" />
    <FeaturesSection />
    <hr class="border-primary/30" />
    <ProcessSection />
    <PricingSection />
    <TestimonialsSection />
    <hr class="border-border" />
    <CtaSection />
  </div>
</template>
