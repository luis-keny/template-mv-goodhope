export const separatorExamplesCode = `<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <div class="w-full max-w-md">
    <div class="space-y-1">
      <h4 class="text-sm font-medium leading-none">
        Radix Primitives
      </h4>
      <p class="text-sm text-muted-foreground">
        Una biblioteca de componentes UI de código abierto.
      </p>
    </div>
    <Separator class="my-4" />
    <div class="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Documentación</div>
      <Separator orientation="vertical" />
      <div>Código Fuente</div>
    </div>
  </div>
</template>
`
