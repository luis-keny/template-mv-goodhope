<script setup lang="ts">
import CardExamples from './CardExamples.vue'
import { cardExamplesCode } from '@/docs/snippets/cardExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-bold tracking-tight">Card</h2>
      <p class="text-muted-foreground">
        Muestra contenido en un contenedor estructurado con encabezado, cuerpo y pie.
      </p>
    </div>

    <DocExampleContainer :code="cardExamplesCode">
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
