# Proposal: Mejora de Documentación de Componentes

## Intent

La documentación actual de cada componente está diseñada exclusivamente para consumo humano visual (tabla de props + ejemplo). Esto crea dos problemas concretos:

1. **El servidor MCP no puede razonar** sobre qué componente usar en un contexto dado — no existe metadata semántica que describa casos de uso, intención, o relaciones entre componentes.
2. **Los desarrolladores no tienen guía de selección** — cuando hay componentes similares (ej. `Select` vs `Combobox` vs `NativeSelect`), el catálogo no indica cuándo usar cuál.

La solución es introducir un archivo `meta.ts` por componente con metadata estructurada, y consumirla tanto en los `*Docs.vue` (para humanos) como en el servidor MCP (para Claude).

## Scope

### In Scope
- Definir y documentar el esquema TypeScript de `meta.ts`
- Crear `meta.ts` para todos los componentes activos en `utils/components.ts`
- Actualizar cada `*Docs.vue` para mostrar las secciones "Cuándo usarlo" y "No usar para"
- **Scaffolding inicial del servidor MCP** (`mcp-server/`) con entry point, tsconfig propio y dependencia `tsx`
- Agregar herramienta `find_component` al servidor MCP que consulte los `meta.ts`
- Actualizar la página `/docs/mcp` para documentar la nueva herramienta

### Out of Scope
- Reescribir las tablas de props existentes en los `*Docs.vue`
- Internacionalización de la metadata (queda en español)
- Sistema de búsqueda semántica avanzada (embeddings, vectores)
- Metadata para componentes comentados (`input-group`, `input-otp`, `range-calendar`)

## Approach

Cada componente tendrá un `meta.ts` co-ubicado con su implementación:

```
src/components/ui/button/
├── Button.vue
├── index.ts
└── meta.ts    ← nuevo
```

El esquema será un objeto TypeScript tipado (`ComponentMeta`) con campos obligatorios y opcionales. Los `*Docs.vue` importarán el `meta.ts` del mismo componente para renderizar las secciones nuevas. El servidor MCP tendrá una herramienta que carga dinámicamente todos los `meta.ts` en tiempo de ejecución para responder consultas de selección de componente.

## Affected Areas

| Área | Impacto | Descripción |
|------|---------|-------------|
| `src/components/ui/[name]/meta.ts` | Nuevo (×50) | Archivo de metadata por cada componente activo |
| `src/docs/components/[name]/[Name]Docs.vue` | Modificado (×50) | Agregar secciones "Cuándo usarlo" y "No usar para" |
| `src/docs/shared/` | Nuevo | Componente `ComponentMeta.vue` para renderizar metadata |
| `src/types/component-meta.ts` | Nuevo | Tipo `ComponentMeta` compartido |
| `mcp-server/index.ts` | Nuevo | Entry point del servidor MCP (scaffolding inicial) |
| `mcp-server/tools/find_component.ts` | Nuevo | Herramienta MCP que consulta los `meta.ts` |
| `mcp-server/tsconfig.json` | Nuevo | Configuración TypeScript independiente del servidor MCP |
| `mcp-server/package.json` | Nuevo | Dependencias del servidor MCP (`tsx`, `@modelcontextprotocol/sdk`) |
| `src/views/MCPView.vue` | Modificado | Documentar la herramienta `find_component` |

> Este cambio **no requiere modificar** `docsRegistry` en `ComponentDetailView.vue` ni `utils/components.ts`.

## Risks

| Riesgo | Probabilidad | Mitigación |
|--------|-------------|------------|
| Metadata incompleta o incorrecta para algún componente | Alta | Implementar por fases; los campos `useCases` y `notFor` pueden quedar como array vacío inicialmente |
| El servidor MCP no puede importar módulos `.ts` directamente | Media | Compilar o usar `tsx` / `ts-node` para cargar los archivos; alternativamente usar `.js` con JSDoc |
| Inconsistencia entre metadata y docs existentes | Baja | La metadata es la fuente de verdad; los `*Docs.vue` la consumen, no la duplican |

## Rollback Plan

Los `meta.ts` son archivos nuevos y aditivos — no modifican el comportamiento existente. Si hay problemas:

1. Revertir los cambios en los `*Docs.vue` (restaurar versión sin secciones de metadata)
2. Eliminar los archivos `meta.ts` y `src/types/component-meta.ts`
3. Revertir la herramienta `find_component` del servidor MCP

Ningún componente UI existente cambia su API ni sus variantes.

## Dependencies

- `src/types/component-meta.ts` debe crearse antes que cualquier `meta.ts` individual
- El scaffolding de `mcp-server/` debe completarse antes de implementar `find_component`

## Success Criteria

- [ ] Existe `meta.ts` para los 50 componentes activos con al menos `description`, `useCases` y `notFor`
- [ ] Cada `*Docs.vue` muestra las secciones "Cuándo usarlo" y "No usar para" con datos del `meta.ts`
- [ ] La herramienta `find_component` del MCP devuelve el componente correcto dado un contexto en lenguaje natural (ej. "necesito que el usuario elija entre 3 opciones")
- [ ] `npm run build` pasa sin errores de TypeScript
- [ ] La página `/docs/mcp` documenta `find_component` con un ejemplo de uso
