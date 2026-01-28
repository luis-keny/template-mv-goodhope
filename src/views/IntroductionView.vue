<template>
  <div class="p-6 space-y-6">
    <div>
      <h1 class="text-3xl font-bold">Get Started</h1>
      <p class="mt-2 text-gray-600">
        This catalog provides reusable UI components for Vue 3 apps, built with TypeScript, TailwindCSS, and shadcn-vue. Copy, customize, and ship UI faster across GoodHope projects.
      </p>
    </div>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">What’s Included</h2>
      <ul class="list-disc pl-6 text-sm text-muted-foreground">
        <li>Vue 3 + Composition API components</li>
        <li>Type-safe APIs and variants</li>
        <li>TailwindCSS styling (utility-first)</li>
        <li>Accessible patterns inspired by Radix Vue</li>
        <li>Ready to copy-and-paste blocks</li>
      </ul>
    </section>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Prerequisites</h2>
      <ul class="list-disc pl-6 text-sm text-muted-foreground">
        <li>Node.js 18+ and npm 9+ (or pnpm/yarn)</li>
        <li>Git</li>
        <li>Basic familiarity with Vue 3 and TailwindCSS</li>
      </ul>
    </section>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Installation</h2>
      <p class="text-sm text-muted-foreground">
        To set up the templates or integrate components into an existing project, follow the steps on the Installation page.
      </p>
      <RouterLink
        to="/docs/installation"
        class="inline-flex items-center gap-2 rounded-md border border-muted px-3 py-2 text-sm hover:bg-muted/40 transition-colors"
      >
        Go to Installation
      </RouterLink>
    </section>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Using Components</h2>
      <ul class="list-disc pl-6 text-sm text-muted-foreground">
        <li>Import from your local <code>@/components/ui</code> folder.</li>
        <li>Follow props and variants for consistent UX.</li>
        <li>Prefer composition and small, reusable pieces.</li>
        <li>Keep accessibility in mind (focus, keyboard, ARIA).</li>
      </ul>
    </section>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Conventions</h2>
      <ul class="list-disc pl-6 text-sm text-muted-foreground">
        <li>PascalCase for component files (e.g., <code>Button.vue</code>)</li>
        <li>Composition API with <code>&lt;script setup&gt;</code></li>
        <li>Avoid inline styles; use Tailwind utilities</li>
        <li>TypeScript-first; avoid <code>any</code></li>
      </ul>
    </section>

    <section class="space-y-2">
      <h2 class="text-xl font-semibold">Contributing</h2>
      <p class="text-sm text-muted-foreground">
        If you want to contribute, you can run the project locally and follow our workflow:
      </p>
      <ol class="list-decimal pl-6 text-sm text-muted-foreground space-y-1">
        <li>Fork the repository and clone it.</li>
        <li>Install dependencies with <code>npm install</code>.</li>
        <li>Create a branch for your change (Ship/Show/Ask as needed).</li>
        <li>Make your changes, ensure the project builds and runs.</li>
        <li>Commit with Conventional Commits format.</li>
        <li>Push and open a Pull Request if applicable.</li>
      </ol>
    </section>
  </div>
</template>
