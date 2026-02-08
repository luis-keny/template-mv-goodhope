export const paginationExamplesCode = `<script setup lang="ts">
import Paginator from '@/components/common/Paginator.vue'
</script>

<template>
  <div class="w-full space-y-10">
    <div class="space-y-3">
      <p class="text-sm font-medium text-muted-foreground">Basic Usage (Default)</p>
      <Paginator :total="100" :items-per-page="10" :default-page="2" />
    </div>
    
    <div class="space-y-3">
      <p class="text-sm font-medium text-muted-foreground">With Edges (First/Last buttons)</p>
      <Paginator :total="100" :items-per-page="10" :default-page="5" show-edges />
    </div>

    <div class="space-y-3">
      <p class="text-sm font-medium text-muted-foreground">Custom Sibling Count (2)</p>
      <Paginator :total="100" :items-per-page="10" :default-page="5" :sibling-count="2" />
    </div>
  </div>
</template>
`
