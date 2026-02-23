import type { VercelRequest, VercelResponse } from '@vercel/node'
import type { ComponentMeta } from '../src/types/component-meta.ts'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface NavComponent {
  title: string
  url: string
}

// ---------------------------------------------------------------------------
// URL lookup
// ---------------------------------------------------------------------------
function getUrl(meta: ComponentMeta, components: NavComponent[]): string {
  const urlMap = new Map(components.map((c) => [c.title.toLowerCase(), c.url]))
  return (
    urlMap.get(meta.name.toLowerCase()) ??
    `/docs/components/${meta.name.toLowerCase().replace(/ /g, '-')}`
  )
}

// ---------------------------------------------------------------------------
// Scoring
// ---------------------------------------------------------------------------
function score(meta: ComponentMeta, context: string): number {
  const terms = context.toLowerCase().split(/\W+/).filter(Boolean)
  const fields = [meta.description, ...meta.useCases, ...(meta.keywords ?? [])]
    .join(' ')
    .toLowerCase()
  return terms.reduce((acc, term) => (fields.includes(term) ? acc + 1 : acc), 0)
}

// ---------------------------------------------------------------------------
// find_component tool
// ---------------------------------------------------------------------------
interface FindComponentMatch {
  name: string
  description: string
  useCases: string[]
  notFor: string[]
  url: string
}

function findComponent(
  context: string,
  componentRegistry: ComponentMeta[],
  components: NavComponent[],
): { matches: FindComponentMatch[]; message?: string } {
  if (!context.trim()) {
    return {
      matches: [],
      message: 'Por favor proporciona un contexto para encontrar el componente adecuado.',
    }
  }

  const results = componentRegistry
    .map((meta) => ({ meta, _score: score(meta, context) }))
    .filter((r) => r._score > 0)
    .sort((a, b) => b._score - a._score)
    .map((r) => ({
      name: r.meta.name,
      description: r.meta.description,
      useCases: r.meta.useCases,
      notFor: r.meta.notFor,
      url: getUrl(r.meta, components),
    }))

  if (results.length === 0) {
    return {
      matches: [],
      message: `No se encontraron componentes para: "${context}". Intenta con términos como "formulario", "selección", "notificación", "navegación", etc.`,
    }
  }

  return { matches: results }
}

// ---------------------------------------------------------------------------
// MCP tool definitions
// ---------------------------------------------------------------------------
const TOOLS = [
  {
    name: 'find_component',
    description:
      'Encuentra el componente UI más adecuado para una necesidad dada en lenguaje natural. Retorna los componentes más relevantes del catálogo GoodHope con sus casos de uso, cuándo NO usarlos, y la URL de su documentación.',
    inputSchema: {
      type: 'object',
      properties: {
        context: {
          type: 'string',
          description:
            'Descripción en lenguaje natural de lo que necesitas. Ejemplos: "necesito que el usuario elija entre múltiples opciones", "mostrar notificaciones temporales de éxito", "navegar entre pasos de un formulario".',
        },
      },
      required: ['context'],
    },
  },
]

// ---------------------------------------------------------------------------
// JSON-RPC 2.0 handler
// ---------------------------------------------------------------------------
interface JsonRpcRequest {
  jsonrpc: '2.0'
  id: string | number | null
  method: string
  params?: Record<string, unknown>
}

function handleRpc(
  request: JsonRpcRequest,
  componentRegistry: ComponentMeta[],
  components: NavComponent[],
): unknown {
  const { method, params, id } = request

  const ok = (result: unknown) => ({ jsonrpc: '2.0', id, result })
  const err = (code: number, message: string) => ({
    jsonrpc: '2.0',
    id,
    error: { code, message },
  })

  if (method === 'initialize') {
    return ok({
      protocolVersion: '2024-11-05',
      capabilities: { tools: {} },
      serverInfo: { name: 'goodhope-component-server', version: '1.0.0' },
    })
  }

  if (method === 'notifications/initialized') {
    return null
  }

  if (method === 'tools/list') {
    return ok({ tools: TOOLS })
  }

  if (method === 'tools/call') {
    const toolParams = params as { name?: string; arguments?: Record<string, unknown> }
    if (toolParams?.name !== 'find_component') {
      return err(-32601, `Herramienta desconocida: ${toolParams?.name}`)
    }
    const context = (toolParams?.arguments?.context as string) ?? ''
    const result = findComponent(context, componentRegistry, components)
    return ok({
      content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
    })
  }

  return err(-32601, `Método no soportado: ${method}`)
}

// ---------------------------------------------------------------------------
// Vercel Function entry point — dynamic imports to surface load errors
// ---------------------------------------------------------------------------
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  // Dynamic imports so any load error surfaces as JSON instead of 500
  let componentRegistry: ComponentMeta[]
  let components: NavComponent[]
  try {
    const reg = await import('../src/data/component-registry.ts')
    componentRegistry = reg.componentRegistry
    const nav = await import('../src/utils/components.ts')
    components = nav.components
  } catch (e: unknown) {
    return res.status(500).json({
      error: 'module_load_failed',
      message: e instanceof Error ? e.message : String(e),
      stack: e instanceof Error ? e.stack?.split('\n').slice(0, 8) : undefined,
    })
  }

  const body = req.body as JsonRpcRequest | JsonRpcRequest[]

  if (Array.isArray(body)) {
    const responses = body
      .map((r) => handleRpc(r, componentRegistry, components))
      .filter(Boolean)
    return res.status(200).json(responses)
  }

  const response = handleRpc(body, componentRegistry, components)
  if (response === null) {
    return res.status(204).end()
  }
  return res.status(200).json(response)
}
