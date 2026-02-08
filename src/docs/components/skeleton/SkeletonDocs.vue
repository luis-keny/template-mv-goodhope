<script setup lang="ts">
import SkeletonExamples from './SkeletonExamples.vue'
import { skeletonExamplesCode } from '@/docs/snippets/skeletonExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-bold tracking-tight mb-2">Skeleton</h2>
      <p class="text-muted-foreground mb-6">
        Se usa para mostrar un estado de carga mientras se espera que se cargue el contenido.
      </p>

      <DocExampleContainer :code="skeletonExamplesCode">
        <SkeletonExamples />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Skeleton</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Skeleton</p>
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
                <TableCell>class</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Clases CSS para estilizar el componente.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
