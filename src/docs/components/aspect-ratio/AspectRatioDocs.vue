<script setup lang="ts">
import AspectRatioExamples from './AspectRatioExamples.vue'
import { aspectRatioExamplesCode } from '@/docs/snippets/aspectRatioExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(aspectRatioExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <AspectRatioExamples />
    
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
        <CodeBlock :code="aspectRatioExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente AspectRatio</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">AspectRatio</p>
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
                <TableCell>ratio</TableCell>
                <TableCell>number</TableCell>
                <TableCell>1</TableCell>
                <TableCell>La proporción deseada (ancho / alto).</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
