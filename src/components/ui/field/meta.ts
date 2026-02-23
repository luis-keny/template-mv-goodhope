import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Field',
  description: 'Envoltorio de campo de formulario que agrupa etiqueta, control de entrada, descripción de ayuda y mensaje de error en una unidad accesible.',
  useCases: [
    'Envolver cualquier input, select o textarea con su etiqueta y mensaje de error asociado',
    'Campos de formulario con texto de ayuda descriptivo debajo del control',
    'Validación accesible donde el error se asocia al control con aria-describedby',
  ],
  notFor: [
    'El control de entrada en sí mismo (usar Input, Select, Textarea, etc.)',
    'Mensaje de estado global del formulario (usar Alert o Sonner)',
    'Agrupación de múltiples campos en secciones (usar Separator o Card)',
  ],
  relatedComponents: ['Input', 'Select', 'Textarea', 'Label'],
  keywords: ['campo', 'formulario', 'etiqueta', 'error', 'validación', 'accesibilidad'],
}
