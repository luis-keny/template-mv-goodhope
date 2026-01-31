<script setup lang="ts">
import Paginator from '@/components/common/Paginator.vue'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Paginator Examples</CardTitle>
      <CardDescription>Componente Paginator simplificado con soporte para v-model y props de configuración.</CardDescription>
    </CardHeader>
    <CardContent class="space-y-6">
      <div class="space-y-2">
        <p class="text-sm font-medium">Basic Usage (Default)</p>
        <Paginator :total="100" :items-per-page="10" :default-page="2" />
      </div>
      
      <div class="space-y-2">
        <p class="text-sm font-medium">With Edges (First/Last buttons)</p>
        <Paginator :total="100" :items-per-page="10" :default-page="5" show-edges />
      </div>

      <div class="space-y-2">
        <p class="text-sm font-medium">Custom Sibling Count (2)</p>
        <Paginator :total="100" :items-per-page="10" :default-page="5" :sibling-count="2" />
      </div>
    </CardContent>
  </Card>
</template>
