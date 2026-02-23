import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Select',
  description: 'Menú desplegable para seleccionar una opción de una lista compacta.',
  useCases: [
    'Seleccionar un país, categoría o tipo en un formulario',
    'Lista de opciones fijas y cortas (menos de 10 ítems)',
    'Cuando el espacio es limitado y no se necesita búsqueda',
  ],
  notFor: [
    'Listas largas donde el usuario necesita filtrar (usar Combobox)',
    'Múltiples selecciones simultáneas (usar Checkbox o TagsInput)',
    'Pocas opciones que deben estar siempre visibles (usar RadioGroup)',
    'Máxima compatibilidad con navegadores antiguos (usar NativeSelect)',
  ],
  relatedComponents: ['Combobox', 'NativeSelect', 'RadioGroup'],
  keywords: ['dropdown', 'opción', 'elegir', 'formulario', 'lista'],
}
