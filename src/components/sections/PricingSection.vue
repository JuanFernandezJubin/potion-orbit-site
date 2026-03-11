<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SectionHeading from '@/components/shared/SectionHeading.vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

// Sección de precios: 3 planes con el del medio destacado
const { t } = useI18n()

// Estructura de planes con claves de i18n directas al JSON
const plans = [
  {
    id: 'starter',
    highlighted: false,
    buttonVariant: 'outline' as const
  },
  {
    id: 'business',
    highlighted: true,
    buttonVariant: 'default' as const
  },
  {
    id: 'enterprise',
    highlighted: false,
    buttonVariant: 'outline' as const
  }
]
</script>

<template>
  <section id="pricing" class="py-20 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        :title="t('pricing.title')"
        :description="t('pricing.description')"
      />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-8">
        <Card
          v-for="plan in plans"
          :key="plan.id"
          :class="cn('flex flex-col relative', plan.highlighted ? 'border-primary shadow-lg shadow-primary/10 md:scale-105' : '')"
        >
          <Badge v-if="plan.highlighted" class="absolute -top-3 left-1/2 -translate-x-1/2">
            Popular
          </Badge>
          <CardHeader>
            <CardTitle>{{ t(`pricing.plans.${plan.id}.title`) }}</CardTitle>
            <CardDescription>{{ t(`pricing.plans.${plan.id}.description`) }}</CardDescription>
            <div class="mt-4">
              <span class="text-4xl font-bold text-foreground">{{ t(`pricing.plans.${plan.id}.price`) }}</span>
              <span class="text-muted-foreground text-sm">{{ t(`pricing.plans.${plan.id}.billingPeriod`) }}</span>
            </div>
            <p class="text-xs text-muted-foreground mt-1">{{ t(`pricing.plans.${plan.id}.billingCycle`) }}</p>
          </CardHeader>
          <CardContent class="flex-1">
            <ul class="space-y-3">
              <li
                v-for="(_, idx) in 6"
                :key="idx"
                class="flex items-start gap-3"
              >
                <Check class="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span class="text-sm text-muted-foreground">
                  {{ t(`pricing.plans.${plan.id}.features[${idx}]`) }}
                </span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button :variant="plan.buttonVariant" class="w-full">
              {{ t(`pricing.plans.${plan.id}.button`) }}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>
