export const inputExamplesCode = `<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'

const email = ref('')
</script>

<template>
  <Input v-model="email" type="email" placeholder="Email" class="max-w-sm" />
</template>
`
