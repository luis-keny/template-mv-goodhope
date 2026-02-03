<script setup lang="ts">
import NativeSelectExamples from './NativeSelectExamples.vue'
import { nativeSelectExamplesCode, nativeSelectDynamicComponentCode } from '@/docs/snippets/nativeSelectExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copiedUsage = ref(false)
const copiedComponent = ref(false)

const copyUsage = async () => {
  await navigator.clipboard.writeText(nativeSelectExamplesCode)
  copiedUsage.value = true
  setTimeout(() => (copiedUsage.value = false), 1200)
}

const copyComponent = async () => {
  await navigator.clipboard.writeText(nativeSelectDynamicComponentCode)
  copiedComponent.value = true
  setTimeout(() => (copiedComponent.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <NativeSelectExamples />
    
    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Ejemplo de Uso</CardTitle>
          <CardDescription>Cómo utilizar el componente dinámico</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copyUsage">
          <span v-if="!copiedUsage">Copiar</span>
          <span v-else>Copiado</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="nativeSelectExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Componente Reutilizable</CardTitle>
          <CardDescription>NativeSelectDynamic.vue - Copiar este archivo a tu proyecto</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copyComponent">
          <span v-if="!copiedComponent">Copiar</span>
          <span v-else>Copiado</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="nativeSelectDynamicComponentCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente NativeSelect</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">NativeSelect</p>
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
                <TableCell>string | number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El valor seleccionado del select.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>items</TableCell>
                <TableCell>SelectItems</TableCell>
                <TableCell>[]</TableCell>
                <TableCell>Array de opciones o grupos de opciones.</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>placeholder</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Texto a mostrar cuando no hay ninguna opción seleccionada.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
