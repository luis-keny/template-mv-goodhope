import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Tabs',
  description: 'Alterna entre secciones de contenido relacionado dentro de la misma página.',
  useCases: [
    'Organizar configuraciones por categorías (General, Seguridad, Notificaciones)',
    'Separar vistas de un perfil (Datos, Historial, Documentos)',
    'Dividir formularios extensos en pasos nombrados',
  ],
  notFor: [
    'Navegación principal del sitio (usar NavigationMenu o Sidebar)',
    'Flujos de pasos secuenciales con validación entre pasos (usar Stepper)',
    'Pocas opciones de formato cortas (usar ToggleGroup)',
  ],
  relatedComponents: ['Stepper', 'NavigationMenu', 'ToggleGroup'],
  keywords: ['pestañas', 'secciones', 'vistas', 'categorías', 'alternar'],
}
