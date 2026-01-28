<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold capitalize">{{ componentName }}</h1>
    <p class="mt-4 text-gray-600">Documentation for {{ componentName }} component.</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const componentName = computed(() => {
  const name = route.params.name as string;
  return name ? name.replace(/-/g, ' ') : '';
});
</script>
