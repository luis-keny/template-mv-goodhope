<script setup lang="ts">
import AlertExamples from './AlertExamples.vue'
import { alertExamplesCode } from '@/docs/snippets/alertExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-bold tracking-tight">Alert</h2>
      <p class="text-muted-foreground">
        Muestra un mensaje de llamada a la acción para la atención del usuario.
      </p>
    </div>

    <DocExampleContainer :code="alertExamplesCode">
      <AlertExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Alert</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Alert</p>
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
                <TableCell>variant</TableCell>
                <TableCell>'default' | 'destructive'</TableCell>
                <TableCell>'default'</TableCell>
                <TableCell>Estilo visual de la alerta.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
