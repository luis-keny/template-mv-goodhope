<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Progress } from '@/components/ui/progress'

const progress = ref(13)

onMounted(() => {
  const timer = setTimeout(() => {
    progress.value = 66
  }, 500)

  return () => clearTimeout(timer)
})
</script>

<template>
  <div class="flex justify-center w-full">
    <Progress :model-value="progress" class="w-full max-w-md" />
  </div>
</template>

