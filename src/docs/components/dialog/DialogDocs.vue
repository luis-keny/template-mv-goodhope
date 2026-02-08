<script setup lang="ts">
import DialogExamples from './DialogExamples.vue'
import CommonDialogExample from './CommonDialogExample.vue'
import { dialogExamplesCode } from '@/docs/snippets/dialogExamples'
import { commonDialogExampleCode } from '@/docs/snippets/commonDialogExample'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-semibold mb-2">Dialog</h2>
      <p class="text-muted-foreground mb-6">
        Una ventana superpuesta que enfoca la atención del usuario en una tarea o información específica.
      </p>
      <DocExampleContainer :code="dialogExamplesCode">
        <DialogExamples />
      </DocExampleContainer>
    </section>

    <section>
      <h3 class="text-xl font-medium mb-2">Diálogo Reutilizable (Common)</h3>
      <p class="text-muted-foreground mb-6">
        Uso de CommonDialog con el store centralizado para manejar datos dinámicos y estados globales.
      </p>
      <DocExampleContainer :code="commonDialogExampleCode">
        <CommonDialogExample />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Componentes para construir diálogos modales</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">CommonDialog</p>
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
                <TableCell>id</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Identificador único para el diálogo en el store.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>title</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Título del diálogo.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>description</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Descripción o subtítulo del diálogo.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>showFooter</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Si se debe mostrar la sección del footer.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
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
                <TableCell>open</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>El estado controlado de apertura del diálogo.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>defaultOpen</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>El estado inicial de apertura cuando no es controlado.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>modal</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>Si es true, la interacción con elementos fuera del diálogo está deshabilitada. (Default: true)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">DialogContent</p>
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
                <TableCell>asChild</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>Cambia el componente raíz por el hijo pasado.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
