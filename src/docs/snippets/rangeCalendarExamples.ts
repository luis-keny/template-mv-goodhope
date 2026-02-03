export const rangeCalendarExamplesCode = `<script setup lang="ts">
import { type Ref, ref } from 'vue'
import {
  type DateRange,
  getLocalTimeZone,
  today
} from '@internationalized/date'
import { RangeCalendar } from '@/components/ui/range-calendar'

const start = today(getLocalTimeZone())
const end = start.add({ days: 7 })

const value = ref({
  start,
  end,
}) as Ref<DateRange>
</script>

<template>
  <RangeCalendar v-model="value" class="rounded-md border shadow-sm" />
</template>
`
