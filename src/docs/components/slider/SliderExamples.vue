<script setup lang="ts">
import { Slider } from '@/components/ui/slider'
import { ref } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const value = ref([50])
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Slider</CardTitle>
      <CardDescription>
        Un control de entrada que permite al usuario seleccionar un valor dentro de un rango.
      </CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center pt-6 pb-10">
      <Slider
        v-model="value"
        :max="100"
        :step="1"
        class="w-[60%]"
      />
    </CardContent>
  </Card>
</template>
