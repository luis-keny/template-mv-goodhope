import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Card',
  description: 'Contenedor con borde y sombra para agrupar información relacionada en una unidad visual cohesiva.',
  useCases: [
    'Presentar el resumen de datos de un paciente (nombre, edad, diagnóstico)',
    'Agrupar métricas del dashboard en unidades independientes',
    'Mostrar resultados de búsqueda como fichas visuales',
  ],
  notFor: [
    'Tabla de datos tabulares con columnas y filas (usar Table o DataTable)',
    'Formularios extensos que necesitan navegación por pasos (usar Stepper)',
    'Listas de ítems sin jerarquía visual (usar lista simple o Item)',
  ],
  relatedComponents: ['DataTable', 'Separator', 'Avatar'],
  keywords: ['tarjeta', 'contenedor', 'panel', 'dashboard', 'ficha', 'resumen'],
}
