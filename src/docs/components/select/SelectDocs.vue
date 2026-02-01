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
          <CardTitle>Código Fuente</CardTitle>
          <CardDescription>Copiar y pegar en tu proyecto</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copy">
          <span v-if="!copied">Copiar</span>
          <span v-else>Copiado</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="selectExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente DataSelect</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Prop</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Default</TableHead>
              <TableHead>Descripción</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell class="font-mono text-xs">modelValue</TableCell>
              <TableCell>string</TableCell>
              <TableCell>-</TableCell>
              <TableCell>Valor seleccionado (v-model)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">items</TableCell>
              <TableCell>any[]</TableCell>
              <TableCell>[]</TableCell>
              <TableCell>Array de opciones</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">placeholder</TableCell>
              <TableCell>string</TableCell>
              <TableCell>'Select an option'</TableCell>
              <TableCell>Texto placeholder</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">itemText</TableCell>
              <TableCell>string | (item) => string</TableCell>
              <TableCell>'label'</TableCell>
              <TableCell>Propiedad o función para obtener el texto</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">itemValue</TableCell>
              <TableCell>string | (item) => string</TableCell>
              <TableCell>'value'</TableCell>
              <TableCell>Propiedad o función para obtener el valor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">itemDisabled</TableCell>
              <TableCell>string | (item) => boolean</TableCell>
              <TableCell>'disabled'</TableCell>
              <TableCell>Propiedad o función para deshabilitar items</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-mono text-xs">disabled</TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>false</TableCell>
              <TableCell>Deshabilita todo el select</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>Native API</CardTitle>
        <CardDescription>Componentes disponibles para uso manual</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Componente</TableHead>
              <TableHead>Descripción</TableHead>
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
