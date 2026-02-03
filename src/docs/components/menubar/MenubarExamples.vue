<script setup lang="ts">
import { ref } from 'vue'
import MenubarDynamic, { type MenubarMenuDef } from './MenubarDynamic.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
  <Card>
    <CardHeader>
      <CardTitle>Menubar</CardTitle>
      <CardDescription>
        A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.
      </CardDescription>
    </CardHeader>
    <CardContent class="flex justify-center p-6">
      <MenubarDynamic :menus="menus" />
    </CardContent>
  </Card>
</template>
