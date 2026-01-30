<script setup lang="ts">
import SelectExamples from './SelectExamples.vue'
import { selectExamplesCode } from '@/docs/snippets/selectExamples'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(selectExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <SelectExamples />
    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Source</CardTitle>
          <CardDescription>Copy and paste into your project</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copy">
          <span v-if="!copied">Copy</span>
          <span v-else>Copied</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="selectExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Componentes disponibles</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Component</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell class="font-mono text-xs">Select</TableCell>
              <TableCell>Contenedor principal del select</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">SelectTrigger</TableCell>
              <TableCell>Botón que abre el select</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">SelectValue</TableCell>
              <TableCell>Muestra el valor seleccionado</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">SelectContent</TableCell>
              <TableCell>Contenedor de las opciones</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">SelectItem</TableCell>
              <TableCell>Opción individual</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">SelectGroup</TableCell>
              <TableCell>Agrupa múltiples items</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">SelectLabel</TableCell>
              <TableCell>Etiqueta para un grupo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">SelectSeparator</TableCell>
              <TableCell>Separador visual entre items</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
</template>
