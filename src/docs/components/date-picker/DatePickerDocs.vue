<script setup lang="ts">
import DatePickerExamples from './DatePickerExamples.vue'
import { datePickerExamplesCode } from '@/docs/snippets/datePickerExamples'
import DatePickerMonthYearExample from './DatePickerMonthYearExample.vue'
import { datePickerMonthYearCode } from '@/docs/snippets/datePickerMonthYear'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { ref } from 'vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(datePickerExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <DatePickerExamples />
    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Source</CardTitle>
          <CardDescription>Copiar y pegar en tu proyecto</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copy">
          <span v-if="!copied">Copy</span>
          <span v-else>Copied</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="datePickerExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <DatePickerMonthYearExample />
    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Source (Month & Year)</CardTitle>
          <CardDescription>Copiar y pegar en tu proyecto</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copy">
          <span v-if="!copied">Copy</span>
          <span v-else>Copied</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="datePickerMonthYearCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props y eventos del componente DatePicker</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Props</p>
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
                <TableCell>modelValue</TableCell>
                <TableCell>DateValue | undefined</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>Fecha seleccionada (v-model)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>placeholder</TableCell>
                <TableCell>string</TableCell>
                <TableCell>'Selecciona una fecha'</TableCell>
                <TableCell>Texto mostrado cuando no hay selección</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>layout</TableCell>
                <TableCell>'month-and-year'</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Layout del calendario (igual que Calendar)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>minValue</TableCell>
                <TableCell>DateValue</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Fecha mínima seleccionable</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>maxValue</TableCell>
                <TableCell>DateValue</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Fecha máxima seleccionable</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>locale</TableCell>
                <TableCell>string</TableCell>
                <TableCell>'es-ES'</TableCell>
                <TableCell>Locale para el formato de la fecha</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Deshabilita la interacción</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>buttonClass</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Clases extra para el botón disparador</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>isDateDisabled</TableCell>
                <TableCell>(date: DateValue) => boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Función adicional para deshabilitar fechas</TableCell>
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
                <TableCell>DateValue | undefined</TableCell>
                <TableCell>Emitido al cambiar la selección para v-model</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>change</TableCell>
                <TableCell>DateValue | null</TableCell>
                <TableCell>Emitido con la fecha seleccionada o null al limpiar</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
