<script setup lang="ts">
import TextareaExamples from './TextareaExamples.vue'
import { textareaExamplesCode } from '@/docs/snippets/textareaExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-8">
    <DocExampleContainer :code="textareaExamplesCode">
      <TextareaExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Textarea</CardDescription>
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
                <TableCell>string | number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El valor enlazado (v-model)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>defaultValue</TableCell>
                <TableCell>string | number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El valor por defecto inicial</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>class</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Clases adicionales</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm text-muted-foreground">
            Además, acepta todos los atributos estándar de un elemento <code>&lt;textarea&gt;</code> HTML (como placeholder, rows, disabled, etc.).
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
