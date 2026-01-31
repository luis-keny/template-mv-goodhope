export const popoverExamplesCode = `<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="space-y-4">
    <Popover>
      <PopoverTrigger as-child>
        <Button variant="default">Primary</Button>
      </PopoverTrigger>
      <PopoverContent class="w-72">
        <p class="text-sm font-semibold text-primary mb-2">Información</p>
        <p class="text-sm text-foreground">
          Contenido con el color azul primario.
        </p>
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger as-child>
        <Button variant="secondary">Secondary</Button>
      </PopoverTrigger>
      <PopoverContent class="w-72">
        <p class="text-sm font-semibold text-secondary mb-2">Acción</p>
        <p class="text-sm text-foreground">
          Contenido con el color turquesa.
        </p>
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger as-child>
        <Button variant="tertiary">Tertiary</Button>
      </PopoverTrigger>
      <PopoverContent class="w-72">
        <p class="text-sm font-semibold text-tertiary mb-2">Notificación</p>
        <p class="text-sm text-foreground">
          Contenido con el color celeste.
        </p>
      </PopoverContent>
    </Popover>
  </div>
</template>
`
