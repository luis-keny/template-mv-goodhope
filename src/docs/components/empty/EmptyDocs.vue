<script setup lang="ts">
import EmptyExamples from './EmptyExamples.vue'
import { emptyExamplesCode } from '@/docs/snippets/emptyExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-semibold mb-2">Empty State</h2>
      <p class="text-muted-foreground mb-6">
        Muestra un estado vacío cuando no hay datos para mostrar, guiando al usuario sobre qué hacer a continuación.
      </p>
      <DocExampleContainer :code="emptyExamplesCode" minHeight="400px">
        <EmptyExamples />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Componentes del sistema Empty</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">EmptyMedia</p>
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
                <TableCell>variant</TableCell>
                <TableCell>'default' | 'icon'</TableCell>
                <TableCell>'default'</TableCell>
                <TableCell>Variante de visualización del medio (imagen o icono).</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
