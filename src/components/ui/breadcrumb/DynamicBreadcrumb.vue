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
import { RouterLink } from 'vue-router'

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
  expansionDirection?: 'left' | 'right' | 'middle'
}

const props = withDefaults(defineProps<Props>(), {
  maxItems: 3,
  itemsBeforeCollapse: undefined,
  itemsAfterCollapse: undefined,
  expansionDirection: 'middle',
})

type DisplayedItem =
  | ({ type: 'item' } & BreadcrumbItemType)
  | { type: 'ellipsis'; items: BreadcrumbItemType[] }

const displayedItems = computed<DisplayedItem[]>(() => {
  const { items, maxItems, expansionDirection } = props
  
  if (items.length <= maxItems) {
    return items.map(item => ({ type: 'item' as const, ...item }))
  }

  let before = 1
  let after = 1

  if (expansionDirection === 'left') {
    before = 1
    after = Math.max(1, maxItems - 2)
  } else if (expansionDirection === 'right') {
    before = Math.max(1, maxItems - 2)
    after = 1
  } else {
    // middle
    before = props.itemsBeforeCollapse ?? Math.ceil((maxItems - 1) / 2)
    after = props.itemsAfterCollapse ?? Math.floor((maxItems - 1) / 2)
  }

  // Ensure we always show at least the first and last
  const startItems = items.slice(0, before)
  const endItems = after > 0 ? items.slice(-after) : []
  const collapsedItems = items.slice(before, items.length - after)

  const result: DisplayedItem[] = []
  startItems.forEach(item => result.push({ type: 'item', ...item }))
  if (collapsedItems.length > 0) {
    result.push({ type: 'ellipsis', items: collapsedItems })
  }
  endItems.forEach(item => result.push({ type: 'item', ...item }))

  return result
})
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <TransitionGroup name="breadcrumb" class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
        <template v-for="(item, index) in displayedItems" :key="item.type === 'item' ? item.label : 'ellipsis'">
          <BreadcrumbItem v-if="item.type === 'item'">
            <BreadcrumbLink v-if="item.href && !item.isCurrent" as-child>
              <RouterLink :to="item.href">{{ item.label }}</RouterLink>
            </BreadcrumbLink>
            <BreadcrumbPage v-else>
              {{ item.label }}
            </BreadcrumbPage>
          </BreadcrumbItem>

          <BreadcrumbItem v-else-if="item.type === 'ellipsis'">
            <DropdownMenu>
              <DropdownMenuTrigger class="flex items-center gap-1 bg-transparent hover:text-foreground transition-colors">
                <BreadcrumbEllipsis class="h-4 w-4" />
                <span class="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem v-for="(collapsedItem, i) in item.items" :key="i">
                  <RouterLink :to="collapsedItem.href ? collapsedItem.href : '#'" class="w-full">
                    {{ collapsedItem.label }}
                  </RouterLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>

          <BreadcrumbSeparator v-if="index < displayedItems.length - 1" />
        </template>
      </TransitionGroup>
    </BreadcrumbList>
  </Breadcrumb>
</template>
