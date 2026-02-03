<script setup lang="ts">
import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup
} from '@/components/ui/native-select'

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectGroup {
  label?: string;
  options: SelectOption[];
}

// Accepts either a flat array of options OR an array of groups
export type SelectItems = (SelectOption | SelectGroup)[];

const props = defineProps<{
  items: SelectItems;
  modelValue?: string | number;
  placeholder?: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>();

// Type guard to check if an item is a group
const isGroup = (item: SelectOption | SelectGroup): item is SelectGroup => {
  return 'options' in item;
}
</script>

<template>
  <NativeSelect
    :model-value="modelValue"
    @update:model-value="(val: any) => emit('update:modelValue', val)"
  >
    <NativeSelectOption v-if="placeholder" value="" disabled selected>
      {{ placeholder }}
    </NativeSelectOption>

    <template v-for="(item, index) in items" :key="index">
      
      <!-- Option Group -->
      <NativeSelectOptGroup v-if="isGroup(item)" :label="item.label">
        <NativeSelectOption
          v-for="option in item.options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </NativeSelectOption>
      </NativeSelectOptGroup>

      <!-- Single Option -->
      <NativeSelectOption
        v-else
        :value="item.value"
        :disabled="item.disabled"
      >
        {{ item.label }}
      </NativeSelectOption>

    </template>
  </NativeSelect>
</template>
