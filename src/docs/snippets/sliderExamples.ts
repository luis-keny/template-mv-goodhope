export const sliderExamplesCode = `<script setup lang="ts">
import { Slider } from '@/components/ui/slider'
import { ref } from 'vue'

const value = ref([50])
</script>

<template>
  <div class="w-full max-w-sm flex flex-col items-center gap-4">
    <Slider
      v-model="value"
      :max="100"
      :step="1"
      class="w-full"
    />
    <p class="text-sm text-muted-foreground">Valor seleccionado: {{ value[0] }}</p>
  </div>
</template>
`
