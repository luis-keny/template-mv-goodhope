<script setup lang="ts">
import type { ComponentMeta } from '@/types/component-meta'
import { CheckCircle2, XCircle } from 'lucide-vue-next'

defineProps<{ meta: ComponentMeta }>()

const toKebabCase = (name: string) =>
  name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
</script>

<template>
  <div class="rounded-lg border border-border p-5 space-y-5">
    <p class="text-sm text-muted-foreground">{{ meta.description }}</p>

    <div class="grid gap-5 sm:grid-cols-2">
      <div class="space-y-2">
        <p class="text-sm font-medium flex items-center gap-1.5">
          <CheckCircle2 class="size-4 text-primary" />
          Cuándo usarlo
        </p>
        <ul class="space-y-1.5">
          <li
            v-for="useCase in meta.useCases"
            :key="useCase"
            class="text-sm text-muted-foreground flex items-start gap-2"
          >
            <span class="mt-1.5 shrink-0 size-1.5 rounded-full bg-primary/60" />
            {{ useCase }}
          </li>
        </ul>
      </div>

      <div class="space-y-2">
        <p class="text-sm font-medium flex items-center gap-1.5">
          <XCircle class="size-4 text-muted-foreground" />
          No usar para
        </p>
        <ul class="space-y-1.5">
          <li
            v-for="item in meta.notFor"
            :key="item"
            class="text-sm text-muted-foreground flex items-start gap-2"
          >
            <span class="mt-1.5 shrink-0 size-1.5 rounded-full bg-muted-foreground/40" />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div
      v-if="meta.relatedComponents && meta.relatedComponents.length > 0"
      class="pt-4 border-t border-border"
    >
      <p class="text-xs text-muted-foreground mb-2">Componentes relacionados</p>
      <div class="flex flex-wrap gap-2">
        <RouterLink
          v-for="name in meta.relatedComponents"
          :key="name"
          :to="`/docs/components/${toKebabCase(name)}`"
          class="text-xs px-2.5 py-1 rounded-md border border-border hover:bg-muted/50 transition-colors"
        >
          {{ name }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>
