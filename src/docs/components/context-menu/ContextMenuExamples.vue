<script setup lang="ts">
import { Code2Icon, PlusIcon, TrashIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import DynamicContextMenu, { type MenuItem } from '@/components/ui/context-menu/DynamicContextMenu.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const showBookmarks = ref(true)
const showFullUrls = ref(false)
const person = ref('pedro')

const menuItems: MenuItem[] = [
  { label: 'Back', shortcut: '⌘[', inset: true },
  { label: 'Forward', shortcut: '⌘]', inset: true, disabled: true },
  { label: 'Reload', shortcut: '⌘R', inset: true },
  {
    type: 'sub',
    label: 'More Tools',
    inset: true,
    items: [
      { label: 'Save Page...', shortcut: '⇧⌘S', inset: true },
      { label: 'Create Shortcut...', icon: PlusIcon },
      { label: 'Name Window...', inset: true },
      { type: 'separator' },
      { label: 'Developer Tools', icon: Code2Icon },
      { type: 'separator' },
      { label: 'Delete', icon: TrashIcon, value: 'delete' },
    ],
  },
  { type: 'separator' },
  {
    type: 'checkbox',
    label: 'Show Bookmarks',
    shortcut: '⌘⇧B',
    modelValue: showBookmarks,
    onSelect: () => (showBookmarks.value = !showBookmarks.value),
  },
  {
    type: 'checkbox',
    label: 'Show Full URLs',
    modelValue: showFullUrls,
    onSelect: () => (showFullUrls.value = !showFullUrls.value),
  },
  { type: 'separator' },
  {
    type: 'radio-group',
    modelValue: person,
    items: [
      { type: 'label', label: 'People', inset: true },
      { label: 'Pedro Duarte', value: 'pedro' },
      { label: 'Colm Tuite', value: 'colm' },
    ],
  },
]
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Context Menu</CardTitle>
      <CardDescription>
        Muestra un menú contextual al hacer clic derecho.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex items-center justify-center py-10">
        <DynamicContextMenu :items="menuItems" menu-class="w-64">
          <div class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm cursor-context-menu">
            Right click here
          </div>
        </DynamicContextMenu>
      </div>
    </CardContent>
  </Card>
</template>
