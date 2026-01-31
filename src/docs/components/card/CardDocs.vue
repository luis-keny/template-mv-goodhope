<script setup lang="ts">
import CardExamples from './CardExamples.vue'
import { cardExamplesCode } from '@/docs/snippets/cardExamples'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(cardExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <CardExamples />
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
        <CodeBlock :code="cardExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Componentes disponibles</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Component</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs">Card</TableCell>
                <TableCell>Contenedor principal</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardHeader</TableCell>
                <TableCell>Encabezado del card</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardTitle</TableCell>
                <TableCell>Título principal</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardDescription</TableCell>
                <TableCell>Descripción o subtítulo</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardContent</TableCell>
                <TableCell>Contenido del card</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardFooter</TableCell>
                <TableCell>Pie del card</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
