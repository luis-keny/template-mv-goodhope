import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Popover',
  description: 'Panel flotante anclado a un elemento que muestra contenido interactivo como formularios de filtro o pickers al hacer clic.',
  useCases: [
    'Selector de fecha anclado a un campo de entrada',
    'Formulario de filtros rápidos anclado a un botón',
    'Contenido interactivo que aparece al clic y se cierra al hacer clic fuera',
  ],
  notFor: [
    'Información de solo lectura al pasar el cursor (usar Tooltip o HoverCard)',
    'Lista de acciones sobre un elemento (usar DropdownMenu)',
    'Contenido que requiere la atención completa del usuario (usar Dialog)',
  ],
  relatedComponents: ['Tooltip', 'HoverCard', 'DropdownMenu', 'Dialog'],
  keywords: ['flotante', 'anclado', 'clic', 'picker', 'filtro', 'popup'],
}
