<script setup lang="ts">
import CheckboxExamples from './CheckboxExamples.vue'
import { checkboxExamplesCode } from '@/docs/snippets/checkboxExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-bold tracking-tight">Checkbox</h2>
      <p class="text-muted-foreground">
        Un control que permite al usuario seleccionar una o más opciones de un conjunto.
      </p>
    </div>

    <DocExampleContainer :code="checkboxExamplesCode">
      <CheckboxExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Checkbox</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Checkbox</p>
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
                <TableCell>checked</TableCell>
                <TableCell>boolean | 'indeterminate'</TableCell>
                <TableCell>false</TableCell>
                <TableCell>El estado controlado del checkbox.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>defaultChecked</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>El estado inicial del checkbox cuando no es controlado.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Si es true, impide la interacción del usuario.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>required</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Si es true, indica que el usuario debe marcar el checkbox antes de enviar el formulario.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
