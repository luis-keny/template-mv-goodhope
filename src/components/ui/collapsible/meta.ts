import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Collapsible',
  description: 'Sección de contenido que puede expandirse o contraerse con un toggle, para mostrar u ocultar información secundaria.',
  useCases: [
    'Sección de detalles avanzados de configuración que la mayoría no necesita',
    'Mostrar/ocultar información adicional de un registro sin cambiar de página',
    'Bloque de contenido secundario bajo una vista principal',
  ],
  notFor: [
    'Múltiples secciones donde solo una puede estar abierta a la vez (usar Accordion)',
    'Panel lateral que se abre desde el borde (usar Sheet o Sidebar)',
    'Contenido que siempre debe ser visible (no usar)',
  ],
  relatedComponents: ['Accordion', 'Sheet', 'Separator'],
  keywords: ['colapsar', 'expandir', 'toggle', 'ocultar', 'mostrar', 'sección'],
}
