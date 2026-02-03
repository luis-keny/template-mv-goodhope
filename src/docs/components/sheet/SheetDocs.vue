<script setup lang="ts">
import SheetExamples from './SheetExamples.vue'
import { sheetExamplesCode } from '@/docs/snippets/sheetExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(sheetExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <SheetExamples />
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
        <CodeBlock :code="sheetExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props de los componentes Sheet</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
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
