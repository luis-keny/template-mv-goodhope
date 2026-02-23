import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Combobox',
  description: 'Campo de selección con búsqueda integrada para listas largas o dinámicas.',
  useCases: [
    'Seleccionar de una lista larga donde el usuario necesita filtrar',
    'Búsqueda de pacientes, medicamentos o procedimientos',
    'Autocompletado con opciones cargadas desde el servidor',
    'Cuando la lista tiene más de 10 ítems',
  ],
  notFor: [
    'Listas cortas de opciones fijas (usar Select)',
    'Selección de pocas opciones siempre visibles (usar RadioGroup)',
    'Cuando no se requiere búsqueda (usar Select o NativeSelect)',
  ],
  relatedComponents: ['Select', 'NativeSelect', 'Command'],
  keywords: ['autocomplete', 'búsqueda', 'filtrar', 'lista larga', 'dinámico'],
}
