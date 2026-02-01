<script setup lang="ts">
import DataSelect from '@/components/common/DataSelect.vue'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
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
  <Card>
    <CardHeader>
      <CardTitle>Select Examples</CardTitle>
      <CardDescription>Diferentes formas de usar el componente Select</CardDescription>
    </CardHeader>
    <CardContent class="space-y-8">
      <!-- DataSelect Usage -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">1. Componente DataSelect (Recomendado)</h3>
        <p class="text-sm text-muted-foreground">Uso simplificado pasando un array de objetos.</p>
        
        <div class="space-y-2">
          <p class="text-sm font-medium">Básico</p>
          <div class="w-[280px]">
            <DataSelect
              v-model="selectedFruit"
              :items="fruits"
              placeholder="Selecciona una fruta"
            />
          </div>
          <p class="text-sm text-muted-foreground">Selected: {{ selectedFruit }}</p>
        </div>
        
        <div class="space-y-2">
          <p class="text-sm font-medium">Con opciones deshabilitadas</p>
          <div class="w-[280px]">
            <DataSelect
              v-model="selectedFramework"
              :items="frameworks"
              placeholder="Selecciona un framework"
            />
          </div>
          <p class="text-sm text-muted-foreground">Selected: {{ selectedFramework }}</p>
        </div>
      </div>

      <!-- Native Usage -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold">2. Uso Nativo (Manual)</h3>
        <p class="text-sm text-muted-foreground">Control total sobre la estructura y contenido.</p>
        
        <div class="space-y-2">
          <div class="w-[280px]">
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
          </div>
          <p class="text-sm text-muted-foreground">Selected: {{ selectedNative }}</p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
