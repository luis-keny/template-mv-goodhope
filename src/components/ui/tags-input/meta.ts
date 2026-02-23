import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'TagsInput',
  description: 'Campo para ingresar y gestionar múltiples etiquetas o valores.',
  useCases: [
    'Seleccionar múltiples diagnósticos, alergias o especialidades',
    'Agregar etiquetas o categorías a un registro',
    'Campos con múltiples valores de texto libre',
  ],
  notFor: [
    'Selección de un único valor (usar Select o Input)',
    'Opciones predefinidas fijas sin texto libre (usar Checkbox)',
    'Un solo valor numérico o de texto corto (usar Input)',
  ],
  relatedComponents: ['Checkbox', 'Select', 'Input'],
  keywords: ['tags', 'etiquetas', 'múltiple', 'chips', 'valores', 'alergias'],
}
