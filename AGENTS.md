# AGENTS.md

This file is for coding agents working in `D:\trabajo\goodhope\template-mv-goodhope`.

## Project Purpose

- This repository is a Vue 3 + TypeScript documentation site for the GoodHope component catalog.
- It is not a typical product app; most work involves documenting, demoing, or registering reusable UI components.
- Primary stack: Vite, Vue 3, TypeScript, Tailwind CSS, shadcn-vue patterns, `reka-ui`, `class-variance-authority`.
- There is also a small `mcp-server/` package with its own `package.json` and a single `start` script.

## Commands

### Root package

- `npm install` - install dependencies before doing anything else.
- `npm run dev` - start the docs site on the Vite dev server.
- `npm run build` - generate `api/component-registry.json`, type-check with `vue-tsc -b`, then build production assets.
- `npm run generate-registry` - regenerate `api/component-registry.json` without running the full build.
- `npm run preview` - preview the production build locally.

### MCP server package

- `npm --prefix mcp-server install` - install `mcp-server/` dependencies.
- `npm --prefix mcp-server run start` - start the MCP server with `node --import tsx index.ts`.

## Lint / Test Reality

- There is currently no `lint` script in the root package.
- There is currently no `test` script in the root package.
- There is no configured single-test command because no test runner is installed in this repo.
- There is no ESLint, Prettier, Vitest, Jest, Playwright, or Cypress config checked in at the root.
- The main automated verification path today is `npm run build`.
- If you need lightweight validation for a docs-only change, at minimum run `npm run build` after installing dependencies.

## Single Test Guidance

- Root package: not available yet; no test framework is configured.
- `mcp-server/`: not available yet; no test framework is configured there either.
- Do not invent test commands in commits or docs; explicitly say that single-test execution is unavailable until a runner is added.
- If future tests are introduced, document both the full suite command and the single-file / single-test filter command here.

## What To Check Before Reporting Success

- Confirm dependencies are installed; otherwise scripts that rely on local bins such as `tsx` will fail.
- Run `npm run build` for repo-wide verification when possible.
- If you touch `src/data/component-registry.ts`, component `meta.ts` files, or `src/utils/components.ts`, also ensure the generated registry still builds.
- If you touch only copy or layout docs, still prefer a build over claiming success without verification.

## Repository-Specific Rules Already Present

- No `.cursor/rules/` directory was found.
- No `.cursorrules` file was found.
- No `.github/copilot-instructions.md` file was found.
- The main checked-in agent guidance comes from `CLAUDE.md`; the conventions below incorporate it.

## Architecture Notes

- `src/components/ui/` contains reusable UI building blocks in the shadcn-vue style.
- `src/components/common/` contains more composite GoodHope-specific components.
- `src/components/command/` contains the command palette UI.
- `src/docs/components/<name>/` contains docs pages and examples for each component.
- `src/docs/snippets/` stores raw code strings shown in docs examples.
- `src/utils/components.ts` is the source of truth for the docs navigation list.
- `src/views/ComponentDetailView.vue` maps route names to docs components through `docsRegistry`.
- `scripts/generate-registry.ts` creates `api/component-registry.json` from metadata.

## How To Add A New Component

1. Create `src/components/ui/<name>/<Name>.vue` and `src/components/ui/<name>/index.ts`.
2. Export the component and its CVA variants from `index.ts`.
3. Create docs files in `src/docs/components/<name>/`.
4. Create snippet exports in `src/docs/snippets/`.
5. Register the component in `src/utils/components.ts`.
6. Register the docs page in `src/views/ComponentDetailView.vue`.
7. Run `npm run build` so the registry and docs wiring are validated.

## Code Style

- Use `<script setup lang="ts">` for Vue SFCs; do not introduce the Options API.
- Prefer Composition API primitives (`computed`, `ref`, `reactive`, composables) over class-style or legacy Vue patterns.
- Keep styling in Tailwind utility classes; do not add `style scoped` blocks unless there is a strong reason.
- Use `cn()` from `@/lib/utils` to merge conditional class names.
- Use semantic Tailwind tokens such as `bg-primary` or `text-secondary-foreground`; do not introduce arbitrary brand hex colors in component markup.
- Keep docs examples copy-paste friendly; avoid project-only abstractions in snippets unless the docs page explains them.

## Imports

- Follow this order when practical: type imports, Vue imports, third-party runtime imports, internal `@/` imports, relative imports.
- Prefer `import type` for type-only imports.
- Prefer the `@/` alias for app source imports instead of long relative paths.
- In component folders, it is normal to import variants or types from `.`.
- Match the surrounding file's quote and semicolon style; the repo is currently mixed, and there is no formatter enforcing one global style.

## TypeScript Guidance

- `tsconfig.app.json` is strict: `strict`, `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch` are enabled.
- Avoid `any`; introduce explicit interfaces or generic types instead.
- If a legacy file already uses `any`, narrow it when you are already touching that code.
- Type props explicitly; common patterns are inline `defineProps<{ ... }>()` or an `interface Props` with `withDefaults`.
- Keep public component variant types exported from `index.ts` with `VariantProps<typeof ...>`.
- Use `Record<string, T>` only when keys are truly dynamic.
- Avoid adding unnecessary type assertions; prefer narrowing and proper prop typing first.

## Naming Conventions

- Vue component files: `PascalCase.vue`.
- Component folders: kebab-case under `src/components/ui/` and `src/docs/components/`.
- Utility files: camelCase or descriptive lowercase names such as `utils.ts`, `config.ts`, `components.ts`.
- Exported CVA helpers usually use `<componentName>Variants`.
- Route keys and registry keys are typically kebab-case strings.
- Keep commit messages in Conventional Commit form, e.g. `feat(button): add outline variant`.

## Formatting Conventions

- Prefer small, readable functions and computed properties over dense inline template logic.
- Keep templates readable with one attribute per line when a tag gets long.
- Preserve existing spacing and line-break style in the file you edit.
- Do not add comments for obvious code; only document non-obvious behavior or constraints.
- Avoid dead code, unused imports, and placeholder TODOs unless they are actionable and clearly scoped.

## Error Handling

- Favor simple, defensive handling over over-engineered abstractions.
- In UI helpers, graceful fallback is preferred when possible; `src/docs/shared/CodeBlock.vue` falls back from `hljs.highlight()` to `hljs.highlightAuto()`.
- Throw or surface errors when silent failure would hide a broken docs page or invalid registry generation.
- Do not swallow errors without either a fallback path or a clear reason.
- For async browser APIs such as clipboard access, keep failures user-safe and avoid crashing the page.

## UI And Design Constraints

- Preserve the existing design language unless the task explicitly asks for a redesign.
- Allowed brand colors come from `src/style.css` tokens: primary, secondary, tertiary, and related semantic tokens.
- Prefer semantic color classes over raw hex values.
- Keep components responsive for both desktop and mobile docs pages.
- Favor reusable primitives over one-off styling in docs examples.

## Agent Workflow Tips

- Before editing, check whether the change affects docs registration, snippets, and component metadata together.
- For component work, inspect the matching `index.ts`, component SFC, docs page, and snippets together.
- For doc-only changes, verify that examples and displayed code stay in sync.
- Do not claim lint or test success; explicitly state that those scripts do not exist if asked.
- If build verification is blocked because dependencies are missing, say so clearly and recommend `npm install`.

## Branching And Review

- Follow the repo's Ship/Show/Ask workflow from `README.md` / `CLAUDE.md`.
- `Ship`: trivial, low-risk changes can go straight to `main`.
- `Show`: use a `show/<description>` branch for low/medium-risk work that can be merged immediately.
- `Ask`: use an `ask/<description>` branch for risky, architectural, or approval-needed changes.

## Good Default Summary For Agents

- Install dependencies.
- Make the smallest change that matches existing component and docs patterns.
- Register new components in every required location.
- Validate with `npm run build`.
- Report honestly when lint/tests or single-test commands are unavailable.
