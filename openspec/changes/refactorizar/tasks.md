# Tasks: Mejora de Documentación de Componentes

## Phase 1: Fundación

- [x] 1.1 Crear `src/types/component-meta.ts` con la interfaz `ComponentMeta` (campos obligatorios: `name`, `description`, `useCases`, `notFor`; opcionales: `relatedComponents`, `keywords`)
- [x] 1.2 Crear `mcp-server/package.json` con `"type": "module"` y dependencias `tsx` y `@modelcontextprotocol/sdk`
- [x] 1.3 Crear `mcp-server/tsconfig.json` con `moduleResolution: "bundler"` y sin paths `@/` (acceso a `src/` via rutas relativas `../src/`)
- [ ] 1.4 Instalar dependencias del servidor MCP ejecutando `npm install` dentro de `mcp-server/`

## Phase 2: Implementación de referencia (Button)

> Valida el patrón completo antes de aplicarlo a los 56 componentes restantes.

- [x] 2.1 Crear `src/components/ui/button/meta.ts` — implementación de referencia con los 5 campos del esquema (ver contrato en `design.md`)
- [x] 2.2 Crear `src/docs/shared/ComponentMeta.vue` — recibe prop `meta: ComponentMeta`, renderiza secciones "Cuándo usarlo" (CheckCircle2 icon, color primary), "No usar para" (XCircle icon, color muted) y "Componentes relacionados" (RouterLink con `toKebabCase()`, solo si `relatedComponents` tiene ítems)
- [x] 2.3 Actualizar `src/docs/components/button/ButtonDocs.vue` — importar `{ meta }` desde `@/components/ui/button/meta` y agregar `<ComponentMeta :meta="meta" />` como primera sección antes del `<DocExampleContainer>`
- [ ] 2.4 Verificar visualmente en `npm run dev` que las secciones aparecen antes de los ejemplos, y correr `npm run build` para confirmar que no hay errores TypeScript

## Phase 3: meta.ts — Selección y formularios

- [x] 3.1 Crear `meta.ts` para componentes de **selección simple**: `select/`, `native-select/`, `combobox/`, `radio-group/`, `checkbox/` — asegurando que `notFor` de cada uno mencione las alternativas del grupo
- [x] 3.2 Crear `meta.ts` para componentes de **texto libre**: `input/`, `textarea/`, `number-field/`, `tags-input/`
- [x] 3.3 Crear `meta.ts` para componentes de **estado binario y rangos**: `switch/`, `toggle/`, `toggle-group/`, `slider/`, `button-group/`
- [x] 3.4 Crear `meta.ts` para componentes de **fecha**: `calendar/`, `date-picker/`

## Phase 4: meta.ts — Navegación, overlays y menús

- [x] 4.1 Crear `meta.ts` para componentes de **navegación**: `breadcrumb/`, `navigation-menu/`, `tabs/`, `pagination/`, `sidebar/`, `menubar/`
- [x] 4.2 Crear `meta.ts` para componentes de **overlays**: `dialog/`, `alert-dialog/`, `sheet/`, `drawer/`, `popover/`, `hover-card/`, `tooltip/` — diferenciando claramente en `notFor` cuándo usar Dialog vs Sheet vs Drawer
- [x] 4.3 Crear `meta.ts` para componentes de **menús y comandos**: `context-menu/`, `dropdown-menu/`, `command/`

## Phase 5: meta.ts — Feedback, layout y datos

- [x] 5.1 Crear `meta.ts` para componentes de **feedback y estado**: `alert/`, `badge/`, `skeleton/`, `spinner/`, `progress/`, `sonner/`
- [x] 5.2 Crear `meta.ts` para componentes de **layout y contenedores**: `card/`, `aspect-ratio/`, `separator/`, `resizable/`, `scroll-area/`, `collapsible/`
- [x] 5.3 Crear `meta.ts` para componentes de **datos y visualización**: `table/`, `data-table/`, `chart/`, `carousel/`, `stepper/`, `field/`
- [x] 5.4 Crear `meta.ts` para componentes **utilitarios**: `avatar/`, `accordion/`, `kbd/`, `label/`, `item/`, `empty/`

## Phase 6: Integración en *Docs.vue — Selección, formularios y binarios

> Misma agrupación que Phase 3–5. Para cada tarea: importar `{ meta }` y agregar `<ComponentMeta :meta="meta" />` como primera sección.

- [x] 6.1 Actualizar `*Docs.vue` de **selección simple**: `SelectDocs`, `NativeSelectDocs`, `ComboboxDocs`, `RadioGroupDocs`, `CheckboxDocs`
- [x] 6.2 Actualizar `*Docs.vue` de **texto libre**: `InputDocs`, `TextareaDocs`, `NumberFieldDocs`, `TagsInputDocs`
- [x] 6.3 Actualizar `*Docs.vue` de **estado binario y rangos**: `SwitchDocs`, `ToggleDocs`, `ToggleGroupDocs`, `SliderDocs`, `ButtonGroupDocs`
- [x] 6.4 Actualizar `*Docs.vue` de **fecha**: `CalendarDocs`, `DatePickerDocs`

## Phase 7: Integración en *Docs.vue — Navegación, overlays y menús

- [x] 7.1 Actualizar `*Docs.vue` de **navegación**: `BreadcrumbDocs`, `NavigationMenuDocs`, `TabsDocs`, `PaginationDocs`, `MenubarDocs` (SidebarDocs no existe)
- [x] 7.2 Actualizar `*Docs.vue` de **overlays**: `DialogDocs`, `AlertDialogDocs`, `SheetDocs`, `DrawerDocs`, `PopoverDocs`, `HoverCardDocs`, `TooltipDocs`
- [x] 7.3 Actualizar `*Docs.vue` de **menús y comandos**: `ContextMenuDocs`, `DropdownMenuDocs`, `CommandDocs`

## Phase 8: Integración en *Docs.vue — Feedback, layout y datos

- [x] 8.1 Actualizar `*Docs.vue` de **feedback y estado**: `AlertDocs`, `BadgeDocs`, `SkeletonDocs`, `SpinnerDocs`, `ProgressDocs`, `SonnerDocs`
- [x] 8.2 Actualizar `*Docs.vue` de **layout y contenedores**: `CardDocs`, `AspectRatioDocs`, `SeparatorDocs`, `ResizableDocs`, `ScrollAreaDocs`, `CollapsibleDocs`
- [x] 8.3 Actualizar `*Docs.vue` de **datos y visualización**: `TableDocs`, `DataTableDocs`, `ChartDocs`, `CarouselDocs`, `StepperDocs`, `FieldDocs`
- [x] 8.4 Actualizar `*Docs.vue` de **utilitarios**: `AvatarDocs`, `AccordionDocs`, `KbdDocs`, `LabelDocs`, `ItemDocs`, `EmptyDocs`

## Phase 9: Servidor MCP

- [x] 9.1 Crear `mcp-server/index.ts` — inicializar servidor con `@modelcontextprotocol/sdk`, registrar la herramienta `find_component` y exponer el servidor via stdio transport
- [x] 9.2 Crear `mcp-server/tools/find_component.ts` — implementar: (a) carga dinámica de todos los `meta.ts` usando `import()` con manejo de errores por archivo, (b) función `score()` por keyword matching sobre `description + useCases + keywords`, (c) retorno de matches ordenados y mensaje cuando `matches` es vacío, (d) validación de `context` no vacío
- [ ] 9.3 Verificar que `node --import tsx mcp-server/index.ts` arranca sin errores y el proceso no cierra inmediatamente
- [x] 9.4 Crear `.mcp.json` en la raíz del proyecto con la configuración `goodhope` apuntando a `mcp-server/index.ts` (para uso local del equipo durante desarrollo)

## Phase 10: Verificación y documentación final

- [ ] 10.1 Ejecutar `npm run build` y confirmar que vue-tsc no reporta errores en ningún `meta.ts` ni en `ComponentMeta.vue`
- [ ] 10.2 Revisar visualmente en `npm run dev` las páginas de Button, Select, Dialog, Alert y Card — confirmar que "Cuándo usarlo" aparece antes de los ejemplos y que los links de "Componentes relacionados" navegan correctamente
- [x] 10.3 Actualizar `src/views/MCPView.vue` — agregar `find_component` a la tabla de herramientas y una sección con ejemplo de input (`"necesito que el usuario elija entre opciones"`) y output esperado
- [ ] 10.4 Probar `find_component` en Claude Code con 3 casos: (a) match claro `"necesito mostrar notificaciones temporales"` → debe retornar Sonner/Alert, (b) match ambiguo `"el usuario elige entre opciones"` → debe retornar Select + Combobox + RadioGroup, (c) sin match `"necesito un mapa interactivo"` → debe retornar `matches: []` con mensaje
- [ ] 10.5 Verificar que Select, Combobox y NativeSelect se referencian mutuamente en sus campos `notFor` — cumple spec de consistencia semántica
