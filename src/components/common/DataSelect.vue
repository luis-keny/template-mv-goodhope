<script setup lang="ts">
import type { ComputedRef } from 'vue'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { computed } from 'vue'
import { Loader2 } from 'lucide-vue-next'

type PrimitiveItem = string | number | boolean
type SelectItemRecord = Record<string, unknown>
type SelectItem = PrimitiveItem | SelectItemRecord
type ItemResolver<T> = (keyof T & string) | ((item: T) => string)
type ItemDisabledResolver<T> = (keyof T & string) | ((item: T) => boolean)

interface NormalizedItem {
  value: string
  text: string
  disabled: boolean
}

interface Props {
  modelValue?: string
  items: SelectItem[]
  placeholder?: string
  itemText?: ItemResolver<SelectItemRecord>
  itemValue?: ItemResolver<SelectItemRecord>
  itemDisabled?: ItemDisabledResolver<SelectItemRecord>
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  items: () => [],
  placeholder: 'Select an option',
  itemText: 'label',
  itemValue: 'value',
  itemDisabled: 'disabled',
  loading: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function isItemRecord(item: SelectItem): item is SelectItemRecord {
  return typeof item === 'object' && item !== null
}

function resolveField<TValue>(
  item: SelectItem,
  resolver: string | ((item: SelectItemRecord) => TValue),
  fallback: (value: SelectItem) => TValue,
): TValue {
  if (!isItemRecord(item)) {
    return fallback(item)
  }

  if (typeof resolver === 'function') {
    return resolver(item)
  }

  return item[resolver] as TValue
}

const resolveValue = (item: SelectItem) => String(resolveField(item, props.itemValue, (value) => value))

const resolveText = (item: SelectItem) => String(resolveField(item, props.itemText, (value) => value))

const resolveDisabled = (item: SelectItem) => Boolean(resolveField(item, props.itemDisabled, () => false))

const normalizedItems: ComputedRef<NormalizedItem[]> = computed(() => {
  return props.items.map((item) => ({
    value: resolveValue(item),
    text: resolveText(item),
    disabled: resolveDisabled(item),
  }))
})

const internalValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
})
</script>

<template>
  <Select v-model="internalValue" :disabled="disabled || loading">
    <SelectTrigger class="bg-white">
      <div v-if="loading" class="flex items-center gap-2 text-muted-foreground">
        <Loader2 class="size-4 animate-spin" />
        <span>Cargando...</span>
      </div>
      <SelectValue v-else :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem
        v-for="(item, index) in normalizedItems"
        :key="item.value + index"
        :value="item.value"
        :disabled="item.disabled"
      >
        {{ item.text }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
