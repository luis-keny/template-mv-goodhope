<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

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

const sections = [
  { title: "Get Started", url: "/docs/introduction" },
  { title: "Components", url: "/docs/components" },
  { title: "Installation", url: "/docs/installation" },
];

const components = [
  { title: "Accordion", url: "/docs/components/accordion" },
  { title: "Alert", url: "/docs/components/alert" },
  { title: "Alert Dialog", url: "/docs/components/alert-dialog" },
  { title: "Aspect Ratio", url: "/docs/components/aspect-ratio" },
  { title: "Avatar", url: "/docs/components/avatar" },
  { title: "Badge", url: "/docs/components/badge" },
  { title: "Breadcrumb", url: "/docs/components/breadcrumb" },
  { title: "Button", url: "/docs/components/button" },
  { title: "Button Group", url: "/docs/components/button-group" },
  { title: "Calendar", url: "/docs/components/calendar" },
  { title: "Card", url: "/docs/components/card" },
  { title: "Carousel", url: "/docs/components/carousel" },
  { title: "Chart", url: "/docs/components/chart" },
  { title: "Checkbox", url: "/docs/components/checkbox" },
  { title: "Collapsible", url: "/docs/components/collapsible" },
  { title: "Combobox", url: "/docs/components/combobox" },
  { title: "Command", url: "/docs/components/command" },
  { title: "Context Menu", url: "/docs/components/context-menu" },
  { title: "Data Table", url: "/docs/components/data-table" },
  { title: "Date Picker", url: "/docs/components/date-picker" },
  { title: "Dialog", url: "/docs/components/dialog" },
  { title: "Drawer", url: "/docs/components/drawer" },
  { title: "Dropdown Menu", url: "/docs/components/dropdown-menu" },
  { title: "Empty", url: "/docs/components/empty" },
  { title: "Field", url: "/docs/components/field" },
  { title: "Form", url: "/docs/components/form" },
  { title: "Hover Card", url: "/docs/components/hover-card" },
  { title: "Input", url: "/docs/components/input" },
  { title: "Input Group", url: "/docs/components/input-group" },
  { title: "Input OTP", url: "/docs/components/input-otp" },
  { title: "Item", url: "/docs/components/item" },
  { title: "Kbd", url: "/docs/components/kbd" },
  { title: "Label", url: "/docs/components/label" },
  { title: "Menubar", url: "/docs/components/menubar" },
  { title: "Native Select", url: "/docs/components/native-select" },
  { title: "Navigation Menu", url: "/docs/components/navigation-menu" },
  { title: "Number Field", url: "/docs/components/number-field" },
  { title: "Pagination", url: "/docs/components/pagination" },
  { title: "Pin Input", url: "/docs/components/pin-input" },
  { title: "Popover", url: "/docs/components/popover" },
  { title: "Progress", url: "/docs/components/progress" },
  { title: "Radio Group", url: "/docs/components/radio-group" },
  { title: "Range Calendar", url: "/docs/components/range-calendar" },
  { title: "Resizable", url: "/docs/components/resizable" },
  { title: "Scroll Area", url: "/docs/components/scroll-area" },
  { title: "Select", url: "/docs/components/select" },
  { title: "Separator", url: "/docs/components/separator" },
  { title: "Sheet", url: "/docs/components/sheet" },
  { title: "Sidebar", url: "/docs/components/sidebar" },
  { title: "Skeleton", url: "/docs/components/skeleton" },
  { title: "Slider", url: "/docs/components/slider" },
  { title: "Sonner", url: "/docs/components/sonner" },
  { title: "Spinner", url: "/docs/components/spinner" },
  { title: "Stepper", url: "/docs/components/stepper" },
  { title: "Switch", url: "/docs/components/switch" },
  { title: "Table", url: "/docs/components/table" },
  { title: "Tabs", url: "/docs/components/tabs" },
  { title: "Tags Input", url: "/docs/components/tags-input" },
  { title: "Textarea", url: "/docs/components/textarea" },
  { title: "Toast", url: "/docs/components/toast" },
  { title: "Toggle", url: "/docs/components/toggle" },
  { title: "Toggle Group", url: "/docs/components/toggle-group" },
  { title: "Tooltip", url: "/docs/components/tooltip" },
  { title: "Typography", url: "/docs/components/typography" },
];
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
                  <SidebarMenuButton as-child>
                    <a :href="section.url">
                      <span>{{ section.title }}</span>
                    </a>
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
                  <SidebarMenuButton as-child>
                    <a :href="component.url">
                      <span>{{ component.title }}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    <main class="flex-1">
      <SidebarInset>
        <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10 bg-transparent backdrop-blur-sm">
          <div class="flex items-center gap-2 px-4">
            <SidebarTrigger class="-ml-1" />
          </div>
          <div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs/components">
                    Components
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <section class="flex-1">
          <!-- <slot /> -->
        </section>
      </SidebarInset>
    </main>
    </SidebarProvider>
  </div>
</template>
