<template>
  <div>
    <!-- Hero Section -->
    <section class="py-12 text-center">
      <h1 class="mb-4 text-4xl font-bold tracking-tight">Nuxt 4 Starter Kit</h1>
      <p class="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
        A production-grade starter kit with TypeScript, Tailwind CSS v4, and
        modern tooling
      </p>
      <div class="flex gap-4 justify-center">
        <Button size="lg">
          <Icon name="mdi:rocket-launch" class="mr-2" />
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          <Icon name="mdi:github" class="mr-2" />
          View on GitHub
        </Button>
      </div>
    </section>

    <!-- Demo Cards -->
    <div class="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
      <!-- Icons Demo -->
      <div class="p-6 rounded-lg border bg-card border-border">
        <h3 class="flex gap-2 items-center mb-4 text-lg font-semibold">
          <Icon name="mdi:palette" class="text-primary" />
          Icons
        </h3>
        <div class="space-y-3">
          <div class="flex gap-3 items-center">
            <Icon name="mdi:home" size="20" class="text-primary" />
            <span class="text-sm">Iconify Icon</span>
          </div>
          <div class="flex gap-3 items-center">
            <Icon name="logos:nuxt-icon" size="20" class="text-primary" />
            <span class="text-sm">Nuxt Logo</span>
          </div>
          <div class="flex gap-3 items-center">
            <Icon name="mdi:heart" size="20" class="text-red-500" />
            <span class="text-sm">Colored Icon</span>
          </div>
        </div>
      </div>

      <!-- Images Demo -->
      <div class="p-6 rounded-lg border bg-card border-border">
        <h3 class="flex gap-2 items-center mb-4 text-lg font-semibold">
          <Icon name="mdi:image" class="text-primary" />
          Images
        </h3>
        <div class="space-y-3">
          <div>
            <NuxtImg
              src="/nuxt.svg"
              alt="Nuxt Logo"
              width="120"
              height="40"
              class="mx-auto"
            />
            <p class="mt-2 text-xs text-center text-muted-foreground">
              Local Image
            </p>
          </div>
          <div>
            <NuxtImg
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=100&fit=crop"
              alt="Code"
              width="200"
              height="100"
              class="mx-auto rounded"
              sizes="sm:200px md:300px lg:400px"
            />
            <p class="mt-2 text-xs text-center text-muted-foreground">
              Remote Image
            </p>
          </div>
        </div>
      </div>

      <!-- Tailwind Variants Demo -->
      <div class="p-6 rounded-lg border bg-card border-border">
        <h3 class="flex gap-2 items-center mb-4 text-lg font-semibold">
          <Icon name="mdi:palette-advanced" class="text-primary" />
          Components
        </h3>
        <div class="space-y-3">
          <div class="flex flex-wrap gap-2">
            <Button size="sm">Default</Button>
            <Button variant="secondary" size="sm">Secondary</Button>
            <Button variant="outline" size="sm">Outline</Button>
            <Button variant="ghost" size="sm">Ghost</Button>
          </div>
          <div class="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Error</Badge>
          </div>
        </div>
      </div>

      <!-- VueUse Demo -->
      <div class="p-6 rounded-lg border bg-card border-border">
        <h3 class="flex gap-2 items-center mb-4 text-lg font-semibold">
          <Icon name="mdi:mouse" class="text-primary" />
          VueUse
        </h3>
        <div class="space-y-2">
          <p class="text-sm">
            Mouse position:
            <span class="font-mono">{{ mouse.x }}, {{ mouse.y }}</span>
          </p>
          <p class="text-sm">
            Online:
            <Badge :variant="isOnline ? 'success' : 'destructive'">
              {{ isOnline ? "Online" : "Offline" }}
            </Badge>
          </p>
          <p class="text-sm">
            Dark mode:
            <Badge :variant="isDark ? 'secondary' : 'default'">
              {{ isDark ? "Dark" : "Light" }}
            </Badge>
          </p>
        </div>
      </div>

      <!-- Performance Demo -->
      <div class="p-6 rounded-lg border bg-card border-border">
        <h3 class="flex gap-2 items-center mb-4 text-lg font-semibold">
          <Icon name="mdi:speedometer" class="text-primary" />
          Performance
        </h3>
        <div class="space-y-3">
          <div>
            <h4 class="mb-1 text-sm font-semibold">Build Tools</h4>
            <div class="space-y-1">
              <Badge variant="info" size="sm">Vite</Badge>
              <Badge variant="info" size="sm">TypeScript</Badge>
              <Badge variant="info" size="sm">ESLint</Badge>
              <Badge variant="info" size="sm">Prettier</Badge>
            </div>
          </div>
          <div>
            <h4 class="mb-1 text-sm font-semibold">Pre-commit Hooks</h4>
            <div class="space-y-1">
              <Badge variant="success" size="sm">Husky</Badge>
              <Badge variant="success" size="sm">lint-staged</Badge>
            </div>
          </div>
        </div>
      </div>

      <!-- Health Check -->
      <div class="p-6 rounded-lg border bg-card border-border">
        <h3 class="flex gap-2 items-center mb-4 text-lg font-semibold">
          <Icon name="mdi:heart-pulse" class="text-primary" />
          Health Check
        </h3>
        <div class="space-y-3">
          <div>
            <h4 class="mb-1 text-sm font-semibold">Server Status</h4>
            <Badge variant="success" size="sm">Running</Badge>
          </div>
          <div>
            <h4 class="mb-1 text-sm font-semibold">API Endpoint</h4>
            <NuxtLink
              to="/api/health"
              class="text-sm text-primary hover:underline"
            >
              /api/health
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Home page using default layout
definePageMeta({
  layout: "default",
});

// VueUse composables (auto-imported)
const { x: mouseX, y: mouseY } = useMouse();
const isOnline = useOnline();
const isDark = useDark();

// Computed properties
const mouse = computed(() => ({
  x: mouseX.value,
  y: mouseY.value,
}));

// SEO meta
useSeoMeta({
  title: "Nuxt 4 Starter Kit - Production Ready",
  ogTitle: "Nuxt 4 Starter Kit - Production Ready",
  description:
    "A production-grade Nuxt 4 starter kit with TypeScript, Tailwind CSS v4, and modern tooling",
  ogDescription:
    "A production-grade Nuxt 4 starter kit with TypeScript, Tailwind CSS v4, and modern tooling",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
});
</script>
