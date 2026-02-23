import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Sonner',
  description: 'Sistema de notificaciones toast que muestra mensajes temporales en la esquina de la pantalla para confirmar acciones o informar errores.',
  useCases: [
    'Confirmar que un registro fue guardado exitosamente',
    'Notificar un error de conexión o fallo en una operación en segundo plano',
    'Informar que una sesión fue cerrada o un cambio aplicado',
  ],
  notFor: [
    'Mensajes de error persistentes que el usuario debe leer y actuar (usar Alert)',
    'Confirmación de acciones destructivas antes de ejecutarlas (usar AlertDialog)',
    'Estado inline de un formulario (usar Field)',
  ],
  relatedComponents: ['Alert', 'AlertDialog'],
  keywords: ['toast', 'notificación', 'temporal', 'éxito', 'error', 'mensaje'],
}
