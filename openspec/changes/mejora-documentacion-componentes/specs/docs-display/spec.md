# Docs Display Specification

## Purpose

Define cómo la metadata de `meta.ts` se presenta visualmente en las páginas de documentación del catálogo. El objetivo es que cada página de componente tenga una sección de guía de selección que ayude al desarrollador a decidir si ese es el componente correcto para su caso.

## Requirements

### Requirement: Componente compartido ComponentMeta.vue

El sistema MUST exponer un componente Vue reutilizable `ComponentMeta.vue` en `src/docs/shared/` que reciba un objeto `ComponentMeta` como prop y renderice la guía de selección.

`ComponentMeta.vue` MUST renderizar visualmente:
- La descripción del componente
- Una sección "Cuándo usarlo" con los `useCases` como lista
- Una sección "No usar para" con los `notFor` como lista

`ComponentMeta.vue` SHOULD renderizar, si están presentes:
- Una sección "Componentes relacionados" con los `relatedComponents` como lista de links al catálogo

`ComponentMeta.vue` MUST NOT renderizar secciones vacías — si `relatedComponents` no existe o es array vacío, la sección no aparece.

#### Scenario: Renderizado completo con todos los campos

- GIVEN `ComponentMeta.vue` recibe una prop con todos los campos del tipo `ComponentMeta`
- WHEN el componente se monta en el DOM
- THEN se muestran las tres secciones: descripción, "Cuándo usarlo" y "No usar para"
- AND se muestra la sección "Componentes relacionados" con los nombres como links

#### Scenario: Renderizado sin relatedComponents

- GIVEN `ComponentMeta.vue` recibe una prop donde `relatedComponents` es `undefined`
- WHEN el componente se monta en el DOM
- THEN las secciones "Cuándo usarlo" y "No usar para" se muestran correctamente
- AND la sección "Componentes relacionados" NO aparece en el DOM

#### Scenario: Links de componentes relacionados navegan al catálogo

- GIVEN `relatedComponents` contiene `["Select", "Combobox"]`
- WHEN se renderizan los links
- THEN cada link apunta a `/docs/components/[nombre-en-kebab-case]`
- EXAMPLE `"Select"` → `/docs/components/select`, `"NativeSelect"` → `/docs/components/native-select`

---

### Requirement: Integración en cada *Docs.vue

Cada archivo `[Name]Docs.vue` en `src/docs/components/[name]/` MUST importar `{ meta }` desde el `meta.ts` del componente correspondiente e incluir `<ComponentMeta :meta="meta" />` como primera sección visible antes de los ejemplos de uso.

El orden visual en la página MUST ser:
1. `ComponentMeta` (descripción + guía de selección)
2. `DocExampleContainer` (ejemplos interactivos)
3. Tabla de API / Props (ya existente)

`[Name]Docs.vue` MUST NOT duplicar el contenido de `meta.ts` con texto hardcodeado — toda la guía de selección proviene del `meta.ts`.

#### Scenario: Sección de metadata aparece antes de los ejemplos

- GIVEN el usuario navega a `/docs/components/button`
- WHEN la página carga completamente
- THEN la sección "Cuándo usarlo" aparece antes del primer ejemplo interactivo
- AND la sección "No usar para" aparece antes del primer ejemplo interactivo

#### Scenario: Datos provienen del meta.ts, no son hardcodeados

- GIVEN `src/components/ui/button/meta.ts` tiene `useCases: ["Confirmar un formulario"]`
- WHEN se renderiza la página `/docs/components/button`
- THEN el texto "Confirmar un formulario" aparece en la sección "Cuándo usarlo"
- AND si se actualiza el `meta.ts`, la página refleja el cambio sin modificar el `*Docs.vue`

---

### Requirement: Estilo visual consistente con el catálogo

`ComponentMeta.vue` MUST usar únicamente clases de TailwindCSS y los colores del sistema (`primary`, `secondary`, `tertiary`).

`ComponentMeta.vue` MUST NOT usar `<style scoped>` ni estilos inline.

La sección "Cuándo usarlo" SHOULD usar un indicador visual positivo (ej. check icon o color `primary`).

La sección "No usar para" SHOULD usar un indicador visual de advertencia (ej. x icon o color neutro/destructivo).

#### Scenario: Consistencia visual con otros componentes de docs

- GIVEN la página de cualquier componente con `ComponentMeta`
- WHEN se compara visualmente con la página de Button
- THEN el layout, tipografía y colores de la sección de metadata son idénticos
