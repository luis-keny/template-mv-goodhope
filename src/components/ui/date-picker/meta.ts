import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'DatePicker',
  description: 'Campo de formulario compacto para seleccionar una fecha mediante un popover.',
  useCases: [
    'Fecha de nacimiento, ingreso o egreso en formularios médicos',
    'Seleccionar fecha de inicio de un tratamiento o medicación',
    'Campos de fecha donde el espacio es limitado',
  ],
  notFor: [
    'Mostrar el calendario de forma permanente visible (usar Calendar)',
    'Seleccionar solo el mes o el año (usar Select)',
  ],
  relatedComponents: ['Calendar'],
  keywords: ['fecha', 'formulario', 'picker', 'popover', 'día', 'nacimiento', 'ingreso'],
}
