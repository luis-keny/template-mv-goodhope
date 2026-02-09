<script setup lang="ts">
import CommonSheetExample from './CommonSheetExample.vue'
import { commonSheetExampleCode } from '@/docs/snippets/commonSheetExample'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">

    <DocExampleContainer :code="commonSheetExampleCode">
      <CommonSheetExample />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props de los componentes Sheet</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">CommonSheet</p>
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
                <TableCell>Identificador único para el sheet en el store.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>title</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Título del sheet.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>description</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Descripción del contenido del sheet.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>side</TableCell>
                <TableCell>"top" | "bottom" | "left" | "right"</TableCell>
                <TableCell>"right"</TableCell>
                <TableCell>El lado desde el cual aparece el sheet.</TableCell>
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
          <p class="text-sm font-medium mb-2">Sheet</p>
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
                <TableCell>open</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El estado controlado de apertura del diálogo (v-model)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>defaultOpen</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>El estado de apertura inicial cuando no es controlado</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>modal</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Si es true, la interacción con elementos fuera del sheet está deshabilitada</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">SheetContent</p>
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
                <TableCell>side</TableCell>
                <TableCell>"top" | "bottom" | "left" | "right"</TableCell>
                <TableCell>"right"</TableCell>
                <TableCell>El lado desde el cual aparece el sheet</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>class</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Clases adicionales</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
