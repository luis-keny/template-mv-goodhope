export const dropdownMenuExamplesCode = `<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import DynamicDropdownMenu, { type DropdownMenuItemType } from '@/components/ui/dropdown-menu/DynamicDropdownMenu.vue'

const showStatusBar = ref(true)
const showActivityBar = ref(false)
const showPanel = ref(false)
const position = ref('bottom')

const menuItems: DropdownMenuItemType[] = [
  { type: 'label', label: 'My Account' },
  { type: 'separator' },
  { label: 'Profile', shortcut: '⇧⌘P' },
  { label: 'Billing', shortcut: '⌘B' },
  { label: 'Settings', shortcut: '⌘S' },
  { label: 'Keyboard shortcuts', shortcut: '⌘K' },
  { type: 'separator' },
  { label: 'Team' },
  {
    type: 'sub',
    label: 'Invite users',
    items: [
      { label: 'Email' },
      { label: 'Message' },
      { type: 'separator' },
      { label: 'More...' },
    ],
  },
  { label: 'New Team', shortcut: '⌘+T' },
  { type: 'separator' },
  { label: 'GitHub' },
  { label: 'Support' },
  { label: 'API', disabled: true },
  { type: 'separator' },
  { label: 'Log out', shortcut: '⇧⌘Q' },
]
</script>

<template>
  <DynamicDropdownMenu :items="menuItems" menu-class="w-56">
    <Button variant="outline">
      Open
    </Button>
  </DynamicDropdownMenu>
</template>
`
