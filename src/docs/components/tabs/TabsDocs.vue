<script setup lang="ts">
import TabsExamples from './TabsExamples.vue'
import { tabsExamplesCode } from '@/docs/snippets/tabsExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-6">
    <DocExampleContainer 
      :code="tabsExamplesCode"
    >
      <TabsExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Pestañas para alternar contenido</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Tabs</p>
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
                <TableCell>default-value</TableCell>
                <TableCell>string</TableCell>
                <TableCell>—</TableCell>
                <TableCell>Valor de la pestaña seleccionada inicialmente.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>orientation</TableCell>
                <TableCell>'horizontal' | 'vertical'</TableCell>
                <TableCell>'horizontal'</TableCell>
                <TableCell>Orientación de las pestañas.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">TabsList</p>
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
                <TableCell>class</TableCell>
                <TableCell>HTMLAttributes['class']</TableCell>
                <TableCell>—</TableCell>
                <TableCell>Clases adicionales para el contenedor de pestañas.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">TabsTrigger</p>
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
                <TableCell>value</TableCell>
                <TableCell>string</TableCell>
                <TableCell>—</TableCell>
                <TableCell>Valor único que identifica la pestaña.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Deshabilita la pestaña.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">TabsContent</p>
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
                <TableCell>value</TableCell>
                <TableCell>string</TableCell>
                <TableCell>—</TableCell>
                <TableCell>Debe coincidir con el value del trigger correspondiente.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
