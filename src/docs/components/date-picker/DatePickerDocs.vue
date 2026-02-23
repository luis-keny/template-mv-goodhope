<script setup lang="ts">
import DatePickerExamples from './DatePickerExamples.vue'
import { datePickerExamplesCode } from '@/docs/snippets/datePickerExamples'
import DatePickerMonthYearExample from './DatePickerMonthYearExample.vue'
import { datePickerMonthYearCode } from '@/docs/snippets/datePickerMonthYear'
import DatePickerTodayExample from './DatePickerTodayExample.vue'
import { datePickerTodayCode } from '@/docs/snippets/datePickerToday'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <DocExampleContainer :code="datePickerExamplesCode" title="Date Picker" description="Un componente de selección de fecha que permite a los usuarios elegir una fecha única de un calendario desplegable.">
      <DatePickerExamples />
    </DocExampleContainer>

    <DocExampleContainer :code="datePickerMonthYearCode" title="Mes y Año" description="Variación con selectores de mes y año integrados para una navegación más rápida.">
      <DatePickerMonthYearExample />
    </DocExampleContainer>

    <DocExampleContainer :code="datePickerTodayCode" title="Fecha Actual por Defecto" description="Ejemplo que muestra cómo inicializar el selector con la fecha del día de hoy utilizando @internationalized/date.">
      <DatePickerTodayExample />
    </DocExampleContainer>

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
