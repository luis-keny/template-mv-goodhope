<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Skeleton</CardTitle>
      <CardDescription>
        Se usa para mostrar un estado de carga mientras se espera que se cargue el contenido.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex items-center space-x-4">
        <Skeleton class="h-12 w-12 rounded-full" />
        <div class="space-y-2">
          <Skeleton class="h-4 w-[250px]" />
          <Skeleton class="h-4 w-[200px]" />
        </div>
      </div>
    </CardContent>
  </Card>
</template>
