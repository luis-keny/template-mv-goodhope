<script setup lang="ts">
import DynamicCommand from '@/components/ui/command/DynamicCommand.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-vue-next'

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
  <Card>
    <CardHeader>
      <CardTitle>Command</CardTitle>
      <CardDescription>
        Interfaz de línea de comandos rápida, componible y sin estilos para buscar y filtrar.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="flex justify-center">
        <DynamicCommand
          :groups="groups"
          placeholder="Type a command or search..."
        />
      </div>
    </CardContent>
  </Card>
</template>
