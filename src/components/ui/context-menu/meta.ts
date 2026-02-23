import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'ContextMenu',
  description: 'Menú contextual que aparece al hacer clic derecho sobre un elemento, ofreciendo acciones relevantes para ese contexto.',
  useCases: [
    'Acciones sobre una fila de tabla al hacer clic derecho (editar, copiar, eliminar)',
    'Opciones contextuales en un elemento de lista de pacientes o registros',
    'Menú de acciones en componentes tipo canvas o árbol de archivos',
  ],
  notFor: [
    'Acciones que se activan con clic izquierdo en un botón (usar DropdownMenu)',
    'Menú principal de la aplicación con categorías (usar Menubar)',
    'Una sola acción principal sobre un elemento (usar Button directo)',
  ],
  relatedComponents: ['DropdownMenu', 'Menubar'],
  keywords: ['clic derecho', 'contextual', 'acciones', 'tabla', 'lista', 'menú'],
}
