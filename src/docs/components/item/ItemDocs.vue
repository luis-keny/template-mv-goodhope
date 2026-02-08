<script setup lang="ts">
import ItemExamples from './ItemExamples.vue'
import { itemExamplesCode } from '@/docs/snippets/itemExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-semibold mb-2">Item</h2>
      <p class="text-muted-foreground mb-6">
        Un componente flexible para mostrar elementos de lista con contenido, medios y acciones.
      </p>
      <DocExampleContainer :code="itemExamplesCode">
        <ItemExamples />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Componentes del sistema Item</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Item</p>
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
                <TableCell>'default' | 'outline' | 'muted'</TableCell>
                <TableCell>'default'</TableCell>
                <TableCell>Estilo visual del item.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>size</TableCell>
                <TableCell>'default' | 'sm'</TableCell>
                <TableCell>'default'</TableCell>
                <TableCell>Tamaño del item.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">ItemMedia</p>
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
                <TableCell>'default' | 'icon' | 'image'</TableCell>
                <TableCell>'default'</TableCell>
                <TableCell>Variante de visualización del medio.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
