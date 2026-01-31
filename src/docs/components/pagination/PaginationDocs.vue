<script setup lang="ts">
import PaginationExamples from './PaginationExamples.vue'
import { paginationExamplesCode } from '@/docs/snippets/paginationExamples'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(paginationExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <PaginationExamples />
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
        <CodeBlock :code="paginationExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Pagination</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">PaginationItem Props</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell class="font-mono text-xs">variant</TableCell>
                <TableCell>"default" | "secondary" | "tertiary"</TableCell>
                <TableCell>"default"</TableCell>
                <TableCell>Color variant del item activo</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">isActive</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Indica si la página está activa</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">size</TableCell>
                <TableCell>"icon" | "sm" | "default" | "lg"</TableCell>
                <TableCell>"icon"</TableCell>
                <TableCell>Tamaño del item</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Componentes</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell class="font-mono text-xs">Pagination</TableCell>
                <TableCell>Contenedor principal</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">PaginationContent</TableCell>
                <TableCell>Lista de elementos de paginación</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">PaginationItem</TableCell>
                <TableCell>Item individual de página</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">PaginationPrevious</TableCell>
                <TableCell>Botón de página anterior</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">PaginationNext</TableCell>
                <TableCell>Botón de página siguiente</TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="font-mono text-xs">PaginationEllipsis</TableCell>
                <TableCell>Indicador de páginas omitidas</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
