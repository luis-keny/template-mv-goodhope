<script setup lang="ts">
import ComboboxExamples from './ComboboxExamples.vue'
import ComboboxOnChangeExample from './ComboboxOnChangeExample.vue'
import { comboboxExamplesCode } from '@/docs/snippets/comboboxExamples'
import { comboboxOnChangeCode } from '@/docs/snippets/comboboxOnChange'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import Sonner from '@/components/ui/sonner/Sonner.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <DocExampleContainer 
      :code="comboboxExamplesCode"
      title="Combobox"
      description="Un componente que combina un input de texto con una lista de opciones filtrable."
    >
      <ComboboxExamples />
    </DocExampleContainer>

    <DocExampleContainer 
      :code="comboboxOnChangeCode"
      title="Evento On Change"
      description="Uso del evento @change para ejecutar acciones personalizadas al seleccionar una opción."
    >
      <ComboboxOnChangeExample />
    </DocExampleContainer>

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
