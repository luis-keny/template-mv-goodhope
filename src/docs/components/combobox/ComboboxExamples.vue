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
      <CardDescription>Searchable selection with popover</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <Combobox v-model="selected" :items="frameworks" placeholder="Select framework..." />
      <div class="text-sm text-muted-foreground">Selected: {{ selected || 'none' }}</div>
    </CardContent>
  </Card>
</template>
