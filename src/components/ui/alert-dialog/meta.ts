import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'AlertDialog',
  description: 'Diálogo de confirmación bloqueante para acciones irreversibles, con botones Confirmar y Cancelar bien diferenciados.',
  useCases: [
    'Confirmar eliminación permanente de datos clínicos o registros',
    'Advertir sobre acciones que no pueden deshacerse antes de ejecutarlas',
    'Requerir consentimiento explícito antes de una operación crítica',
  ],
  notFor: [
    'Formularios con múltiples campos (usar Dialog)',
    'Mensajes de error o éxito que no requieren confirmación (usar Sonner o Alert)',
    'Información contextual no crítica (usar Popover o HoverCard)',
  ],
  relatedComponents: ['Dialog', 'Sonner', 'Alert'],
  keywords: ['alerta', 'confirmar', 'eliminar', 'irreversible', 'advertencia', 'modal'],
}
