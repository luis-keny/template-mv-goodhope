<script setup lang="ts">
import NavigationMenuExamples from './NavigationMenuExamples.vue'
import { 
  navigationMenuExamplesCode, 
  reusableNavigationMenuCode, 
  navigationListItemCode 
} from '@/docs/snippets/navigationMenuExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-10">
    <section>
      <h2 class="text-2xl font-semibold mb-2">Navigation Menu</h2>
      <p class="text-muted-foreground mb-6">
        Un menú de navegación responsivo con soporte para vistas previas de contenido.
      </p>
      <DocExampleContainer 
        :code="[navigationMenuExamplesCode, reusableNavigationMenuCode, navigationListItemCode]" 
        :language="['vue', 'vue', 'vue']"
      >
        <NavigationMenuExamples />
      </DocExampleContainer>
    </section>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Componentes del sistema Navigation Menu</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">NavigationMenu</p>
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
                <TableCell>El valor del item de menú que debe estar activo por defecto.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>delayDuration</TableCell>
                <TableCell>number</TableCell>
                <TableCell>200</TableCell>
                <TableCell>La duración desde que el ratón entra en un disparador hasta que se abre el contenido.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
