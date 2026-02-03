<script setup lang="ts">
import SliderExamples from './SliderExamples.vue'
import { sliderExamplesCode } from '@/docs/snippets/sliderExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(sliderExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <SliderExamples />
    
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
        <CodeBlock :code="sliderExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Slider</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Slider</p>
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
                <TableCell>number[]</TableCell>
                <TableCell>[0]</TableCell>
                <TableCell>El valor por defecto del slider.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>modelValue</TableCell>
                <TableCell>number[]</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El valor controlado del slider.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>min</TableCell>
                <TableCell>number</TableCell>
                <TableCell>0</TableCell>
                <TableCell>El valor mínimo del rango.</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>max</TableCell>
                <TableCell>number</TableCell>
                <TableCell>100</TableCell>
                <TableCell>El valor máximo del rango.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>step</TableCell>
                <TableCell>number</TableCell>
                <TableCell>1</TableCell>
                <TableCell>El incremento entre cada paso.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>minStepsBetweenThumbs</TableCell>
                <TableCell>number</TableCell>
                <TableCell>0</TableCell>
                <TableCell>La distancia mínima entre los controles deslizantes.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Deshabilita el slider.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>orientation</TableCell>
                <TableCell>'horizontal' | 'vertical'</TableCell>
                <TableCell>'horizontal'</TableCell>
                <TableCell>La orientación del slider.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
