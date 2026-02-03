<script setup lang="ts">
import MenubarExamples from './MenubarExamples.vue'
import { menubarExamplesCode, menubarDynamicComponentCode } from '@/docs/snippets/menubarExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copiedUsage = ref(false)
const copiedComponent = ref(false)

const copyUsage = async () => {
  await navigator.clipboard.writeText(menubarExamplesCode)
  copiedUsage.value = true
  setTimeout(() => (copiedUsage.value = false), 1200)
}

const copyComponent = async () => {
  await navigator.clipboard.writeText(menubarDynamicComponentCode)
  copiedComponent.value = true
  setTimeout(() => (copiedComponent.value = false), 1200)
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
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Componente Reutilizable</CardTitle>
          <CardDescription>MenubarDynamic.vue - Copiar este archivo a tu proyecto</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copyComponent">
          <span v-if="!copiedComponent">Copiar</span>
          <span v-else>Copiado</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="menubarDynamicComponentCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Menubar</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Menubar</p>
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
                <TableCell>defaultValue</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El valor del elemento del menú que debe estar activo por defecto.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>modelValue</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>El valor controlado del elemento del menú activo.</TableCell>
              </TableRow>
               <TableRow>
                <TableCell>dir</TableCell>
                <TableCell>'ltr' | 'rtl'</TableCell>
                <TableCell>-</TableCell>
                <TableCell>La dirección de lectura del menú.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>loop</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Si es true, la navegación con el teclado volverá al principio al llegar al final.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
