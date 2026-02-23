import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Kbd',
  description: 'Elemento visual que representa una tecla o combinación de teclado con estilo de tecla física para documentación o hints de atajos.',
  useCases: [
    'Mostrar atajos de teclado en tooltips o menús (Ctrl+K, ⌘+Enter)',
    'Documentación interna de atajos disponibles en la aplicación',
    'Hints de navegación rápida en la paleta de comandos',
  ],
  notFor: [
    'Etiquetas de estado o categoría (usar Badge)',
    'Botones de acción que el usuario presiona (usar Button)',
    'Código o snippets de texto (usar code tag o bloque de código)',
  ],
  relatedComponents: ['Command', 'Tooltip'],
  keywords: ['teclado', 'atajo', 'shortcut', 'keybinding', 'kbd', 'tecla'],
}
