export const cardExamplesCode = `<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <Card class="w-full max-w-sm mx-auto">
    <CardHeader>
      <CardTitle>Crear cuenta</CardTitle>
      <CardDescription>Ingresa tus datos para crear una cuenta</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <div class="space-y-2">
        <Label for="name">Nombre</Label>
        <Input id="name" placeholder="Juan Pérez" />
      </div>
      <div class="space-y-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="ejemplo@email.com" />
      </div>
    </CardContent>
    <CardFooter class="flex justify-between">
      <Button variant="outline">Cancelar</Button>
      <Button>Crear</Button>
    </CardFooter>
  </Card>
</template>
`
