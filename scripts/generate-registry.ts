/**
 * Generates api/component-registry.json from all meta.ts files.
 * Run with: npx tsx scripts/generate-registry.ts
 * Runs automatically as part of `npm run build`.
 */
import { writeFileSync } from 'node:fs'
import { componentRegistry } from '../src/data/component-registry.ts'
import { components } from '../src/utils/components.ts'

// Normalize by removing spaces so "Radio Group" matches "RadioGroup"
const urlMap = new Map(components.map((c) => [c.title.toLowerCase().replace(/ /g, ''), c.url]))

const data = componentRegistry.map((meta) => ({
  name: meta.name,
  description: meta.description,
  useCases: meta.useCases,
  notFor: meta.notFor,
  keywords: meta.keywords ?? [],
  url:
    urlMap.get(meta.name.toLowerCase().replace(/ /g, '')) ??
    `/docs/components/${meta.name.toLowerCase().replace(/ /g, '-')}`,
}))

writeFileSync('./api/component-registry.json', JSON.stringify(data, null, 2) + '\n', 'utf-8')
console.log(`✓ Generated api/component-registry.json with ${data.length} components`)
