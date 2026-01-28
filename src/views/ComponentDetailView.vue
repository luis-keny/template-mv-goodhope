<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ButtonDocs from '@/docs/components/button/ButtonDocs.vue'

const route = useRoute()
const nameParam = computed(() => (route.params.name as string) || '')
const docsRegistry: Record<string, any> = {
  button: ButtonDocs,
}
const currentDoc = computed(() => docsRegistry[nameParam.value] || null)
const title = computed(() => nameParam.value.replace(/-/g, ' '))
</script>

<template>
  <div class="p-6 space-y-6">
    <div>
      <h1 class="text-3xl font-bold capitalize">{{ title }}</h1>
      <p class="mt-2 text-gray-600">Documentation for {{ title }} component.</p>
    </div>
    <component v-if="currentDoc" :is="currentDoc" />
  </div>
</template>
