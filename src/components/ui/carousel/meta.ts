import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Carousel',
  description: 'Presentación deslizable de elementos en una fila, con controles de navegación anterior/siguiente y soporte para swipe.',
  useCases: [
    'Galería de imágenes médicas o documentos escaneados',
    'Recorrido visual de pasos o instrucciones de forma secuencial',
    'Presentar tarjetas de contenido en pantallas con espacio horizontal limitado',
  ],
  notFor: [
    'Lista navegable de grandes datasets (usar DataTable)',
    'Pasos de un flujo con validación (usar Stepper)',
    'Imágenes que se pueden ver todas a la vez (usar grid)',
  ],
  relatedComponents: ['Stepper', 'DataTable'],
  keywords: ['carrusel', 'galería', 'deslizable', 'imágenes', 'slider', 'swipe'],
}
