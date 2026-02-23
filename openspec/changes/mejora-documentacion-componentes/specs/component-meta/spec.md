# Component Meta Specification

## Purpose

Define el esquema de metadata semántica (`ComponentMeta`) que cada componente UI del catálogo DEBE exponer. Esta metadata es la fuente de verdad para la guía de selección, tanto en el sitio de docs como en el servidor MCP.

## Requirements

### Requirement: Tipo ComponentMeta

El sistema MUST definir un tipo TypeScript `ComponentMeta` exportado desde `src/types/component-meta.ts` que sea la única fuente de verdad del esquema.

El tipo MUST incluir los siguientes campos obligatorios:

| Campo | Tipo | Descripción |
|---|---|---|
| `name` | `string` | Nombre del componente en PascalCase |
| `description` | `string` | Descripción en una oración de qué hace el componente |
| `useCases` | `string[]` | Lista de escenarios donde se DEBE usar este componente |
| `notFor` | `string[]` | Lista de escenarios donde NO se debe usar (con alternativa sugerida) |

El tipo SHOULD incluir los siguientes campos opcionales:

| Campo | Tipo | Descripción |
|---|---|---|
| `relatedComponents` | `string[]` | Componentes relacionados o alternativos |
| `keywords` | `string[]` | Palabras clave para búsqueda semántica por el MCP |

El tipo MUST NOT incluir información de implementación (props, variantes CVA, clases CSS) — eso pertenece a `index.ts`.

#### Scenario: Tipo válido compila sin errores

- GIVEN que existe `src/types/component-meta.ts` con el tipo `ComponentMeta`
- WHEN se ejecuta `npm run build`
- THEN el compilador de TypeScript no reporta errores relacionados con `ComponentMeta`

#### Scenario: Campos obligatorios ausentes fallan en tiempo de compilación

- GIVEN un `meta.ts` que omite el campo `description`
- WHEN se ejecuta `npm run build`
- THEN TypeScript reporta un error de tipo en ese archivo

---

### Requirement: Archivo meta.ts por componente

Cada componente activo listado en `src/utils/components.ts` MUST tener un archivo `meta.ts` co-ubicado en su directorio `src/components/ui/[name]/`.

El archivo MUST exportar un objeto `const meta: ComponentMeta` como export con nombre.

El archivo MUST NOT exportar el objeto como default export, para mantener consistencia con el patrón de `index.ts`.

Los campos `useCases` y `notFor` MUST contener al menos un ítem cada uno.

#### Scenario: Componente con meta.ts completo

- GIVEN el archivo `src/components/ui/button/meta.ts`
- WHEN se importa `{ meta } from '@/components/ui/button/meta'`
- THEN `meta.name` es `"Button"`
- AND `meta.useCases` es un array con al menos un string no vacío
- AND `meta.notFor` es un array con al menos un string no vacío

#### Scenario: Componente sin meta.ts

- GIVEN un componente activo en `utils/components.ts`
- WHEN se audita el directorio `src/components/ui/[name]/`
- THEN DEBE existir un archivo `meta.ts` en ese directorio
- AND ese archivo DEBE ser importable sin errores

#### Scenario: notFor incluye alternativa

- GIVEN el campo `notFor` de cualquier `meta.ts`
- WHEN se lee cada ítem del array
- THEN cada ítem SHOULD mencionar el componente alternativo recomendado entre paréntesis
- EXAMPLE `"Selección entre pocas opciones fijas (usar Select)"`

---

### Requirement: Consistencia semántica entre componentes similares

Cuando existan componentes con función similar (ej. `Select`, `Combobox`, `NativeSelect`), sus `meta.ts` MUST ser mutuamente consistentes: el `notFor` de uno SHOULD referenciar al otro como alternativa, y viceversa.

#### Scenario: Componentes similares se referencian mutuamente

- GIVEN `src/components/ui/select/meta.ts` y `src/components/ui/combobox/meta.ts`
- WHEN se lee el campo `notFor` de `select/meta.ts`
- THEN SHOULD existir al menos un ítem que mencione `Combobox` como alternativa para listas largas o con búsqueda
- AND el campo `notFor` de `combobox/meta.ts` SHOULD mencionar `Select` para listas cortas sin búsqueda
