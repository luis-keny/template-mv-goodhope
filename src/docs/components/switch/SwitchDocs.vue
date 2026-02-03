<script setup lang="ts">
import SwitchExamples from './SwitchExamples.vue'
import { switchExamplesCode } from '@/docs/snippets/switchExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(switchExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <SwitchExamples />
    
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
        <CodeBlock :code="switchExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Switch</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Switch</p>
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
                <TableCell>checked</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>El estado controlado del switch (v-model).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>defaultChecked</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>El estado inicial del switch cuando no es controlado.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>required</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Si el switch es obligatorio.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Si el switch está deshabilitado.</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>name</TableCell>
                <TableCell>string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>El nombre del campo para formularios.</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>id</TableCell>
                <TableCell>string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>El id del elemento.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>value</TableCell>
                <TableCell>string</TableCell>
                <TableCell>"on"</TableCell>
                <TableCell>El valor del switch cuando está activado.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
