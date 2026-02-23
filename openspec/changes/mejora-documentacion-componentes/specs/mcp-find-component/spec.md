# MCP find_component Specification

## Purpose

Define el comportamiento de la herramienta `find_component` expuesta por el servidor MCP de GoodHope. Esta herramienta permite a Claude razonar sobre qué componente del catálogo usar dado un contexto o necesidad expresada en lenguaje natural.

## Requirements

### Requirement: Herramienta find_component registrada en el servidor MCP

El servidor MCP MUST exponer una herramienta llamada `find_component` que aparezca listada cuando el usuario ejecuta `/mcp` en Claude Code.

La herramienta MUST aceptar exactamente un parámetro de entrada:

| Parámetro | Tipo | Obligatorio | Descripción |
|---|---|---|---|
| `context` | `string` | Sí | Descripción en lenguaje natural de lo que el desarrollador necesita |

La herramienta MUST retornar una respuesta estructurada con:

| Campo | Tipo | Descripción |
|---|---|---|
| `matches` | `array` | Lista de componentes ordenados por relevancia |
| `matches[].name` | `string` | Nombre del componente |
| `matches[].description` | `string` | Descripción del componente |
| `matches[].useCases` | `string[]` | Por qué aplica a este contexto |
| `matches[].notFor` | `string[]` | Limitaciones relevantes |
| `matches[].url` | `string` | Ruta al catálogo (`/docs/components/[name]`) |

#### Scenario: Consulta con match claro

- GIVEN el servidor MCP está activo y todos los `meta.ts` están cargados
- WHEN se invoca `find_component` con `context: "necesito un botón que abra un panel lateral"`
- THEN `matches` contiene al menos un resultado
- AND el primer resultado SHOULD ser `Sheet` o `Drawer`
- AND cada resultado incluye `name`, `description`, `url` y al menos un `useCases` relevante

#### Scenario: Consulta ambigua retorna múltiples candidatos

- GIVEN el servidor MCP está activo
- WHEN se invoca `find_component` con `context: "el usuario debe elegir entre opciones"`
- THEN `matches` contiene más de un resultado (ej. `Select`, `Combobox`, `RadioGroup`)
- AND cada resultado incluye en `notFor` al menos un ítem que lo distingue de los otros candidatos

#### Scenario: Consulta sin ningún match

- GIVEN el servidor MCP está activo
- WHEN se invoca `find_component` con `context: "necesito un mapa interactivo"`
- THEN `matches` es un array vacío
- AND la respuesta SHOULD incluir un mensaje indicando que no hay componentes para ese caso de uso

#### Scenario: Parámetro context vacío

- GIVEN el servidor MCP está activo
- WHEN se invoca `find_component` con `context: ""`
- THEN la herramienta retorna un error descriptivo
- AND el error MUST indicar que el parámetro `context` es requerido y no puede estar vacío

---

### Requirement: Carga dinámica de meta.ts en cada invocación

El servidor MUST leer los archivos `meta.ts` de forma dinámica en cada llamada a `find_component`, sin cachear el contenido entre invocaciones.

Esto MUST garantizar que si un desarrollador actualiza un `meta.ts` mientras Claude Code está corriendo, la siguiente llamada a `find_component` refleja el cambio sin necesidad de reiniciar el servidor.

#### Scenario: Actualización de meta.ts reflejada sin reinicio

- GIVEN el servidor MCP está activo y `find_component` fue invocado al menos una vez
- WHEN se modifica `src/components/ui/badge/meta.ts` agregando un nuevo `useCases`
- AND se invoca `find_component` nuevamente con un contexto relacionado
- THEN la respuesta incluye el nuevo `useCases` del `badge/meta.ts` actualizado
- AND NO fue necesario reiniciar el servidor MCP

#### Scenario: meta.ts con error de sintaxis no rompe el servidor

- GIVEN un `meta.ts` tiene un error de sintaxis JavaScript/TypeScript
- WHEN se invoca `find_component`
- THEN el servidor MUST omitir ese componente de los resultados
- AND MUST continuar procesando los demás `meta.ts` correctamente
- AND SHOULD loggear un warning indicando qué archivo falló y por qué

---

### Requirement: Documentación de find_component en MCPView

La página `/docs/mcp` MUST documentar la herramienta `find_component` con:
- Descripción de qué hace la herramienta
- El parámetro `context` con su tipo y descripción
- Al menos un ejemplo de invocación con input y output esperado

#### Scenario: Desarrollador encuentra documentación de find_component

- GIVEN el usuario navega a `/docs/mcp` en el catálogo
- WHEN lee la sección de herramientas disponibles
- THEN encuentra `find_component` listada con su descripción
- AND encuentra al menos un ejemplo de consulta y respuesta
