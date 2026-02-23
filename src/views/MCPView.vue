<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from '@/docs/shared/CodeBlock.vue'

// ---------------------------------------------------------------------------
// Tool selector
// ---------------------------------------------------------------------------
type Tool = 'claude-code' | 'cursor' | 'opencode' | 'antigravity'

const selectedTool = ref<Tool>('claude-code')

const tools: { id: Tool; label: string; file: string }[] = [
  { id: 'claude-code',  label: 'Claude Code',  file: '.mcp.json' },
  { id: 'cursor',       label: 'Cursor',        file: '.cursor/mcp.json' },
  { id: 'opencode',     label: 'OpenCode',      file: 'opencode.json' },
  { id: 'antigravity',  label: 'Antigravity',   file: 'config de la herramienta' },
]

// ---------------------------------------------------------------------------
// Configs per tool
// ---------------------------------------------------------------------------
const configs: Record<Tool, string> = {
  'claude-code': `{
  "mcpServers": {
    "goodhope": {
      "type": "http",
      "url": "https://template-mv-goodhope.vercel.app/api/mcp"
    }
  }
}`,
  cursor: `{
  "mcpServers": {
    "goodhope": {
      "url": "https://template-mv-goodhope.vercel.app/api/mcp"
    }
  }
}`,
  opencode: `{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "goodhope": {
      "type": "remote",
      "url": "https://template-mv-goodhope.vercel.app/api/mcp",
      "enabled": true
    }
  }
}`,
  antigravity: `{
  "mcpServers": {
    "goodhope": {
      "serverUrl": "https://template-mv-goodhope.vercel.app/api/mcp"
    }
  }
}`,
}

// ---------------------------------------------------------------------------
// find_component example
// ---------------------------------------------------------------------------
const findComponentExampleOutput = `{
  "matches": [
    {
      "name": "Select",
      "description": "Lista desplegable para seleccionar una opción de un conjunto fijo y reducido.",
      "useCases": ["Seleccionar país, departamento o estado de una lista fija", "..."],
      "notFor": ["Más de 20 opciones con búsqueda (usar Combobox)", "..."],
      "url": "/docs/components/select"
    },
    {
      "name": "RadioGroup",
      "description": "Grupo de opciones mutuamente excluyentes mostradas todas a la vez.",
      "useCases": ["Elegir entre pocas opciones (2–5) siempre visibles", "..."],
      "notFor": ["Más de 5 opciones (usar Select)", "..."],
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
  <div class="p-6 space-y-10">

    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold">Configuración MCP</h1>
      <p class="mt-2 text-muted-foreground">
        El servidor MCP de GoodHope expone el catálogo de componentes a tu asistente de IA.
        Sin instalar nada, solo con una URL.
      </p>
    </div>

    <!-- Endpoint URL -->
    <section class="rounded-lg border border-border bg-muted/30 p-4 flex flex-col sm:flex-row sm:items-center gap-3">
      <div class="flex-1 min-w-0">
        <p class="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Endpoint MCP</p>
        <code class="text-sm font-mono break-all">
          https://template-mv-goodhope.vercel.app/api/mcp
        </code>
      </div>
      <div class="shrink-0 rounded-full bg-green-100 text-green-700 text-xs font-medium px-3 py-1 w-fit">
        ● Activo
      </div>
    </section>

    <!-- Tools table -->
    <section class="space-y-3">
      <h2 class="text-xl font-semibold">Herramientas disponibles</h2>
      <div class="overflow-hidden rounded-lg border border-border">
        <table class="w-full text-sm">
          <thead class="bg-muted/50">
            <tr>
              <th class="px-4 py-2.5 text-left font-medium">Herramienta</th>
              <th class="px-4 py-2.5 text-left font-medium">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-4 py-3 font-mono text-xs align-top">find_component</td>
              <td class="px-4 py-3 text-muted-foreground text-sm">
                Dado un contexto en lenguaje natural, retorna los componentes más adecuados
                del catálogo ordenados por relevancia, con sus casos de uso y cuándo NO usarlos.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Configuration per tool -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Configuración por herramienta</h2>

      <!-- Tool selector -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="tool in tools"
          :key="tool.id"
          @click="selectedTool = tool.id"
          :class="[
            'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
            selectedTool === tool.id
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground',
          ]"
        >
          {{ tool.label }}
        </button>
      </div>

      <!-- Config panel -->
      <div class="space-y-3">
        <div class="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Archivo:</span>
          <code class="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">
            {{ tools.find(t => t.id === selectedTool)?.file }}
          </code>
        </div>
        <div class="rounded-lg overflow-hidden">
          <CodeBlock :code="configs[selectedTool]" language="json" />
        </div>
      </div>

      <div class="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <p class="font-medium">Importante</p>
        <p class="mt-1">
          El archivo de configuración debe estar en la raíz del <strong>proyecto en el que trabajas</strong>,
          no en este repositorio. Se configura una sola vez por proyecto.
        </p>
      </div>
    </section>

    <!-- Verification -->
    <section class="space-y-3">
      <h2 class="text-xl font-semibold">Verificación</h2>
      <p class="text-sm text-muted-foreground">
        Reinicia tu herramienta y verifica que el servidor está activo.
        En Claude Code ejecuta:
      </p>
      <div class="rounded-lg overflow-hidden">
        <CodeBlock code="/mcp" language="bash" />
      </div>
      <p class="text-sm text-muted-foreground">
        Deberías ver <code class="rounded bg-muted px-1 py-0.5 text-xs font-mono">goodhope</code>
        listado como servidor conectado con
        <code class="rounded bg-muted px-1 py-0.5 text-xs font-mono">find_component</code> disponible.
      </p>
    </section>

    <!-- find_component example -->
    <section class="space-y-4">
      <h2 class="text-xl font-semibold">Ejemplo: find_component</h2>
      <p class="text-sm text-muted-foreground">
        Describe en lenguaje natural lo que necesitas. El servidor retorna los componentes más relevantes
        ordenados por score.
      </p>

      <div class="grid gap-4 md:grid-cols-2">
        <div class="space-y-2">
          <p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">Input</p>
          <div class="rounded-lg overflow-hidden">
            <CodeBlock code='"el usuario necesita elegir entre varias opciones"' language="text" />
          </div>
        </div>
        <div class="space-y-2">
          <p class="text-xs font-medium text-muted-foreground uppercase tracking-wide">Output</p>
          <div class="rounded-lg overflow-hidden">
            <CodeBlock :code="findComponentExampleOutput" language="json" />
          </div>
        </div>
      </div>

      <div class="rounded-md border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
        <p class="font-medium">Uso implícito</p>
        <p class="mt-1">
          El asistente invoca <code>find_component</code> automáticamente cuando le pides ayuda
          para elegir un componente. También puedes pedirlo directamente:
          <em>"¿qué componente uso para mostrar notificaciones temporales?"</em>
        </p>
      </div>
    </section>

    <!-- Local option -->
    <section class="space-y-3">
      <h2 class="text-xl font-semibold">Opción local <span class="text-base font-normal text-muted-foreground">(sin internet)</span></h2>
      <p class="text-sm text-muted-foreground">
        Si necesitas trabajar offline, puedes correr el servidor stdio localmente.
        Requiere Node.js 18+ y tener clonado este repositorio.
      </p>
      <div class="rounded-lg overflow-hidden">
        <CodeBlock code="cd mcp-server && npm install" language="bash" />
      </div>
      <div class="rounded-lg overflow-hidden">
        <CodeBlock :code="stdioCode" language="json" />
      </div>
    </section>

  </div>
</template>
