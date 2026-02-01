<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Ejemplos de Popover</CardTitle>
      <CardDescription>Paleta de colores Soul MV con variantes primaria, secundaria y terciaria</CardDescription>
    </CardHeader>
    <CardContent class="space-y-6">
      <div class="space-y-2">
        <p class="text-sm font-medium">Primary (Azul)</p>
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
      <div class="space-y-2">
        <p class="text-sm font-medium">Secondary (Turquesa)</p>
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
      <div class="space-y-2">
        <p class="text-sm font-medium">Tertiary (Celeste)</p>
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
    </CardContent>
  </Card>
</template>
