import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Separator',
  description: 'Línea divisoria horizontal o vertical para separar visualmente secciones de contenido relacionado.',
  useCases: [
    'Separar secciones de un formulario largo (datos personales / datos clínicos)',
    'Dividir elementos en un menú o lista de acciones',
    'Separación visual entre bloques de contenido en una página',
  ],
  notFor: [
    'Espaciado entre elementos (usar margin/padding CSS)',
    'Agrupar elementos en secciones con título (usar Card)',
    'Separar páginas de contenido multi-paso (usar Stepper)',
  ],
  relatedComponents: ['Card', 'Collapsible'],
  keywords: ['línea', 'divisor', 'separador', 'sección', 'hr'],
}
