<script setup lang="ts">
import { type Ref, ref } from 'vue'
import {
  type DateValue,
  getLocalTimeZone,
  today
} from '@internationalized/date'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const start = today(getLocalTimeZone())
const end = start.add({ days: 7 })

const value = ref({
  start,
  end,
}) as Ref<{ start: DateValue; end: DateValue }>
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Range Calendar</CardTitle>
      <CardDescription>
        Un componente de calendario que permite a los usuarios seleccionar un rango de fechas.
      </CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center">
      <RangeCalendar v-model="value" class="rounded-md border shadow-sm" />
    </CardContent>
  </Card>
</template>
