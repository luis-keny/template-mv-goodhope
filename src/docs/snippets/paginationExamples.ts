export const paginationExamplesCode = `<script setup lang="ts">
import Paginator from '@/components/common/Paginator.vue'
</script>

<template>
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
</template>`
