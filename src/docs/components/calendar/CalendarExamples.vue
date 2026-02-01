<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'

const selected = ref()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Calendario</CardTitle>
      <CardDescription>Selecciona una fecha</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <Calendar v-model="selected" :number-of-months="1" class="w-fit" />
      <div class="text-sm text-muted-foreground">Seleccionado: {{ selected ? selected.toString() : 'ninguna' }}</div>
    </CardContent>
  </Card>
</template>
