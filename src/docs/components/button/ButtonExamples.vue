<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Plus, Search, Check, Trash2 } from 'lucide-vue-next'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Ejemplos de Botones</CardTitle>
      <CardDescription>Variantes y tamaños disponibles</CardDescription>
    </CardHeader>
    <CardContent class="space-y-6">
      <div class="space-y-2">
        <p class="text-sm font-medium">Variantes</p>
        <div class="flex flex-wrap gap-2">
          <Button variant="default">Por defecto</Button>
          <Button variant="secondary">Secundario</Button>
          <Button variant="tertiary">Terciario</Button>
          <Button variant="outline">Contorno</Button>
          <Button variant="ghost">Fantasma</Button>
          <Button variant="link">Enlace</Button>
          <Button variant="destructive">Destructivo</Button>
        </div>
      </div>
      <div class="space-y-2">
        <p class="text-sm font-medium">Tamaños</p>
        <div class="flex flex-wrap items-center gap-2">
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="default">Por defecto</Button>
          <Button size="lg">LG</Button>
        </div>
      </div>
      <div class="space-y-2">
        <p class="text-sm font-medium">Iconos</p>
        <div class="flex flex-wrap items-center gap-2">
          <Button size="icon" aria-label="Agregar"><Plus /></Button>
          <Button size="icon-sm" variant="secondary" aria-label="Buscar"><Search /></Button>
          <Button size="icon-lg" variant="outline" aria-label="Confirmar"><Check /></Button>
          <Button variant="destructive"><Trash2 /><span>Eliminar</span></Button>
          <Button variant="default"><Plus /><span>Agregar</span></Button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
