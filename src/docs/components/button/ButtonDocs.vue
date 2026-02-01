<script setup lang="ts">
import ButtonExamples from './ButtonExamples.vue'
import { buttonExamplesCode } from '@/docs/snippets/buttonExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(buttonExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <ButtonExamples />
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
        <CodeBlock :code="buttonExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Button</CardDescription>
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
                <TableCell>variant</TableCell>
                <TableCell>"default" | "secondary" | "tertiary" | "outline" | "ghost" | "link" | "destructive"</TableCell>
                <TableCell>"default"</TableCell>
                <TableCell>Variante de estilo visual</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>size</TableCell>
                <TableCell>"xs" | "sm" | "default" | "lg" | "icon" | "icon-sm" | "icon-lg"</TableCell>
                <TableCell>"default"</TableCell>
                <TableCell>Controla el tamaño y espaciado</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>class</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Clases adicionales añadidas al botón</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>as</TableCell>
                <TableCell>string</TableCell>
                <TableCell>"button"</TableCell>
                <TableCell>Etiqueta renderizada vía Primitive (ej. "a")</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>asChild</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Renderizar como hijo (útil para envolver componentes personalizados)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm text-muted-foreground">
            Los eventos se reenvían desde el elemento subyacente (ej. click, focus). No se emiten eventos personalizados.
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
