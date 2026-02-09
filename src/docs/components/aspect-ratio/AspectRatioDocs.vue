<script setup lang="ts">
import AspectRatioExamples from './AspectRatioExamples.vue'
import { aspectRatioExamplesCode } from '@/docs/snippets/aspectRatioExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <DocExampleContainer 
      :code="aspectRatioExamplesCode"
      title="Aspect Ratio"
      description="Muestra contenido con una relación de aspecto específica."
    >
      <AspectRatioExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente AspectRatio</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">AspectRatio</p>
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
                <TableCell>ratio</TableCell>
                <TableCell>number</TableCell>
                <TableCell>1</TableCell>
                <TableCell>La proporción deseada (ancho / alto).</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
