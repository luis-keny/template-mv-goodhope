<script setup lang="ts">
import AccordionExamples from './AccordionExamples.vue'
import { accordionExamplesCode } from '@/docs/snippets/accordionExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import ComponentMeta from '@/docs/shared/ComponentMeta.vue'
import { meta } from '@/components/ui/accordion/meta'
</script>

<template>
  <div class="space-y-10">
    <ComponentMeta :meta="meta" />
    <DocExampleContainer
      :code="accordionExamplesCode"
      title="Accordion"
      description="Un conjunto de paneles de contenido apilados verticalmente que se pueden expandir o contraer."
    >
      <AccordionExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Accordion</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Accordion</p>
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
                <TableCell>type</TableCell>
                <TableCell>'single' | 'multiple'</TableCell>
                <TableCell>'single'</TableCell>
                <TableCell>Determina si se puede abrir uno o múltiples items a la vez.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>collapsible</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Permite cerrar todos los items en modo 'single'.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>defaultValue</TableCell>
                <TableCell>string | string[]</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El valor del item(s) abierto por defecto.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>modelValue</TableCell>
                <TableCell>string | string[]</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El valor controlado del item(s) abierto.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Deshabilita la interacción con el acordeón.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">AccordionItem</p>
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
                <TableCell>value</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Un valor único para el item.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Deshabilita este item específico.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
