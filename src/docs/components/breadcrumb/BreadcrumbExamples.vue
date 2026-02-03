<script setup lang="ts">
import DynamicBreadcrumb from '@/components/ui/breadcrumb/DynamicBreadcrumb.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const items = [
  { label: 'Home', href: '/' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Components', href: '/docs/components' },
  { label: 'Breadcrumb', isCurrent: true },
]

const longItems = [
  { label: 'Home', href: '/' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Components', href: '/docs/components' },
  { label: 'Button', href: '/docs/components/button' },
  { label: 'Input', href: '/docs/components/input' },
  { label: 'Breadcrumb', isCurrent: true },
]
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Breadcrumb</CardTitle>
      <CardDescription>
        Muestra la ruta de la página actual, facilitando la navegación hacia arriba en la jerarquía.
      </CardDescription>
    </CardHeader>
    <CardContent class="space-y-8">
      <div>
        <h3 class="text-sm font-medium mb-2">Básico</h3>
        <DynamicBreadcrumb :items="items" />
      </div>

      <div>
        <h3 class="text-sm font-medium mb-2">Colapsado (max-items="3")</h3>
        <DynamicBreadcrumb 
          :items="longItems" 
          :max-items="3" 
        />
      </div>
    </CardContent>
  </Card>
</template>
