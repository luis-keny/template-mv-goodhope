<script setup lang="ts">
import { ref } from 'vue'
import Combobox from '@/components/common/Combobox.vue'

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
  <div class="space-y-4">
    <Combobox v-model="selected" :items="frameworks" placeholder="Seleccionar framework..." />
    <div class="text-sm text-muted-foreground">Seleccionado: {{ selected || 'ninguno' }}</div>
  </div>
</template>
