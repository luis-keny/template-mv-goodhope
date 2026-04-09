<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { getComponentDoc, getComponentTitle } from '@/docs/registry'

const route = useRoute()
const nameParam = computed(() => (typeof route.params.name === 'string' ? route.params.name : ''))
const currentDoc = computed(() => getComponentDoc(nameParam.value))
const title = computed(() => getComponentTitle(nameParam.value))
const externalDocUrl = computed(() => `https://shadcn-vue.com/docs/components/${nameParam.value}`)
</script>

<template>
  <div class="p-6 space-y-6">
    <div class="flex items-start justify-between gap-3">
      <div>
        <h1 class="text-3xl font-bold capitalize">{{ title }}</h1>
        <p class="mt-2 text-gray-600">Documentación del componente {{ title }}.</p>
      </div>
      <Button as="a" :href="externalDocUrl" target="_blank" rel="noopener noreferrer" variant="outline" size="sm">
        Ver documentación original
      </Button>
    </div>
    <component v-if="currentDoc" :is="currentDoc" />
    <div v-else class="rounded-md border border-dashed border-muted p-6 text-sm text-muted-foreground">
      Aun no hay documentacion local para este componente. Puedes revisar la documentacion externa mientras terminamos la pagina.
    </div>
  </div>
</template>
