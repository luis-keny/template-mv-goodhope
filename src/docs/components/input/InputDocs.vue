<script setup lang="ts">
import InputExamples from './InputExamples.vue'
import { inputExamplesCode } from '@/docs/snippets/inputExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <DocExampleContainer :code="inputExamplesCode">
      <InputExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props y eventos del componente Input</CardDescription>
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
                <TableCell>string | number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Valor controlado del input (v-model)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>defaultValue</TableCell>
                <TableCell>string | number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Valor por defecto cuando no está controlado</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>class</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Clases adicionales para el input</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>(fallthrough)</TableCell>
                <TableCell>type, placeholder, disabled, name, etc.</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Atributos HTML estándar encaminados al input raíz</TableCell>
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
                <TableCell>string | number</TableCell>
                <TableCell>Emitido al cambiar el valor (v-model)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
