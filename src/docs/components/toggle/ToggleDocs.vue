<script setup lang="ts">
import ToggleExamples from './ToggleExamples.vue'
import { toggleExamplesCode } from '@/docs/snippets/toggleExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-8">
    <DocExampleContainer :code="toggleExamplesCode">
      <ToggleExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Toggle</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Toggle</p>
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
                <TableCell>defaultPressed</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>El estado presionado por defecto del toggle.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>pressed</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El estado presionado controlado del toggle.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Deshabilita el toggle.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>variant</TableCell>
                <TableCell>'default' | 'outline'</TableCell>
                <TableCell>'default'</TableCell>
                <TableCell>El estilo visual del toggle.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>size</TableCell>
                <TableCell>'default' | 'sm' | 'lg'</TableCell>
                <TableCell>'default'</TableCell>
                <TableCell>El tamaño del toggle.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
