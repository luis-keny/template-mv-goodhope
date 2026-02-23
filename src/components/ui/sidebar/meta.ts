import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Sidebar',
  description: 'Panel lateral colapsable para la navegación primaria de la aplicación.',
  useCases: [
    'Navegación principal en paneles de administración o dashboards',
    'Menú persistente con secciones y subsecciones de la app',
    'Barra lateral que el usuario puede colapsar para ganar espacio',
  ],
  notFor: [
    'Navegación secundaria dentro de una vista (usar Tabs)',
    'Panel de contenido complementario sin quitar el foco (usar Sheet)',
    'Menú contextual de acciones (usar DropdownMenu)',
  ],
  relatedComponents: ['NavigationMenu', 'Sheet', 'Tabs'],
  keywords: ['sidebar', 'panel lateral', 'navegación', 'dashboard', 'menú app'],
}
