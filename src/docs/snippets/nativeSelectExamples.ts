export const nativeSelectExamplesCode = `<script setup lang="ts">
import { ref } from 'vue'
import NativeSelectDynamic, { type SelectItems } from './NativeSelectDynamic.vue'
import { Label } from '@/components/ui/label'

const selectedStatus = ref('')
const selectedFramework = ref('')

// Ejemplo 1: Lista plana de opciones
const statusOptions: SelectItems = [
  { value: 'todo', label: 'Todo' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
  { value: 'cancelled', label: 'Cancelled' },
]

// Ejemplo 2: Lista agrupada
const frameworkOptions: SelectItems = [
  {
    label: 'Frontend',
    options: [
      { value: 'vue', label: 'Vue.js' },
      { value: 'react', label: 'React' },
      { value: 'angular', label: 'Angular' },
    ]
  },
  {
    label: 'Backend',
    options: [
      { value: 'node', label: 'Node.js' },
      { value: 'python', label: 'Python' },
      { value: 'go', label: 'Go' },
    ]
  }
]
</script>

<template>
  <div class="space-y-8">
    
    <!-- Simple Options -->
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <Label for="status">Project Status</Label>
      <NativeSelectDynamic
        id="status"
        v-model="selectedStatus"
        :items="statusOptions"
        placeholder="Select status"
      />
      <p class="text-sm text-muted-foreground">
        Selected: {{ selectedStatus || 'None' }}
      </p>
    </div>

    <!-- Grouped Options -->
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <Label for="framework">Tech Stack</Label>
      <NativeSelectDynamic
        id="framework"
        v-model="selectedFramework"
        :items="frameworkOptions"
        placeholder="Select a framework"
      />
      <p class="text-sm text-muted-foreground">
        Selected: {{ selectedFramework || 'None' }}
      </p>
    </div>

  </div>
</template>
`

export const nativeSelectDynamicComponentCode = `<script setup lang="ts">
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
`
