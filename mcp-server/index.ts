import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js'
import { findComponent } from './tools/find_component'

const server = new Server(
  { name: 'goodhope-component-server', version: '1.0.0' },
  { capabilities: { tools: {} } },
)

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
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
  ],
}))

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name !== 'find_component') {
    throw new Error(`Herramienta desconocida: ${request.params.name}`)
  }

  const input = request.params.arguments as { context: string }
  const result = await findComponent(input)

  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(result, null, 2),
      },
    ],
  }
})

const transport = new StdioServerTransport()
await server.connect(transport)
