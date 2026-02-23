import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Menubar',
  description: 'Barra de menú estilo escritorio con menús desplegables de Archivo, Editar, Ver, etc.',
  useCases: [
    'Aplicaciones estilo escritorio con múltiples categorías de acciones',
    'Editores de texto o código con operaciones agrupadas',
    'Interfaces que migran de desktop a web y mantienen la convención de barra de menú',
  ],
  notFor: [
    'Navegación principal del sitio web (usar NavigationMenu)',
    'Pocas acciones agrupadas (usar DropdownMenu)',
    'Menús contextuales de clic derecho (usar ContextMenu)',
  ],
  relatedComponents: ['NavigationMenu', 'DropdownMenu', 'ContextMenu'],
  keywords: ['menubar', 'archivo', 'editar', 'escritorio', 'acciones'],
}
