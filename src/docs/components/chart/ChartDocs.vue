<script setup lang="ts">
import ChartExamples from './ChartExamples.vue'
import { chartExamplesCode } from '@/docs/snippets/chartExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-bold tracking-tight">Chart</h2>
      <p class="text-muted-foreground">
        Gráficos interactivos construidos sobre Unovis para la visualización de datos.
      </p>
    </div>

    <DocExampleContainer :code="chartExamplesCode" minHeight="450px">
      <ChartExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Componentes para gráficos basados en unovis</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">ChartSingleTooltip</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>selector</TableCell>
                <TableCell>string</TableCell>
                <TableCell>Selector CSS para los elementos que activan el tooltip.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>index</TableCell>
                <TableCell>string</TableCell>
                <TableCell>Clave del dato a mostrar en el título.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>items</TableCell>
                <TableCell>BulletLegendItemInterface[]</TableCell>
                <TableCell>Items para mapear colores y nombres en el tooltip.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
