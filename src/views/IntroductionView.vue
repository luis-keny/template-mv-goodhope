<template>
  <div class="p-6 space-y-6">
    <div>
      <h1 class="text-3xl font-bold">Comenzar</h1>
      <p class="mt-2 text-gray-600">
        Este catálogo proporciona componentes UI reutilizables para aplicaciones Vue 3, construidos con TypeScript, TailwindCSS y shadcn-vue. Copia, personaliza y despliega interfaces más rápido en proyectos de GoodHope.
      </p>
    </div>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Qué incluye</h2>
      <ul class="list-disc pl-6 text-sm text-muted-foreground">
        <li>Componentes Vue 3 + Composition API</li>
        <li>APIs y variantes con seguridad de tipos</li>
        <li>Estilos con TailwindCSS (utility-first)</li>
        <li>Patrones accesibles inspirados en Radix Vue</li>
        <li>Bloques listos para copiar y pegar</li>
      </ul>
    </section>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Prerrequisitos</h2>
      <ul class="list-disc pl-6 text-sm text-muted-foreground">
        <li>Node.js 18+ y npm 9+ (o pnpm/yarn)</li>
        <li>Git</li>
        <li>Familiaridad básica con Vue 3 y TailwindCSS</li>
      </ul>
    </section>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Instalación</h2>
      <p class="text-sm text-muted-foreground">
        Para configurar las plantillas o integrar componentes en un proyecto existente, sigue los pasos en la página de Instalación.
      </p>
      <RouterLink
        to="/docs/installation"
        class="inline-flex items-center gap-2 rounded-md border border-muted px-3 py-2 text-sm hover:bg-muted/40 transition-colors"
      >
        Ir a Instalación
      </RouterLink>
    </section>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Uso de Componentes</h2>
      <ul class="list-disc pl-6 text-sm text-muted-foreground">
        <li>Importar desde tu carpeta local <code>@/components/ui</code>.</li>
        <li>Seguir las props y variantes para una UX consistente.</li>
        <li>Preferir la composición y piezas pequeñas y reutilizables.</li>
        <li>Tener en cuenta la accesibilidad (foco, teclado, ARIA).</li>
      </ul>
    </section>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Convenciones</h2>
      <ul class="list-disc pl-6 text-sm text-muted-foreground">
        <li>PascalCase para archivos de componentes (ej. <code>Button.vue</code>)</li>
        <li>Composition API con <code>&lt;script setup&gt;</code></li>
        <li>Evitar estilos en línea; usar utilidades de Tailwind</li>
        <li>TypeScript primero; evitar <code>any</code></li>
      </ul>
    </section>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Contribuir</h2>
      <p class="text-sm text-muted-foreground">
        Si deseas contribuir, puedes ejecutar el proyecto localmente y seguir nuestro flujo de trabajo:
      </p>
      <ol class="list-decimal pl-6 text-sm text-muted-foreground space-y-1">
        <li>Hacer un fork del repositorio y clonarlo.</li>
        <li>Instalar dependencias con <code>npm install</code>.</li>
        <li>Crear una rama para tu cambio (Ship/Show/Ask según corresponda).</li>
        <li>Realizar tus cambios, asegurando que el proyecto compile y se ejecute.</li>
        <li>Hacer commit con el formato Conventional Commits.</li>
        <li>Hacer push y abrir un Pull Request si aplica.</li>
      </ol>
    </section>
  </div>
</template>
