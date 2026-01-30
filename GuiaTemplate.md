## 🎯 **GUÍA DE TRABAJO - Template MV GoodHope**

### **1. PALETA DE COLORES SOUL MV (Ya configurada) ✅**

Ya está implementada en tailwind.config.js:

```javascript
primary: {    // AZUL (Pantone 7684C)
  DEFAULT: '#4672b1',
  50-950: escala completa
}
secondary: {  // CELESTE (Pantone Process Blue C)  
  DEFAULT: '#0ca4eb',
  50-950: escala completa
}
tertiary: {   // TURQUESA
  DEFAULT: '#1ab5c0',
  50-950: escala completa
}
```

**CSS Variables** en style.css:
```css
--primary: 216 47% 48%;    /* #4672b1 */
--secondary: 199 93% 49%;  /* #0ca4eb */
```

---

### **2. DIRECTORIOS CLAVE (NO toques otros)**

#### **✅ TRABAJAR AQUÍ:**

```
src/
├── components/
│   ├── ui/                    # ⭐ PRINCIPAL - Componentes shadcn-vue
│   │   ├── button/           # Ejemplo: Button.vue + index.ts
│   │   ├── input/
│   │   └── [nuevo-componente]/  # Crear carpetas así
│   │
│   ├── common/               # ⚡ Componentes compuestos personalizados
│   └── command/              # Solo si modificas el CommandMenu
│
├── docs/
│   ├── components/           # 📄 Documentación de cada componente
│   │   ├── button/          # Ejemplos de uso
│   │   └── [nuevo]/         # Crear para nuevos componentes
│   └── snippets/            # 💻 Código de ejemplo (TypeScript)
│
├── utils/
│   ├── components.ts        # 📋 Registrar nuevos componentes AQUÍ
│   └── config.ts            # Configuración del sitio
│
└── views/                   # Solo si necesitas vistas nuevas (raro)
```

#### **❌ NO MODIFICAR (generados/estándar):**
- public
- utils.ts (solo si agregas utilities globales)
- `router/` (salvo que agregues rutas)
- Archivos raíz de config (vite.config.ts, etc.)

---

### **3. PATRÓN DE TRABAJO (Flujo Shadcn-vue personalizado)**

#### **A) Para AGREGAR un nuevo componente:**

**Paso 1:** Crear estructura en `components/ui/`
```
src/components/ui/[nombre-componente]/
├── [NombreComponente].vue
└── index.ts
```

**Paso 2:** Implementar componente (patrón obligatorio):

```vue
<!-- src/components/ui/mi-componente/MiComponente.vue -->
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { MiComponenteVariants } from '.'
import { Primitive } from 'reka-ui'  // Si aplica
import { cn } from '@/lib/utils'
import { miComponenteVariants } from '.'

interface Props {
  variant?: MiComponenteVariants['variant']
  size?: MiComponenteVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>

<template>
  <div :class="cn(miComponenteVariants({ variant, size }), props.class)">
    <slot />
  </div>
</template>
```

**Paso 3:** Definir variantes con CVA en index.ts:

```typescript
// src/components/ui/mi-componente/index.ts
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as MiComponente } from './MiComponente.vue'

export const miComponenteVariants = cva(
  "base-classes-comunes", // Clases base
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        tertiary: "bg-tertiary text-tertiary-foreground",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3",
        lg: "h-10 px-8",
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type MiComponenteVariants = VariantProps<typeof miComponenteVariants>
```

**Paso 4:** Registrar en components.ts:

```typescript
export const components = [
  // ... existentes
  { title: "Mi Componente", url: "/docs/components/mi-componente" },
]
```

**Paso 5:** Crear documentación en `docs/components/mi-componente/`:

```
docs/components/mi-componente/
├── MiComponenteDemo.vue    # Ejemplos visuales
└── (opcional más demos)
```

**Paso 6:** Agregar snippets en `docs/snippets/`:

```typescript
// docs/snippets/miComponenteExamples.ts
export const basicExample = `
<MiComponente variant="default">
  Contenido
</MiComponente>
`
```

---

### **4. PARADIGMAS Y PATRONES (OBLIGATORIOS)**

#### **Paradigma: Composition API + Componentes Funcionales**

✅ **USAR:**
```typescript
<script setup lang="ts">  // ⭐ SIEMPRE setup
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)
</script>
```

❌ **NO USAR:**
```typescript
export default {  // ❌ Options API
  data() { ... }
}
```

#### **Patrones de Diseño a seguir:**

**1. Atomic Design** (componentes UI)
- **Átomos**: `Button`, `Input`, `Badge`
- **Moléculas**: Combinar átomos (`InputGroup`)
- **Organismos**: Secciones complejas

**2. Composition Pattern** (lógica reutilizable)
```typescript
// composables/useFeature.ts
export function useFeature() {
  const state = ref()
  const action = () => { ... }
  return { state, action }
}
```

**3. Variant Pattern** (CVA obligatorio)
```typescript
// SIEMPRE usar class-variance-authority
const variants = cva("base", {
  variants: {
    variant: { ... },
    size: { ... }
  }
})
```

**4. Presentational/Container** (separar UI de lógica)
- Componentes en `ui/` → Solo presentación
- Lógica compleja → `composables/`

**5. Configuration Over Code**
```typescript
// utils/components.ts - Data-driven
export const components = [...]  // ✅ Configuración centralizada
```

---

### **5. CONVENCIONES DE CÓDIGO**

#### **TypeScript estricto:**
```typescript
// ✅ Siempre tipar props
interface Props {
  variant?: 'default' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})
```

#### **Estilos con Tailwind + CVA:**
```vue
<!-- ✅ USAR utility classes + cn() -->
<div :class="cn('flex items-center gap-2', props.class)">

<!-- ❌ NO USAR estilos CSS internos -->
<style scoped>  
.mi-clase { ... }  /* ❌ Evitar */
</style>
```

#### **Importaciones ordenadas:**
```typescript
// 1. Types
import type { HTMLAttributes } from 'vue'

// 2. Vue core
import { ref, computed } from 'vue'

// 3. Librerías externas
import { Primitive } from 'reka-ui'

// 4. Internos (@/)
import { cn } from '@/lib/utils'
import { buttonVariants } from '.'
```

---

### **6. SISTEMA DE COLORES - Uso correcto**

#### **En componentes:**
```typescript
// ✅ Usar escalas de color predefinidas
bg-primary-500      // Azul medio
bg-secondary-400    // Celeste claro
bg-tertiary-600     // Turquesa oscuro

// ✅ Variantes con foreground automático
bg-primary text-primary-foreground  // Blanco sobre azul

// ❌ NO usar colores custom fuera de la paleta
bg-[#123456]  // ❌ NUNCA
```

#### **Variables CSS disponibles:**
```css
/* Ya configuradas en style.css */
--primary: 216 47% 48%;
--secondary: 199 93% 49%;
hsl(var(--primary))  /* Usar así */
```

---

### **7. CHECKLIST antes de Push**

```bash
✅ npm run dev  # Funciona sin errores
✅ Componente sigue patrón CVA
✅ Registrado en utils/components.ts
✅ Creada carpeta en docs/components/
✅ TypeScript tipado 100%
✅ Usa solo colores Soul MV (primary/secondary/tertiary)
✅ No modificaste lib/utils.ts innecesariamente
✅ Commit con convención: "feat: agregar componente X"
```

---

### **8. EJEMPLO COMPLETO (Reference)**

Ver componentes ya implementados:
- button ← **Template perfecto**
- button ← Docs
- buttonExamples.ts ← Snippets

---

### **Resumen TL;DR:**

1. **Trabajar solo en**: `components/ui/`, `docs/`, components.ts
2. **Patrón**: CVA + Composition API + TypeScript
3. **Colores**: Solo `primary` (azul), `secondary` (celeste), `tertiary` (turquesa)
4. **Estructura**: Copiar patrón de `button/` para nuevos componentes
5. **No reinventar**: Seguir estructura shadcn-vue existente