export const commandExamplesCode = `<script setup lang="ts">
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-vue-next'
import DynamicCommand from '@/components/ui/command/DynamicCommand.vue'

const groups = [
  {
    heading: 'Suggestions',
    items: [
      { value: 'calendar', label: 'Calendar', icon: Calendar },
      { value: 'emoji', label: 'Search Emoji', icon: Smile },
      { value: 'calculator', label: 'Calculator', icon: Calculator, disabled: true },
    ],
  },
  {
    heading: 'Settings',
    items: [
      { value: 'profile', label: 'Profile', icon: User, shortcut: '⌘P' },
      { value: 'billing', label: 'Billing', icon: CreditCard, shortcut: '⌘B' },
      { value: 'settings', label: 'Settings', icon: Settings, shortcut: '⌘S' },
    ],
  },
]
</script>

<template>
  <DynamicCommand
    :groups="groups"
    placeholder="Type a command or search..."
  />
</template>
`
