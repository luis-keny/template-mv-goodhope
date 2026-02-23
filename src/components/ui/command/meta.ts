import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Command',
  description: 'Paleta de comandos con búsqueda instantánea para navegar a páginas, ejecutar acciones o buscar registros rápidamente con el teclado.',
  useCases: [
    'Búsqueda global de pacientes, médicos o registros en la aplicación',
    'Navegación rápida a cualquier sección del sistema con atajos de teclado',
    'Selección de acciones frecuentes en una interfaz de power user',
  ],
  notFor: [
    'Lista de opciones en un formulario (usar Select o Combobox)',
    'Acciones sobre un elemento específico (usar DropdownMenu o ContextMenu)',
    'Búsqueda simple dentro de una tabla (usar el filtro de DataTable)',
  ],
  relatedComponents: ['Combobox', 'DropdownMenu', 'DataTable'],
  keywords: ['comando', 'búsqueda global', 'paleta', 'teclado', 'navegación rápida', 'shortcut'],
}
