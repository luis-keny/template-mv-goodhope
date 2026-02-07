<script setup lang="ts">
import AlertDialogExamples from './AlertDialogExamples.vue'
import CommonAlertDialogExample from './CommonAlertDialogExample.vue'
import { alertDialogExamplesCode } from '@/docs/snippets/alertDialogExamples'
import { commonAlertDialogExampleCode } from '@/docs/snippets/commonAlertDialogExample'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(alertDialogExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <AlertDialogExamples />
    <CommonAlertDialogExample />
    
    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Código Fuente (Básico)</CardTitle>
          <CardDescription>Uso estándar de Radix</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copy">
          <span v-if="!copied">Copiar</span>
          <span v-else>Copiado</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="alertDialogExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Código Fuente (Common)</CardTitle>
          <CardDescription>Uso con el Store centralizado</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copy">
          <span v-if="!copied">Copiar</span>
          <span v-else>Copiado</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="commonAlertDialogExampleCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

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
