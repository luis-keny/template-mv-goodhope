<script setup lang="ts">
import SelectExamples from './SelectExamples.vue'
import { selectExamplesCode } from '@/docs/snippets/selectExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import ComponentMeta from '@/docs/shared/ComponentMeta.vue'
import { meta } from '@/components/ui/select/meta'
</script>

<template>
  <div class="space-y-10">
    <ComponentMeta :meta="meta" />
    <DocExampleContainer :code="selectExamplesCode">
      <SelectExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente DataSelect</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Prop</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Default</TableHead>
              <TableHead>Descripción</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell class="font-mono text-xs">modelValue</TableCell>
              <TableCell>string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Valor seleccionado (v-model)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">items</TableCell>
              <TableCell>any[]</TableCell>
              <TableCell>[]</TableCell>
              <TableCell>Array de opciones</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">placeholder</TableCell>
              <TableCell>string</TableCell>
              <TableCell>'Select an option'</TableCell>
              <TableCell>Texto placeholder</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">itemText</TableCell>
              <TableCell>string | (item) => string</TableCell>
              <TableCell>'label'</TableCell>
              <TableCell>Propiedad o función para obtener el texto</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">itemValue</TableCell>
              <TableCell>string | (item) => string</TableCell>
              <TableCell>'value'</TableCell>
              <TableCell>Propiedad o función para obtener el valor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">itemDisabled</TableCell>
              <TableCell>string | (item) => boolean</TableCell>
              <TableCell>'disabled'</TableCell>
              <TableCell>Propiedad o función para deshabilitar items</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">disabled</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Deshabilita todo el select</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Native API</CardTitle>
        <CardDescription>Componentes del sistema Select</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Select</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell class="font-mono text-xs">defaultValue</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Valor seleccionado por defecto</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">open</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Estado de apertura controlado</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Deshabilita el select</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
