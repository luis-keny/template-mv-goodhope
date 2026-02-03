<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
)
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Scroll Area</CardTitle>
      <CardDescription>
        Aumenta las áreas de desplazamiento nativas con estilos personalizados y compatibilidad entre navegadores.
      </CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center">
      <ScrollArea class="h-72 w-48 rounded-md border">
        <div class="p-4">
          <h4 class="mb-4 text-sm leading-none font-medium">
            Tags
          </h4>
          <template v-for="tag in tags" :key="tag">
            <div class="text-sm">
              {{ tag }}
            </div>
            <Separator class="my-2" />
          </template>
        </div>
      </ScrollArea>
    </CardContent>
  </Card>
</template>
