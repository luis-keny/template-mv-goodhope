<script setup lang="ts">
import ComboboxExamples from './ComboboxExamples.vue'
import ComboboxOnChangeExample from './ComboboxOnChangeExample.vue'
import { comboboxExamplesCode } from '@/docs/snippets/comboboxExamples'
import { comboboxOnChangeCode } from '@/docs/snippets/comboboxOnChange'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { ref } from 'vue'
import Sonner from '@/components/ui/sonner/Sonner.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(comboboxExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <ComboboxExamples />
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
        <CodeBlock :code="comboboxExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>
    <ComboboxOnChangeExample />
    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Código Fuente (OnChange + Toast)</CardTitle>
          <CardDescription>Copiar y pegar en tu proyecto</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copy">
          <span v-if="!copied">Copiar</span>
          <span v-else>Copiado</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="comboboxOnChangeCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>
    <Sonner />
    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props y eventos del componente Combobox</CardDescription>
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
                <TableCell>modelValue</TableCell>
                <TableCell>string</TableCell>
                <TableCell>''</TableCell>
                <TableCell>Valor seleccionado (v-model)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>items</TableCell>
                <TableCell>{ value: string; label: string }[]</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Fuente de datos para opciones</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>placeholder</TableCell>
                <TableCell>string</TableCell>
                <TableCell>'Select...'</TableCell>
                <TableCell>Texto mostrado cuando no hay selección</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>buttonClass</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Clases extra aplicadas al botón disparador</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>pageSize</TableCell>
                <TableCell>number</TableCell>
                <TableCell>100</TableCell>
                <TableCell>Items cargados por lote para scroll infinito</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Eventos</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Evento</TableHead>
                <TableHead>Payload</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>update:modelValue</TableCell>
                <TableCell>string</TableCell>
                <TableCell>Emitido al cambiar la selección para v-model</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>change</TableCell>
                <TableCell>string | null</TableCell>
                <TableCell>Emitido con valor seleccionado o null al limpiar</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
