import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'ButtonGroup',
  description: 'Agrupa botones relacionados visualmente como una unidad cohesiva.',
  useCases: [
    'Acciones de guardar, cancelar y eliminar en un mismo contexto',
    'Controles de paginación anterior/siguiente',
    'Opciones de acción sobre un mismo objeto (editar, duplicar, eliminar)',
  ],
  notFor: [
    'Un único botón de acción (usar Button directamente)',
    'Selección de una opción entre varias (usar ToggleGroup o RadioGroup)',
    'Navegación principal entre secciones (usar Tabs o NavigationMenu)',
  ],
  relatedComponents: ['Button', 'ToggleGroup'],
  keywords: ['grupo', 'botones', 'acciones', 'conjunto', 'barra de acciones'],
}
