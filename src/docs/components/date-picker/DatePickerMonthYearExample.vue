<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DatePicker from '@/components/common/DatePicker.vue'
import { today, getLocalTimeZone } from '@internationalized/date'

const tz = getLocalTimeZone()
const defaultPlaceholder = today(tz)
const selected = ref()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Date Picker (Month & Year)</CardTitle>
      <CardDescription>Usa el layout de mes y año con defaultPlaceholder</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <DatePicker
        v-model="selected"
        layout="month-and-year"
        :default-placeholder="defaultPlaceholder"
      />
      <div class="text-sm text-muted-foreground">Seleccionado: {{ selected ? selected.toString() : 'ninguno' }}</div>
    </CardContent>
  </Card>
</template>
