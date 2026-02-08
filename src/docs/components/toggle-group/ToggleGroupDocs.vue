<script setup lang="ts">
import ToggleGroupExamples from './ToggleGroupExamples.vue'
import { toggleGroupExamplesCode } from '@/docs/snippets/toggleGroupExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-8">
    <div>
      <h2 class="text-2xl font-semibold tracking-tight">Ejemplo</h2>
      <p class="text-muted-foreground mb-4">
        Un conjunto de botones de alternancia de dos estados que se pueden alternar activados o desactivados.
      </p>
      <DocExampleContainer :code="toggleGroupExamplesCode">
        <ToggleGroupExamples />
      </DocExampleContainer>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente ToggleGroup</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">ToggleGroup</p>
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
                <TableCell>type</TableCell>
                <TableCell>'single' | 'multiple'</TableCell>
                <TableCell>'single'</TableCell>
                <TableCell>Determina si se pueden seleccionar múltiples items.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>variant</TableCell>
                <TableCell>'default' | 'outline'</TableCell>
                <TableCell>'default'</TableCell>
                <TableCell>Estilo visual del grupo.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>size</TableCell>
                <TableCell>'default' | 'sm' | 'lg'</TableCell>
                <TableCell>'default'</TableCell>
                <TableCell>Tamaño de los botones del grupo.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
