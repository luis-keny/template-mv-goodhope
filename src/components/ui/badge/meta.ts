import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Badge',
  description: 'Etiqueta compacta de estado, categoría o conteo que se aplica sobre otro elemento para clasificarlo o destacarlo visualmente.',
  useCases: [
    'Indicar el estado de un paciente (Activo, Inactivo, En espera)',
    'Mostrar el conteo de notificaciones no leídas sobre un ícono',
    'Etiquetar la prioridad o categoría de un registro clínico',
  ],
  notFor: [
    'Mensajes de alerta con texto explicativo (usar Alert)',
    'Estado complejo con múltiples líneas de información (usar Card o Alert)',
    'Progreso de una tarea en porcentaje (usar Progress)',
  ],
  relatedComponents: ['Alert', 'Progress', 'Avatar'],
  keywords: ['etiqueta', 'estado', 'conteo', 'categoría', 'tag', 'pill'],
}
