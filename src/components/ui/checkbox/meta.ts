import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Checkbox',
  description: 'Control de selección booleana o múltiple para formularios.',
  useCases: [
    'Aceptar términos y condiciones',
    'Seleccionar múltiples ítems de una lista',
    'Activar o desactivar una opción dentro de un formulario que se guarda',
  ],
  notFor: [
    'Activar un estado del sistema de forma inmediata (usar Switch)',
    'Selección de una única opción entre varias (usar RadioGroup)',
    'Ingresar múltiples valores de texto libre (usar TagsInput)',
  ],
  relatedComponents: ['Switch', 'RadioGroup', 'TagsInput'],
  keywords: ['check', 'marcar', 'múltiple', 'formulario', 'booleano'],
}
