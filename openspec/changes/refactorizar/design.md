# Design: Mejora de Documentación de Componentes

## Technical Approach

Tres capas independientes que comparten un único contrato de datos (`ComponentMeta`):

1. **Tipo** (`src/types/component-meta.ts`) — fuente de verdad del esquema, verificada por `vue-tsc` en build
2. **Datos** (`src/components/ui/[name]/meta.ts`) — un objeto por componente, co-ubicado con su implementación
3. **Consumidores** — el sitio de docs (via `ComponentMeta.vue`) y el servidor MCP (via `find_component`) leen los datos independientemente

El flujo es unidireccional: los `meta.ts` no importan nada del sitio de docs ni del MCP. La dependencia siempre va hacia `meta.ts`, nunca desde él.

```
ComponentMeta type (src/types/)
        ↓ implementa
meta.ts × 50 (src/components/ui/[name]/)
        ↓                    ↓
ComponentMeta.vue        find_component (MCP)
(sitio de docs)          (servidor MCP)
```

## Architecture Decisions

### Decision: Tipo en src/types/, no en src/lib/

**Choice**: `src/types/component-meta.ts` — nuevo directorio `types/`
**Alternatives considered**: Colocarlo en `src/lib/utils.ts` (ya existe) o en `src/components/ui/` junto a los componentes
**Rationale**: `src/lib/` es para funciones (cn, valueUpdater), no tipos. Un directorio `src/types/` sigue la convención estándar de proyectos TypeScript y deja claro que es solo una definición de tipo sin lógica. El `tsconfig.app.json` incluye `src/**/*.ts` por lo que el tipo se verifica automáticamente en build.

---

### Decision: meta.ts como named export, no default

**Choice**: `export const meta: ComponentMeta = { ... }`
**Alternatives considered**: `export default { ... }` (como los .vue components)
**Rationale**: El patrón establecido en `index.ts` de cada componente usa named exports (`export { default as Button }`, `export const buttonVariants`). El servidor MCP carga los archivos dinámicamente via `import()` y los named exports son más explícitos y fáciles de validar en runtime.

---

### Decision: MCP server usa `tsx` para ejecutar TypeScript directamente

**Choice**: El servidor MCP se ejecuta con `tsx` (`node --import tsx mcp-server/index.ts`) y carga los `meta.ts` con `import()` dinámico
**Alternatives considered**:
- `ts-node`: más pesado, configuración más compleja
- Compilar `meta.ts` a `.js` en un paso previo: requiere build pipeline adicional
- Archivos `meta.json` paralelos: duplicación de datos, pierde type-safety
**Rationale**: `tsx` es un ejecutor TypeScript zero-config compatible con Node 18+. El proyecto ya usa TypeScript estrictamente y `tsx` es la forma más simple de extender ese ecosistema al servidor MCP sin añadir un pipeline de compilación separado. Los `meta.ts` están dentro de `src/` y Vite los maneja para el frontend; `tsx` los maneja para el MCP server — sin conflicto.

---

### Decision: Matching en find_component por keyword scoring, no embeddings

**Choice**: Búsqueda por frecuencia de términos comunes entre `context` y los campos `description`, `useCases`, `keywords` de cada `meta.ts`
**Alternatives considered**: Embeddings semánticos (out of scope per proposal), librería de fuzzy search (dependencia extra innecesaria)
**Rationale**: El catálogo tiene ~50 componentes con dominio acotado (UI clínica). El matching por keywords es suficiente para distinguir `Select` de `Combobox` de `RadioGroup`. Si se demuestra insuficiente, el campo `keywords` en `ComponentMeta` es el punto de extensión para mejorar la señal sin cambiar la arquitectura.

---

### Decision: ComponentMeta.vue en src/docs/shared/, no en src/components/ui/

**Choice**: `src/docs/shared/ComponentMeta.vue`
**Alternatives considered**: `src/components/ui/component-meta/` (tratarlo como componente UI del catálogo)
**Rationale**: `ComponentMeta.vue` es un componente de infraestructura del sitio de docs, no un componente reutilizable para los proyectos consumidores del catálogo. Va junto a `CodeBlock.vue` y `DocExampleContainer.vue` que tienen el mismo rol.

---

### Decision: Links de relatedComponents via RouterLink con conversión PascalCase → kebab-case en runtime

**Choice**: Función utilitaria `toKebabCase(name: string)` aplicada en el template de `ComponentMeta.vue`
**Alternatives considered**: Almacenar la URL directamente en el campo `relatedComponents` como `{ name, url }`
**Rationale**: Almacenar la URL introduciría duplicación frágil (si la estructura de rutas cambia, hay que actualizar todos los `meta.ts`). La conversión `"NativeSelect"` → `"native-select"` es determinista y reversible. La función utilitaria es de 2 líneas y no justifica un campo extra en el esquema.

## Data Flow

### Flujo del sitio de docs (build-time)

```
src/types/component-meta.ts   ← define ComponentMeta
        ↓ importa tipo
src/components/ui/button/meta.ts  (const meta: ComponentMeta)
        ↓ importa { meta }
src/docs/components/button/ButtonDocs.vue
        ↓ pasa :meta="meta"
src/docs/shared/ComponentMeta.vue  ← renderiza secciones
```

### Flujo del servidor MCP (runtime)

```
Llamada a find_component(context: string)
        ↓
Lee utils/components.ts → obtiene lista de nombres
        ↓ para cada nombre
import(`src/components/ui/${name}/meta.ts`)  [tsx runtime]
        ↓ acumula
Array<ComponentMeta>
        ↓ filtra y puntúa contra context
matches ordenados por relevancia
        ↓ retorna
{ matches: [...] }
```

## File Changes

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `src/types/component-meta.ts` | Crear | Tipo `ComponentMeta` — contrato compartido entre frontend y MCP |
| `src/components/ui/[name]/meta.ts` | Crear ×50 | Metadata semántica por componente activo |
| `src/docs/shared/ComponentMeta.vue` | Crear | Componente Vue que renderiza las secciones de guía de selección |
| `src/docs/components/[name]/[Name]Docs.vue` | Modificar ×50 | Agregar `<ComponentMeta :meta="meta" />` al inicio |
| `mcp-server/package.json` | Crear | Dependencias del servidor: `@modelcontextprotocol/sdk`, `tsx` |
| `mcp-server/tsconfig.json` | Crear | Config TS del servidor (separada de tsconfig.app.json, sin paths `@/`) |
| `mcp-server/index.ts` | Crear | Entry point MCP: registra el servidor y sus herramientas |
| `mcp-server/tools/find_component.ts` | Crear | Implementación de la herramienta `find_component` |
| `src/views/MCPView.vue` | Modificar | Agregar documentación de `find_component` con ejemplo |

## Interfaces / Contracts

### ComponentMeta (src/types/component-meta.ts)

```typescript
export interface ComponentMeta {
  // Obligatorios
  name: string           // PascalCase: "Button", "NativeSelect"
  description: string    // Una oración: qué hace el componente
  useCases: string[]     // Mínimo 1 ítem
  notFor: string[]       // Mínimo 1 ítem, SHOULD incluir alternativa entre paréntesis

  // Opcionales
  relatedComponents?: string[]  // PascalCase, se convierten a kebab para la URL
  keywords?: string[]           // Términos extra para matching en MCP
}
```

### Estructura de meta.ts (por componente)

```typescript
// src/components/ui/button/meta.ts
import type { ComponentMeta } from '@/types/component-meta'

export const meta: ComponentMeta = {
  name: 'Button',
  description: 'Elemento interactivo para disparar acciones o iniciar navegación.',
  useCases: [
    'Confirmar o enviar un formulario',
    'Navegar a otra sección o página',
    'Disparar acciones como guardar, eliminar o exportar',
  ],
  notFor: [
    'Selección entre opciones mutuamente excluyentes (usar RadioGroup)',
    'Activar o desactivar un estado persistente (usar Switch o Toggle)',
    'Navegación principal del sitio (usar NavigationMenu)',
  ],
  relatedComponents: ['ButtonGroup', 'IconButton'],
  keywords: ['acción', 'clic', 'submit', 'formulario', 'nav'],
}
```

### Props de ComponentMeta.vue

```typescript
interface Props {
  meta: ComponentMeta
}
```

### Respuesta de find_component (MCP)

```typescript
interface FindComponentResult {
  matches: Array<{
    name: string
    description: string
    useCases: string[]
    notFor: string[]
    url: string          // "/docs/components/button"
    score: number        // interno, no expuesto al LLM
  }>
  message?: string       // presente solo cuando matches.length === 0
}
```

### Algoritmo de scoring en find_component

```typescript
function score(meta: ComponentMeta, context: string): number {
  const terms = context.toLowerCase().split(/\W+/)
  const fields = [
    meta.description,
    ...meta.useCases,
    ...(meta.keywords ?? []),
  ].join(' ').toLowerCase()

  return terms.reduce((acc, term) =>
    fields.includes(term) ? acc + 1 : acc, 0
  )
}
// Umbral mínimo: score > 0 para aparecer en matches
// Ordenado: mayor score primero
```

### Función utilitaria toKebabCase (inline en ComponentMeta.vue)

```typescript
// Convierte "NativeSelect" → "native-select"
const toKebabCase = (name: string) =>
  name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
```

## Testing Strategy

No existe infraestructura de tests en el proyecto. La verificación es manual:

| Capa | Qué verificar | Cómo |
|------|--------------|------|
| Type-check | `ComponentMeta` es correcto y todos los `meta.ts` compilan | `npm run build` sin errores TS |
| Visual | Secciones aparecen antes de los ejemplos en cada página | Revisión manual en `npm run dev` |
| MCP | `find_component` retorna matches relevantes | Prueba manual con Claude Code + `/mcp` |
| MCP edge cases | Context vacío, meta.ts roto, sin matches | Prueba manual con inputs extremos |

## Migration / Rollout

Cambio puramente aditivo. Se recomienda este orden de implementación para poder verificar en cada fase:

1. Crear `src/types/component-meta.ts`
2. Crear `meta.ts` para 3-5 componentes de referencia (button, select, combobox, input, badge)
3. Crear `ComponentMeta.vue` e integrarlo en los `*Docs.vue` de esos componentes
4. Verificar visualmente en `npm run dev`
5. Completar los `meta.ts` restantes (×45)
6. Actualizar todos los `*Docs.vue`
7. Implementar `find_component` en el servidor MCP
8. Actualizar `MCPView.vue`

## Estructura del servidor MCP

`mcp-server/` es un paquete Node.js independiente con su propio `package.json`. No comparte el `node_modules` del proyecto raíz. Esto lo aisla del bundle de Vite y permite usar `tsx` sin afectar el build del frontend.

```
mcp-server/
├── package.json        ← { "type": "module", dependencies: { tsx, @modelcontextprotocol/sdk } }
├── tsconfig.json       ← { "moduleResolution": "bundler", NO paths @/ }
├── index.ts            ← crea servidor MCP, registra herramientas
└── tools/
    └── find_component.ts
```

El `index.ts` usa `@modelcontextprotocol/sdk` para registrar el servidor y llamar a las herramientas. El acceso a los `meta.ts` del proyecto raíz usa paths relativos (`../src/components/ui/`), sin el alias `@/` (que solo existe en el contexto de Vite/tsconfig.app.json).

### Configuración en .mcp.json del desarrollador

```json
{
  "mcpServers": {
    "goodhope": {
      "command": "node",
      "args": ["--import", "tsx", "./mcp-server/index.ts"]
    }
  }
}
```

## Open Questions

- [x] **¿El mcp-server existe o se crea en este cambio?** → Resuelto: se crea en este cambio (scaffolding incluido en alcance).
- [ ] **¿El campo `keywords` se llena manualmente o se deriva de `useCases`?** Queda como campo opcional vacío en v1. El matching usa `description` + `useCases` como señal principal.
