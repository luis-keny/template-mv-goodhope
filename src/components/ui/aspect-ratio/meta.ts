import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'AspectRatio',
  description: 'Contenedor que mantiene una proporción de aspecto fija (como 16:9 o 1:1) para imágenes, videos o contenido incrustado.',
  useCases: [
    'Imagen de portada de un artículo que debe mantener proporción 16:9',
    'Miniatura cuadrada de avatar o imagen de producto',
    'Video o iframe incrustado con proporción responsive consistente',
  ],
  notFor: [
    'Layouts generales de página (usar CSS grid/flex directamente)',
    'Imágenes que deben adaptarse libremente al contenido (usar img con object-fit)',
    'Contenedores con altura variable según contenido (no usar)',
  ],
  relatedComponents: ['Avatar', 'Card'],
  keywords: ['aspecto', 'proporción', '16:9', '1:1', 'imagen', 'video', 'responsive'],
}
