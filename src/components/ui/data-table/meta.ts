import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'DataTable',
  description: 'Tabla interactiva con ordenamiento por columna, filtros, paginación y selección múltiple para datasets medianos y grandes.',
  useCases: [
    'Lista de pacientes con búsqueda, filtros por estado y paginación',
    'Registro de historial clínico con ordenamiento por fecha',
    'Inventario o listados administrativos con selección múltiple para acciones en lote',
  ],
  notFor: [
    'Datos estáticos simples sin interacción (usar Table)',
    'Pocas filas sin necesidad de filtros (usar Table o lista simple)',
    'Visualización gráfica de datos (usar Chart)',
  ],
  relatedComponents: ['Table', 'Pagination', 'Chart'],
  keywords: ['tabla interactiva', 'filtros', 'ordenamiento', 'paginación', 'dataset', 'selección'],
}
