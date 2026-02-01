<script setup lang="ts">
import CalendarExamples from './CalendarExamples.vue'
import { calendarExamplesCode } from '@/docs/snippets/calendarExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { ref } from 'vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(calendarExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <CalendarExamples />
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
        <CodeBlock :code="calendarExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Calendar</CardDescription>
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
                <TableCell>DateValue | DateValue[] | undefined</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>Fecha(s) seleccionada(s) (v-model)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>defaultValue</TableCell>
                <TableCell>DateValue</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>Fecha seleccionada por defecto</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>placeholder</TableCell>
                <TableCell>DateValue</TableCell>
                <TableCell>auto</TableCell>
                <TableCell>Mes a mostrar cuando no hay selección</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>numberOfMonths</TableCell>
                <TableCell>number</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Meses renderizados uno al lado del otro</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>weekStartsOn</TableCell>
                <TableCell>0 | 1 | 2 | 3 | 4 | 5 | 6</TableCell>
                <TableCell>0</TableCell>
                <TableCell>Día de inicio de la semana</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>weekdayFormat</TableCell>
                <TableCell>'narrow' | 'short' | 'long'</TableCell>
                <TableCell>'narrow'</TableCell>
                <TableCell>Formato para encabezados de días de la semana</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>fixedWeeks</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Mostrar siempre 6 semanas</TableCell>
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
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Deshabilitar interacciones</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>readonly</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Modo solo lectura</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>initialFocus</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Enfocar un día al montar</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>pagedNavigation</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Navegar por numberOfMonths</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>multiple</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Permitir seleccionar múltiples fechas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>isDateDisabled</TableCell>
                <TableCell>(date: DateValue) => boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Coincidencia personalizada de deshabilitado</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>isDateUnavailable</TableCell>
                <TableCell>(date: DateValue) => boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Coincidencia personalizada de no disponible</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>nextPage</TableCell>
                <TableCell>(placeholder: DateValue) => DateValue</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Sobrescribir cálculo de página siguiente</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>prevPage</TableCell>
                <TableCell>(placeholder: DateValue) => DateValue</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Sobrescribir cálculo de página anterior</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>dir</TableCell>
                <TableCell>'ltr' | 'rtl'</TableCell>
                <TableCell>global</TableCell>
                <TableCell>Modo de dirección de lectura</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>locale</TableCell>
                <TableCell>string</TableCell>
                <TableCell>global</TableCell>
                <TableCell>Localización usada para formateo</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disableDaysOutsideCurrentView</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Deshabilitar selección de días fuera de la vista actual</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm text-muted-foreground">
            Para selección de rangos, usa el componente RangeCalendar exportado bajo <code>@/components/ui/range-calendar</code>.
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
