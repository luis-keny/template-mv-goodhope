import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Toggle',
  description: 'Botón que mantiene estado activo/inactivo para aplicar opciones de formato o vista.',
  useCases: [
    'Negritas, cursivas u otras opciones de formato en un editor de texto',
    'Cambiar entre vista de lista y vista de cuadrícula',
    'Activar filtros o modos de visualización que persisten visualmente',
  ],
  notFor: [
    'Configuraciones del sistema o preferencias persistentes (usar Switch)',
    'Selección de una opción de un grupo exclusivo (usar ToggleGroup)',
    'Confirmar o iniciar una acción (usar Button)',
  ],
  relatedComponents: ['ToggleGroup', 'Switch', 'Button'],
  keywords: ['toggle', 'activo', 'formato', 'vista', 'persistente', 'editor'],
}
