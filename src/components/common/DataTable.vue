<script setup lang="ts" generic="TData, TValue">
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  RowSelectionState,
  Row,
  TableMeta,
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
import { ChevronDown, GripVertical } from 'lucide-vue-next'
import { ref, computed, watch, h } from 'vue'

import { valueUpdater } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'
import Paginator from './Paginator.vue'

type RowDndConfig = {
  rowIdKey?: string
  handle?: boolean
}

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
    maxHeight?: string
    tableMeta?: TableMeta<TData>
    rowDnd?: boolean | RowDndConfig
  }>(),
  {
    search: false,
    pagination: false,
    showColumnVisibility: false,
    loading: false,
    funcFilter: undefined,
    maxHeight: 'none',
    rowDnd: false,
  }
)

const emit = defineEmits<{
  (e: 'selection-change', rows: TData[]): void
  (e: 'row-reorder', rows: TData[]): void
}>()

// --- Drag & Drop state ---
const dndConfig = computed<RowDndConfig | false>(() => {
  if (!props.rowDnd) return false
  if (props.rowDnd === true) return { handle: true }
  return { handle: true, ...props.rowDnd }
})

const showHandle = computed(() => {
  const cfg = dndConfig.value
  return cfg !== false && cfg.handle !== false
})

const draggingIndex = ref<number | null>(null)
const dragOverIndex = ref<number | null>(null)

// Internal mutable copy of data for reordering; syncs with props.data
const localData = ref<TData[]>([...props.data] as TData[])

watch(() => props.data, (newData) => {
  localData.value = [...newData]
}, { deep: true })

const DND_HANDLE_COLUMN_ID = '__dnd_handle__'

const handleColumn = computed<ColumnDef<TData, TValue>>(() => ({
  id: DND_HANDLE_COLUMN_ID,
  header: () => null,
  cell: () => h(GripVertical, { class: 'h-4 w-4 text-muted-foreground cursor-grab active:cursor-grabbing' }),
  enableHiding: false,
  enableSorting: false,
  size: 32,
  meta: {
    thClass: 'w-8 px-2',
    tdClass: 'w-8 px-2',
  },
}))

const effectiveColumns = computed<ColumnDef<TData, TValue>[]>(() => {
  if (!dndConfig.value) return props.columns
  if (!showHandle.value) return props.columns
  // Avoid duplicating handle column if consumer added it themselves
  const alreadyHasHandle = props.columns.some((c) => (c as any).id === DND_HANDLE_COLUMN_ID)
  if (alreadyHasHandle) return props.columns
  return [handleColumn.value, ...props.columns]
})

function onDragStart(index: number) {
  draggingIndex.value = index
}

function onDragOver(event: DragEvent, index: number) {
  event.preventDefault()
  dragOverIndex.value = index
}

function onDrop(index: number) {
  if (draggingIndex.value === null || draggingIndex.value === index) {
    draggingIndex.value = null
    dragOverIndex.value = null
    return
  }
  const reordered = [...localData.value] as TData[]
  const [moved] = reordered.splice(draggingIndex.value, 1)
  reordered.splice(index, 0, moved as TData)
  localData.value = reordered
  draggingIndex.value = null
  dragOverIndex.value = null
  emit('row-reorder', reordered)
}

function onDragEnd() {
  draggingIndex.value = null
  dragOverIndex.value = null
}

// --- Regular state ---
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
  get data() { return (dndConfig.value ? localData.value : props.data) as TData[] },
  get columns() { return effectiveColumns.value },
  get meta() { return props.tableMeta },
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
      pageSize: paginationConfig.value?.pageSize || props.data.length
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
          class="flex-1 bg-white"
          :placeholder="searchConfig.placeholder"
          :model-value="table.getColumn(searchConfig.column || '')?.getFilterValue() as string"
          @update:model-value="table.getColumn(searchConfig.column || '')?.setFilterValue($event)"
        />
        <Input
          v-else
          class="flex-1 bg-white"
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
      <slot name="actions"></slot>
    </div>

    <div class="rounded-lg overflow-hidden border" :style="`max-height: ${props.maxHeight};`">
      <Table class="relative">
        <TableHeader>
          <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <TableHead 
              v-for="header in headerGroup.headers" 
              :key="header.id" 
              :class="cn(
                'border-none sticky top-0 bg-background',
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
              v-for="(row, rowIndex) in table.getRowModel().rows"
              :key="row.id"
              :data-state="row.getIsSelected() && 'selected'"
              :class="cn(
                (row.original as any)?.trClass,
                dndConfig && !showHandle ? 'cursor-move' : '',
                dndConfig && draggingIndex === rowIndex ? 'opacity-50' : '',
                dndConfig && dragOverIndex === rowIndex && draggingIndex !== rowIndex
                  ? 'border-t-2 border-primary' : '',
              )"
              :draggable="dndConfig ? true : undefined"
              @dragstart="dndConfig ? onDragStart(rowIndex) : undefined"
              @dragover="dndConfig ? onDragOver($event, rowIndex) : undefined"
              @drop="dndConfig ? onDrop(rowIndex) : undefined"
              @dragend="dndConfig ? onDragEnd() : undefined"
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
                <Paginator
                  :total="table.getFilteredRowModel().rows.length"
                  :items-per-page="table.getState().pagination.pageSize"
                  :sibling-count="paginationConfig.siblingCount"
                  :show-edges="paginationConfig.showEdges"
                  v-model="currentPage"
                />
              </div>
            </div>
         </div>
      </div>
    </div>
  </div>
</template>
