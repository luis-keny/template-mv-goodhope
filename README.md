# Template MV GoodHope

Catálogo de componentes reutilizables para la Clínica Adventista GoodHope. Este proyecto proporciona una colección de componentes UI construidos con Vue 3, TypeScript y shadcn-vue, diseñados para ser copiados y utilizados en proyectos de la clínica.

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#acerca-del-proyecto)
- [Tecnologías](#tecnologías)
- [Inicio Rápido](#inicio-rápido)
- [Cómo Obtener los Componentes](#cómo-obtener-los-componentes)
- [Contribuir al Proyecto](#contribuir-al-proyecto)
- [Convención de Commits](#convención-de-commits)
- [Estrategia de Ramificación: Ship/Show/Ask](#estrategia-de-ramificación-shipshowask)
- [Estructura del Proyecto](#estructura-del-proyecto)

## 🎯 Acerca del Proyecto

Este proyecto es un **catálogo de componentes** que permite a los desarrolladores de la Clínica Adventista GoodHope acceder a componentes UI pre-construidos y probados. La versión 1.0 se enfoca en proporcionar componentes listos para copiar directamente en otros proyectos.

### Características Principales

- ✅ Componentes UI basados en shadcn-vue
- ✅ Totalmente tipados con TypeScript
- ✅ Estilizados con TailwindCSS
- ✅ Compatibles con Vue 3 Composition API
- ✅ Listos para copiar y pegar

## 🛠️ Tecnologías

Este proyecto está construido con:

- **[Vue 3](https://vuejs.org/)** - Framework JavaScript progresivo
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript
- **[Vite](https://vitejs.dev/)** - Build tool y dev server
- **[TailwindCSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn-vue](https://www.shadcn-vue.com/)** - Componentes UI basados en Radix Vue
- **[Lucide Vue Next](https://lucide.dev/)** - Biblioteca de iconos

### Dependencias Principales

```json
{
  "vue": "3.5.24",
  "reka-ui": "2.7.0",
  "lucide-vue-next": "0.563.0",
  "class-variance-authority": "0.7.1",
  "tailwind-merge": "3.4.0"
}
```

## 🚀 Inicio Rápido

### Prerequisitos

Asegúrate de tener instalado:

- **Node.js** 18.x o superior
- **npm** 9.x o superior (o pnpm/yarn)
- **Git**

### Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/luis-keny/template-mv-goodhope.git
cd template-mv-goodhope
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Inicia el servidor de desarrollo**

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye el proyecto para producción
npm run preview  # Previsualiza la build de producción
```

## 📦 Cómo Obtener los Componentes

### Opción 1: Copiar Componentes Individuales

Para usar componentes en tu proyecto, copia los archivos necesarios:

1. **Componentes UI** (ubicados en `src/components/ui/`)
   ```
   src/components/ui/button/
   ```

2. **Utilidades** (ubicadas en `src/lib/`)
   ```
   src/lib/utils.ts
   ```

### Opción 2: Copiar Todo el Directorio

Si necesitas múltiples componentes, copia los directorios completos:

```bash
# Desde tu proyecto destino
cp -r /ruta/a/template-mv-goodhope/src/components/ui ./src/components/
cp -r /ruta/a/template-mv-goodhope/src/lib ./src/
```

### Configuración Requerida

Después de copiar los componentes, asegúrate de tener en tu proyecto:

1. **Dependencias necesarias** (instálalas si no las tienes):

```bash
npm install reka-ui lucide-vue-next class-variance-authority clsx tailwind-merge
```

2. **Configuración de TailwindCSS** (en `tailwind.config.js`):

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. **Alias de importación** (en `vite.config.ts` o `tsconfig.json`):

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## 🤝 Contribuir al Proyecto

### Configuración para Desarrollo

1. **Fork y clona el repositorio**

```bash
git clone https://github.com/tu-usuario/template-mv-goodhope.git
cd template-mv-goodhope
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Crea una rama para tu contribución** (ver [Ship/Show/Ask](#estrategia-de-ramificación-shipshowask))

```bash
git checkout -b <prefijo>/descripcion-del-cambio
```

4. **Realiza tus cambios**

   - Sigue las convenciones de código del proyecto
   - Asegúrate de que el código compile sin errores
   - Prueba tus cambios localmente

5. **Commit y push**

```bash
git add .
git commit -m "tipo: descripción del cambio"
git push origin <nombre-de-tu-rama>
```

6. **Crea un Pull Request** (si aplica según Ship/Show/Ask)

### Estándares de Código

- **TypeScript**: Usa tipos explícitos, evita `any`
- **Componentes Vue**: Usa Composition API con `<script setup>`
- **Estilos**: Usa clases de TailwindCSS, evita estilos inline
- **Nombres de archivo**: 
  - Componentes: `PascalCase.vue` (ej: `Button.vue`)
  - Utilidades: `camelCase.ts` (ej: `utils.ts`)

## 📝 Convención de Commits

Este proyecto sigue [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/) para mantener un historial de cambios claro y semántico.

### Formato

```
<tipo>(<alcance opcional>): <descripción>

[cuerpo opcional]

[nota de pie opcional]
```

### Tipos de Commit

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| `feat` | Nueva funcionalidad | `feat: agregar componente Dialog` |
| `fix` | Corrección de bug | `fix: corregir padding en Button` |
| `docs` | Cambios en documentación | `docs: actualizar README con ejemplos` |
| `style` | Cambios de formato (no afectan la lógica) | `style: formatear código con Prettier` |
| `refactor` | Refactorización de código | `refactor: simplificar lógica de utils` |
| `test` | Agregar o modificar tests | `test: agregar tests para Button` |
| `chore` | Tareas de mantenimiento | `chore: actualizar dependencias` |
| `perf` | Mejoras de rendimiento | `perf: optimizar renderizado de lista` |
| `ci` | Cambios en CI/CD | `ci: agregar workflow de GitHub Actions` |

### Ejemplos

```bash
# Feature nueva
git commit -m "feat: agregar componente Card con variantes"

# Corrección de bug
git commit -m "fix: resolver problema de z-index en Modal"

# Documentación
git commit -m "docs: agregar guía de uso de componentes"

# Refactorización
git commit -m "refactor: extraer lógica de validación a composable"

# Con alcance
git commit -m "feat(button): agregar variante outline"

# Con cuerpo y breaking change
git commit -m "feat!: cambiar API de componente Input

BREAKING CHANGE: la prop 'variant' ahora se llama 'type'"
```

### Reglas Importantes

- ✅ Usa el imperativo presente ("agregar" no "agregado" ni "agrega")
- ✅ Primera letra en minúscula
- ✅ No uses punto final
- ✅ Mantén la línea de descripción bajo 72 caracteres
- ✅ Usa el cuerpo para explicar **qué** y **por qué**, no **cómo**

## 🌿 Estrategia de Ramificación: Ship/Show/Ask

Usamos el workflow **Ship/Show/Ask** para balancear velocidad y calidad. No se requieren forks—trabaja directamente en ramas del repositorio principal.

### 🚢 Ship - Commit directo a `main`

**Cuándo usar:**
- Cambios de bajo riesgo y reversibles
- Correcciones obvias (typos, formato)
- Actualizaciones de documentación
- Ajustes de configuración menores
- Bugs pequeños con tests

**Proceso:**

```bash
git checkout main
git pull origin main
# Realiza tus cambios
git add .
git commit -m "fix: corregir typo en README"
git push origin main
# ✅ ¡Listo! Sin rama, sin PR
```

**Características:**
- ❌ No crea rama
- ❌ No requiere PR
- ✅ Cambio inmediato en `main`

---

### 👀 Show - Merge primero, review después

**Cuándo usar:**
- Cambios de riesgo bajo-medio
- Estás confiado pero quieres feedback
- Features directas
- Refactorizaciones con buena cobertura de tests

**Proceso (Recomendado - con PR):**

```bash
git checkout main
git pull origin main
git checkout -b show/agregar-componente-badge
# Realiza tus cambios
git add .
git commit -m "feat: agregar componente Badge"
git push origin show/agregar-componente-badge

# Crea PR en GitHub
# ⚡ Merge INMEDIATAMENTE sin esperar aprobación
# El equipo revisa el PR de forma asíncrona después del merge
```

**Proceso Alternativo (sin PR - notificar por chat):**

```bash
# ... mismo proceso hasta el push ...
git checkout main
git merge show/agregar-componente-badge --no-ff
git push origin main
git branch -d show/agregar-componente-badge
git push origin --delete show/agregar-componente-badge
# Notifica al equipo en Slack/Discord con el hash del commit
```

**Características:**
- ✅ Crea rama temporal
- ✅ PR opcional (recomendado para feedback centralizado)
- ✅ Merge **antes** de recibir feedback
- ✅ Review asíncrono para aprendizaje y mejoras futuras

**Diferencia clave con Ask:** Haces merge **antes** de obtener feedback, no después.

---

### ❓ Ask - Review antes de merge

**Cuándo usar:**
- Cambios de alto riesgo o complejos
- Afectan rutas críticas
- Introducen nueva arquitectura o patrones
- No estás seguro del enfoque
- Requieren discusión del equipo
- Breaking changes

**Proceso:**

```bash
git checkout main
git pull origin main
git checkout -b ask/refactor-sistema-temas
# Realiza tus cambios
git add .
git commit -m "refactor: rediseñar sistema de temas"
git push origin ask/refactor-sistema-temas

# Crea PR en GitHub
# ⏳ ESPERA la revisión y aprobación del equipo
# Merge después de la aprobación (vía GitHub o localmente)

git checkout main
git pull origin main  # Trae los cambios mergeados
git branch -d ask/refactor-sistema-temas  # Limpia rama local
```

**Características:**
- ✅ Crea rama
- ✅ PR **obligatorio**
- ⏳ Espera aprobación antes de merge
- ✅ Review bloqueante

---

### 🧭 Árbol de Decisión

```
¿El cambio es riesgoso o complejo?
    ├─ SÍ → ❓ ASK
    └─ NO → ¿Quieres feedback?
            ├─ SÍ → 👀 SHOW
            └─ NO → ¿Es trivial?
                    ├─ SÍ → 🚢 SHIP
                    └─ NO → 👀 SHOW
```

**Cuando tengas dudas, usa Ask.** Es mejor obtener feedback que causar problemas.

---

### 🏷️ Convención de Nombres de Ramas

Usa prefijos **ship/**, **show/**, o **ask/** para comunicar la intención:

```bash
# Recomendado (prefijo + descripción)
show/agregar-componente-badge
ask/refactor-algoritmo-core

# También válido (más descriptivo)
show/feature-exportar-paleta
ask/breaking-rediseño-api

# Evitar (intención poco clara)
feature/export  # ¿Es Show o Ask?
```

**Nota:** Los prefijos son una **convención**, no obligatorios. Pero ayudan al equipo a identificar rápidamente el nivel de review esperado.

---

### 🧹 Limpieza de Ramas

**Siempre elimina las ramas después de hacer merge** para mantener el repositorio limpio:

```bash
# Eliminar rama local
git branch -d nombre-rama

# Eliminar rama remota
git push origin --delete nombre-rama

# O usa el botón "Delete branch" de GitHub después del merge
```

**Ship mode** no crea ramas, así que no requiere limpieza.

---

### 📊 Comparación Rápida

| Aspecto | 🚢 Ship | 👀 Show | ❓ Ask |
|---------|---------|---------|--------|
| **Rama** | ❌ No | ✅ Sí (temporal) | ✅ Sí |
| **PR** | ❌ No | 🟡 Opcional | ✅ Obligatorio |
| **Merge** | ✅ Inmediato | ✅ Inmediato | ⏳ Después de aprobación |
| **Review** | ❌ No | ✅ Asíncrono (después) | ✅ Bloqueante (antes) |
| **Riesgo** | 🟢 Bajo | 🟡 Bajo-Medio | 🔴 Alto |
| **Velocidad** | ⚡ Máxima | ⚡ Alta | 🐢 Moderada |

---

### 💡 Consejos

1. **Empieza conservador**: Si es tu primera contribución, usa **Ask**
2. **Comunica la intención**: Usa los prefijos de rama para claridad
3. **Feedback constructivo**: En Show, el feedback es para aprender, no para bloquear
4. **Revierte si es necesario**: Si un Show causó problemas, revierte y usa Ask
5. **Documenta breaking changes**: Siempre documenta cambios que rompen compatibilidad

## 📁 Estructura del Proyecto

```
template-mv-goodhope/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes shadcn-vue
│   │   │   └── button/      # Componente Button
│   │   └── HelloWorld.vue   # Componente de ejemplo
│   ├── lib/
│   │   └── utils.ts         # Utilidades (cn, etc.)
│   ├── App.vue              # Componente raíz
│   ├── main.ts              # Punto de entrada
│   └── style.css            # Estilos globales
├── public/                  # Archivos estáticos
├── components.json          # Configuración shadcn-vue
├── tailwind.config.js       # Configuración TailwindCSS
├── vite.config.ts           # Configuración Vite
├── tsconfig.json            # Configuración TypeScript
└── package.json             # Dependencias y scripts
```

### Directorios Clave

- **`src/components/ui/`**: Componentes UI reutilizables basados en shadcn-vue
- **`src/lib/`**: Funciones de utilidad y helpers
- **`src/components/`**: Componentes específicos del proyecto (no UI genéricos)

## 📚 Recursos

- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [shadcn-vue](https://www.shadcn-vue.com/)
- [Conventional Commits](https://www.conventionalcommits.org/es/)

## 📄 Licencia

Este proyecto es privado y de uso interno para la Clínica Adventista GoodHope.

---

**Clínica Adventista GoodHope** 🏥
