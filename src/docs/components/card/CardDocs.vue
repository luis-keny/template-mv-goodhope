<script setup lang="ts">
import CardExamples from './CardExamples.vue'
import { cardExamplesCode } from '@/docs/snippets/cardExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import ComponentMeta from '@/docs/shared/ComponentMeta.vue'
import { meta } from '@/components/ui/card/meta'
</script>

<template>
  <div class="space-y-10">
    <ComponentMeta :meta="meta" />
    <DocExampleContainer
      :code="cardExamplesCode"
      title="Card"
      description="Un contenedor versátil para agrupar contenido relacionado, como texto, imágenes y acciones."
    >
      <CardExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Componentes disponibles</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Componente</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-xs">Card</TableCell>
                <TableCell>Contenedor principal</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardHeader</TableCell>
                <TableCell>Encabezado del card</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardTitle</TableCell>
                <TableCell>Título principal</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardDescription</TableCell>
                <TableCell>Descripción o subtítulo</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardContent</TableCell>
                <TableCell>Contenido del card</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-xs">CardFooter</TableCell>
                <TableCell>Pie del card</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
