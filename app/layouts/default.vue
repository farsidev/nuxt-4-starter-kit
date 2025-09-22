<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <header class="border-b border-border bg-card">
      <div class="container px-4 py-6 mx-auto">
        <div class="flex justify-between items-center">
          <div class="flex gap-2 items-center">
            <Icon name="logos:nuxt-icon" size="24" class="text-primary" />
            <span class="text-lg font-bold">Nuxt 4</span>
          </div>
          <nav class="flex gap-4 items-center">
            <NuxtLink
              to="/"
              class="text-sm font-medium transition-colors hover:text-primary"
              :class="{ 'text-primary': $route.path === '/' }"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="text-sm font-medium transition-colors hover:text-primary"
              :class="{ 'text-primary': $route.path === '/about' }"
            >
              About
            </NuxtLink>
            <NuxtLink
              to="/auth/login"
              class="text-sm font-medium transition-colors hover:text-primary"
              :class="{ 'text-primary': $route.path.startsWith('/auth') }"
            >
              Auth
            </NuxtLink>
            <NuxtLink
              to="/admin"
              class="text-sm font-medium transition-colors hover:text-primary"
              :class="{ 'text-primary': $route.path.startsWith('/admin') }"
            >
              Admin
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container px-4 py-8 mx-auto">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="mt-16 border-t border-border bg-card">
      <div class="container px-4 py-8 mx-auto">
        <div class="flex justify-between items-center">
          <div class="flex gap-4 items-center">
            <Icon name="logos:nuxt-icon" size="20" class="text-primary" />
            <span class="text-sm text-muted-foreground">
              Built with Nuxt 4 & Tailwind CSS
            </span>
          </div>
          <div class="flex gap-4 items-center">
            <NuxtLink
              to="/about"
              class="text-sm transition-colors text-muted-foreground hover:text-primary"
            >
              About
            </NuxtLink>
            <a
              href="https://github.com"
              class="text-sm transition-colors text-muted-foreground hover:text-primary"
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
// Default layout for most pages
// This layout includes header, main content area, and footer
</script>
