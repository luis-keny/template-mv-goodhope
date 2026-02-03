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
import RangeCalendarDocs from '@/docs/components/range-calendar/RangeCalendarDocs.vue'
import ResizableDocs from '@/docs/components/resizable/ResizableDocs.vue'
import SelectDocs from '@/docs/components/select/SelectDocs.vue'
import SliderDocs from '@/docs/components/slider/SliderDocs.vue'
import PaginationDocs from '@/docs/components/pagination/PaginationDocs.vue'
import FieldDocs from '@/docs/components/field/FieldDocs.vue'
import DataTableDocs from '@/docs/components/data-table/DataTableDocs.vue'
import EmptyDocs from '@/docs/components/empty/EmptyDocs.vue'
import ItemDocs from '@/docs/components/item/ItemDocs.vue'
import LabelDocs from '@/docs/components/label/LabelDocs.vue'
import MenubarDocs from '@/docs/components/menubar/MenubarDocs.vue'
import NativeSelectDocs from '@/docs/components/native-select/NativeSelectDocs.vue'
import NavigationMenuDocs from '@/docs/components/navigation-menu/NavigationMenuDocs.vue'
import RadioGroupDocs from '@/docs/components/radio-group/RadioGroupDocs.vue'
import ScrollAreaDocs from '@/docs/components/scroll-area/ScrollAreaDocs.vue'
import SpinnerDocs from '@/docs/components/spinner/SpinnerDocs.vue'
import ToggleGroupDocs from '@/docs/components/toggle-group/ToggleGroupDocs.vue'
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
import KbdDocs from '@/docs/components/kbd/KbdDocs.vue'
import NumberFieldDocs from '@/docs/components/number-field/NumberFieldDocs.vue'
import ProgressDocs from '@/docs/components/progress/ProgressDocs.vue'
import SheetDocs from '@/docs/components/sheet/SheetDocs.vue'
import SeparatorDocs from '@/docs/components/separator/SeparatorDocs.vue'
import TabsDocs from '@/docs/components/tabs/TabsDocs.vue'
import SkeletonDocs from '@/docs/components/skeleton/SkeletonDocs.vue'
import SwitchDocs from '@/docs/components/switch/SwitchDocs.vue'
import TableDocs from '@/docs/components/table/TableDocs.vue'
import TagsInputDocs from '@/docs/components/tags-input/TagsInputDocs.vue'
import StepperDocs from '@/docs/components/stepper/StepperDocs.vue'
import TextareaDocs from '@/docs/components/textarea/TextareaDocs.vue'
import ToggleDocs from '@/docs/components/toggle/ToggleDocs.vue'
import TooltipDocs from '@/docs/components/tooltip/TooltipDocs.vue'

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
  'range-calendar': RangeCalendarDocs,
  resizable: ResizableDocs,
  card: CardDocs,
  select: SelectDocs,
  slider: SliderDocs,
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
  kbd: KbdDocs,
  'input-group': InputGroupDocs,
  'input-otp': InputOTPDocs,
  empty: EmptyDocs,
  item: ItemDocs,
  label: LabelDocs,
  menubar: MenubarDocs,
  'native-select': NativeSelectDocs,
  'navigation-menu': NavigationMenuDocs,
  'radio-group': RadioGroupDocs,
  'scroll-area': ScrollAreaDocs,
  spinner: SpinnerDocs,
  'number-field': NumberFieldDocs,
  progress: ProgressDocs,
  sheet: SheetDocs,
  separator: SeparatorDocs,
  tabs: TabsDocs,
  skeleton: SkeletonDocs,
  switch: SwitchDocs,
  'toggle-group': ToggleGroupDocs,
  table: TableDocs,
  'tags-input': TagsInputDocs,
  stepper: StepperDocs,
  textarea: TextareaDocs,
  toggle: ToggleDocs,
  tooltip: TooltipDocs,
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
