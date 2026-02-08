<script setup lang="ts">
import ContextMenuExamples from './ContextMenuExamples.vue'
import { contextMenuExamplesCode } from '@/docs/snippets/contextMenuExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-semibold mb-2">Context Menu</h2>
      <p class="text-muted-foreground mb-6">
        Muestra un menú contextual al hacer clic derecho sobre un área específica.
      </p>
      <DocExampleContainer :code="contextMenuExamplesCode">
        <ContextMenuExamples />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API (DynamicContextMenu)</CardTitle>
        <CardDescription>Props del componente reutilizable DynamicContextMenu</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Props</p>
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
                <TableCell>items</TableCell>
                <TableCell>MenuItem[]</TableCell>
                <TableCell>Array de objetos que definen la estructura del menú.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>menuClass</TableCell>
                <TableCell>string</TableCell>
                <TableCell>Clases CSS adicionales para el contenido del menú.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">MenuItem Type</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Propiedad</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>type</TableCell>
                <TableCell>'item' | 'separator' | 'checkbox' | 'radio-group' | 'sub' | 'label'</TableCell>
                <TableCell>Tipo de elemento del menú. Por defecto es 'item'.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>label</TableCell>
                <TableCell>string</TableCell>
                <TableCell>Texto a mostrar.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>icon</TableCell>
                <TableCell>Component</TableCell>
                <TableCell>Icono opcional (componente Vue).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>items</TableCell>
                <TableCell>MenuItem[]</TableCell>
                <TableCell>Sub-items para 'sub' o 'radio-group'.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
