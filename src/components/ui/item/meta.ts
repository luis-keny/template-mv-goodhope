import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Item',
  description: 'Elemento de lista con estructura consistente para icon, título, descripción y acción, usado como building block de listas.',
  useCases: [
    'Ítem de una lista de resultados de búsqueda con ícono y descripción',
    'Entrada de un log de actividad o historial de eventos',
    'Elemento de menú o navegación con estructura estándar',
  ],
  notFor: [
    'Datos tabulares con múltiples columnas alineadas (usar Table)',
    'Tarjeta con diseño rico y acciones complejas (usar Card)',
    'Opciones de un select o combobox (usar Select/Combobox internamente)',
  ],
  relatedComponents: ['Card', 'Table', 'Avatar'],
  keywords: ['ítem', 'lista', 'elemento', 'fila', 'entrada', 'resultado'],
}
