<script setup lang="ts">
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'

export interface MenuItem {
  type?: 'item' | 'checkbox' | 'separator' | 'sub' | 'radio-group';
  label?: string;
  shortcut?: string;
  disabled?: boolean;
  inset?: boolean;
  checked?: boolean;
  value?: string;
  options?: { label: string; value: string }[];
  children?: MenuItem[];
  action?: () => void;
  onUpdateChecked?: (checked: boolean) => void;
  onUpdateValue?: (value: string) => void;
}

export interface MenubarMenuDef {
  trigger: string;
  items: MenuItem[];
}

defineProps<{
  menus: MenubarMenuDef[]
}>()
</script>

<template>
  <Menubar>
    <MenubarMenu v-for="(menu, index) in menus" :key="index">
      <MenubarTrigger class="bg-transparent">{{ menu.trigger }}</MenubarTrigger>
      <MenubarContent>
        <template v-for="(item, itemIndex) in menu.items" :key="itemIndex">
          
          <!-- Regular Item -->
          <MenubarItem
            v-if="!item.type || item.type === 'item'"
            :disabled="item.disabled"
            :inset="item.inset"
            @click="item.action"
          >
            {{ item.label }}
            <MenubarShortcut v-if="item.shortcut">{{ item.shortcut }}</MenubarShortcut>
          </MenubarItem>

          <!-- Checkbox Item -->
          <MenubarCheckboxItem
            v-else-if="item.type === 'checkbox'"
            :checked="item.checked"
            :disabled="item.disabled"
            @update:checked="item.onUpdateChecked"
          >
            {{ item.label }}
            <MenubarShortcut v-if="item.shortcut">{{ item.shortcut }}</MenubarShortcut>
          </MenubarCheckboxItem>

          <!-- Separator -->
          <MenubarSeparator v-else-if="item.type === 'separator'" />

          <!-- Radio Group -->
          <MenubarRadioGroup
            v-else-if="item.type === 'radio-group'"
            :model-value="item.value"
            @update:model-value="item.onUpdateValue"
          >
            <MenubarRadioItem
              v-for="option in item.options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </MenubarRadioItem>
          </MenubarRadioGroup>

          <!-- Sub Menu (Recursive) -->
          <MenubarSub v-else-if="item.type === 'sub'">
            <MenubarSubTrigger :inset="item.inset">{{ item.label }}</MenubarSubTrigger>
            <MenubarSubContent>
              <template v-for="(subItem, subIndex) in item.children" :key="subIndex">
                <!-- Duplicate logic for sub-items (simple version 1 level deep for demo, or component recursion) -->
                <!-- Ideally this inner loop should be a separate component for full recursion, 
                     but for this example we can inline common types or use a recursive component -->
                
                 <MenubarItem
                    v-if="!subItem.type || subItem.type === 'item'"
                    :disabled="subItem.disabled"
                    :inset="subItem.inset"
                    @click="subItem.action"
                  >
                    {{ subItem.label }}
                    <MenubarShortcut v-if="subItem.shortcut">{{ subItem.shortcut }}</MenubarShortcut>
                  </MenubarItem>

                  <MenubarSeparator v-else-if="subItem.type === 'separator'" />
                  
                  <!-- Note: Full recursion requires a self-referencing component. 
                       For this example, I'll support 1 level of nesting which covers the user example. -->
              </template>
            </MenubarSubContent>
          </MenubarSub>

        </template>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
