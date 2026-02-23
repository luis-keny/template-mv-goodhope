<template>
  <div class="p-6 space-y-6">
    <div>
      <h1 class="text-3xl font-bold">Instalación</h1>
      <p class="mt-2 text-gray-600">
        Empieza a usar los componentes UI de GoodHope en minutos. Elige una plantilla de GitHub lista para usar (JavaScript o TypeScript).
      </p>
    </div>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Plantillas (Listas para usar)</h2>
      <p class="text-sm text-muted-foreground">
        Hay dos plantillas de GitHub disponibles con todo preconfigurado. Elige la que coincida con tu stack:
      </p>
      <ul class="list-disc pl-6 text-sm text-muted-foreground">
        <li>Plantilla JavaScript (Vue 3 + Vite + TailwindCSS)</li>
        <li>Plantilla TypeScript (Vue 3 + Vite + TailwindCSS)</li>
      </ul>
      <div class="rounded-md border border-muted bg-muted/30 p-4 text-sm">
        <p class="font-medium mb-2">Clonar y ejecutar:</p>
        <pre class="overflow-x-auto"><code># JavaScript
git clone https://github.com/your-org/template-goodhope-js.git
cd template-goodhope-js
npm install
npm run dev

# TypeScript
git clone https://github.com/luis-keny/template-goodhope-ts.git
cd template-goodhope-ts
npm install
npm run dev</code></pre>
      </div>
    </section>
  </div>
</template>
