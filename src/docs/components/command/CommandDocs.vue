<script setup lang="ts">
import CommandExamples from './CommandExamples.vue'
import { commandExamplesCode } from '@/docs/snippets/commandExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(commandExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <CommandExamples />
    
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
        <CodeBlock :code="commandExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API (DynamicCommand)</CardTitle>
        <CardDescription>Props del componente reutilizable DynamicCommand</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Props</p>
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
                <TableCell>placeholder</TableCell>
                <TableCell>string</TableCell>
                <TableCell>'Type a command or search...'</TableCell>
                <TableCell>Placeholder para el input de búsqueda.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>emptyMessage</TableCell>
                <TableCell>string</TableCell>
                <TableCell>'No results found.'</TableCell>
                <TableCell>Mensaje a mostrar cuando no hay resultados.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>groups</TableCell>
                <TableCell>CommandGroupProps[]</TableCell>
                <TableCell>[]</TableCell>
                <TableCell>Array de grupos con sus respectivos items.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
