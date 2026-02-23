import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'HoverCard',
  description: 'Tarjeta rica de información que aparece al pasar el cursor sobre un enlace o elemento, mostrando una vista previa enriquecida.',
  useCases: [
    'Vista previa del perfil de un médico o paciente al pasar el cursor sobre su nombre',
    'Mostrar detalles de un medicamento al pasar el cursor sobre su código',
    'Preview de un recurso o documento sin necesidad de navegar',
  ],
  notFor: [
    'Texto de ayuda breve de una sola línea (usar Tooltip)',
    'Contenido interactivo que requiere clic para activarse (usar Popover)',
    'Acciones sobre un elemento (usar DropdownMenu o ContextMenu)',
  ],
  relatedComponents: ['Tooltip', 'Popover'],
  keywords: ['hover', 'cursor', 'preview', 'tarjeta', 'perfil', 'enlace'],
}
