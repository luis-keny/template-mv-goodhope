import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Chart',
  description: 'Gráficos de barras, líneas, torta y área para visualizar tendencias y distribuciones de datos clínicos o administrativos.',
  useCases: [
    'Evolución de métricas clínicas de un paciente a lo largo del tiempo (línea)',
    'Distribución de consultas por especialidad o departamento (barras/torta)',
    'Comparación de indicadores del dashboard en el tiempo (área)',
  ],
  notFor: [
    'Datos tabulares que se deben consultar por fila (usar DataTable)',
    'Un solo número o métrica importante (usar Card con valor destacado)',
    'Lista de valores exactos (usar Table)',
  ],
  relatedComponents: ['DataTable', 'Card'],
  keywords: ['gráfico', 'barras', 'líneas', 'torta', 'tendencia', 'visualización', 'métricas'],
}
