<script setup lang="ts">
import DrawerExamples from './DrawerExamples.vue'
import CommonDrawerExample from './CommonDrawerExample.vue'
import { drawerExamplesCode } from '@/docs/snippets/drawerExamples'
import { commonDrawerExampleCode } from '@/docs/snippets/commonDrawerExample'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-semibold mb-2">Drawer</h2>
      <p class="text-muted-foreground mb-6">
        Un componente de panel inferior (cajón) optimizado para interacciones táctiles y móviles.
      </p>
      <DocExampleContainer :code="drawerExamplesCode">
        <DrawerExamples />
      </DocExampleContainer>
    </section>

    <section>
      <h3 class="text-xl font-medium mb-2">Drawer Reutilizable (Common)</h3>
      <p class="text-muted-foreground mb-6">
        Uso de CommonDrawer con el store centralizado para manejar paneles inferiores de forma global.
      </p>
      <DocExampleContainer :code="commonDrawerExampleCode">
        <CommonDrawerExample />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Drawer</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">CommonDrawer</p>
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
                <TableCell>id</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Identificador único para el drawer en el store.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>title</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Título del drawer.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>description</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Descripción del contenido del drawer.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>showFooter</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Si se debe mostrar la sección del footer.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Drawer</p>
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
                <TableCell>activeSnapPoint</TableCell>
                <TableCell>number | string | null</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El punto de ajuste activo actual.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>closeThreshold</TableCell>
                <TableCell>number</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Porcentaje de arrastre necesario para cerrar el drawer.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>defaultOpen</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>El estado abierto del drawer cuando se renderiza inicialmente.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>open</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El estado abierto controlado del drawer.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>shouldScaleBackground</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Si el fondo debe escalarse cuando el drawer está abierto.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
