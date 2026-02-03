<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ButtonDocs from '@/docs/components/button/ButtonDocs.vue'
import ComboboxDocs from '@/docs/components/combobox/ComboboxDocs.vue'
import CalendarDocs from '@/docs/components/calendar/CalendarDocs.vue'
import DatePickerDocs from '@/docs/components/date-picker/DatePickerDocs.vue'
import InputDocs from '@/docs/components/input/InputDocs.vue'
import SonnerDocs from '@/docs/components/sonner/SonnerDocs.vue'
import PopoverDocs from '@/docs/components/popover/PopoverDocs.vue'
import CardDocs from '@/docs/components/card/CardDocs.vue'
import SelectDocs from '@/docs/components/select/SelectDocs.vue'
import PaginationDocs from '@/docs/components/pagination/PaginationDocs.vue'
import FieldDocs from '@/docs/components/field/FieldDocs.vue'
import DataTableDocs from '@/docs/components/data-table/DataTableDocs.vue'
import EmptyDocs from '@/docs/components/empty/EmptyDocs.vue'
import ItemDocs from '@/docs/components/item/ItemDocs.vue'
import AccordionDocs from '@/docs/components/accordion/AccordionDocs.vue'
import AlertDocs from '@/docs/components/alert/AlertDocs.vue'
import AlertDialogDocs from '@/docs/components/alert-dialog/AlertDialogDocs.vue'
import AspectRatioDocs from '@/docs/components/aspect-ratio/AspectRatioDocs.vue'
import AvatarDocs from '@/docs/components/avatar/AvatarDocs.vue'
import BadgeDocs from '@/docs/components/badge/BadgeDocs.vue'
import BreadcrumbDocs from '@/docs/components/breadcrumb/BreadcrumbDocs.vue'
import ButtonGroupDocs from '@/docs/components/button-group/ButtonGroupDocs.vue'
import CarouselDocs from '@/docs/components/carousel/CarouselDocs.vue'
import ChartDocs from '@/docs/components/chart/ChartDocs.vue'
import CheckboxDocs from '@/docs/components/checkbox/CheckboxDocs.vue'
import CollapsibleDocs from '@/docs/components/collapsible/CollapsibleDocs.vue'
import CommandDocs from '@/docs/components/command/CommandDocs.vue'
import ContextMenuDocs from '@/docs/components/context-menu/ContextMenuDocs.vue'
import DialogDocs from '@/docs/components/dialog/DialogDocs.vue'
import DrawerDocs from '@/docs/components/drawer/DrawerDocs.vue'
import DropdownMenuDocs from '@/docs/components/dropdown-menu/DropdownMenuDocs.vue'
import InputGroupDocs from '@/docs/components/input-group/InputGroupDocs.vue'
import InputOTPDocs from '@/docs/components/input-otp/InputOTPDocs.vue'
import { Button } from '@/components/ui/button'
import HoverCardDocs from '@/docs/components/hover-card/HoverCardDocs.vue'

const route = useRoute()
const nameParam = computed(() => (route.params.name as string) || '')
const docsRegistry: Record<string, any> = {
  button: ButtonDocs,
  combobox: ComboboxDocs,
  calendar: CalendarDocs,
  'date-picker': DatePickerDocs,
  input: InputDocs,
  sonner: SonnerDocs,
  popover: PopoverDocs,
  card: CardDocs,
  select: SelectDocs,
  pagination: PaginationDocs,
  field: FieldDocs,
  'data-table': DataTableDocs,
  accordion: AccordionDocs,
  alert: AlertDocs,
  'alert-dialog': AlertDialogDocs,
  'aspect-ratio': AspectRatioDocs,
  avatar: AvatarDocs,
  badge: BadgeDocs,
  breadcrumb: BreadcrumbDocs,
  'button-group': ButtonGroupDocs,
  carousel: CarouselDocs,
  chart: ChartDocs,
  checkbox: CheckboxDocs,
  collapsible: CollapsibleDocs,
  command: CommandDocs,
  'context-menu': ContextMenuDocs,
  dialog: DialogDocs,
  drawer: DrawerDocs,
  'dropdown-menu': DropdownMenuDocs,
  'hover-card': HoverCardDocs,
  'input-group': InputGroupDocs,
  'input-otp': InputOTPDocs,
  empty: EmptyDocs,
  item: ItemDocs,
}
const currentDoc = computed(() => docsRegistry[nameParam.value] || null)
const title = computed(() => nameParam.value.replace(/-/g, ' '))
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
  </div>
</template>
