<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { DateValue } from '@internationalized/date'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  modelValue?: DateValue | undefined
  placeholder?: string
  minValue?: DateValue | undefined
  maxValue?: DateValue | undefined
  layout?: 'month-and-year' | undefined
  defaultPlaceholder?: DateValue | undefined
  locale?: string
  disabled?: boolean
  buttonClass?: string
  isDateDisabled?: (date: DateValue) => boolean
}>(), {
  modelValue: undefined,
  placeholder: 'Selecciona una fecha',
  minValue: undefined,
  maxValue: undefined,
  layout: undefined,
  defaultPlaceholder: undefined,
  locale: 'es-ES',
  disabled: false,
  buttonClass: '',
})

const emit = defineEmits<{
  (e: 'update:modelValue', v: DateValue | undefined): void
  (e: 'change', v: DateValue | null): void
}>()

const open = ref(false)
const localValue = ref<any>(props.modelValue)

watch(() => props.modelValue, (v) => {
  localValue.value = v
})

const label = computed(() => {
  return localValue.value ? localValue.value.toString() : props.placeholder
})

const onUpdate = (v: DateValue | undefined) => {
  localValue.value = v
  emit('update:modelValue', v)
  emit('change', v ?? null)
  open.value = false
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :disabled="disabled"
        class="w-[240px] justify-between"
        :class="cn('text-left font-normal', buttonClass)"
      >
        <span>{{ label }}</span>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar
        v-model="localValue"
        :min-value="minValue"
        :max-value="maxValue"
        :default-placeholder="defaultPlaceholder"
        :locale="props.locale"
        :is-date-disabled="isDateDisabled"
        :layout="props.layout"
        class="w-fit"
        @update:modelValue="onUpdate"
      />
    </PopoverContent>
  </Popover>
</template>
