<template>
  <div class="mx-auto max-w-4xl">
    <!-- Hero Section -->
    <section class="py-12 text-center">
      <h1 class="mb-4 text-4xl font-bold tracking-tight">
        About This Starter Kit
      </h1>
      <p class="mb-8 text-xl text-muted-foreground">
        Everything you need to build production-ready Nuxt 4 applications
      </p>
    </section>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
      <div class="p-6 rounded-lg border bg-card border-border">
        <div class="flex gap-3 items-center mb-4">
          <Icon
            name="mdi:language-typescript"
            size="24"
            class="text-blue-500"
          />
          <h3 class="text-lg font-semibold">TypeScript</h3>
        </div>
        <p class="mb-4 text-muted-foreground">
          Strict TypeScript configuration with full type safety and excellent
          IDE support.
        </p>
        <ul class="space-y-2 text-sm">
          <li class="flex gap-2 items-center">
            <Icon name="mdi:check" size="16" class="text-green-500" />
            Strict mode enabled
          </li>
          <li class="flex gap-2 items-center">
            <Icon name="mdi:check" size="16" class="text-green-500" />
            Type checking in CI
          </li>
          <li class="flex gap-2 items-center">
            <Icon name="mdi:check" size="16" class="text-green-500" />
            Auto-imports with types
          </li>
        </ul>
      </div>

      <div class="p-6 rounded-lg border bg-card border-border">
        <div class="flex gap-3 items-center mb-4">
          <Icon name="mdi:tailwind" size="24" class="text-cyan-500" />
          <h3 class="text-lg font-semibold">Tailwind CSS v4</h3>
        </div>
        <p class="mb-4 text-muted-foreground">
          Latest Tailwind CSS v4 with design tokens and tailwind-variants for
          component styling.
        </p>
        <ul class="space-y-2 text-sm">
          <li class="flex gap-2 items-center">
            <Icon name="mdi:check" size="16" class="text-green-500" />
            Vite integration
          </li>
          <li class="flex gap-2 items-center">
            <Icon name="mdi:check" size="16" class="text-green-500" />
            Design tokens
          </li>
          <li class="flex gap-2 items-center">
            <Icon name="mdi:check" size="16" class="text-green-500" />
            Component variants
          </li>
        </ul>
      </div>

      <div class="p-6 rounded-lg border bg-card border-border">
        <div class="flex gap-3 items-center mb-4">
          <Icon name="mdi:security" size="24" class="text-green-500" />
          <h3 class="text-lg font-semibold">Security</h3>
        </div>
        <p class="mb-4 text-muted-foreground">
          Production-ready security headers and policies with nuxt-security.
        </p>
        <ul class="space-y-2 text-sm">
          <li class="flex gap-2 items-center">
            <Icon name="mdi:check" size="16" class="text-green-500" />
            CSP headers
          </li>
          <li class="flex gap-2 items-center">
            <Icon name="mdi:check" size="16" class="text-green-500" />
            HSTS enabled
          </li>
          <li class="flex gap-2 items-center">
            <Icon name="mdi:check" size="16" class="text-green-500" />
            Security.txt
          </li>
        </ul>
      </div>

      <div class="p-6 rounded-lg border bg-card border-border">
        <div class="flex gap-3 items-center mb-4">
          <Icon name="mdi:search-web" size="24" class="text-purple-500" />
          <h3 class="text-lg font-semibold">SEO</h3>
        </div>
        <p class="mb-4 text-muted-foreground">
          Complete SEO setup with sitemap, robots.txt, and structured data.
        </p>
        <ul class="space-y-2 text-sm">
          <li class="flex gap-2 items-center">
            <Icon name="mdi:check" size="16" class="text-green-500" />
            Meta tags
          </li>
          <li class="flex gap-2 items-center">
            <Icon name="mdi:check" size="16" class="text-green-500" />
            Sitemap generation
          </li>
          <li class="flex gap-2 items-center">
            <Icon name="mdi:check" size="16" class="text-green-500" />
            Schema.org
          </li>
        </ul>
      </div>
    </div>

    <!-- Tech Stack -->
    <section class="mb-12">
      <h2 class="mb-6 text-2xl font-bold">Tech Stack</h2>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div class="p-4 text-center rounded-lg border bg-card border-border">
          <Icon name="logos:nuxt-icon" size="32" class="mx-auto mb-2" />
          <p class="text-sm font-medium">Nuxt 4</p>
        </div>
        <div class="p-4 text-center rounded-lg border bg-card border-border">
          <Icon name="logos:vue" size="32" class="mx-auto mb-2" />
          <p class="text-sm font-medium">Vue 3</p>
        </div>
        <div class="p-4 text-center rounded-lg border bg-card border-border">
          <Icon name="logos:typescript-icon" size="32" class="mx-auto mb-2" />
          <p class="text-sm font-medium">TypeScript</p>
        </div>
        <div class="p-4 text-center rounded-lg border bg-card border-border">
          <Icon name="logos:tailwindcss-icon" size="32" class="mx-auto mb-2" />
          <p class="text-sm font-medium">Tailwind CSS</p>
        </div>
        <div class="p-4 text-center rounded-lg border bg-card border-border">
          <Icon name="logos:vitejs" size="32" class="mx-auto mb-2" />
          <p class="text-sm font-medium">Vite</p>
        </div>
        <div class="p-4 text-center rounded-lg border bg-card border-border">
          <Icon name="logos:eslint" size="32" class="mx-auto mb-2" />
          <p class="text-sm font-medium">ESLint</p>
        </div>
        <div class="p-4 text-center rounded-lg border bg-card border-border">
          <Icon name="logos:prettier" size="32" class="mx-auto mb-2" />
          <p class="text-sm font-medium">Prettier</p>
        </div>
        <div class="p-4 text-center rounded-lg border bg-card border-border">
          <Icon name="logos:pnpm" size="32" class="mx-auto mb-2" />
          <p class="text-sm font-medium">pnpm</p>
        </div>
      </div>
    </section>

    <!-- Getting Started -->
    <section class="mb-12">
      <h2 class="mb-6 text-2xl font-bold">Getting Started</h2>
      <div class="p-6 rounded-lg border bg-card border-border">
        <h3 class="mb-4 text-lg font-semibold">Quick Start</h3>
        <div class="space-y-4">
          <div>
            <h4 class="mb-2 font-medium">1. Install dependencies</h4>
            <code class="block p-3 font-mono text-sm rounded bg-muted">
              pnpm install
            </code>
          </div>
          <div>
            <h4 class="mb-2 font-medium">2. Start development server</h4>
            <code class="block p-3 font-mono text-sm rounded bg-muted">
              pnpm dev
            </code>
          </div>
          <div>
            <h4 class="mb-2 font-medium">3. Build for production</h4>
            <code class="block p-3 font-mono text-sm rounded bg-muted">
              pnpm build
            </code>
          </div>
        </div>
      </div>
    </section>

    <!-- Available Scripts -->
    <section class="mb-12">
      <h2 class="mb-6 text-2xl font-bold">Available Scripts</h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="p-4 rounded-lg border bg-card border-border">
          <h4 class="mb-2 font-semibold">Development</h4>
          <ul class="space-y-1 text-sm text-muted-foreground">
            <li>
              <code class="px-2 py-1 text-xs rounded bg-muted">pnpm dev</code>
              - Start dev server
            </li>
            <li>
              <code class="px-2 py-1 text-xs rounded bg-muted">pnpm build</code>
              - Build for production
            </li>
            <li>
              <code class="px-2 py-1 text-xs rounded bg-muted"
                >pnpm preview</code
              >
              - Preview production build
            </li>
          </ul>
        </div>
        <div class="p-4 rounded-lg border bg-card border-border">
          <h4 class="mb-2 font-semibold">Code Quality</h4>
          <ul class="space-y-1 text-sm text-muted-foreground">
            <li>
              <code class="px-2 py-1 text-xs rounded bg-muted">pnpm lint</code>
              - Run ESLint
            </li>
            <li>
              <code class="px-2 py-1 text-xs rounded bg-muted"
                >pnpm lint:fix</code
              >
              - Fix ESLint issues
            </li>
            <li>
              <code class="px-2 py-1 text-xs rounded bg-muted"
                >pnpm typecheck</code
              >
              - Type check
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// About page using default layout
definePageMeta({
  layout: "default",
});

// SEO meta
useSeoMeta({
  title: "About - Nuxt 4 Starter Kit",
  ogTitle: "About - Nuxt 4 Starter Kit",
  description:
    "Learn about the Nuxt 4 starter kit features, tech stack, and how to get started",
  ogDescription:
    "Learn about the Nuxt 4 starter kit features, tech stack, and how to get started",
});
</script>
