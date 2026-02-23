/**
 * Generates api/component-registry.json from all meta.ts files.
 * Run with: npx tsx scripts/generate-registry.ts
 * Runs automatically as part of `npm run build`.
 */
import { writeFileSync } from 'node:fs'
import { componentRegistry } from '../src/data/component-registry.ts'
import { components } from '../src/utils/components.ts'

const urlMap = new Map(components.map((c) => [c.title.toLowerCase(), c.url]))

const data = componentRegistry.map((meta) => ({
  name: meta.name,
  description: meta.description,
  useCases: meta.useCases,
  notFor: meta.notFor,
  keywords: meta.keywords ?? [],
  url:
    urlMap.get(meta.name.toLowerCase()) ??
    `/docs/components/${meta.name.toLowerCase().replace(/ /g, '-')}`,
}))

writeFileSync('./api/component-registry.json', JSON.stringify(data, null, 2) + '\n', 'utf-8')
console.log(`✓ Generated api/component-registry.json with ${data.length} components`)
