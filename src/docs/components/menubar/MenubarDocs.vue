<script setup lang="ts">
import MenubarExamples from './MenubarExamples.vue'
import { menubarExamplesCode } from '@/docs/snippets/menubarExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-semibold mb-2">Menubar</h2>
      <p class="text-muted-foreground mb-6">
        Un menú persistente común en aplicaciones de escritorio que proporciona acceso rápido a un conjunto consistente de comandos.
      </p>
      <DocExampleContainer :code="menubarExamplesCode">
        <MenubarExamples />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API (MenubarDynamic)</CardTitle>
        <CardDescription>Props y tipos del componente dinámico MenubarDynamic</CardDescription>
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
                <TableCell>menus</TableCell>
                <TableCell>MenubarMenuDef[]</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Array de definiciones de menú para renderizar dinámicamente.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">MenubarMenuDef (Interfaz)</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Propiedad</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>trigger</TableCell>
                <TableCell>string</TableCell>
                <TableCell>Texto que activa el menú al hacer clic.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>items</TableCell>
                <TableCell>MenuItem[]</TableCell>
                <TableCell>Lista de elementos dentro del menú.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">MenuItem (Interfaz)</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Propiedad</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>type</TableCell>
                <TableCell>'item' | 'checkbox' | 'separator' | 'sub' | 'radio-group'</TableCell>
                <TableCell>Tipo de elemento del menú.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>label</TableCell>
                <TableCell>string</TableCell>
                <TableCell>Texto visible del elemento.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>shortcut</TableCell>
                <TableCell>string</TableCell>
                <TableCell>Atajo de teclado visual.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>Desactiva la interacción con el elemento.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>action</TableCell>
                <TableCell>() => void</TableCell>
                <TableCell>Función a ejecutar al hacer clic.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>children</TableCell>
                <TableCell>MenuItem[]</TableCell>
                <TableCell>Elementos para submenús (cuando type es 'sub').</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
