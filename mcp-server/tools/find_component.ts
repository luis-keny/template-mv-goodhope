import type { ComponentMeta } from '../../src/types/component-meta.ts'
import { components } from '../../src/utils/components'

function score(meta: ComponentMeta, context: string): number {
  const terms = context.toLowerCase().split(/\W+/).filter(Boolean)
  const fields = [
    meta.description,
    ...meta.useCases,
    ...(meta.keywords ?? []),
  ]
    .join(' ')
    .toLowerCase()

  return terms.reduce((acc, term) => (fields.includes(term) ? acc + 1 : acc), 0)
}

function urlToFolderName(url: string): string {
  return url.split('/').pop() ?? ''
}

export interface FindComponentInput {
  context: string
}

export interface FindComponentMatch {
  name: string
  description: string
  useCases: string[]
  notFor: string[]
  url: string
}

export interface FindComponentResult {
  matches: FindComponentMatch[]
  message?: string
}

interface ScoredMatch extends FindComponentMatch {
  _score: number
}

export async function findComponent(input: FindComponentInput): Promise<FindComponentResult> {
  if (!input.context.trim()) {
    return {
      matches: [],
      message: 'Por favor proporciona un contexto para encontrar el componente adecuado.',
    }
  }

  const results: ScoredMatch[] = []

  for (const component of components) {
    const folderName = urlToFolderName(component.url)
    if (!folderName) continue

    try {
      const module = await import(`../../src/components/ui/${folderName}/meta.ts`)
      const meta: ComponentMeta = module.meta
      if (!meta) continue

      const componentScore = score(meta, input.context)
      if (componentScore > 0) {
        results.push({
          name: meta.name,
          description: meta.description,
          useCases: meta.useCases,
          notFor: meta.notFor,
          url: component.url,
          _score: componentScore,
        })
      }
    } catch {
      // meta.ts no existe para este componente, se omite silenciosamente
    }
  }

  results.sort((a, b) => b._score - a._score)

  if (results.length === 0) {
    return {
      matches: [],
      message: `No se encontraron componentes para: "${input.context}". Intenta con términos como "formulario", "selección", "notificación", "navegación", etc.`,
    }
  }

  return {
    matches: results.map((r) => ({
      name: r.name,
      description: r.description,
      useCases: r.useCases,
      notFor: r.notFor,
      url: r.url,
    })),
  }
}
