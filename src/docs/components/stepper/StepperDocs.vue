<script setup lang="ts">
import StepperExamples from './StepperExamples.vue'
import { stepperExamplesCode } from '@/docs/snippets/stepperExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(stepperExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <StepperExamples />
    
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
        <CodeBlock :code="stepperExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props de los componentes Stepper</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Stepper</p>
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
                <TableCell>defaultValue</TableCell>
                <TableCell>number</TableCell>
                <TableCell>1</TableCell>
                <TableCell>El paso activo por defecto.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>modelValue</TableCell>
                <TableCell>number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El paso activo controlado.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>orientation</TableCell>
                <TableCell>'horizontal' | 'vertical'</TableCell>
                <TableCell>'horizontal'</TableCell>
                <TableCell>La orientación del stepper.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">StepperItem</p>
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
                <TableCell>step</TableCell>
                <TableCell>number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El número de paso asociado a este item.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Si el paso está deshabilitado.</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>completed</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Si el paso está completado.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
