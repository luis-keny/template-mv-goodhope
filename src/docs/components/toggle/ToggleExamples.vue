<script setup lang="ts">
import { Bold } from 'lucide-vue-next'
import { Toggle } from '@/components/ui/toggle'
</script>

<template>
  <div class="flex items-center justify-center w-full">
    <Toggle aria-label="Toggle bold">
      <Bold class="h-4 w-4" />
    </Toggle>
  </div>
</template>
