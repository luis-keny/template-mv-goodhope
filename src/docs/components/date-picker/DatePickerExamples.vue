<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DatePicker from '@/components/common/DatePicker.vue'
import { today, startOfMonth, getLocalTimeZone } from '@internationalized/date'

const tz = getLocalTimeZone()
const max = today(tz)
const min = startOfMonth(max)
const selected = ref()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Date Picker</CardTitle>
      <CardDescription>Selecciona una fecha dentro del rango permitido</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <DatePicker v-model="selected" :min-value="min" :max-value="max" />
      <div class="text-sm text-muted-foreground">Seleccionado: {{ selected ? selected.toString() : 'ninguno' }}</div>
    </CardContent>
  </Card>
</template>
