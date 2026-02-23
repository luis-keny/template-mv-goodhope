import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Breadcrumb',
  description: 'Rastro de navegación que muestra la posición actual dentro de la jerarquía del sitio.',
  useCases: [
    'Indicar la ruta actual en sitios con múltiples niveles de profundidad',
    'Permitir navegación rápida hacia secciones padre',
    'Orientar al usuario en catálogos, configuraciones o portales con jerarquía',
  ],
  notFor: [
    'Sitios planos sin jerarquía de navegación',
    'Navegación principal del sitio (usar NavigationMenu)',
    'Alternar entre secciones del mismo nivel (usar Tabs)',
  ],
  relatedComponents: ['NavigationMenu', 'Tabs'],
  keywords: ['migas de pan', 'ruta', 'jerarquía', 'ubicación', 'navegación'],
}
