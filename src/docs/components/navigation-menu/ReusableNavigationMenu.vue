<script setup lang="ts">
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
import { computed } from 'vue'

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

const props = defineProps<{
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
