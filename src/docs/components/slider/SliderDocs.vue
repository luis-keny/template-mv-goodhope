<script setup lang="ts">
import SliderExamples from './SliderExamples.vue'
import { sliderExamplesCode } from '@/docs/snippets/sliderExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import ComponentMeta from '@/docs/shared/ComponentMeta.vue'
import { meta } from '@/components/ui/slider/meta'
</script>

<template>
  <div class="space-y-10">
    <ComponentMeta :meta="meta" />
    <DocExampleContainer :code="sliderExamplesCode">
      <SliderExamples />
    </DocExampleContainer>

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
