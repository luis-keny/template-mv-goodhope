<script setup lang="ts">
import BadgeExamples from './BadgeExamples.vue'
import { badgeExamplesCode } from '@/docs/snippets/badgeExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-bold tracking-tight">Badge</h2>
      <p class="text-muted-foreground">
        Muestra una insignia o un componente similar a una etiqueta.
      </p>
    </div>

    <DocExampleContainer :code="badgeExamplesCode">
      <BadgeExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Badge</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Badge</p>
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
                <TableCell>'default' | 'secondary' | 'destructive' | 'outline'</TableCell>
                <TableCell>'default'</TableCell>
                <TableCell>Estilo visual del badge.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
