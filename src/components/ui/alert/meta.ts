import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Alert',
  description: 'Bloque de mensaje informativo, de advertencia o error visible permanentemente en la página para comunicar estado del sistema.',
  useCases: [
    'Mostrar advertencia de sesión próxima a expirar en la parte superior',
    'Indicar que hay campos inválidos al intentar guardar un formulario',
    'Informar sobre mantenimiento planificado o cambios importantes del sistema',
  ],
  notFor: [
    'Notificaciones temporales que desaparecen solas (usar Sonner)',
    'Confirmación de acciones críticas que bloquean la UI (usar AlertDialog)',
    'Estado de un campo individual en un formulario (usar Field)',
  ],
  relatedComponents: ['Sonner', 'AlertDialog', 'Badge'],
  keywords: ['alerta', 'advertencia', 'error', 'información', 'mensaje', 'sistema'],
}
