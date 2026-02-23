import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Stepper',
  description: 'Indicador de progreso por pasos numerados para flujos secuenciales donde cada paso tiene nombre y validación antes de avanzar.',
  useCases: [
    'Formulario de admisión de paciente dividido en pasos (Datos personales, Seguro, Historia clínica)',
    'Proceso de configuración inicial con múltiples fases',
    'Flujo de creación de receta o protocolo de tratamiento paso a paso',
  ],
  notFor: [
    'Progreso continuo sin pasos discretos (usar Progress)',
    'Navegación entre secciones sin secuencia obligatoria (usar Tabs)',
    'Carrusel visual de elementos sin validación (usar Carousel)',
  ],
  relatedComponents: ['Progress', 'Tabs', 'Carousel'],
  keywords: ['pasos', 'flujo', 'secuencial', 'formulario multi-paso', 'wizard', 'admisión'],
}
