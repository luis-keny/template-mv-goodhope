<script setup lang="ts">
import SeparatorExamples from './SeparatorExamples.vue'
import { separatorExamplesCode } from '@/docs/snippets/separatorExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-bold tracking-tight mb-2">Separator</h2>
      <p class="text-muted-foreground mb-6">
        Utiliza el componente Separator para dividir visualmente secciones de contenido de forma clara y organizada.
      </p>

      <DocExampleContainer :code="separatorExamplesCode">
        <SeparatorExamples />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Separador visual de contenido</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Separator</p>
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
                <TableCell>orientation</TableCell>
                <TableCell>'horizontal' | 'vertical'</TableCell>
                <TableCell>'horizontal'</TableCell>
                <TableCell>Orientación del separador.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>decorative</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Si es true, se ignora en la accesibilidad (aria-hidden).</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>class</TableCell>
                <TableCell>HTMLAttributes['class']</TableCell>
                <TableCell>—</TableCell>
                <TableCell>Clases adicionales para estilos.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
