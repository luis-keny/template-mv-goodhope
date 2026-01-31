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
import { Button } from '@/components/ui/button'

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
        <p class="mt-2 text-gray-600">Documentation for {{ title }} component.</p>
      </div>
      <Button as="a" :href="externalDocUrl" target="_blank" rel="noopener noreferrer" variant="outline" size="sm">
        Ver documentación original
      </Button>
    </div>
    <component v-if="currentDoc" :is="currentDoc" />
  </div>
</template>
