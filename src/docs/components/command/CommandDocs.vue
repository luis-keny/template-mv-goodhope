<script setup lang="ts">
import CommandExamples from './CommandExamples.vue'
import { commandExamplesCode } from '@/docs/snippets/commandExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-semibold mb-2">Command</h2>
      <p class="text-muted-foreground mb-6">
        Interfaz de línea de comandos rápida, componible y sin estilos para buscar y filtrar.
      </p>
      <DocExampleContainer :code="commandExamplesCode" minHeight="450px">
        <CommandExamples />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API (DynamicCommand)</CardTitle>
        <CardDescription>Props del componente reutilizable DynamicCommand</CardDescription>
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
                <TableCell>placeholder</TableCell>
                <TableCell>string</TableCell>
                <TableCell>'Type a command or search...'</TableCell>
                <TableCell>Placeholder para el input de búsqueda.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>emptyMessage</TableCell>
                <TableCell>string</TableCell>
                <TableCell>'No results found.'</TableCell>
                <TableCell>Mensaje a mostrar cuando no hay resultados.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>groups</TableCell>
                <TableCell>CommandGroupProps[]</TableCell>
                <TableCell>[]</TableCell>
                <TableCell>Array de grupos con sus respectivos items.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
