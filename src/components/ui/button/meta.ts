import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Button',
  description: 'Elemento interactivo para disparar acciones o iniciar navegación.',
  useCases: [
    'Confirmar o enviar un formulario',
    'Navegar a otra sección o página',
    'Disparar acciones como guardar, eliminar o exportar',
    'Iniciar flujos como crear, cargar o descargar',
  ],
  notFor: [
    'Selección entre opciones mutuamente excluyentes (usar RadioGroup)',
    'Activar o desactivar un estado persistente (usar Switch o Toggle)',
    'Navegación principal del sitio (usar NavigationMenu o Tabs)',
    'Agrupar múltiples acciones relacionadas (usar ButtonGroup)',
  ],
  relatedComponents: ['ButtonGroup', 'Toggle'],
  keywords: ['acción', 'clic', 'submit', 'formulario', 'guardar', 'eliminar'],
}
