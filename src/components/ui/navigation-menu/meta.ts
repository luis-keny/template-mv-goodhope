import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'NavigationMenu',
  description: 'Menú de navegación principal con soporte para submenús y paneles de contenido.',
  useCases: [
    'Navegación principal de la aplicación con categorías y subítems',
    'Menú de header con dropdowns de contenido rico',
    'Navegación con múltiples niveles de jerarquía visibles al mismo tiempo',
  ],
  notFor: [
    'Navegación secundaria dentro de una página (usar Tabs o Sidebar)',
    'Menús de acciones contextuales sobre un elemento (usar DropdownMenu)',
    'Indicar la posición actual en una jerarquía (usar Breadcrumb)',
  ],
  relatedComponents: ['Sidebar', 'Tabs', 'Breadcrumb'],
  keywords: ['navegación', 'menú', 'header', 'dropdown', 'principal'],
}
