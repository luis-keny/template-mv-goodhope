<script setup lang="ts">
import LabelExamples from './LabelExamples.vue'
import { labelExamplesCode } from '@/docs/snippets/labelExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-semibold mb-2">Label</h2>
      <p class="text-muted-foreground mb-6">
        Muestra una etiqueta accesible para un elemento de formulario.
      </p>
      <DocExampleContainer :code="labelExamplesCode">
        <LabelExamples />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Label</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Label</p>
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
                <TableCell>for</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El id del elemento al que está asociada la etiqueta.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>as</TableCell>
                <TableCell>string | Component</TableCell>
                <TableCell>'label'</TableCell>
                <TableCell>El elemento o componente HTML subyacente a renderizar.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
