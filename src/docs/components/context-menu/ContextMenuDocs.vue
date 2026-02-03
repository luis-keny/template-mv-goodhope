<script setup lang="ts">
import ContextMenuExamples from './ContextMenuExamples.vue'
import { contextMenuExamplesCode } from '@/docs/snippets/contextMenuExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(contextMenuExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <ContextMenuExamples />
    
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
        <CodeBlock :code="contextMenuExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API (DynamicContextMenu)</CardTitle>
        <CardDescription>Props del componente reutilizable DynamicContextMenu</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Props</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>items</TableCell>
                <TableCell>MenuItem[]</TableCell>
                <TableCell>Array de objetos que definen la estructura del menú.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>menuClass</TableCell>
                <TableCell>string</TableCell>
                <TableCell>Clases CSS adicionales para el contenido del menú.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <div>
          <p class="text-sm font-medium mb-2">MenuItem Type</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Propiedad</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>type</TableCell>
                <TableCell>'item' | 'separator' | 'checkbox' | 'radio-group' | 'sub' | 'label'</TableCell>
                <TableCell>Tipo de elemento del menú. Por defecto es 'item'.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>label</TableCell>
                <TableCell>string</TableCell>
                <TableCell>Texto a mostrar.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>icon</TableCell>
                <TableCell>Component</TableCell>
                <TableCell>Icono opcional (componente Vue).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>items</TableCell>
                <TableCell>MenuItem[]</TableCell>
                <TableCell>Sub-items para 'sub' o 'radio-group'.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
