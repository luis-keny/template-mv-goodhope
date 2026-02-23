import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'NativeSelect',
  description: 'Elemento select nativo del navegador con estilos mínimos y máxima accesibilidad.',
  useCases: [
    'Formularios donde se prioriza la accesibilidad nativa del navegador',
    'Dispositivos móviles donde el select nativo ofrece mejor experiencia táctil',
    'Cuando la compatibilidad con navegadores antiguos es un requisito',
  ],
  notFor: [
    'Diseños con estilos personalizados del desplegable (usar Select)',
    'Listas con búsqueda o filtrado (usar Combobox)',
    'Múltiples selecciones (usar Checkbox o TagsInput)',
  ],
  relatedComponents: ['Select', 'Combobox'],
  keywords: ['select', 'nativo', 'accesibilidad', 'móvil', 'formulario', 'navegador'],
}
