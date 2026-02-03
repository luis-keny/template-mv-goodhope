<script setup lang="ts">
import RangeCalendarExamples from './RangeCalendarExamples.vue'
import { rangeCalendarExamplesCode } from '@/docs/snippets/rangeCalendarExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(rangeCalendarExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <RangeCalendarExamples />
    
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
        <CodeBlock :code="rangeCalendarExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente RangeCalendar</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">RangeCalendar</p>
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
                <TableCell>DateRange</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El rango de fechas seleccionado (start, end).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>defaultValue</TableCell>
                <TableCell>DateRange</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El rango de fechas seleccionado por defecto.</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>placeholder</TableCell>
                <TableCell>DateValue</TableCell>
                <TableCell>-</TableCell>
                <TableCell>La fecha placeholder que determina qué mes se muestra cuando no hay fecha seleccionada.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>locale</TableCell>
                <TableCell>string</TableCell>
                <TableCell>'en-US'</TableCell>
                <TableCell>El locale a usar para formatear fechas.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>minValue</TableCell>
                <TableCell>DateValue</TableCell>
                <TableCell>-</TableCell>
                <TableCell>La fecha mínima permitida.</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>maxValue</TableCell>
                <TableCell>DateValue</TableCell>
                <TableCell>-</TableCell>
                <TableCell>La fecha máxima permitida.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Si el calendario está deshabilitado.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
