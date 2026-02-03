export const sliderExamplesCode = `<script setup lang="ts">
import { Slider } from '@/components/ui/slider'
import { ref } from 'vue'

const value = ref([50])
</script>

<template>
  <Slider
    v-model="value"
    :max="100"
    :step="1"
    class="w-[60%]"
  />
</template>
`
