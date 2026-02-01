export const selectExamplesCode = `<script setup lang="ts">
import DataSelect from '@/components/common/DataSelect.vue'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ref } from 'vue'

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'pineapple', label: 'Pineapple' },
]

const frameworks = [
  { value: 'next', label: 'Next.js' },
  { value: 'vue', label: 'Vue' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'react', label: 'React (disabled)', disabled: true },
  { value: 'astro', label: 'Astro' },
]

const selectedFruit = ref('')
const selectedFramework = ref('')
const selectedNative = ref('')
</script>

<template>
  <div class="space-y-8">
    <!-- 1. DataSelect (Simplified) -->
    <div class="space-y-4">
      <!-- Basic -->
      <DataSelect
        v-model="selectedFruit"
        :items="fruits"
        placeholder="Select a fruit"
      />
      
      <!-- With disabled options -->
      <DataSelect
        v-model="selectedFramework"
        :items="frameworks"
        placeholder="Select a framework"
      />
    </div>

    <!-- 2. Native Select (Manual) -->
    <Select v-model="selectedNative">
      <SelectTrigger>
        <SelectValue placeholder="Select native" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light Mode</SelectItem>
        <SelectItem value="dark">Dark Mode</SelectItem>
        <SelectItem value="system" disabled>System (Disabled)</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
`
