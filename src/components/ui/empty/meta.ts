import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Empty',
  description: 'Estado vacío con ícono, título y descripción para informar al usuario cuando una lista, tabla o sección no tiene contenido.',
  useCases: [
    'Mostrar "No hay pacientes registrados" con ícono cuando la lista está vacía',
    'Estado vacío de resultados de búsqueda sin coincidencias',
    'Placeholder de una sección aún sin datos con call-to-action para agregar el primero',
  ],
  notFor: [
    'Errores de sistema o de red (usar Alert)',
    'Carga en progreso (usar Skeleton o Spinner)',
    'Confirmación de que una acción fue exitosa (usar Sonner)',
  ],
  relatedComponents: ['Skeleton', 'Alert', 'Sonner'],
  keywords: ['vacío', 'sin datos', 'empty state', 'no results', 'placeholder', 'ilustración'],
}
