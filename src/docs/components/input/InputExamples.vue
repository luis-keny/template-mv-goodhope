<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'

const email = ref('')
</script>

<template>
  <div class="space-y-4 w-full flex flex-col items-center">
    <Input v-model="email" type="email" placeholder="Email" class="max-w-sm" />
    <div class="text-sm text-muted-foreground">Valor: {{ email }}</div>
  </div>
</template>
