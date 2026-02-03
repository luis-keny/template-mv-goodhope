<script setup lang="ts">
import HoverCardExamples from './HoverCardExamples.vue'
import { hoverCardExamplesCode } from '@/docs/snippets/hoverCardExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(hoverCardExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <HoverCardExamples />
    
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
        <CodeBlock :code="hoverCardExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente HoverCard</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">HoverCard</p>
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
                <TableCell>-</TableCell>
                <TableCell>El estado abierto del hover card cuando se renderiza inicialmente. Use esto cuando no necesite controlar su estado abierto.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>open</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El estado abierto controlado del hover card. Debe usarse junto con @update:open.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>openDelay</TableCell>
                <TableCell>number</TableCell>
                <TableCell>700</TableCell>
                <TableCell>La duración desde que el usuario pasa el mouse por encima hasta que se abre el hover card.</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>closeDelay</TableCell>
                <TableCell>number</TableCell>
                <TableCell>300</TableCell>
                <TableCell>La duración desde que el usuario sale del mouse hasta que se cierra el hover card.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
