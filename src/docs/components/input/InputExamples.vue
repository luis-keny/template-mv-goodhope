<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const email = ref('')
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Input</CardTitle>
      <CardDescription>Campo de entrada para email</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <Input v-model="email" type="email" placeholder="Email" class="max-w-sm" />
      <div class="text-sm text-muted-foreground">Valor: {{ email }}</div>
    </CardContent>
  </Card>
</template>
