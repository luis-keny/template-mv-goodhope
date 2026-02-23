<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { computed } from 'vue'
import { Loader2 } from 'lucide-vue-next'

interface Props {
  modelValue?: string
  items: any[]
  placeholder?: string
  itemText?: string | ((item: any) => string)
  itemValue?: string | ((item: any) => string)
  itemDisabled?: string | ((item: any) => boolean)
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

const resolveValue = (item: any) => {
  if (typeof item === 'object' && item !== null) {
    if (typeof props.itemValue === 'function') {
      return String(props.itemValue(item))
    }
    return String(item[props.itemValue])
  }
  return String(item)
}

const resolveText = (item: any) => {
  if (typeof item === 'object' && item !== null) {
    if (typeof props.itemText === 'function') {
      return props.itemText(item)
    }
    return item[props.itemText]
  }
  return String(item)
}

const resolveDisabled = (item: any) => {
  if (typeof item === 'object' && item !== null) {
    if (typeof props.itemDisabled === 'function') {
      return props.itemDisabled(item)
    }
    return Boolean(item[props.itemDisabled])
  }
  return false
}

const normalizedItems = computed(() => {
  return props.items.map(item => ({
    original: item,
    value: resolveValue(item),
    text: resolveText(item),
    disabled: resolveDisabled(item)
  }))
})

const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
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
