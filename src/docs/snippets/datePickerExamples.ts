export const datePickerExamplesCode = `<script setup lang="ts">
import { ref } from 'vue'
import DatePicker from '@/components/common/DatePicker.vue'
import { today, startOfMonth, getLocalTimeZone } from '@internationalized/date'

const tz = getLocalTimeZone()
const max = today(tz)
const min = startOfMonth(max)
const selected = ref()
</script>

<template>
  <DatePicker v-model="selected" :min-value="min" :max-value="max" />
</template>
`
