<script setup lang="ts">
import CarouselExamples from './CarouselExamples.vue'
import { carouselExamplesCode } from '@/docs/snippets/carouselExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import ComponentMeta from '@/docs/shared/ComponentMeta.vue'
import { meta } from '@/components/ui/carousel/meta'
</script>

<template>
  <div class="space-y-10">
    <ComponentMeta :meta="meta" />
    <DocExampleContainer
      :code="carouselExamplesCode"
      title="Carousel"
      description="Un componente de carrusel interactivo que permite navegar a través de una serie de elementos de contenido."
    >
      <CarouselExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Carousel</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Carousel</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Por defecto</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>orientation</TableCell>
                <TableCell>'horizontal' | 'vertical'</TableCell>
                <TableCell>'horizontal'</TableCell>
                <TableCell>La orientación del carrusel.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>opts</TableCell>
                <TableCell>CarouselOptions</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Opciones de configuración para Embla Carousel.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>plugins</TableCell>
                <TableCell>CarouselPlugin</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Plugins para Embla Carousel.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
