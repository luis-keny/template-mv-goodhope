<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from '@/components/ui/calendar'

const selected = ref()
</script>

<template>
  <div class="flex flex-col items-center gap-4 w-full">
    <Calendar v-model="selected" :number-of-months="1" class="w-fit" />
    <div class="text-sm text-muted-foreground">Seleccionado: {{ selected ? selected.toString() : 'ninguna' }}</div>
  </div>
</template>
