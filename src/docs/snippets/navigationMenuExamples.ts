export const navigationMenuExamplesCode = `<script setup lang="ts">
import ReusableNavigationMenu from './ReusableNavigationMenu.vue'
import type { NavigationItem } from './ReusableNavigationMenu.vue'
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-vue-next'

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
  <ReusableNavigationMenu :items="menuItems" />
</template>
`

export const reusableNavigationMenuCode = `<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import NavigationListItem from './NavigationListItem.vue'

export interface NavigationItemLink {
  title: string
  href: string
  description?: string
  icon?: any
}

export interface NavigationItem {
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

defineProps<{
  items: NavigationItem[]
}>()
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem v-for="(item, index) in items" :key="index">
        <!-- Trigger based menu item -->
        <template v-if="item.trigger && item.content">
          <NavigationMenuTrigger>{{ item.trigger }}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <!-- Layout: Default (Main link + list) -->
            <ul v-if="item.content.layout === 'default' || !item.content.layout" class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li v-if="item.content.mainLink" class="row-span-3">
                <NavigationMenuLink as-child>
                  <a
                    class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    :href="item.content.mainLink.href"
                  >
                    <div class="mb-2 mt-4 text-lg font-medium">
                      {{ item.content.mainLink.title }}
                    </div>
                    <p class="text-sm leading-tight text-muted-foreground">
                      {{ item.content.mainLink.description }}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <NavigationListItem
                v-for="link in item.content.links"
                :key="link.title"
                :to="link.href"
                :title="link.title"
              >
                {{ link.description }}
              </NavigationListItem>
            </ul>

            <!-- Layout: List (Grid of links) -->
            <ul v-else-if="item.content.layout === 'list'" class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <NavigationListItem
                v-for="link in item.content.links"
                :key="link.title"
                :to="link.href"
                :title="link.title"
              >
                {{ link.description }}
              </NavigationListItem>
            </ul>

            <!-- Layout: Simple (Single column list) -->
            <ul v-else-if="item.content.layout === 'simple'" class="grid w-[200px] gap-3 p-4">
              <li v-for="link in item.content.links" :key="link.title">
                 <NavigationMenuLink as-child>
                  <a :href="link.href" class="flex items-center gap-2 text-sm font-medium hover:underline">
                    <component :is="link.icon" v-if="link.icon" class="h-4 w-4" />
                    {{ link.title }}
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </template>

        <!-- Direct link menu item -->
        <template v-else-if="item.href">
          <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
            <a :href="item.href">{{ item.trigger }}</a>
          </NavigationMenuLink>
        </template>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
`

export const navigationListItemCode = `<script setup lang="ts">
import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

defineProps<{
  title?: string
  to?: string
}>()
</script>

<template>
  <li>
    <NavigationMenuLink as-child>
      <a
        :href="to"
        :class="cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          $attrs.class ?? '',
        )"
      >
        <div class="text-sm font-medium leading-none">{{ title }}</div>
        <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
          <slot />
        </p>
      </a>
    </NavigationMenuLink>
  </li>
</template>
`
