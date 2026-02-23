import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Pagination',
  description: 'Control para navegar entre páginas de un conjunto grande de resultados.',
  useCases: [
    'Navegar entre páginas de una tabla o lista de resultados',
    'Paginación de búsquedas, historiales o registros clínicos',
    'Cualquier conjunto de datos dividido en páginas fijas',
  ],
  notFor: [
    'Desplazamiento infinito sin páginas (scroll infinito custom)',
    'Navegación entre pasos de un flujo (usar Stepper)',
    'Solo acciones anterior/siguiente sin numeración (usar ButtonGroup)',
  ],
  relatedComponents: ['DataTable', 'Stepper', 'ButtonGroup'],
  keywords: ['páginas', 'resultados', 'anterior', 'siguiente', 'lista'],
}
