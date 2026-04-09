import type { Component } from 'vue'
import { components, getComponentBySlug, getComponentSlug, type ComponentListItem } from '@/utils/components'

type DocModule = {
  default: Component
}

const docModules = import.meta.glob<DocModule>('./components/*/*Docs.vue', { eager: true })

export const componentDocs = Object.entries(docModules).reduce<Record<string, Component>>(
  (registry, [path, module]) => {
    const match = path.match(/\.\/components\/([^/]+)\/[^/]+Docs\.vue$/)

    if (match) {
      registry[match[1]] = module.default
    }

    return registry
  },
  {},
)

export const documentedComponents: ComponentListItem[] = components.filter((component) =>
  Boolean(componentDocs[getComponentSlug(component)]),
)

export function getComponentDoc(slug: string): Component | null {
  return componentDocs[slug] ?? null
}

export function getComponentTitle(slug: string): string {
  return getComponentBySlug(slug)?.title ?? slug.replace(/-/g, ' ')
}
