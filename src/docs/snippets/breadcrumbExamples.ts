export const breadcrumbExamplesCode = `<script setup lang="ts">
import DynamicBreadcrumb from '@/components/ui/breadcrumb/DynamicBreadcrumb.vue'

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
  <div class="space-y-8">
    <!-- Simple Breadcrumb -->
    <DynamicBreadcrumb :items="items" />

    <!-- Collapsed Breadcrumb with maxItems -->
    <DynamicBreadcrumb 
      :items="longItems" 
      :max-items="3" 
    />
  </div>
</template>
`
