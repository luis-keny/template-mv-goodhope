<script setup lang="ts">
import { computed } from 'vue'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export interface BreadcrumbItemType {
  label: string
  href?: string
  isCurrent?: boolean
}

interface Props {
  items: BreadcrumbItemType[]
  maxItems?: number
  itemsBeforeCollapse?: number
  itemsAfterCollapse?: number
}

const props = withDefaults(defineProps<Props>(), {
  maxItems: 3,
  itemsBeforeCollapse: 1,
  itemsAfterCollapse: 1,
})

const displayedItems = computed(() => {
  const { items, maxItems, itemsBeforeCollapse, itemsAfterCollapse } = props
  
  if (items.length <= maxItems) {
    return items.map(item => ({ type: 'item', ...item }))
  }

  const startItems = items.slice(0, itemsBeforeCollapse)
  const endItems = items.slice(-itemsAfterCollapse)
  const collapsedItems = items.slice(itemsBeforeCollapse, -itemsAfterCollapse)

  return [
    ...startItems.map(item => ({ type: 'item', ...item })),
    { type: 'ellipsis', items: collapsedItems },
    ...endItems.map(item => ({ type: 'item', ...item }))
  ]
})
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template v-for="(item, index) in displayedItems" :key="index">
        <BreadcrumbItem v-if="item.type === 'item'">
          <BreadcrumbLink v-if="item.href && !item.isCurrent" :href="item.href">
            {{ item.label }}
          </BreadcrumbLink>
          <BreadcrumbPage v-else>
            {{ item.label }}
          </BreadcrumbPage>
        </BreadcrumbItem>

        <BreadcrumbItem v-else-if="item.type === 'ellipsis'">
          <DropdownMenu>
            <DropdownMenuTrigger class="flex items-center gap-1">
              <BreadcrumbEllipsis class="h-4 w-4" />
              <span class="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem v-for="(collapsedItem, i) in item.items" :key="i">
                <a :href="collapsedItem.href ? collapsedItem.href : '#'">
                  {{ collapsedItem.label }}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>

        <BreadcrumbSeparator v-if="index < displayedItems.length - 1" />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
