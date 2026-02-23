import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Calendar',
  description: 'Calendario visual permanente para seleccionar fechas o navegar por el tiempo.',
  useCases: [
    'Mostrar un calendario inline dentro de un dashboard o panel',
    'Seleccionar una fecha de cita o evento cuando el contexto visual importa',
    'Navegación mensual donde el usuario necesita ver el mes completo',
  ],
  notFor: [
    'Selección de fecha en un campo de formulario compacto (usar DatePicker)',
    'Cuando el espacio es limitado (usar DatePicker)',
  ],
  relatedComponents: ['DatePicker'],
  keywords: ['calendario', 'fecha', 'mes', 'día', 'cita', 'evento', 'inline'],
}
