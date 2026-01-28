export const comboboxOnChangeCode = `<script setup lang="ts">
import { ref } from 'vue'
import Combobox from '@/components/common/Combobox.vue'
import { toast } from 'vue-sonner'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const selected = ref('')
const onChange = (val: string | null) => {
  toast('Selection changed', {
    description: val ? \`Selected: \${val}\` : 'Cleared selection',
    action: { label: 'Undo', onClick: () => (selected.value = '') },
  })
}
</script>

<template>
  <Combobox v-model="selected" :items="frameworks" placeholder="Select framework..." @change="onChange" />
</template>
`
