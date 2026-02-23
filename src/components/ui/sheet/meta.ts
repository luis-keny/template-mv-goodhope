import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Sheet',
  description: 'Panel deslizante desde un borde de la pantalla para contenido secundario o formularios extensos sin perder el contexto de la página.',
  useCases: [
    'Formulario de edición de un registro sin salir de la lista principal',
    'Panel de filtros o configuraciones que el usuario puede ajustar mientras ve el contenido',
    'Detalles ampliados de una fila de tabla manteniendo visible la tabla',
  ],
  notFor: [
    'Confirmación de acciones críticas que requieren atención total (usar Dialog o AlertDialog)',
    'Contenido que ocupa toda la pantalla en móvil con gesto de arrastrar (usar Drawer)',
    'Navegación lateral persistente de la aplicación (usar Sidebar)',
  ],
  relatedComponents: ['Dialog', 'Drawer', 'Sidebar'],
  keywords: ['panel', 'deslizante', 'lateral', 'formulario', 'edición', 'filtros'],
}
