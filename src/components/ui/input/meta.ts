import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Input',
  description: 'Campo de texto de una línea para capturar datos del usuario.',
  useCases: [
    'Nombre, email, teléfono u otros datos de texto corto',
    'Búsqueda rápida con una sola línea',
    'Campos alfanuméricos como código de paciente o ID',
  ],
  notFor: [
    'Texto largo o multilínea como notas u observaciones (usar Textarea)',
    'Valores numéricos con controles de incremento (usar NumberField)',
    'Selección de fecha (usar DatePicker o Calendar)',
  ],
  relatedComponents: ['Textarea', 'NumberField', 'Field'],
  keywords: ['texto', 'campo', 'formulario', 'escribir', 'dato'],
}
