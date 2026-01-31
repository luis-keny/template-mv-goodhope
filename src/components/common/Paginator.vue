<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationFirst,
  PaginationLast,
} from '@/components/ui/pagination'

interface Props {
  total: number
  itemsPerPage?: number
  defaultPage?: number
  siblingCount?: number
  showEdges?: boolean
  modelValue?: number
}

const props = withDefaults(defineProps<Props>(), {
  itemsPerPage: 10,
  defaultPage: 1,
  siblingCount: 1,
  showEdges: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()
</script>

<template>
  <Pagination
    v-slot="{ page }"
    :total="total"
    :sibling-count="siblingCount"
    :show-edges="showEdges"
    :default-page="defaultPage"
    :items-per-page="itemsPerPage"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <PaginationContent v-slot="{ items }">
      <PaginationFirst v-if="showEdges" />
      <PaginationPrevious />

      <template v-for="(item, index) in items">
        <PaginationItem
          v-if="item.type === 'page'"
          :key="index"
          :value="item.value"
          :is-active="item.value === page"
        >
          {{ item.value }}
        </PaginationItem>
        <PaginationEllipsis
          v-else
          :key="item.type + index"
          :index="index"
        />
      </template>

      <PaginationNext />
      <PaginationLast v-if="showEdges" />
    </PaginationContent>
  </Pagination>
</template>
