<script setup lang="ts" generic="TData, TValue">
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  RowSelectionState,
  Row,
} from '@tanstack/vue-table'
import { cn } from '@/lib/utils'
import {
  FlexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'
import { ChevronDown } from 'lucide-vue-next'
import { h, ref, computed, watch } from 'vue'

import { valueUpdater } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'

const props = withDefaults(
  defineProps<{
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    search?: boolean | string | string[] | { 
      column?: string; 
      columns?: string[];
      placeholder?: string 
    }
    pagination?: boolean | 'simple' | 'advanced' | { 
      type: 'simple' | 'advanced'; 
      itemsPerPage?: number; 
      siblingCount?: number; 
      showEdges?: boolean;
      defaultPage?: number;
    }
    showColumnVisibility?: boolean
    loading?: boolean
    funcFilter?: (row: Row<TData>, filterValue: string) => boolean
  }>(),
  {
    search: false,
    pagination: false,
    showColumnVisibility: false,
    loading: false,
    funcFilter: undefined,
  }
)

const emit = defineEmits<{
  (e: 'selection-change', rows: TData[]): void
}>()

const sorting = ref<SortingState>([])
const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})
const rowSelection = ref<RowSelectionState>({})
const globalFilter = ref('')

const searchConfig = computed(() => {
  if (!props.search) return null
  if (typeof props.search === 'string') return { column: props.search, placeholder: `Filter ${props.search}...` }
  if (typeof props.search === 'object') return { placeholder: 'Buscar...', ...props.search }
  return { global: true, placeholder: 'Buscar...' }
})

const DEFAULT_PAGINATION_CONFIG = {
  type: 'simple',
  itemsPerPage: 10,
  siblingCount: 1,
  showEdges: false,
}

const paginationConfig = computed(() => {
  if (!props.pagination) return null

  const userConfig = typeof props.pagination === 'object'
    ? props.pagination
    : (props.pagination === 'advanced' ? { type: 'advanced' } : {})

  const config = {
    ...DEFAULT_PAGINATION_CONFIG,
    ...userConfig,
    type: (userConfig as any).type === 'advanced' || props.pagination === 'advanced' ? 'advanced' : 'simple'
  }

  return {
    ...config,
    pageSize: config.itemsPerPage
  }
})

const table = useVueTable({
  get data() { return props.data },
  get columns() { return props.columns },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
  onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
  onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
  onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
  onGlobalFilterChange: updaterOrValue => (globalFilter.value = typeof updaterOrValue === 'function' ? updaterOrValue(globalFilter.value) : updaterOrValue),
  globalFilterFn: (row, _, filterValue) => {
    if (props.funcFilter) return props.funcFilter(row, filterValue)

    const normalizeText = (text: any) => {
      return String(text || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    }
    const searchTerm = normalizeText(filterValue)
    const config = searchConfig.value as any

    if (config?.columns && Array.isArray(config.columns)) {
      return config.columns.some((col: string) => {
        return normalizeText(row.getValue(col)).includes(searchTerm)
      })
    }

    return Object.values(row.original as any).some((val) => 
      normalizeText(val).includes(searchTerm)
    )
  },
  state: {
    get sorting() { return sorting.value },
    get columnFilters() { return columnFilters.value },
    get columnVisibility() { return columnVisibility.value },
    get rowSelection() { return rowSelection.value },
    get globalFilter() { return globalFilter.value },
  },
  initialState: {
    pagination: {
      pageSize: paginationConfig.value?.pageSize || 10
    }
  }
})

watch(rowSelection, () => {
  const selectedRows = table.getFilteredSelectedRowModel().rows.map(row => row.original)
  emit('selection-change', selectedRows)
})

const currentPage = computed({
  get: () => table.getState().pagination.pageIndex + 1,
  set: (val) => table.setPageIndex(val - 1)
})
</script>

<template>
  <div class="w-full">
    <div class="flex items-center py-4 gap-2" v-if="searchConfig || showColumnVisibility">
      <template v-if="searchConfig">
        <Input
          v-if="'column' in searchConfig"
          class="flex-1"
          :placeholder="searchConfig.placeholder"
          :model-value="table.getColumn(searchConfig.column || '')?.getFilterValue() as string"
          @update:model-value="table.getColumn(searchConfig.column || '')?.setFilterValue($event)"
        />
        <Input
          v-else
          class="flex-1"
          :placeholder="searchConfig.placeholder"
          v-model="globalFilter"
        />
      </template>

      <DropdownMenu v-if="showColumnVisibility">
        <DropdownMenuTrigger as-child>
          <Button variant="outline" class="ml-auto">
            Columns <ChevronDown class="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuCheckboxItem
            v-for="column in table.getAllColumns().filter((column) => column.getCanHide())"
            :key="column.id"
            class="capitalize"
            :model-value="column.getIsVisible()"
            @update:model-value="(value) => {
              column.toggleVisibility(!!value)
            }"
          >
            {{ column.id }}
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <div class="rounded-lg overflow-hidden border">
      <Table>
        <TableHeader>
          <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <TableHead 
              v-for="header in headerGroup.headers" 
              :key="header.id" 
              :class="cn(
                'border-none',
                (header.column.columnDef.meta as any)?.thClass
              )"
            >
              <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header" :props="header.getContext()" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="loading">
            <TableRow v-for="i in 5" :key="i">
              <TableCell v-for="cell in table.getAllColumns().filter((column) => column.getCanHide())" :key="cell.id">
                <Skeleton class="h-4 w-full" />
              </TableCell>
            </TableRow>
          </template>
          <template v-else-if="table.getRowModel().rows?.length">
            <TableRow 
              v-for="row in table.getRowModel().rows" 
              :key="row.id" 
              :data-state="row.getIsSelected() && 'selected'"
              :class="(row.original as any)?.trClass"
            >
              <TableCell 
                v-for="cell in row.getVisibleCells()" 
                :key="cell.id"
                :class="(cell.column.columnDef.meta as any)?.tdClass"
              >
                <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
              </TableCell>
            </TableRow>
          </template>

          <TableRow v-else>
            <TableCell :colspan="table.getAllColumns().filter((column) => column.getCanHide()).length" class="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <div v-if="paginationConfig" class="py-4">
      <div v-if="paginationConfig.type === 'simple'" class="flex items-center justify-end space-x-2">
        <div class="flex w-[100px] items-center justify-center text-sm font-medium">
          Página {{ table.getState().pagination.pageIndex + 1 }} de
          {{ table.getPageCount() }}
        </div>
        <div class="space-x-2">
          <Button
            variant="outline"
            size="sm"
            :disabled="!table.getCanPreviousPage()"
            @click="table.previousPage()"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            :disabled="!table.getCanNextPage()"
            @click="table.nextPage()"
          >
            Next
          </Button>
        </div>
      </div>

      <div v-else-if="paginationConfig.type === 'advanced'" class="flex flex-col gap-4">
         <div class="flex items-center justify-end">
            <div class="flex items-center space-x-6 lg:space-x-8">
              <div class="flex items-center space-x-2">
                <Pagination
                  v-slot="{ page }"
                  :total="table.getFilteredRowModel().rows.length"
                  :sibling-count="paginationConfig.siblingCount || 1"
                  :show-edges="paginationConfig.showEdges"
                  :default-page="1"
                  :items-per-page="table.getState().pagination.pageSize"
                  :model-value="currentPage"
                  @update:model-value="(val: number) => table.setPageIndex(val - 1)"
                >
                  <PaginationContent v-slot="{ items }">
                    <PaginationFirst v-if="paginationConfig.showEdges" @click="table.setPageIndex(0)" />
                    <PaginationPrevious @click="table.previousPage()" />

                    <template v-for="(item, index) in items">
                      <PaginationItem
                        v-if="item.type === 'page'"
                        :key="index"
                        :value="item.value"
                        as-child
                      >
                        <Button 
                          class="w-9 h-9 p-0" 
                          :variant="item.value === page ? 'default' : 'outline'"
                          @click="table.setPageIndex(item.value - 1)"
                        >
                          {{ item.value }}
                        </Button>
                      </PaginationItem>
                      <PaginationEllipsis
                        v-else
                        :key="item.type + index"
                        :index="index"
                      />
                    </template>

                    <PaginationNext @click="table.nextPage()" />
                    <PaginationLast v-if="paginationConfig.showEdges" @click="table.setPageIndex(table.getPageCount() - 1)" />
                  </PaginationContent>
                </Pagination>
               </div>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>
