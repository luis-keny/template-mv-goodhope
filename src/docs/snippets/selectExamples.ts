export const selectExamplesCode = `<script setup lang="ts">
import DataSelect from '@/components/common/DataSelect.vue'
import { ref } from 'vue'

const fruits = [
  { value: 'apple', label: 'Manzana' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Arándano' },
  { value: 'grapes', label: 'Uvas' },
  { value: 'pineapple', label: 'Piña' },
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
</script>

<template>
  <div class="flex flex-col items-center w-full max-w-md space-y-8">
    <div class="w-full space-y-4">
      <div class="space-y-4">
        <div class="space-y-2">
          <p class="text-sm font-medium">Básico</p>
          <DataSelect
            v-model="selectedFruit"
            :items="fruits"
            placeholder="Selecciona una fruta"
          />
          <p class="text-sm text-muted-foreground italic">Selected: {{ selectedFruit || 'none' }}</p>
        </div>
        
        <div class="space-y-2">
          <p class="text-sm font-medium">Con opciones deshabilitadas</p>
          <DataSelect
            v-model="selectedFramework"
            :items="frameworks"
            placeholder="Selecciona un framework"
          />
          <p class="text-sm text-muted-foreground italic">Selected: {{ selectedFramework || 'none' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
`
