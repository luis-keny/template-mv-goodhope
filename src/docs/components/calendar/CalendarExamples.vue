<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'

const selected = ref()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Calendar</CardTitle>
      <CardDescription>Select a date</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <Calendar v-model="selected" :number-of-months="1" class="w-fit" />
      <div class="text-sm text-muted-foreground">Selected: {{ selected ? selected.toString() : 'none' }}</div>
    </CardContent>
  </Card>
</template>
