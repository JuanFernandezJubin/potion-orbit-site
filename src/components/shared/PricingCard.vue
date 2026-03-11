<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { cn } from '@/lib/utils'

// Tarjeta de precio con plan destacado opcional y lista de features
defineProps<{
  titleKey: string
  descriptionKey: string
  priceKey: string
  billingPeriodKey: string
  billingCycleKey: string
  featuresKeys: string[]
  buttonLabelKey: string
  buttonVariant: 'default' | 'secondary' | 'outline'
  highlighted: boolean
}>()

const { t } = useI18n()
</script>

<template>
  <Card :class="cn('flex flex-col relative', highlighted ? 'border-primary shadow-lg shadow-primary/10 scale-[1.02]' : '')">
    <Badge v-if="highlighted" class="absolute -top-3 left-1/2 -translate-x-1/2">
      Popular
    </Badge>
    <CardHeader>
      <CardTitle>{{ t(titleKey) }}</CardTitle>
      <CardDescription>{{ t(descriptionKey) }}</CardDescription>
      <div class="mt-4">
        <span class="text-4xl font-bold text-foreground">{{ t(priceKey) }}</span>
        <span class="text-muted-foreground text-sm">{{ t(billingPeriodKey) }}</span>
      </div>
      <p class="text-xs text-muted-foreground mt-1">{{ t(billingCycleKey) }}</p>
    </CardHeader>
    <CardContent class="flex-1">
      <ul class="space-y-3">
        <li v-for="(featureKey, idx) in featuresKeys" :key="idx" class="flex items-start gap-3">
          <Check class="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <span class="text-sm text-muted-foreground">{{ t(featureKey) }}</span>
        </li>
      </ul>
    </CardContent>
    <CardFooter>
      <Button :variant="buttonVariant" class="w-full">
        {{ t(buttonLabelKey) }}
      </Button>
    </CardFooter>
  </Card>
</template>
