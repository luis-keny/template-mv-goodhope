import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'NumberField',
  description: 'Campo numérico con controles de incremento y decremento integrados.',
  useCases: [
    'Cantidad de dosis, días de tratamiento o edad del paciente',
    'Valores numéricos con rango definido donde el usuario puede ajustar con botones',
    'Campos donde se quiere prevenir el ingreso de texto no numérico',
  ],
  notFor: [
    'Rangos continuos donde se arrastra (usar Slider)',
    'Texto alfanumérico o código (usar Input)',
    'Cantidades muy grandes donde es más práctico escribirlas (usar Input)',
  ],
  relatedComponents: ['Input', 'Slider'],
  keywords: ['número', 'cantidad', 'incremento', 'dosis', 'valor numérico'],
}
