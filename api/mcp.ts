import type { VercelRequest, VercelResponse } from '@vercel/node'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

// ---------------------------------------------------------------------------
// Load component registry from pre-generated JSON (build artifact)
// ---------------------------------------------------------------------------
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

interface ComponentEntry {
  name: string
  description: string
  useCases: string[]
  notFor: string[]
  keywords: string[]
  url: string
}

const componentRegistry: ComponentEntry[] = JSON.parse(
  readFileSync(join(__dirname, 'component-registry.json'), 'utf-8'),
)

// ---------------------------------------------------------------------------
// Scoring: keyword match against description + useCases + keywords
// ---------------------------------------------------------------------------
function score(entry: ComponentEntry, context: string): number {
  const terms = context.toLowerCase().split(/\W+/).filter(Boolean)
  const fields = [entry.description, ...entry.useCases, ...entry.keywords]
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

function findComponent(context: string): { matches: FindComponentMatch[]; message?: string } {
  if (!context.trim()) {
    return {
      matches: [],
      message: 'Por favor proporciona un contexto para encontrar el componente adecuado.',
    }
  }

  const results = componentRegistry
    .map((entry) => ({ entry, _score: score(entry, context) }))
    .filter((r) => r._score > 0)
    .sort((a, b) => b._score - a._score)
    .map((r) => ({
      name: r.entry.name,
      description: r.entry.description,
      useCases: r.entry.useCases,
      notFor: r.entry.notFor,
      url: r.entry.url,
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

function handleRpc(request: JsonRpcRequest): unknown {
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
    const result = findComponent(context)
    return ok({
      content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
    })
  }

  return err(-32601, `Método no soportado: ${method}`)
}

// ---------------------------------------------------------------------------
// Vercel Function entry point
// ---------------------------------------------------------------------------
export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const body = req.body as JsonRpcRequest | JsonRpcRequest[]

  if (Array.isArray(body)) {
    const responses = body.map(handleRpc).filter(Boolean)
    return res.status(200).json(responses)
  }

  const response = handleRpc(body)
  if (response === null) {
    return res.status(204).end()
  }
  return res.status(200).json(response)
}
