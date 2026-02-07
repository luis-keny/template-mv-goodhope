<script setup lang="ts">
import type { Component } from 'vue'
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger
} from './'

interface StepItem {
  step: number
  title?: string
  description?: string
  icon?: Component
}

interface Props {
  steps: StepItem[]
  modelValue?: number
  defaultValue?: number
}

const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <Stepper
    v-bind="props"
    class="flex w-full items-start gap-2"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <StepperItem
      v-for="item in steps"
      :key="item.step"
      :step="item.step"
      class="relative flex w-full flex-col items-center justify-center"
    >
      <StepperTrigger class="bg-transparent">
        <StepperIndicator v-slot="{ step }" class="bg-muted">
          <template v-if="item.icon">
            <component :is="item.icon" class="w-4 h-4" />
          </template>
          <span v-else>{{ step }}</span>
        </StepperIndicator>
      </StepperTrigger>

      <StepperSeparator
        v-if="item.step !== steps[steps.length - 1]?.step"
        class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
      />

      <div class="flex flex-col items-center">
        <StepperTitle v-if="item.title">
          {{ item.title }}
        </StepperTitle>
        <StepperDescription v-if="item.description">
          {{ item.description }}
        </StepperDescription>
      </div>
    </StepperItem>
  </Stepper>
</template>
