<script setup lang="ts">
import BreadcrumbExamples from './BreadcrumbExamples.vue'
import { breadcrumbExamplesCode } from '@/docs/snippets/breadcrumbExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import ComponentMeta from '@/docs/shared/ComponentMeta.vue'
import { meta } from '@/components/ui/breadcrumb/meta'
</script>

<template>
  <div class="space-y-10">
    <ComponentMeta :meta="meta" />
    <DocExampleContainer
      :code="breadcrumbExamplesCode"
      minHeight="450px"
      title="Breadcrumb"
      description="Una ruta de navegación que permite a los usuarios visualizar la jerarquía de la página actual."
    >
      <BreadcrumbExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API (DynamicBreadcrumb)</CardTitle>
        <CardDescription>Props del componente reutilizable DynamicBreadcrumb</CardDescription>
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
                <TableCell>items</TableCell>
                <TableCell>BreadcrumbItemType[]</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Array de objetos con { label, href, isCurrent }.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>maxItems</TableCell>
                <TableCell>number</TableCell>
                <TableCell>3</TableCell>
                <TableCell>Número máximo de items a mostrar antes de colapsar.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>itemsBeforeCollapse</TableCell>
                <TableCell>number</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Items visibles al inicio cuando está colapsado.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>itemsAfterCollapse</TableCell>
                <TableCell>number</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Items visibles al final cuando está colapsado.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>expansionDirection</TableCell>
                <TableCell>'left' | 'right' | 'middle'</TableCell>
                <TableCell>'middle'</TableCell>
                <TableCell>Dirección en la que se agrupan las migajas ocultas. Mantiene siempre la primera y última.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
