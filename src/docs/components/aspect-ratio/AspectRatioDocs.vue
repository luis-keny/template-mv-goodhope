<script setup lang="ts">
import AspectRatioExamples from './AspectRatioExamples.vue'
import { aspectRatioExamplesCode } from '@/docs/snippets/aspectRatioExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-bold tracking-tight">Aspect Ratio</h2>
      <p class="text-muted-foreground">
        Muestra contenido dentro de una proporción deseada.
      </p>
    </div>

    <DocExampleContainer :code="aspectRatioExamplesCode">
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
