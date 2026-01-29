export const datePickerMonthYearCode = `<script setup lang="ts">
import { ref } from 'vue'
import DatePicker from '@/components/common/DatePicker.vue'
import { today, getLocalTimeZone } from '@internationalized/date'

const tz = getLocalTimeZone()
const defaultPlaceholder = today(tz)
const selected = ref()
</script>

<template>
  <DatePicker
    v-model="selected"
    layout="month-and-year"
    :default-placeholder="defaultPlaceholder"
  />
</template>
`
