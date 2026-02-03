<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Label</CardTitle>
      <CardDescription>
        Muestra una etiqueta accesible para un elemento de formulario.
      </CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center">
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>
    </CardContent>
  </Card>
</template>
