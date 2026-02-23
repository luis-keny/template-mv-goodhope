<script setup lang="ts">
import DataTableExamples from './DataTableExamples.vue'
import DataTableMetaExample from './DataTableMetaExample.vue'
import { dataTableExamplesCode } from '@/docs/snippets/dataTableExamples'
import { dataTableMetaExampleCode } from '@/docs/snippets/dataTableMetaExample'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <DocExampleContainer 
      :code="dataTableExamplesCode" 
      minHeight="500px"
      title="Data Table"
      description="Una tabla de datos potente y flexible construida sobre TanStack Table, con soporte para búsqueda, paginación y selección."
    >
      <DataTableExamples />
    </DocExampleContainer>

    <DocExampleContainer 
      :code="dataTableMetaExampleCode" 
      minHeight="500px"
      title="Acciones y Meta"
      description="Ejemplo avanzado que utiliza table-meta para pasar funciones (como abrir un modal) desde el componente padre a las celdas de la tabla."
    >
      <DataTableMetaExample />
    </DocExampleContainer>

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
                <TableCell>loading</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Muestra un esqueleto de carga en la tabla</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">Personalización de Estilos (Column Meta)</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Propiedad</TableHead>
                <TableHead>Ubicación</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><code>meta.thClass</code></TableCell>
                <TableCell>ColumnDef</TableCell>
                <TableCell>Clases CSS para el encabezado (th) de la columna</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>meta.tdClass</code></TableCell>
                <TableCell>ColumnDef</TableCell>
                <TableCell>Clases CSS para la celda (td) de la columna</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>trClass</code></TableCell>
                <TableCell>Data Row (Objeto)</TableCell>
                <TableCell>Clases CSS para la fila (tr) completa (se define en los datos)</TableCell>
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
