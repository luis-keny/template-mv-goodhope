<script setup lang="ts">
import MenubarExamples from './MenubarExamples.vue'
import { menubarExamplesCode } from '@/docs/snippets/menubarExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copiedUsage = ref(false)

const copyUsage = async () => {
  await navigator.clipboard.writeText(menubarExamplesCode)
  copiedUsage.value = true
  setTimeout(() => (copiedUsage.value = false), 1200)
}

</script>

<template>
  <div class="space-y-6">
    <MenubarExamples />
    
    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Ejemplo de Uso</CardTitle>
          <CardDescription>Cómo utilizar el componente dinámico</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copyUsage">
          <span v-if="!copiedUsage">Copiar</span>
          <span v-else>Copiado</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="menubarExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

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
