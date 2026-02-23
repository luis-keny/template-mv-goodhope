import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'ToggleGroup',
  description: 'Grupo de botones toggle para selección exclusiva o múltiple de opciones visibles.',
  useCases: [
    'Alineación de texto: izquierda, centro, derecha',
    'Selección de tipo de vista o filtro entre opciones siempre visibles',
    'Opciones de formato que pueden combinarse (negrita + cursiva)',
  ],
  notFor: [
    'Más de 5 opciones donde el espacio es limitado (usar Select o Tabs)',
    'Opciones con descripciones largas (usar RadioGroup)',
    'Navegación entre secciones de contenido (usar Tabs)',
  ],
  relatedComponents: ['Toggle', 'RadioGroup', 'Tabs'],
  keywords: ['grupo', 'selección', 'formato', 'alineación', 'vista', 'opciones'],
}
