<script setup lang="ts">
import { ref } from 'vue'
import DatePicker from '@/components/common/DatePicker.vue'
import { today, startOfMonth, getLocalTimeZone } from '@internationalized/date'

const tz = getLocalTimeZone()
const max = today(tz)
const min = startOfMonth(max)
const selected = ref()
</script>

<template>
  <div class="flex flex-col items-center gap-4 w-full max-w-sm">
    <DatePicker v-model="selected" :min-value="min" :max-value="max" />
    <div class="text-sm text-muted-foreground italic">
      Seleccionado: {{ selected ? selected.toString() : 'ninguno' }}
    </div>
  </div>
</template>
