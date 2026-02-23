import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Skeleton',
  description: 'Marcador de posición animado que simula la forma del contenido mientras los datos se están cargando.',
  useCases: [
    'Mostrar la silueta de una lista de pacientes mientras se cargan desde la API',
    'Placeholder de una tarjeta de resultados clínicos durante la carga',
    'Indicar carga sin usar un spinner para reducir el efecto de parpadeo',
  ],
  notFor: [
    'Indicar progreso de una operación con porcentaje conocido (usar Progress)',
    'Carga inicial de toda la página (usar Spinner centralizado)',
    'Contenido que ya está disponible pero necesita validación (no usar placeholder)',
  ],
  relatedComponents: ['Spinner', 'Progress'],
  keywords: ['skeleton', 'carga', 'loading', 'placeholder', 'shimmer'],
}
