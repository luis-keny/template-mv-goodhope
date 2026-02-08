export const datePickerMonthYearCode = `<script setup lang="ts">
import { ref } from 'vue'
import DatePicker from '@/components/common/DatePicker.vue'
import { today, getLocalTimeZone } from '@internationalized/date'

const tz = getLocalTimeZone()
const defaultPlaceholder = today(tz)
const selected = ref()
</script>

<template>
  <div class="flex flex-col items-center gap-4 w-full max-w-sm">
    <DatePicker
      v-model="selected"
      layout="month-and-year"
      :default-placeholder="defaultPlaceholder"
    />
    <div class="text-sm text-muted-foreground italic">
      Seleccionado: {{ selected ? selected.toString() : 'ninguno' }}
    </div>
  </div>
</template>
`
