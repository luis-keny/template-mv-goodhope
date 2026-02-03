<script setup lang="ts">
import type { Component } from 'vue'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// Tipos recursivos para manejar submenús y diferentes tipos de items
export interface DropdownMenuItemType {
  type?: 'item' | 'separator' | 'checkbox' | 'radio-group' | 'sub' | 'label'
  label?: string
  value?: string | boolean
  icon?: Component
  shortcut?: string
  disabled?: boolean
  inset?: boolean
  checked?: boolean
  onSelect?: () => void
  items?: DropdownMenuItemType[] // Para submenús, grupos y radio groups
  modelValue?: any // Para radio groups y checkboxes
}

interface Props {
  items: DropdownMenuItemType[]
  menuClass?: string
  align?: 'start' | 'center' | 'end'
}

withDefaults(defineProps<Props>(), {
  align: 'start'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <slot />
    </DropdownMenuTrigger>
    <DropdownMenuContent :class="menuClass" :align="align">
      <template v-for="(item, index) in items" :key="index">
        <!-- Separator -->
        <DropdownMenuSeparator v-if="item.type === 'separator'" />

        <!-- Label -->
        <DropdownMenuLabel v-else-if="item.type === 'label'" :inset="item.inset">
          {{ item.label }}
        </DropdownMenuLabel>

        <!-- Standard Item -->
        <DropdownMenuItem
          v-else-if="!item.type || item.type === 'item'"
          :inset="item.inset"
          :disabled="item.disabled"
          @select="item.onSelect"
        >
          <component :is="item.icon" v-if="item.icon" class="mr-2 h-4 w-4" />
          {{ item.label }}
          <DropdownMenuShortcut v-if="item.shortcut">
            {{ item.shortcut }}
          </DropdownMenuShortcut>
        </DropdownMenuItem>

        <!-- Checkbox Item -->
        <DropdownMenuCheckboxItem
          v-else-if="item.type === 'checkbox'"
          :checked="item.checked"
          :model-value="item.modelValue"
          :disabled="item.disabled"
          @update:checked="item.onSelect"
        >
          {{ item.label }}
          <DropdownMenuShortcut v-if="item.shortcut">
            {{ item.shortcut }}
          </DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>

        <!-- Radio Group -->
        <DropdownMenuRadioGroup
          v-else-if="item.type === 'radio-group'"
          :model-value="item.modelValue"
          @update:model-value="(val) => emit('update:modelValue', val)"
        >
          <template v-for="(radioItem, rIndex) in item.items" :key="rIndex">
            <DropdownMenuLabel v-if="radioItem.type === 'label'" :inset="radioItem.inset">
              {{ radioItem.label }}
            </DropdownMenuLabel>
            <DropdownMenuRadioItem
              v-else
              :value="radioItem.value as string"
              @select="radioItem.onSelect"
            >
              {{ radioItem.label }}
            </DropdownMenuRadioItem>
          </template>
        </DropdownMenuRadioGroup>

        <!-- Submenu -->
        <DropdownMenuSub v-else-if="item.type === 'sub'">
          <DropdownMenuSubTrigger :inset="item.inset" :disabled="item.disabled">
            <component :is="item.icon" v-if="item.icon" class="mr-2 h-4 w-4" />
            {{ item.label }}
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent class="w-48">
              <template v-for="(subItem, sIndex) in item.items" :key="sIndex">
                <DropdownMenuSeparator v-if="subItem.type === 'separator'" />
                <DropdownMenuItem
                  v-else
                  :inset="subItem.inset"
                  :disabled="subItem.disabled"
                  @select="subItem.onSelect"
                >
                  <component :is="subItem.icon" v-if="subItem.icon" class="mr-2 h-4 w-4" />
                  {{ subItem.label }}
                  <DropdownMenuShortcut v-if="subItem.shortcut">
                    {{ subItem.shortcut }}
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </template>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </template>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
