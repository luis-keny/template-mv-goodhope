<script setup lang="ts">
import ScrollAreaExamples from './ScrollAreaExamples.vue'
import { scrollAreaExamplesCode } from '@/docs/snippets/scrollAreaExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import ComponentMeta from '@/docs/shared/ComponentMeta.vue'
import { meta } from '@/components/ui/scroll-area/meta'
</script>

<template>
  <div class="space-y-10">
    <ComponentMeta :meta="meta" />
    <DocExampleContainer :code="scrollAreaExamplesCode">
      <ScrollAreaExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente ScrollArea</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">ScrollArea</p>
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
                <TableCell>'auto' | 'always' | 'scroll' | 'hover'</TableCell>
                <TableCell>'hover'</TableCell>
                <TableCell>Describe la naturaleza del comportamiento de visibilidad de la barra de desplazamiento.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>scrollHideDelay</TableCell>
                <TableCell>number</TableCell>
                <TableCell>600</TableCell>
                <TableCell>Si el tipo es 'scroll' o 'hover', este es el tiempo en milisegundos antes de que la barra de desplazamiento se oculte.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>dir</TableCell>
                <TableCell>'ltr' | 'rtl'</TableCell>
                <TableCell>-</TableCell>
                <TableCell>La dirección de lectura del área de desplazamiento.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
