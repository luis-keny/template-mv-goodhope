<script setup lang="ts">
import { BookUser, CreditCard, Truck } from 'lucide-vue-next'
import {
  DynamicStepper
} from '@/components/ui/stepper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const steps = [
  {
    step: 1,
    title: 'Address',
    description: 'Add your address',
    icon: BookUser,
  },
  {
    step: 2,
    title: 'Shipping',
    description: 'Set your preferred',
    icon: Truck,
  },
  {
    step: 3,
    title: 'Payment',
    description: 'Add any payment',
    icon: CreditCard,
  },
  {
    step: 4,
    title: 'Checkout',
    description: 'Confirm your order',
  },
]
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Stepper</CardTitle>
      <CardDescription>
        Un componente para mostrar el progreso a través de una secuencia de pasos numerados.
      </CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center p-6">
      <DynamicStepper :steps="steps" />
    </CardContent>
  </Card>
</template>
