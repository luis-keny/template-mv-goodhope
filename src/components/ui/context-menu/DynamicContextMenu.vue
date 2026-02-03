<script setup lang="ts">
import type { Component } from 'vue'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'

// Definimos tipos recursivos para manejar submenús y diferentes tipos de items
export interface MenuItem {
  type?: 'item' | 'separator' | 'checkbox' | 'radio-group' | 'sub' | 'label'
  label?: string
  value?: string | boolean
  icon?: Component
  shortcut?: string
  disabled?: boolean
  inset?: boolean
  checked?: boolean
  onSelect?: () => void
  items?: MenuItem[] // Para submenús y radio groups
  modelValue?: any // Para radio groups y checkboxes
}

interface Props {
  items: MenuItem[]
  menuClass?: string
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger as-child>
      <slot />
    </ContextMenuTrigger>
    <ContextMenuContent :class="menuClass">
      <template v-for="(item, index) in items" :key="index">
        <!-- Separator -->
        <ContextMenuSeparator v-if="item.type === 'separator'" />

        <!-- Label -->
        <ContextMenuLabel v-else-if="item.type === 'label'" :inset="item.inset">
          {{ item.label }}
        </ContextMenuLabel>

        <!-- Standard Item -->
        <ContextMenuItem
          v-else-if="!item.type || item.type === 'item'"
          :inset="item.inset"
          :disabled="item.disabled"
          @select="item.onSelect"
        >
          <component :is="item.icon" v-if="item.icon" class="mr-2 h-4 w-4" />
          {{ item.label }}
          <ContextMenuShortcut v-if="item.shortcut">
            {{ item.shortcut }}
          </ContextMenuShortcut>
        </ContextMenuItem>

        <!-- Checkbox Item -->
        <ContextMenuCheckboxItem
          v-else-if="item.type === 'checkbox'"
          :checked="item.checked"
          :model-value="item.modelValue"
          :disabled="item.disabled"
          @update:checked="(val) => item.onSelect?.()"
        >
          {{ item.label }}
          <ContextMenuShortcut v-if="item.shortcut">
            {{ item.shortcut }}
          </ContextMenuShortcut>
        </ContextMenuCheckboxItem>

        <!-- Radio Group -->
        <ContextMenuRadioGroup
          v-else-if="item.type === 'radio-group'"
          :model-value="item.modelValue"
          @update:model-value="(val) => emit('update:modelValue', val)"
        >
          <template v-for="(radioItem, rIndex) in item.items" :key="rIndex">
            <ContextMenuLabel v-if="radioItem.type === 'label'" :inset="radioItem.inset">
              {{ radioItem.label }}
            </ContextMenuLabel>
            <ContextMenuRadioItem
              v-else
              :value="radioItem.value as string"
              @select="radioItem.onSelect"
            >
              {{ radioItem.label }}
            </ContextMenuRadioItem>
          </template>
        </ContextMenuRadioGroup>

        <!-- Submenu -->
        <ContextMenuSub v-else-if="item.type === 'sub'">
          <ContextMenuSubTrigger :inset="item.inset" :disabled="item.disabled">
            <component :is="item.icon" v-if="item.icon" class="mr-2 h-4 w-4" />
            {{ item.label }}
          </ContextMenuSubTrigger>
          <ContextMenuSubContent class="w-48">
            <template v-for="(subItem, sIndex) in item.items" :key="sIndex">
              <ContextMenuSeparator v-if="subItem.type === 'separator'" />
              <ContextMenuItem
                v-else
                :inset="subItem.inset"
                :disabled="subItem.disabled"
                :class="{ 'text-destructive': subItem.type === 'item' && subItem.value === 'delete' }"
                @select="subItem.onSelect"
              >
                <component :is="subItem.icon" v-if="subItem.icon" class="mr-2 h-4 w-4" />
                {{ subItem.label }}
                <ContextMenuShortcut v-if="subItem.shortcut">
                  {{ subItem.shortcut }}
                </ContextMenuShortcut>
              </ContextMenuItem>
            </template>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </template>
    </ContextMenuContent>
  </ContextMenu>
</template>
