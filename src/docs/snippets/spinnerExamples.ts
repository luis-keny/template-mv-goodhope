export const spinnerExamplesCode = `<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <Spinner />
      <span>Loading...</span>
    </div>
    
    <div class="flex items-center gap-2">
      <Button disabled>
        <Spinner class="mr-2" />
        Processing Payment
      </Button>
    </div>

    <div class="flex items-center gap-2">
       <Spinner class="size-8 text-primary" />
       <span class="text-lg font-medium">Large Spinner</span>
    </div>
  </div>
</template>
`
