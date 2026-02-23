import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Drawer',
  description: 'Panel modal que desliza desde la parte inferior optimizado para móvil, con soporte para gesto de arrastre para cerrar.',
  useCases: [
    'Acciones y opciones en dispositivos móviles con interacción táctil',
    'Formulario corto en móvil que se activa desde un botón flotante',
    'Lista de opciones o acciones como alternativa móvil al DropdownMenu',
  ],
  notFor: [
    'Interfaces principalmente de escritorio (usar Sheet o Dialog)',
    'Paneles laterales persistentes de navegación (usar Sidebar)',
    'Contenido no interactivo que solo necesita cerrarse con clic exterior (usar Popover)',
  ],
  relatedComponents: ['Sheet', 'Dialog', 'DropdownMenu'],
  keywords: ['drawer', 'móvil', 'bottom sheet', 'deslizar', 'táctil', 'arrastrar'],
}
