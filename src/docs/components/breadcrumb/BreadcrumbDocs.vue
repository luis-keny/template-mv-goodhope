<script setup lang="ts">
import BreadcrumbExamples from './BreadcrumbExamples.vue'
import { breadcrumbExamplesCode } from '@/docs/snippets/breadcrumbExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const copied = ref(false)
const copy = async () => {
  await navigator.clipboard.writeText(breadcrumbExamplesCode)
  copied.value = true
  setTimeout(() => (copied.value = false), 1200)
}
</script>

<template>
  <div class="space-y-6">
    <BreadcrumbExamples />
    
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
        <CodeBlock :code="breadcrumbExamplesCode" language="vue" :showLineNumbers="true" />
      </CardContent>
    </Card>

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
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
