<template>
  <div class="p-6 space-y-6">
    <div>
      <h1 class="text-3xl font-bold">Installation</h1>
      <p class="mt-2 text-gray-600">
        Start using GoodHope’s UI components in minutes. Choose a ready-to-use GitHub template (JavaScript or TypeScript), or integrate components into an existing project.
      </p>
    </div>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Templates (Ready to Use)</h2>
      <p class="text-sm text-muted-foreground">
        Two GitHub templates are available with everything preconfigured. Pick the one that matches your stack:
      </p>
      <ul class="list-disc pl-6 text-sm text-muted-foreground">
        <li>JavaScript template (Vue 3 + Vite + TailwindCSS)</li>
        <li>TypeScript template (Vue 3 + Vite + TailwindCSS)</li>
      </ul>
      <div class="rounded-md border border-muted bg-muted/30 p-4 text-sm">
        <p class="font-medium mb-2">Clone and run:</p>
        <pre class="overflow-x-auto"><code># JavaScript
git clone https://github.com/your-org/template-goodhope-js.git
cd template-goodhope-js
npm install
npm run dev

# TypeScript
git clone https://github.com/your-org/template-goodhope-ts.git
cd template-goodhope-ts
npm install
npm run dev</code></pre>
      </div>
    </section>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Manual Setup (Existing Project)</h2>
      <ol class="list-decimal pl-6 text-sm text-muted-foreground space-y-1">
        <li>Install required dependencies.</li>
        <li>Copy UI components into <code>src/components/ui</code>.</li>
        <li>Configure TailwindCSS and project aliases.</li>
        <li>Run your dev server.</li>
      </ol>
      <div class="rounded-md border border-muted bg-muted/30 p-4 text-sm">
        <p class="font-medium mb-2">Install core libraries:</p>
        <pre class="overflow-x-auto"><code>npm install reka-ui lucide-vue-next class-variance-authority clsx tailwind-merge</code></pre>
      </div>
    </section>
  </div>
</template>
