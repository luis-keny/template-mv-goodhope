export const comboboxExamplesCode = `<script setup lang="ts">
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
  <Combobox v-model="selected" :items="frameworks" placeholder="Select framework..." />
</template>
`
