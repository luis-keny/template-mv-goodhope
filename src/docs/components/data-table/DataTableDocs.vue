<script setup lang="ts">
import DataTableExamples from './DataTableExamples.vue'
import { dataTableExamplesCode } from '@/docs/snippets/dataTableExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(dataTableExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <DataTableExamples />
    
    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Código Fuente</CardTitle>
          <CardDescription>Copiar y pegar en tu proyecto</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copy">
          <span v-if="!copied">Copiar</span>
          <span v-else>Copiado</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="dataTableExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente DataTable</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Props</p>
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
                <TableCell>columns</TableCell>
                <TableCell>ColumnDef[]</TableCell>
                <TableCell>Required</TableCell>
                <TableCell>Definiciones de columnas (TanStack Table)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>data</TableCell>
                <TableCell>any[]</TableCell>
                <TableCell>Required</TableCell>
                <TableCell>Datos a mostrar en la tabla</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>search</TableCell>
                <TableCell>boolean | string | string[] | object</TableCell>
                <TableCell>false</TableCell>
                <TableCell>
                  Configura la barra de búsqueda.
                  <ul class="list-disc list-inside mt-1 text-xs text-muted-foreground">
                    <li><code>true</code>: Búsqueda global</li>
                    <li><code>string</code>: ID de columna específica</li>
                    <li><code>string[]</code>: IDs de columnas para búsqueda múltiple</li>
                    <li><code>object</code>: { columns: string[], placeholder: string }</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>pagination</TableCell>
                <TableCell>boolean | string | object</TableCell>
                <TableCell>false</TableCell>
                <TableCell>
                  Configura la paginación.
                  <ul class="list-disc list-inside mt-1 text-xs text-muted-foreground">
                    <li><code>'simple'</code>: Solo botones prev/next</li>
                    <li><code>'advanced'</code>: Paginación numérica completa</li>
                    <li><code>object</code>: { type: 'advanced', itemsPerPage: 10, showEdges: true, siblingCount: 1 }</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>showColumnVisibility</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Muestra botón para ocultar/mostrar columnas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>enableRowSelection</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Agrega checkboxes para selección de filas</TableCell>
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
                <TableCell>selection-change</TableCell>
                <TableCell>any[]</TableCell>
                <TableCell>Emite el array de filas seleccionadas cuando cambia la selección</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
