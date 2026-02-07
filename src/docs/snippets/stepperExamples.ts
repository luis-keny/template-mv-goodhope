export const stepperExamplesCode = `<script setup lang="ts">
import { BookUser, CreditCard, Truck } from 'lucide-vue-next'
import {
  DynamicStepper
} from '@/components/ui/stepper'

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
  <DynamicStepper :steps="steps" />
</template>
`
