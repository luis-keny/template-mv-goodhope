import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Accordion',
  description: 'Lista de secciones expandibles donde solo una puede estar abierta a la vez, ideal para FAQs y contenido agrupado.',
  useCases: [
    'Preguntas frecuentes del sistema o guía de usuario',
    'Secciones de configuración agrupadas por categoría',
    'Lista de procedimientos clínicos con descripción detallada colapsable',
  ],
  notFor: [
    'Sección única que se colapsa (usar Collapsible)',
    'Navegación entre vistas con contenido complejo (usar Tabs)',
    'Panel lateral que se abre desde el borde (usar Sheet)',
  ],
  relatedComponents: ['Collapsible', 'Tabs', 'Separator'],
  keywords: ['acordeón', 'FAQ', 'expandible', 'colapsable', 'secciones', 'toggle'],
}
