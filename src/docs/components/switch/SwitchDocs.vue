<script setup lang="ts">
import SwitchExamples from './SwitchExamples.vue'
import { switchExamplesCode } from '@/docs/snippets/switchExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-semibold tracking-tight">Switch</h2>
      <p class="text-muted-foreground">
        Un control que permite al usuario alternar entre estados activado y desactivado.
      </p>
    </div>

    <DocExampleContainer 
      :code="switchExamplesCode"
    >
      <SwitchExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Switch</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Switch</p>
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
                <TableCell>boolean</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>El estado controlado del switch (v-model).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>defaultChecked</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>El estado inicial del switch cuando no es controlado.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>required</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Si el switch es obligatorio.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Si el switch está deshabilitado.</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>name</TableCell>
                <TableCell>string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>El nombre del campo para formularios.</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>id</TableCell>
                <TableCell>string</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>El id del elemento.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>value</TableCell>
                <TableCell>string</TableCell>
                <TableCell>"on"</TableCell>
                <TableCell>El valor del switch cuando está activado.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
