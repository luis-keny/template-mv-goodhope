<script setup lang="ts">
import ScrollAreaExamples from './ScrollAreaExamples.vue'
import { scrollAreaExamplesCode } from '@/docs/snippets/scrollAreaExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(scrollAreaExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <ScrollAreaExamples />
    
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
        <CodeBlock :code="scrollAreaExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente ScrollArea</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">ScrollArea</p>
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
                <TableCell>type</TableCell>
                <TableCell>'auto' | 'always' | 'scroll' | 'hover'</TableCell>
                <TableCell>'hover'</TableCell>
                <TableCell>Describe la naturaleza del comportamiento de visibilidad de la barra de desplazamiento.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>scrollHideDelay</TableCell>
                <TableCell>number</TableCell>
                <TableCell>600</TableCell>
                <TableCell>Si el tipo es 'scroll' o 'hover', este es el tiempo en milisegundos antes de que la barra de desplazamiento se oculte.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>dir</TableCell>
                <TableCell>'ltr' | 'rtl'</TableCell>
                <TableCell>-</TableCell>
                <TableCell>La dirección de lectura del área de desplazamiento.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
