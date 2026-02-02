<script setup lang="ts">
import { h, ref } from 'vue'
import DataTable from '@/components/common/DataTable.vue'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { ArrowUpDown, MoreHorizontal } from 'lucide-vue-next'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const columns = [
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }: any) => h('div', { class: 'capitalize' }, row.getValue('status')),
  },
  {
    accessorKey: 'email',
    header: ({ column }: any) => {
      return h(Button, {
        variant: 'ghost',
        onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
      }, () => ['Email', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
    },
    cell: ({ row }: any) => h('div', { class: 'lowercase' }, row.getValue('email')),
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }: any) => {
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)
      return h('div', { class: 'text-right font-medium' }, formatted)
    },
    meta: {
      thClass: 'text-right bg-muted/50',
      tdClass: 'bg-muted/10',
    }
  },
  {
    id: 'actions',
    cell: ({ row }: any) => {
      const payment = row.original
      return h(DropdownMenu, {}, () => [
        h(DropdownMenuTrigger, { asChild: true }, () =>
          h(Button, { variant: 'ghost', class: 'h-8 w-8 p-0' }, () =>
            [h('span', { class: 'sr-only' }, 'Open menu'), h(MoreHorizontal, { class: 'h-4 w-4' })]
          )
        ),
        h(DropdownMenuContent, { align: 'end' }, () => [
          h(DropdownMenuLabel, () => 'Actions'),
          h(DropdownMenuItem, { onClick: () => navigator.clipboard.writeText(payment.id) }, () => 'Copy payment ID'),
        ])
      ])
    },
  },
]

const data = [
  { id: '1', amount: 316, status: 'success', email: 'ken99@yahoo.com' },
  { id: '2', amount: 242, status: 'success', email: 'Abe45@gmail.com' },
  { id: '3', amount: 837, status: 'processing', email: 'Monserrat44@gmail.com' },
  { id: '4', amount: 874, status: 'success', email: 'Silas22@gmail.com' },
  { id: '5', amount: 721, status: 'failed', email: 'carmella@hotmail.com' },
  { id: '6', amount: 123, status: 'success', email: 'example@gmail.com' },
  { id: '7', amount: 456, status: 'processing', email: 'test@hotmail.com' },
  { id: '8', amount: 789, status: 'failed', email: 'demo@yahoo.com' },
]

const handleSelection = (rows: any[]) => {
  console.log('Filas seleccionadas:', rows)
}

const loading = ref(false)
</script>

<template>
  <Card>
    <CardHeader>
      <div class="flex items-center justify-between">
        <div>
          <CardTitle>Ejemplo Completo</CardTitle>
          <CardDescription>
            Tabla con búsqueda, paginación avanzada, selección y menú de columnas.
          </CardDescription>
        </div>
        <div class="flex items-center space-x-2">
          <Switch id="loading-mode" v-model="loading" />
          <Label htmlFor="loading-mode">Modo Carga</Label>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <DataTable
        :columns="columns"
        :data="data"
        :loading="loading"
        :search="{
          columns: ['email', 'status'],
          placeholder: 'Buscar por email o status',
        }"
        :pagination="{
          type: 'advanced',
          siblingCount: 2,
          itemsPerPage: 4,
          showEdges: true,
        }"
        show-column-visibility
        @selection-change="handleSelection"
      />
    </CardContent>
  </Card>

  <Card class="mt-6">
    <CardHeader>
      <div class="flex items-center justify-between">
        <div>
          <CardTitle>DataTable basico</CardTitle>
          <CardDescription>Ejemplo de uso sencillo de DataTable.</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <DataTable
        :columns="columns"
        :data="data"
      />
    </CardContent>
  </Card>
</template>
