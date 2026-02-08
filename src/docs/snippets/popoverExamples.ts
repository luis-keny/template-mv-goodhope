export const popoverExamplesCode = `<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex flex-wrap justify-center gap-10">
    <div class="flex flex-col items-center space-y-3">
      <p class="text-sm font-medium text-muted-foreground">Primary (Azul)</p>
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="default">Abrir</Button>
        </PopoverTrigger>
        <PopoverContent class="w-72">
          <div class="space-y-2">
            <p class="text-sm font-semibold text-primary">Información</p>
            <p class="text-sm text-foreground">
              Contenido con el color azul primario de Soul MV.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>

    <div class="flex flex-col items-center space-y-3">
      <p class="text-sm font-medium text-muted-foreground">Secondary (Turquesa)</p>
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="secondary">Abrir</Button>
        </PopoverTrigger>
        <PopoverContent class="w-72">
          <div class="space-y-2">
            <p class="text-sm font-semibold text-secondary">Acción</p>
            <p class="text-sm text-foreground">
              Contenido con el color turquesa secundario de Soul MV.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>

    <div class="flex flex-col items-center space-y-3">
      <p class="text-sm font-medium text-muted-foreground">Tertiary (Celeste)</p>
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="tertiary">Abrir</Button>
        </PopoverTrigger>
        <PopoverContent class="w-72">
          <div class="space-y-2">
            <p class="text-sm font-semibold text-tertiary">Notificación</p>
            <p class="text-sm text-foreground">
              Contenido con el color celeste terciario de Soul MV.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  </div>
</template>
`
