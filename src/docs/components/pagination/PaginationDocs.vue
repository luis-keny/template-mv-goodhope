<script setup lang="ts">
import PaginationExamples from './PaginationExamples.vue'
import { paginationExamplesCode } from '@/docs/snippets/paginationExamples'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import ComponentMeta from '@/docs/shared/ComponentMeta.vue'
import { meta } from '@/components/ui/pagination/meta'
</script>

<template>
  <div class="space-y-10">
    <ComponentMeta :meta="meta" />
    <DocExampleContainer :code="paginationExamplesCode">
      <PaginationExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Paginator</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Paginator Props</p>
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
                <TableCell class="font-mono text-xs">total</TableCell>
                <TableCell>number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Número total de items (Requerido)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">itemsPerPage</TableCell>
                <TableCell>number</TableCell>
                <TableCell>10</TableCell>
                <TableCell>Número de items a mostrar por página</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">siblingCount</TableCell>
                <TableCell>number</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Número de botones de página visibles a cada lado de la página actual</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">showEdges</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Si es true, muestra botones para ir a la primera y última página</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">defaultPage</TableCell>
                <TableCell>number</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Página seleccionada por defecto (si no se usa v-model)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">modelValue</TableCell>
                <TableCell>number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Valor de la página actual (v-model)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Eventos</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Evento</TableHead>
                <TableHead>Payload</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell class="font-mono text-xs">update:modelValue</TableCell>
                <TableCell>number</TableCell>
                <TableCell>Se emite cuando cambia la página seleccionada</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
