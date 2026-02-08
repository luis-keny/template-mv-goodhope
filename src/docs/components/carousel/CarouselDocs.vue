<script setup lang="ts">
import CarouselExamples from './CarouselExamples.vue'
import { carouselExamplesCode } from '@/docs/snippets/carouselExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-bold tracking-tight">Carousel</h2>
      <p class="text-muted-foreground">
        Un carrusel de movimiento con soporte para gestos táctiles y navegación.
      </p>
    </div>

    <DocExampleContainer :code="carouselExamplesCode">
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
