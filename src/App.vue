<script setup lang="ts">
import 'vue-sonner/style.css'
import DynamicBreadcrumb from '@/components/ui/breadcrumb/DynamicBreadcrumb.vue'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { siteConfig } from './utils/config';
import { getColors } from './utils/colors';
import CommandMenu from './components/command/CommandMenu.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { sections, components } from './utils/components';


const route = useRoute();
const breadcrumbItems = computed(() => {
  const segments = route.path.split('/').filter(Boolean);
  let acc = '';
  const items: Array<{ label: string; href: string; isCurrent: boolean }> = [];
  
  // Siempre añadir Home al principio
  items.push({ label: 'Home', href: '/', isCurrent: route.path === '/' });

  for (let i = 0; i < segments.length; i++) {
    const part = segments[i];
    acc = `${acc}/${part}`;
    if (!part) continue;
    if (part === 'docs') continue;
    const label = part.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    items.push({ 
      label, 
      href: acc, 
      isCurrent: i === segments.length - 1 
    });
  }
  return items;
});
</script>

<template>
  <div class="flex min-h-screen">
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <CommandMenu :tree="{
            children: [
              {
                title: 'Components',
                type: 'group',
                path: '/docs/components',
                children: components.map(component => ({
                  title: component.title,
                  type: 'component',
                  path: component.url,
                })),
              }
            ],
            title: 'Root',
            path: '/',
          }" :colors="getColors()" :nav-items="siteConfig.navItems" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Sections</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem v-for="section in sections" :key="section.title">
                  <SidebarMenuButton as-child :isActive="route.path === section.url">
                    <RouterLink :to="section.url">
                      <span>{{ section.title }}</span>
                    </RouterLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Components</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem v-for="component in components" :key="component.title">
                  <SidebarMenuButton as-child :isActive="route.path === component.url">
                    <RouterLink :to="component.url">
                      <span>{{ component.title }}</span>
                    </RouterLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    <main class="flex-1 overflow-x-hidden">
      <SidebarInset>
        <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10 bg-transparent backdrop-blur-sm">
          <div class="flex items-center gap-2 px-4">
            <SidebarTrigger class="-ml-1" />
          </div>
          <DynamicBreadcrumb :items="breadcrumbItems" :max-items="4" expansion-direction="middle" />
        </header>
        <section class="flex-1">
          <router-view />
        </section>
      </SidebarInset>
    </main>
    </SidebarProvider>
  </div>
</template>
