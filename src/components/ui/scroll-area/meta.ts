import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'ScrollArea',
  description: 'Contenedor con scroll personalizado que mantiene barras de desplazamiento estilizadas y consistentes con el diseño.',
  useCases: [
    'Lista larga de resultados dentro de un panel o card de altura fija',
    'Chat o historial de mensajes con scroll interno',
    'Sidebar con navegación extensa que supera la altura de la pantalla',
  ],
  notFor: [
    'Scroll natural del documento completo (usar overflow CSS nativo)',
    'Paginación de grandes datasets (usar Pagination + DataTable)',
    'Carrusel de elementos con navegación por botones (usar Carousel)',
  ],
  relatedComponents: ['Sidebar', 'DataTable', 'Carousel'],
  keywords: ['scroll', 'desplazamiento', 'lista larga', 'panel', 'overflow'],
}
