<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Switch</CardTitle>
      <CardDescription>
        Un control que permite al usuario alternar entre estados activado y desactivado.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label for="airplane-mode">Airplane Mode</Label>
      </div>
    </CardContent>
  </Card>
</template>
