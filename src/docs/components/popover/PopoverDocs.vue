<script setup lang="ts">
import PopoverExamples from './PopoverExamples.vue'
import { popoverExamplesCode } from '@/docs/snippets/popoverExamples'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-semibold mb-2">Popover</h2>
      <p class="text-muted-foreground mb-6">
        Muestra contenido enriquecido en un contenedor flotante que aparece al interactuar con un elemento.
      </p>
      <DocExampleContainer :code="popoverExamplesCode">
        <PopoverExamples />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props comunes para componentes Popover</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Props de PopoverContent</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>align</TableCell>
                <TableCell>"start" | "center" | "end"</TableCell>
                <TableCell>"center"</TableCell>
                <TableCell>Alineación relativa al disparador</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>side</TableCell>
                <TableCell>"top" | "right" | "bottom" | "left"</TableCell>
                <TableCell>"bottom"</TableCell>
                <TableCell>Lado donde aparece el popover</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>sideOffset</TableCell>
                <TableCell>number</TableCell>
                <TableCell>4</TableCell>
                <TableCell>Distancia de desplazamiento desde el disparador</TableCell>
              </TableRow>
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
            Para detalles completos de la API ver la documentación de Reka UI.
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
