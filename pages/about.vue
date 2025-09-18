<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <header class="border-b border-border bg-card">
      <div class="container mx-auto px-4 py-6">
        <div class="flex items-center justify-between">
          <Logo />
          <nav class="flex items-center gap-4">
            <NuxtLink to="/" class="text-sm font-medium hover:text-primary">
              Home
            </NuxtLink>
            <NuxtLink to="/about" class="text-sm font-medium text-primary">
              About
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <!-- Hero Section -->
        <section class="text-center py-12">
          <h1 class="text-4xl font-bold tracking-tight mb-4">
            About This Starter Kit
          </h1>
          <p class="text-xl text-muted-foreground mb-8">
            Everything you need to build production-ready Nuxt 4 applications
          </p>
        </section>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="bg-card border border-border rounded-lg p-6">
            <div class="flex items-center gap-3 mb-4">
              <Icon
                name="mdi:language-typescript"
                size="24"
                class="text-blue-500"
              />
              <h3 class="text-lg font-semibold">TypeScript</h3>
            </div>
            <p class="text-muted-foreground mb-4">
              Strict TypeScript configuration with full type safety and
              excellent IDE support.
            </p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2">
                <Icon name="mdi:check" size="16" class="text-green-500" />
                Strict mode enabled
              </li>
              <li class="flex items-center gap-2">
                <Icon name="mdi:check" size="16" class="text-green-500" />
                Type checking in CI
              </li>
              <li class="flex items-center gap-2">
                <Icon name="mdi:check" size="16" class="text-green-500" />
                Auto-imports with types
              </li>
            </ul>
          </div>

          <div class="bg-card border border-border rounded-lg p-6">
            <div class="flex items-center gap-3 mb-4">
              <Icon name="mdi:tailwind" size="24" class="text-cyan-500" />
              <h3 class="text-lg font-semibold">Tailwind CSS v4</h3>
            </div>
            <p class="text-muted-foreground mb-4">
              Latest Tailwind CSS v4 with design tokens and tailwind-variants
              for component styling.
            </p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2">
                <Icon name="mdi:check" size="16" class="text-green-500" />
                Vite integration
              </li>
              <li class="flex items-center gap-2">
                <Icon name="mdi:check" size="16" class="text-green-500" />
                Design tokens
              </li>
              <li class="flex items-center gap-2">
                <Icon name="mdi:check" size="16" class="text-green-500" />
                Component variants
              </li>
            </ul>
          </div>

          <div class="bg-card border border-border rounded-lg p-6">
            <div class="flex items-center gap-3 mb-4">
              <Icon name="mdi:security" size="24" class="text-green-500" />
              <h3 class="text-lg font-semibold">Security</h3>
            </div>
            <p class="text-muted-foreground mb-4">
              Production-ready security headers and policies with nuxt-security.
            </p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2">
                <Icon name="mdi:check" size="16" class="text-green-500" />
                CSP headers
              </li>
              <li class="flex items-center gap-2">
                <Icon name="mdi:check" size="16" class="text-green-500" />
                HSTS enabled
              </li>
              <li class="flex items-center gap-2">
                <Icon name="mdi:check" size="16" class="text-green-500" />
                Security.txt
              </li>
            </ul>
          </div>

          <div class="bg-card border border-border rounded-lg p-6">
            <div class="flex items-center gap-3 mb-4">
              <Icon name="mdi:search-web" size="24" class="text-purple-500" />
              <h3 class="text-lg font-semibold">SEO</h3>
            </div>
            <p class="text-muted-foreground mb-4">
              Complete SEO setup with sitemap, robots.txt, and structured data.
            </p>
            <ul class="space-y-2 text-sm">
              <li class="flex items-center gap-2">
                <Icon name="mdi:check" size="16" class="text-green-500" />
                Meta tags
              </li>
              <li class="flex items-center gap-2">
                <Icon name="mdi:check" size="16" class="text-green-500" />
                Sitemap generation
              </li>
              <li class="flex items-center gap-2">
                <Icon name="mdi:check" size="16" class="text-green-500" />
                Schema.org
              </li>
            </ul>
          </div>
        </div>

        <!-- Tech Stack -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">Tech Stack</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              class="bg-card border border-border rounded-lg p-4 text-center"
            >
              <Icon name="logos:nuxt-icon" size="32" class="mx-auto mb-2" />
              <p class="text-sm font-medium">Nuxt 4</p>
            </div>
            <div
              class="bg-card border border-border rounded-lg p-4 text-center"
            >
              <Icon name="logos:vue" size="32" class="mx-auto mb-2" />
              <p class="text-sm font-medium">Vue 3</p>
            </div>
            <div
              class="bg-card border border-border rounded-lg p-4 text-center"
            >
              <Icon
                name="logos:typescript-icon"
                size="32"
                class="mx-auto mb-2"
              />
              <p class="text-sm font-medium">TypeScript</p>
            </div>
            <div
              class="bg-card border border-border rounded-lg p-4 text-center"
            >
              <Icon
                name="logos:tailwindcss-icon"
                size="32"
                class="mx-auto mb-2"
              />
              <p class="text-sm font-medium">Tailwind CSS</p>
            </div>
            <div
              class="bg-card border border-border rounded-lg p-4 text-center"
            >
              <Icon name="logos:vitejs" size="32" class="mx-auto mb-2" />
              <p class="text-sm font-medium">Vite</p>
            </div>
            <div
              class="bg-card border border-border rounded-lg p-4 text-center"
            >
              <Icon name="logos:eslint" size="32" class="mx-auto mb-2" />
              <p class="text-sm font-medium">ESLint</p>
            </div>
            <div
              class="bg-card border border-border rounded-lg p-4 text-center"
            >
              <Icon name="logos:prettier" size="32" class="mx-auto mb-2" />
              <p class="text-sm font-medium">Prettier</p>
            </div>
            <div
              class="bg-card border border-border rounded-lg p-4 text-center"
            >
              <Icon name="logos:pnpm" size="32" class="mx-auto mb-2" />
              <p class="text-sm font-medium">pnpm</p>
            </div>
          </div>
        </section>

        <!-- Getting Started -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">Getting Started</h2>
          <div class="bg-card border border-border rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-4">Quick Start</h3>
            <div class="space-y-4">
              <div>
                <h4 class="font-medium mb-2">1. Install dependencies</h4>
                <code class="block bg-muted p-3 rounded text-sm font-mono">
                  pnpm install
                </code>
              </div>
              <div>
                <h4 class="font-medium mb-2">2. Start development server</h4>
                <code class="block bg-muted p-3 rounded text-sm font-mono">
                  pnpm dev
                </code>
              </div>
              <div>
                <h4 class="font-medium mb-2">3. Build for production</h4>
                <code class="block bg-muted p-3 rounded text-sm font-mono">
                  pnpm build
                </code>
              </div>
            </div>
          </div>
        </section>

        <!-- Available Scripts -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6">Available Scripts</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-card border border-border rounded-lg p-4">
              <h4 class="font-semibold mb-2">Development</h4>
              <ul class="space-y-1 text-sm text-muted-foreground">
                <li>
                  <code class="bg-muted px-2 py-1 rounded text-xs"
                    >pnpm dev</code
                  >
                  - Start dev server
                </li>
                <li>
                  <code class="bg-muted px-2 py-1 rounded text-xs"
                    >pnpm build</code
                  >
                  - Build for production
                </li>
                <li>
                  <code class="bg-muted px-2 py-1 rounded text-xs"
                    >pnpm preview</code
                  >
                  - Preview production build
                </li>
              </ul>
            </div>
            <div class="bg-card border border-border rounded-lg p-4">
              <h4 class="font-semibold mb-2">Code Quality</h4>
              <ul class="space-y-1 text-sm text-muted-foreground">
                <li>
                  <code class="bg-muted px-2 py-1 rounded text-xs"
                    >pnpm lint</code
                  >
                  - Run ESLint
                </li>
                <li>
                  <code class="bg-muted px-2 py-1 rounded text-xs"
                    >pnpm lint:fix</code
                  >
                  - Fix ESLint issues
                </li>
                <li>
                  <code class="bg-muted px-2 py-1 rounded text-xs"
                    >pnpm typecheck</code
                  >
                  - Type check
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="border-t border-border bg-card mt-16">
      <div class="container mx-auto px-4 py-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <Logo :show-text="false" size="20" />
            <span class="text-sm text-muted-foreground">
              Built with Nuxt 4 & Tailwind CSS
            </span>
          </div>
          <div class="flex items-center gap-4">
            <NuxtLink
              to="/"
              class="text-sm text-muted-foreground hover:text-primary"
            >
              Home
            </NuxtLink>
            <a
              href="https://github.com"
              class="text-sm text-muted-foreground hover:text-primary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
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
