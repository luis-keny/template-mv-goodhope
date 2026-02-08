<script setup lang="ts">
import ButtonExamples from './ButtonExamples.vue'
import { buttonExamplesCode } from '@/docs/snippets/buttonExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-bold tracking-tight">Button</h2>
      <p class="text-muted-foreground">
        Botones interactivos con soporte para diferentes variantes, tamaños y estados.
      </p>
    </div>

    <DocExampleContainer :code="buttonExamplesCode">
      <ButtonExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Button</CardDescription>
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
                <TableCell>variant</TableCell>
                <TableCell>"default" | "secondary" | "tertiary" | "outline" | "ghost" | "link" | "destructive"</TableCell>
                <TableCell>"default"</TableCell>
                <TableCell>Variante de estilo visual</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>size</TableCell>
                <TableCell>"xs" | "sm" | "default" | "lg" | "icon" | "icon-sm" | "icon-lg"</TableCell>
                <TableCell>"default"</TableCell>
                <TableCell>Controla el tamaño y espaciado</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>class</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Clases adicionales añadidas al botón</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>as</TableCell>
                <TableCell>string</TableCell>
                <TableCell>"button"</TableCell>
                <TableCell>Etiqueta renderizada vía Primitive (ej. "a")</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>asChild</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Renderizar como hijo (útil para envolver componentes personalizados)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm text-muted-foreground">
            Los eventos se reenvían desde el elemento subyacente (ej. click, focus). No se emiten eventos personalizados.
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
