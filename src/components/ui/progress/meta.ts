import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Progress',
  description: 'Barra visual de progreso que muestra el porcentaje de avance de una operación o flujo con valor numérico conocido.',
  useCases: [
    'Mostrar el porcentaje de completitud de un formulario multi-paso',
    'Indicar el avance de una carga o importación de archivos',
    'Visualizar el progreso de un plan de tratamiento o protocolo',
  ],
  notFor: [
    'Carga de duración desconocida sin porcentaje (usar Spinner)',
    'Pasos discretos numerados con nombre (usar Stepper)',
    'Estado de un campo o elemento individual (usar Badge)',
  ],
  relatedComponents: ['Stepper', 'Spinner', 'Skeleton'],
  keywords: ['progreso', 'barra', 'porcentaje', 'avance', 'carga', 'completitud'],
}
