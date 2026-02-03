<script setup lang="ts">
import { Bold } from 'lucide-vue-next'
import { Toggle } from '@/components/ui/toggle'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Toggle</CardTitle>
      <CardDescription>
        Un botón de dos estados que puede estar activado o desactivado.
      </CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center p-6">
      <Toggle aria-label="Toggle bold">
        <Bold class="h-4 w-4" />
      </Toggle>
    </CardContent>
  </Card>
</template>
