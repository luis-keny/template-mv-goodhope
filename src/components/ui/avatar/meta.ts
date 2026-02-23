import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Avatar',
  description: 'Imagen circular de perfil con fallback a iniciales cuando la foto no está disponible.',
  useCases: [
    'Foto de perfil del médico o paciente en headers y listas',
    'Identificador visual de usuario en comentarios o actividad reciente',
    'Iniciales de nombre como placeholder cuando no hay foto disponible',
  ],
  notFor: [
    'Imágenes de contenido general (usar img o AspectRatio)',
    'Íconos de función o acción (usar Lucide icons directamente)',
    'Grupos de varios avatars superpuestos (requiere implementación custom)',
  ],
  relatedComponents: ['Badge', 'Card', 'AspectRatio'],
  keywords: ['avatar', 'foto', 'perfil', 'usuario', 'iniciales', 'imagen'],
}
