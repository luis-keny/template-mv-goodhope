import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Tooltip',
  description: 'Etiqueta de texto breve que aparece al pasar el cursor para explicar la función de un icono o elemento sin texto visible.',
  useCases: [
    'Describir la función de un botón de icono sin etiqueta de texto',
    'Mostrar el nombre completo de un campo abreviado al pasar el cursor',
    'Aclaración contextual breve para elementos de la interfaz',
  ],
  notFor: [
    'Información enriquecida con múltiples líneas o imágenes (usar HoverCard)',
    'Contenido interactivo que requiere clic (usar Popover)',
    'Mensajes de error o validación de formulario (usar Field o texto inline)',
  ],
  relatedComponents: ['HoverCard', 'Popover'],
  keywords: ['tooltip', 'ayuda', 'icono', 'hover', 'descripción', 'etiqueta'],
}
