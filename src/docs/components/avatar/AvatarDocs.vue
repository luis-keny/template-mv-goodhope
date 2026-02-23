<script setup lang="ts">
import AvatarExamples from './AvatarExamples.vue'
import { avatarExamplesCode } from '@/docs/snippets/avatarExamples'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import DocExampleContainer from '@/docs/shared/DocExampleContainer.vue'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import ComponentMeta from '@/docs/shared/ComponentMeta.vue'
import { meta } from '@/components/ui/avatar/meta'
</script>

<template>
  <div class="space-y-10">
    <ComponentMeta :meta="meta" />
    <DocExampleContainer
      :code="avatarExamplesCode"
      title="Avatar"
      description="Un elemento visual que representa a un usuario mediante una imagen, iniciales o un icono de reserva."
    >
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
