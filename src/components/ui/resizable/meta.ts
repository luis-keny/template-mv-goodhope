import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Resizable',
  description: 'Paneles con divisores arrastrables que permiten al usuario redimensionar secciones del layout a su preferencia.',
  useCases: [
    'Editor con panel de código y preview que el usuario puede redimensionar',
    'Layout de dos columnas donde el usuario ajusta el tamaño de la barra lateral',
    'Interfaz tipo IDE con paneles configurables por el usuario',
  ],
  notFor: [
    'Layouts de tamaño fijo que no necesitan ajuste del usuario (usar CSS grid)',
    'Panel lateral que solo se abre/cierra (usar Sidebar o Sheet)',
    'División visual sin interacción (usar Separator)',
  ],
  relatedComponents: ['Sidebar', 'Sheet', 'Separator'],
  keywords: ['redimensionar', 'paneles', 'draggable', 'split', 'layout', 'ajustable'],
}
