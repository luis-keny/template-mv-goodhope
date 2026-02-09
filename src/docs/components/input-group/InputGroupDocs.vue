<script setup lang="ts">
import InputGroupExamples from './InputGroupExamples.vue'
import { inputGroupExamplesCode } from '@/docs/snippets/inputGroupExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'

</script>

<template>
  <div class="space-y-10">
    <DocExampleContainer 
      :code="inputGroupExamplesCode"
      title="Input Group"
      description="Agrupa inputs con iconos, botones o texto adicional."
    >
      <InputGroupExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Componentes para agrupar inputs</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">InputGroupAddon</p>
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
                <TableCell>align</TableCell>
                <TableCell>'inline-start' | 'inline-end' | 'block-start' | 'block-end'</TableCell>
                <TableCell>'inline-start'</TableCell>
                <TableCell>Alineación del addon respecto al input.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">InputGroupButton</p>
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
                <TableCell>size</TableCell>
                <TableCell>'xs' | 'sm' | 'icon-xs' | 'icon-sm'</TableCell>
                <TableCell>'xs'</TableCell>
                <TableCell>Tamaño del botón dentro del grupo.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>variant</TableCell>
                <TableCell>ButtonVariants['variant']</TableCell>
                <TableCell>'ghost'</TableCell>
                <TableCell>Variante visual del botón.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
