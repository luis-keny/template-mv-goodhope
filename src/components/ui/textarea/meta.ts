import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Textarea',
  description: 'Campo de texto multilínea para contenido extenso.',
  useCases: [
    'Observaciones clínicas, notas o descripciones largas',
    'Mensajes, comentarios o justificaciones',
    'Cualquier campo que requiera más de una línea de texto',
  ],
  notFor: [
    'Datos cortos de una línea como nombre o email (usar Input)',
    'Texto con formato enriquecido (usar editor externo)',
    'Código fuente con resaltado de sintaxis (usar componente externo)',
  ],
  relatedComponents: ['Input', 'Field'],
  keywords: ['texto', 'multilínea', 'nota', 'descripción', 'comentario', 'observación'],
}
