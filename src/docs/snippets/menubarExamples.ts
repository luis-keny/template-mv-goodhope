export const menubarExamplesCode = `<script setup lang="ts">
import { ref } from 'vue'
import MenubarDynamic, { type MenubarMenuDef } from './MenubarDynamic.vue'

const showBookmarks = ref(false)
const showFullUrls = ref(true)
const selectedProfile = ref('benoit')

const menus = ref<MenubarMenuDef[]>([
  {
    trigger: 'File',
    items: [
      { label: 'New Tab', shortcut: '⌘T' },
      { label: 'New Window', shortcut: '⌘N' },
      { label: 'New Incognito Window', disabled: true },
      { type: 'separator' },
      {
        type: 'sub',
        label: 'Share',
        children: [
          { label: 'Email link' },
          { label: 'Messages' },
          { label: 'Notes' },
        ],
      },
      { type: 'separator' },
      { label: 'Print...', shortcut: '⌘P' },
    ],
  },
  {
    trigger: 'Edit',
    items: [
      { label: 'Undo', shortcut: '⌘Z' },
      { label: 'Redo', shortcut: '⇧⌘Z' },
      { type: 'separator' },
      {
        type: 'sub',
        label: 'Find',
        children: [
          { label: 'Search the web' },
          { type: 'separator' },
          { label: 'Find...' },
          { label: 'Find Next' },
          { label: 'Find Previous' },
        ],
      },
      { type: 'separator' },
      { label: 'Cut' },
      { label: 'Copy' },
      { label: 'Paste' },
    ],
  },
  {
    trigger: 'View',
    items: [
      {
        type: 'checkbox',
        label: 'Always Show Bookmarks Bar',
        checked: showBookmarks.value,
        onUpdateChecked: (v) => (showBookmarks.value = v),
      },
      {
        type: 'checkbox',
        label: 'Always Show Full URLs',
        checked: showFullUrls.value,
        onUpdateChecked: (v) => (showFullUrls.value = v),
      },
      { type: 'separator' },
      { label: 'Reload', shortcut: '⌘R', inset: true },
      { label: 'Force Reload', shortcut: '⇧⌘R', disabled: true, inset: true },
      { type: 'separator' },
      { label: 'Toggle Fullscreen', inset: true },
      { type: 'separator' },
      { label: 'Hide Sidebar', inset: true },
    ],
  },
  {
    trigger: 'Profiles',
    items: [
      {
        type: 'radio-group',
        value: selectedProfile.value,
        onUpdateValue: (v) => (selectedProfile.value = v),
        options: [
          { label: 'Andy', value: 'andy' },
          { label: 'Benoit', value: 'benoit' },
          { label: 'Luis', value: 'Luis' },
        ],
      },
      { type: 'separator' },
      { label: 'Edit...', inset: true },
      { type: 'separator' },
      { label: 'Add Profile...', inset: true },
    ],
  },
])
</script>

<template>
  <MenubarDynamic :menus="menus" />
</template>
`

export const menubarDynamicComponentCode = `<script setup lang="ts">
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
      <MenubarTrigger>{{ menu.trigger }}</MenubarTrigger>
      <MenubarContent>
        <template v-for="(item, itemIndex) in menu.items" :key="itemIndex">
          
          <MenubarItem
            v-if="!item.type || item.type === 'item'"
            :disabled="item.disabled"
            :inset="item.inset"
            @click="item.action"
          >
            {{ item.label }}
            <MenubarShortcut v-if="item.shortcut">{{ item.shortcut }}</MenubarShortcut>
          </MenubarItem>

          <MenubarCheckboxItem
            v-else-if="item.type === 'checkbox'"
            :checked="item.checked"
            :disabled="item.disabled"
            @update:checked="item.onUpdateChecked"
          >
            {{ item.label }}
            <MenubarShortcut v-if="item.shortcut">{{ item.shortcut }}</MenubarShortcut>
          </MenubarCheckboxItem>

          <MenubarSeparator v-else-if="item.type === 'separator'" />

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

          <MenubarSub v-else-if="item.type === 'sub'">
            <MenubarSubTrigger :inset="item.inset">{{ item.label }}</MenubarSubTrigger>
            <MenubarSubContent>
              <template v-for="(subItem, subIndex) in item.children" :key="subIndex">
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
              </template>
            </MenubarSubContent>
          </MenubarSub>

        </template>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
`
