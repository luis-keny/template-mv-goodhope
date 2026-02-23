<script setup lang="ts">
import { ref, type Ref } from 'vue'
import DatePicker from '@/components/common/DatePicker.vue'
import { today, getLocalTimeZone, CalendarDate } from '@internationalized/date'

const tz = getLocalTimeZone()
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
