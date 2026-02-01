<script setup lang="ts">
import { components } from '@/utils/components'
</script>

<template>
  <div class="p-6 space-y-6">
    <div>
      <h1 class="text-3xl font-bold">Componentes</h1>
      <p class="mt-2 text-gray-600">Aquí puedes encontrar todos los componentes disponibles.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <RouterLink
        v-for="item in components"
        :key="item.title"
        :to="item.url"
        class="rounded-md border border-muted p-4 hover:bg-muted/40 transition-colors"
      >
        <span class="font-medium">{{ item.title }}</span>
        <span class="block text-xs text-muted-foreground mt-1">{{ item.url }}</span>
      </RouterLink>
    </div>
  </div>
</template>
