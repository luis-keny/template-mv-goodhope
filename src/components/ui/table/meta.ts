import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Table',
  description: 'Tabla HTML semántica para datos tabulares simples sin necesidad de ordenamiento, filtros o paginación interactivos.',
  useCases: [
    'Mostrar datos comparativos estáticos con pocas filas (horarios, tarifas)',
    'Tabla de resumen en un reporte o panel de resultados fijo',
    'Lista de ítems con columnas simples sin interacción de usuario',
  ],
  notFor: [
    'Grandes datasets con ordenamiento, filtros y paginación (usar DataTable)',
    'Lista simple de elementos sin columnas (usar ul o Item)',
    'Datos con jerarquía o agrupación compleja (usar DataTable con agrupación)',
  ],
  relatedComponents: ['DataTable', 'ScrollArea', 'Pagination'],
  keywords: ['tabla', 'datos', 'columnas', 'filas', 'tabulares', 'estático'],
}
