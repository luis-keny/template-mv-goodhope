<script setup lang="ts">
import AvatarExamples from './AvatarExamples.vue'
import { avatarExamplesCode } from '@/docs/snippets/avatarExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
</script>

<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-bold tracking-tight">Avatar</h2>
      <p class="text-muted-foreground">
        Un elemento de imagen que representa al usuario o entidad.
      </p>
    </div>

    <DocExampleContainer :code="avatarExamplesCode">
      <AvatarExamples />
    </DocExampleContainer>

    <Card>
      <CardHeader>
        <CardTitle>API</CardTitle>
        <CardDescription>Props del componente Avatar</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm font-medium mb-2">Avatar</p>
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
                <TableCell>size</TableCell>
                <TableCell>'sm' | 'base' | 'lg'</TableCell>
                <TableCell>'sm'</TableCell>
                <TableCell>El tamaño del avatar.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>shape</TableCell>
                <TableCell>'circle' | 'square'</TableCell>
                <TableCell>'circle'</TableCell>
                <TableCell>La forma del avatar.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
