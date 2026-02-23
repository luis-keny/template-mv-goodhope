export const datePickerTodayCode = `<script setup lang="ts">
import { ref } from 'vue'
import DatePicker from '@/components/common/DatePicker.vue'
import { today, getLocalTimeZone } from '@internationalized/date'

const tz = getLocalTimeZone()
// Inicializar con la fecha de hoy
const selected = ref(today(tz)) as Ref<CalendarDate>
</script>

<template>
  <div class="flex flex-col items-center gap-4 w-full max-w-sm">
    <DatePicker v-model="selected" />
    <div class="text-sm text-muted-foreground italic">
      Seleccionado por defecto: {{ selected.toString() }}
    </div>
  </div>
</template>
`;