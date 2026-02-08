<script setup lang="ts">
import RadioGroupExamples from './RadioGroupExamples.vue'
import { radioGroupExamplesCode } from '@/docs/snippets/radioGroupExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-semibold mb-2">Radio Group</h2>
      <p class="text-muted-foreground mb-6">
        Un conjunto de botones de radio donde solo se puede seleccionar un item a la vez.
      </p>
      <DocExampleContainer :code="radioGroupExamplesCode">
        <RadioGroupExamples />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props de los componentes Radio Group</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">RadioGroup</p>
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
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El valor del item seleccionado por defecto.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>modelValue</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El valor controlado del item seleccionado.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>orientation</TableCell>
                <TableCell>'horizontal' | 'vertical'</TableCell>
                <TableCell>'vertical'</TableCell>
                <TableCell>La orientación del grupo.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">RadioGroupItem</p>
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
                <TableCell>El valor único del item.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Si el item está deshabilitado.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
