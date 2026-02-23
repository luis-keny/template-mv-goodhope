import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Label',
  description: 'Etiqueta de texto accesible asociada a un control de formulario mediante htmlFor/for para mejorar la usabilidad y accesibilidad.',
  useCases: [
    'Etiquetar un campo de input en un formulario con asociación accesible',
    'Texto descriptivo de un checkbox o radio button',
    'Cualquier control que necesite un nombre visible y accesible',
  ],
  notFor: [
    'Texto de ayuda adicional bajo el campo (usar Field con description)',
    'Etiquetas de estado o categoría (usar Badge)',
    'Headings o títulos de sección (usar h2/h3 nativos)',
  ],
  relatedComponents: ['Field', 'Input', 'Checkbox'],
  keywords: ['etiqueta', 'label', 'formulario', 'accesibilidad', 'campo', 'asociar'],
}
