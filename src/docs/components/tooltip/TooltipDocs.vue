<script setup lang="ts">
import TooltipExamples from './TooltipExamples.vue'
import { tooltipExamplesCode } from '@/docs/snippets/tooltipExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(tooltipExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <TooltipExamples />
    
    <Card>
      <CardHeader class="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Código Fuente</CardTitle>
          <CardDescription>Copiar y pegar en tu proyecto</CardDescription>
        </div>
        <Button variant="outline" size="sm" @click="copy">
          <span v-if="!copied">Copiar</span>
          <span v-else>Copiado</span>
        </Button>
      </CardHeader>
      <CardContent>
        <CodeBlock :code="tooltipExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props de los componentes Tooltip</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">TooltipProvider</p>
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
                <TableCell>delayDuration</TableCell>
                <TableCell>number</TableCell>
                <TableCell>700</TableCell>
                <TableCell>La duración desde que el ratón entra en un disparador de tooltip hasta que se abre el tooltip.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>skipDelayDuration</TableCell>
                <TableCell>number</TableCell>
                <TableCell>300</TableCell>
                <TableCell>Cuánto tiempo, en milisegundos, esperar antes de restablecer el comportamiento de salto de retardo.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disableHoverableContent</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Evita que el contenido del Tooltip permanezca abierto cuando se pasa el ratón por encima.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">Tooltip</p>
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
                <TableCell>false</TableCell>
                <TableCell>El estado abierto del tooltip cuando se renderiza inicialmente. Usar cuando no necesitas controlar su estado abierto.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>open</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>El estado controlado abierto del tooltip.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>delayDuration</TableCell>
                <TableCell>number</TableCell>
                <TableCell>700</TableCell>
                <TableCell>Sobrescribe el prop delayDuration del Provider.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disableHoverableContent</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>undefined</TableCell>
                <TableCell>Sobrescribe el prop disableHoverableContent del Provider.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">TooltipContent</p>
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
                <TableCell>side</TableCell>
                <TableCell>"top" | "right" | "bottom" | "left"</TableCell>
                <TableCell>"top"</TableCell>
                <TableCell>El lado preferido del disparador para renderizar.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>sideOffset</TableCell>
                <TableCell>number</TableCell>
                <TableCell>4</TableCell>
                <TableCell>La distancia en píxeles desde el disparador.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>align</TableCell>
                <TableCell>"start" | "center" | "end"</TableCell>
                <TableCell>"center"</TableCell>
                <TableCell>La alineación preferida contra el disparador.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>alignOffset</TableCell>
                <TableCell>number</TableCell>
                <TableCell>0</TableCell>
                <TableCell>Un desplazamiento en píxeles desde la alineación "start" o "end".</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>avoidCollisions</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>true</TableCell>
                <TableCell>Cuando es true, anula las preferencias de side y align para evitar colisiones con los bordes del boundary.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
