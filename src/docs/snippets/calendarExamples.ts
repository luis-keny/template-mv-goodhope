export const calendarExamplesCode = `<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@/components/ui/calendar'

const selected = ref()
</script>

<template>
  <Calendar v-model="selected" :number-of-months="1" />
</template>
`
