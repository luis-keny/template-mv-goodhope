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
const selectedNative = ref('')
</script>

<template>
  <div class="flex flex-col items-center w-full max-w-md space-y-8">
    <!-- DataSelect Usage -->
    <div class="w-full space-y-4">
      <h3 class="text-lg font-semibold text-center">1. Componente DataSelect (Recomendado)</h3>
      <p class="text-sm text-muted-foreground text-center">Uso simplificado pasando un array de objetos.</p>
      
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

    <!-- Native Usage -->
    <div class="w-full space-y-4 pt-4 border-t">
      <h3 class="text-lg font-semibold text-center">2. Uso Nativo (Manual)</h3>
      <p class="text-sm text-muted-foreground text-center">Control total sobre la estructura y contenido.</p>
      
      <div class="space-y-2">
        <Select v-model="selectedNative">
          <SelectTrigger>
            <SelectValue placeholder="Selecciona manualmente" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light Mode</SelectItem>
            <SelectItem value="dark">Dark Mode</SelectItem>
            <SelectItem value="system" disabled>System (Disabled)</SelectItem>
          </SelectContent>
        </Select>
        <p class="text-sm text-muted-foreground italic">Selected: {{ selectedNative || 'none' }}</p>
      </div>
    </div>
  </div>
</template>
`
