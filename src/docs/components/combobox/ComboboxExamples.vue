<script setup lang="ts">
import { ref } from 'vue'
import Combobox from '@/components/common/Combobox.vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const selected = ref('')
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Combobox</CardTitle>
      <CardDescription>Selección con búsqueda y popover</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <Combobox v-model="selected" :items="frameworks" placeholder="Seleccionar framework..." />
      <div class="text-sm text-muted-foreground">Seleccionado: {{ selected || 'ninguno' }}</div>
    </CardContent>
  </Card>
</template>
