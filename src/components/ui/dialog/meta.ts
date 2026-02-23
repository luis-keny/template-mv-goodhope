import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Dialog',
  description: 'Ventana modal centrada que interrumpe el flujo para confirmar acciones críticas o mostrar formularios cortos.',
  useCases: [
    'Confirmar acciones destructivas como eliminar un registro',
    'Formulario corto que requiere atención inmediata del usuario',
    'Mostrar detalles de un elemento sin navegar a otra página',
  ],
  notFor: [
    'Paneles que el usuario necesita tener abiertos largo tiempo (usar Sheet)',
    'Contenido que desliza desde un borde de la pantalla en móvil (usar Drawer)',
    'Información adicional al pasar el cursor, no interactiva (usar HoverCard o Tooltip)',
    'Acciones contextuales de un elemento (usar DropdownMenu)',
  ],
  relatedComponents: ['AlertDialog', 'Sheet', 'Drawer', 'Popover'],
  keywords: ['modal', 'ventana', 'confirmar', 'formulario', 'overlay', 'eliminar'],
}
