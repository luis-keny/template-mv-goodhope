<script setup lang="ts">
import { Button } from '@/components/ui/button'
import DynamicDropdownMenu, { type DropdownMenuItemType } from '@/components/ui/dropdown-menu/DynamicDropdownMenu.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
  <Card>
    <CardHeader>
      <CardTitle>Dropdown Menu</CardTitle>
      <CardDescription>
        Muestra un menú al usuario, como un conjunto de acciones o funciones, disparado por un botón.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex items-center justify-center">
        <DynamicDropdownMenu :items="menuItems" menu-class="w-56">
          <Button variant="outline">
            Open
          </Button>
        </DynamicDropdownMenu>
      </div>
    </CardContent>
  </Card>
</template>
