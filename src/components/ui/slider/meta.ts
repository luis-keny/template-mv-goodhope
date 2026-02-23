import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Slider',
  description: 'Control deslizante para seleccionar un valor en un rango continuo.',
  useCases: [
    'Volumen, brillo o nivel de zoom',
    'Filtrar resultados por rango de edad, peso o algún indicador clínico',
    'Ajustar un valor numérico donde la precisión exacta no es crítica',
  ],
  notFor: [
    'Valores numéricos exactos que el usuario debe escribir (usar Input o NumberField)',
    'Selección entre opciones discretas (usar Select o RadioGroup)',
    'Valores fuera de un rango conocido (usar NumberField)',
  ],
  relatedComponents: ['NumberField', 'Input'],
  keywords: ['rango', 'continuo', 'deslizar', 'volumen', 'filtro', 'ajuste'],
}
