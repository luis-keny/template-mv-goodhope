<script setup lang="ts">
import ResizableExamples from './ResizableExamples.vue'
import { resizableExamplesCode } from '@/docs/snippets/resizableExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <DocExampleContainer :code="resizableExamplesCode">
      <ResizableExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props de los componentes Resizable</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">ResizablePanelGroup</p>
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
                <TableCell>direction</TableCell>
                <TableCell>'horizontal' | 'vertical'</TableCell>
                <TableCell>'horizontal'</TableCell>
                <TableCell>La dirección de los paneles.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>autoSaveId</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>ID único para persistir el diseño en el almacenamiento local.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">ResizablePanel</p>
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
                <TableCell>defaultSize</TableCell>
                <TableCell>number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El tamaño inicial del panel en porcentaje (0-100).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>minSize</TableCell>
                <TableCell>number</TableCell>
                <TableCell>0</TableCell>
                <TableCell>El tamaño mínimo del panel en porcentaje.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>maxSize</TableCell>
                <TableCell>number</TableCell>
                <TableCell>100</TableCell>
                <TableCell>El tamaño máximo del panel en porcentaje.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">ResizableHandle</p>
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
                <TableCell>withHandle</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Muestra un icono de agarre en el centro del handle.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Deshabilita el redimensionamiento.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
