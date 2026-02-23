<script setup lang="ts">
import HoverCardExamples from './HoverCardExamples.vue'
import { hoverCardExamplesCode } from '@/docs/snippets/hoverCardExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import ComponentMeta from '@/docs/shared/ComponentMeta.vue'
import { meta } from '@/components/ui/hover-card/meta'
</script>

<template>
  <div class="space-y-10">
    <ComponentMeta :meta="meta" />
    <DocExampleContainer :code="hoverCardExamplesCode">
      <HoverCardExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente HoverCard</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">HoverCard</p>
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
                <TableCell>defaultOpen</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El estado abierto del hover card cuando se renderiza inicialmente. Use esto cuando no necesite controlar su estado abierto.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>open</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El estado abierto controlado del hover card. Debe usarse junto con @update:open.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>openDelay</TableCell>
                <TableCell>number</TableCell>
                <TableCell>700</TableCell>
                <TableCell>La duración desde que el usuario pasa el mouse por encima hasta que se abre el hover card.</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>closeDelay</TableCell>
                <TableCell>number</TableCell>
                <TableCell>300</TableCell>
                <TableCell>La duración desde que el usuario sale del mouse hasta que se cierra el hover card.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
