<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import CardDescription from '@/components/ui/card/CardDescription.vue';
import CardHeader from '@/components/ui/card/CardHeader.vue';
import CardTitle from '@/components/ui/card/CardTitle.vue';
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Separador</CardTitle>
      <CardDescription>
        Utiliza el componente Separator para dividir visualmente secciones de contenido de forma clara y organizada.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div>
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
    </CardContent>
  </Card>
</template>
