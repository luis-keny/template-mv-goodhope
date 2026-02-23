import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Spinner',
  description: 'Indicador giratorio de carga para operaciones cuya duración no es conocida de antemano.',
  useCases: [
    'Indicar que una petición a la API está en curso (guardar, buscar)',
    'Bloquear un botón con spinner mientras se procesa una acción',
    'Carga inicial de datos en un componente o sección',
  ],
  notFor: [
    'Carga de listas donde se puede mostrar la forma del contenido (usar Skeleton)',
    'Operaciones con porcentaje de avance conocido (usar Progress)',
    'Indicar estado completado o fallido (usar Badge o Alert)',
  ],
  relatedComponents: ['Skeleton', 'Progress'],
  keywords: ['spinner', 'carga', 'loading', 'giratorio', 'espera'],
}
