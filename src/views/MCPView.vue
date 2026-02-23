<script setup lang="ts">
import CodeBlock from '@/docs/shared/CodeBlock.vue'

const mcpJsonCode = `{
  "mcpServers": {
    "goodhope": {
      "url": "https://template-mv-goodhope.vercel.app/api/mcp"
    }
  }
}`

const findComponentExampleOutput = `{
  "matches": [
    {
      "name": "Select",
      "description": "Lista desplegable para seleccionar una opción de un conjunto fijo y reducido.",
      "useCases": ["Seleccionar país, departamento o estado de una lista fija", ...],
      "notFor": ["Más de 20 opciones con búsqueda (usar Combobox)", ...],
      "url": "/docs/components/select"
    },
    {
      "name": "Combobox",
      "description": "Campo de selección con búsqueda integrada para conjuntos de opciones medianos o grandes.",
      ...
      "url": "/docs/components/combobox"
    },
    {
      "name": "RadioGroup",
      "description": "Grupo de botones de opción para elegir una sola opción visible de un conjunto pequeño.",
      ...
      "url": "/docs/components/radio-group"
    }
  ]
}`

const stdioCode = `{
  "mcpServers": {
    "goodhope": {
      "command": "node",
      "args": ["--import", "tsx", "./mcp-server/index.ts"],
      "cwd": "."
    }
  }
}`
</script>

<template>
  <div class="p-6 space-y-8">

    <div>
      <h1 class="text-3xl font-bold">Configuración MCP</h1>
      <p class="mt-2 text-gray-600">
        El servidor MCP de GoodHope permite que Claude Code interactúe directamente con este catálogo:
        listar componentes, generar boilerplate y verificar registros sin intervención manual.
      </p>
    </div>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">¿Qué es MCP?</h2>
      <p class="text-sm text-muted-foreground">
        <strong>Model Context Protocol (MCP)</strong> es un protocolo abierto de Anthropic que permite a los
        asistentes de IA conectarse a herramientas externas y fuentes de datos de forma estandarizada.
        En la práctica, le da a Claude acceso a herramientas específicas de tu proyecto — en este caso,
        herramientas para trabajar con el catálogo de componentes de GoodHope.
      </p>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold">Herramientas disponibles</h2>
      <p class="text-sm text-muted-foreground">El servidor expone las siguientes herramientas a Claude:</p>
      <div class="overflow-hidden rounded-lg border border-border">
        <table class="w-full text-sm">
          <thead class="bg-muted/50">
            <tr>
              <th class="px-4 py-2 text-left font-medium">Herramienta</th>
              <th class="px-4 py-2 text-left font-medium">Descripción</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="px-4 py-2 font-mono text-xs">find_component</td>
              <td class="px-4 py-2 text-muted-foreground">
                Dado un contexto en lenguaje natural, retorna los componentes más adecuados con sus casos de uso
                y cuándo NO usarlos. Usa keyword matching sobre los campos <code>description</code>,
                <code>useCases</code> y <code>keywords</code> de cada componente.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold">Configuración (HTTP remoto)</h2>
      <p class="text-sm text-muted-foreground">
        El servidor MCP está desplegado en Vercel. No necesitas instalar nada ni clonar el repositorio.
        Solo crea el archivo <code>.mcp.json</code> en la raíz del proyecto donde vayas a trabajar:
      </p>
      <div class="rounded-lg overflow-hidden">
        <CodeBlock :code="mcpJsonCode" language="json" />
      </div>
      <div class="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <p class="font-medium">Importante</p>
        <p class="mt-1">
          El archivo <code>.mcp.json</code> debe estar en la raíz del proyecto en el que trabajas,
          <strong>no</strong> en este repositorio. Cada desarrollador lo configura una vez en su proyecto.
        </p>
      </div>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold">Verificación</h2>
      <p class="text-sm text-muted-foreground">
        Una vez configurado, abre Claude Code en tu proyecto y ejecuta:
      </p>
      <div class="rounded-lg overflow-hidden">
        <CodeBlock code="/mcp" language="bash" />
      </div>
      <p class="text-sm text-muted-foreground">
        Deberías ver <code>goodhope</code> listado como un servidor MCP activo con su herramienta <code>find_component</code> disponible.
      </p>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold">Ejemplo: find_component</h2>
      <p class="text-sm text-muted-foreground">
        La herramienta principal es <code>find_component</code>. Recibe una descripción en lenguaje natural
        y retorna los componentes del catálogo ordenados por relevancia.
      </p>
      <div class="space-y-2">
        <p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">Input</p>
        <div class="rounded-lg overflow-hidden">
          <CodeBlock code='"el usuario necesita elegir entre varias opciones"' language="text" />
        </div>
      </div>
      <div class="space-y-2">
        <p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">Output esperado</p>
        <div class="rounded-lg overflow-hidden">
          <CodeBlock :code="findComponentExampleOutput" language="json" />
        </div>
      </div>
      <div class="rounded-md border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
        <p class="font-medium">¿Cómo usarlo en Claude Code?</p>
        <p class="mt-1">
          Claude usará automáticamente <code>find_component</code> cuando le pidas ayuda para elegir un
          componente. También puedes invocarlo explícitamente: <em>"usa find_component para saber qué
          componente usar para notificaciones temporales"</em>.
        </p>
      </div>
    </section>

    <section class="space-y-3">
      <h2 class="text-xl font-semibold">Opción local (desarrollo sin internet)</h2>
      <p class="text-sm text-muted-foreground">
        Si necesitas trabajar sin conexión, puedes correr el servidor MCP localmente desde el repositorio.
        Requiere Node.js 18+ y haber clonado este repositorio.
      </p>
      <div class="rounded-lg overflow-hidden">
        <CodeBlock code="cd mcp-server && npm install" language="bash" />
      </div>
      <p class="text-sm text-muted-foreground mt-2">
        Luego usa esta configuración en tu <code>.mcp.json</code>:
      </p>
      <div class="rounded-lg overflow-hidden">
        <CodeBlock :code="stdioCode" language="json" />
      </div>
    </section>

  </div>
</template>
