import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'RadioGroup',
  description: 'Grupo de opciones mutuamente excluyentes mostradas todas a la vez.',
  useCases: [
    'Elegir entre pocas opciones (2–5) siempre visibles',
    'Selección de tipo de pago, prioridad o género en formularios',
    'Cuando el usuario necesita comparar todas las opciones antes de elegir',
  ],
  notFor: [
    'Más de 5 opciones (usar Select para ahorrar espacio)',
    'Múltiples selecciones simultáneas (usar Checkbox)',
    'Activar o desactivar una única opción (usar Switch o Checkbox)',
  ],
  relatedComponents: ['Checkbox', 'Select', 'Switch'],
  keywords: ['radio', 'opción', 'exclusivo', 'formulario', 'elegir'],
}
