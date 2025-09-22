<template>
  <div class="min-h-screen bg-background">
    <!-- Admin Header -->
    <header class="border-b border-border bg-card">
      <div class="container px-4 py-4 mx-auto">
        <div class="flex justify-between items-center">
          <div class="flex gap-2 items-center">
            <Icon name="mdi:shield-account" size="24" class="text-primary" />
            <span class="text-lg font-bold">Admin Panel</span>
          </div>
          <div class="flex gap-4 items-center">
            <Badge variant="warning" size="sm">
              <Icon name="mdi:lock" size="14" class="mr-1" />
              Admin Only
            </Badge>
            <NuxtLink
              to="/"
              class="text-sm font-medium transition-colors hover:text-primary"
            >
              <Icon name="mdi:home" size="16" class="mr-1" />
              Back to Site
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <div class="flex">
      <!-- Admin Sidebar -->
      <aside class="w-64 min-h-screen border-r bg-card border-border">
        <nav class="p-4 space-y-2">
          <NuxtLink
            to="/admin"
            class="flex gap-3 items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-muted"
            :class="{ 'bg-muted text-primary': $route.path === '/admin' }"
          >
            <Icon name="mdi:view-dashboard" size="18" />
            Dashboard
          </NuxtLink>
          <NuxtLink
            to="/admin/users"
            class="flex gap-3 items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-muted"
            :class="{
              'bg-muted text-primary': $route.path.startsWith('/admin/users'),
            }"
          >
            <Icon name="mdi:account-group" size="18" />
            Users
          </NuxtLink>
          <NuxtLink
            to="/admin/settings"
            class="flex gap-3 items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-muted"
            :class="{
              'bg-muted text-primary':
                $route.path.startsWith('/admin/settings'),
            }"
          >
            <Icon name="mdi:cog" size="18" />
            Settings
          </NuxtLink>
          <NuxtLink
            to="/admin/analytics"
            class="flex gap-3 items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors hover:bg-muted"
            :class="{
              'bg-muted text-primary':
                $route.path.startsWith('/admin/analytics'),
            }"
          >
            <Icon name="mdi:chart-line" size="18" />
            Analytics
          </NuxtLink>
        </nav>
      </aside>

      <!-- Admin Main Content -->
      <main class="flex-1 p-6">
        <div class="mx-auto max-w-7xl">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// Admin layout for administrative pages
// This layout provides a sidebar navigation and admin-specific styling

// SEO meta for admin pages
useSeoMeta({
  title: "Admin Panel - Nuxt 4 Starter Kit",
  robots: "noindex, nofollow", // Prevent indexing of admin pages
});
</script>
