export const navigationMenuExamplesCode = `<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-vue-next'

// Definición de tipos para los items del menú
interface NavigationItemLink {
  title: string
  href: string
  description?: string
  icon?: any
}

interface NavigationItem {
  trigger?: string
  href?: string
  content?: {
    mainLink?: {
      title: string
      href: string
      description: string
    }
    links?: NavigationItemLink[]
    layout?: 'default' | 'list' | 'simple'
  }
}

// Datos del menú
const menuItems: NavigationItem[] = [
  {
    trigger: 'Getting Started',
    content: {
      layout: 'default',
      mainLink: {
        title: 'shadcn/ui',
        href: '/',
        description: 'Beautifully designed components built with Tailwind CSS.',
      },
      links: [
        { title: 'Introduction', href: '/docs', description: 'Re-usable components built using Radix UI and Tailwind CSS.' },
        { title: 'Installation', href: '/docs/installation', description: 'How to install dependencies and structure your app.' },
        { title: 'Typography', href: '/docs/primitives/typography', description: 'Styles for headings, paragraphs, lists...etc' },
      ],
    },
  },
  {
    trigger: 'Components',
    content: {
      layout: 'list',
      links: [
        { title: 'Alert Dialog', href: '/docs/primitives/alert-dialog', description: 'A modal dialog that interrupts the user with important content and expects a response.' },
        { title: 'Hover Card', href: '/docs/primitives/hover-card', description: 'For sighted users to preview content available behind a link.' },
        { title: 'Progress', href: '/docs/primitives/progress', description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.' },
        { title: 'Scroll-area', href: '/docs/primitives/scroll-area', description: 'Visually or semantically separates content.' },
        { title: 'Tabs', href: '/docs/primitives/tabs', description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.' },
        { title: 'Tooltip', href: '/docs/primitives/tooltip', description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.' },
      ],
    },
  },
  {
    trigger: 'Documentation',
    href: '/docs',
  },
  {
    trigger: 'Status',
    content: {
      layout: 'simple',
      links: [
        { title: 'Backlog', href: '#', icon: CircleHelpIcon },
        { title: 'To Do', href: '#', icon: CircleIcon },
        { title: 'Done', href: '#', icon: CircleCheckIcon },
      ],
    },
  },
]
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <!-- Implementación reutilizable iterando sobre menuItems -->
      <NavigationMenuItem v-for="(item, index) in menuItems" :key="index">
        <!-- ... lógica de renderizado según layout ... -->
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
`
