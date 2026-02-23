import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'DropdownMenu',
  description: 'Menú desplegable anclado a un botón o elemento que muestra una lista de acciones al hacer clic.',
  useCases: [
    'Menú de opciones de un usuario (perfil, configuración, cerrar sesión)',
    'Acciones secundarias sobre un elemento de lista (editar, archivar, exportar)',
    'Agrupar pocas acciones relacionadas bajo un botón para no saturar la UI',
  ],
  notFor: [
    'Acciones en clic derecho sin botón visible (usar ContextMenu)',
    'Seleccionar un valor de un conjunto de opciones (usar Select)',
    'Menú estilo escritorio con múltiples categorías tipo Archivo/Editar (usar Menubar)',
  ],
  relatedComponents: ['ContextMenu', 'Select', 'Menubar', 'Command'],
  keywords: ['dropdown', 'acciones', 'opciones', 'botón', 'menú', 'perfil'],
}
