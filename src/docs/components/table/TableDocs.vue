<script setup lang="ts">
import TableExamples from './TableExamples.vue'
import { tableExamplesCode } from '@/docs/snippets/tableExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import ComponentMeta from '@/docs/shared/ComponentMeta.vue'
import { meta } from '@/components/ui/table/meta'
</script>

<template>
  <div class="space-y-6">
    <ComponentMeta :meta="meta" />
    <DocExampleContainer
      :code="tableExamplesCode"
    >
      <TableExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Table</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Table</p>
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
                <TableCell>Clases adicionales</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm text-muted-foreground">
            Los componentes relacionados (TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption) también aceptan una prop <code>class</code> opcional.
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
