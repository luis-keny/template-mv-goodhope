<script setup lang="ts">
import AlertDialogExamples from './AlertDialogExamples.vue'
import CommonAlertDialogExample from './CommonAlertDialogExample.vue'
import { alertDialogExamplesCode } from '@/docs/snippets/alertDialogExamples'
import { commonAlertDialogExampleCode } from '@/docs/snippets/commonAlertDialogExample'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <!-- AlertDialog Básico -->
    <section class="space-y-4">
      <div>
        <h2 class="text-2xl font-bold tracking-tight">AlertDialog</h2>
        <p class="text-muted-foreground">
          Un cuadro de diálogo modal que interrumpe al usuario con contenido importante y espera una respuesta.
        </p>
      </div>

      <DocExampleContainer :code="alertDialogExamplesCode">
        <AlertDialogExamples />
      </DocExampleContainer>
    </section>

    <!-- CommonAlertDialog Reutilizable -->
    <section class="space-y-4">
      <div>
        <h2 class="text-xl font-semibold tracking-tight">Alerta Reutilizable (Common)</h2>
        <p class="text-muted-foreground">
          Uso de CommonAlertDialog para confirmaciones críticas centralizadas mediante el overlay store.
        </p>
      </div>

      <DocExampleContainer :code="commonAlertDialogExampleCode">
        <CommonAlertDialogExample />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente AlertDialog</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">CommonAlertDialog</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop / Emit</TableHead>
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
                <TableCell>Título del diálogo de alerta.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>description</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Mensaje de advertencia o descripción.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>cancelText</TableCell>
                <TableCell>string</TableCell>
                <TableCell>'Cancelar'</TableCell>
                <TableCell>Texto del botón de cancelación.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>actionText</TableCell>
                <TableCell>string</TableCell>
                <TableCell>'Continuar'</TableCell>
                <TableCell>Texto del botón de acción principal.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>@action</TableCell>
                <TableCell>(data: any) => void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Evento emitido al confirmar la acción.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>@cancel</TableCell>
                <TableCell>(data: any) => void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Evento emitido al cancelar la acción.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">AlertDialog</p>
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
                <TableCell>defaultOpen</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>El estado abierto del diálogo cuando se renderiza inicialmente.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>open</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El estado abierto controlado del diálogo.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
