<script setup lang="ts">
import SonnerExamples from './SonnerExamples.vue'
import { sonnerExamplesCode } from '@/docs/snippets/sonnerExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-bold tracking-tight mb-2">Sonner (Toasts)</h2>
      <p class="text-muted-foreground mb-6">
        Notificaciones ligeras y configurables para mostrar mensajes informativos, de éxito o error.
      </p>

      <DocExampleContainer :code="sonnerExamplesCode">
        <SonnerExamples />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Sonner (Toaster)</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Props</p>
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
                <TableCell>position</TableCell>
                <TableCell>'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'</TableCell>
                <TableCell>'top-right'</TableCell>
                <TableCell>Posición del contenedor de toasts</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>richColors</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Habilita colores enriquecidos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>closeButton</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Muestra botón de cierre en los toasts</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>duration</TableCell>
                <TableCell>number</TableCell>
                <TableCell>auto</TableCell>
                <TableCell>Duración por defecto de los toasts</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>expand</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Expande contenido de toasts largos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>visibleToasts</TableCell>
                <TableCell>number</TableCell>
                <TableCell>auto</TableCell>
                <TableCell>Máximo de toasts visibles simultáneamente</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>theme</TableCell>
                <TableCell>'light' | 'dark' | 'system'</TableCell>
                <TableCell>'system'</TableCell>
                <TableCell>Tema del contenedor</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>offset</TableCell>
                <TableCell>string | number | { top?: string | number; right?: string | number; bottom?: string | number; left?: string | number; }</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Separación respecto a los bordes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>toastOptions</TableCell>
                <TableCell>ToastOptions</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Opciones por defecto para los toasts (clases, estilos, duración, etc.)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Slots</p>
          <p class="text-sm">success-icon, info-icon, warning-icon, error-icon, loading-icon, close-icon</p>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Uso del API de toast</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Método</TableHead>
                <TableHead>Firma</TableHead>
                <TableHead>Descripción</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>toast</TableCell>
                <TableCell>(message, options?)</TableCell>
                <TableCell>Muestra un toast genérico</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>toast.success | info | warning | error | loading</TableCell>
                <TableCell>(message, options?)</TableCell>
                <TableCell>Muestra un toast de tipo específico</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>toast.promise</TableCell>
                <TableCell>(promise, { loading, success, error, description })</TableCell>
                <TableCell>Gestiona estados de promesas con toasts</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>toast.dismiss</TableCell>
                <TableCell>(id?)</TableCell>
                <TableCell>Descarta un toast por id o el último</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
