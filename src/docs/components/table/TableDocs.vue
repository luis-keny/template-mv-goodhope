<script setup lang="ts">
import TableExamples from './TableExamples.vue'
import { tableExamplesCode } from '@/docs/snippets/tableExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(tableExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <TableExamples />
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
        <CodeBlock :code="tableExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Table</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Table</p>
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
                <TableCell>class</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Clases adicionales</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm text-muted-foreground">
            Los componentes relacionados (TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption) también aceptan una prop <code>class</code> opcional.
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
