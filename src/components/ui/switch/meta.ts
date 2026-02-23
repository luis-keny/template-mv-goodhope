import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Switch',
  description: 'Control para activar o desactivar una configuración de forma inmediata.',
  useCases: [
    'Activar notificaciones, permisos u otras preferencias del sistema',
    'Habilitar o deshabilitar una funcionalidad en tiempo real',
    'Configuraciones que toman efecto inmediatamente sin requerir guardar',
  ],
  notFor: [
    'Opciones en formularios que se guardan junto con otros campos (usar Checkbox)',
    'Selección entre más de dos estados (usar Select o RadioGroup)',
    'Acciones irreversibles que requieren confirmación (usar Button con Dialog)',
  ],
  relatedComponents: ['Checkbox', 'Toggle'],
  keywords: ['activar', 'desactivar', 'on', 'off', 'configuración', 'toggle'],
}
