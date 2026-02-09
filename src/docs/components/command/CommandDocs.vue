<script setup lang="ts">
import CommandExamples from './CommandExamples.vue'
import { commandExamplesCode } from '@/docs/snippets/commandExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <DocExampleContainer 
      :code="commandExamplesCode" 
      minHeight="450px"
      title="Command"
      description="Una interfaz de línea de comandos para realizar acciones rápidas."
    >
      <CommandExamples />
    </DocExampleContainer>

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
