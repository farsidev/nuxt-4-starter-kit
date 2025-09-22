<template>
  <div>
    <div class="mb-8">
      <h1 class="mb-2 text-3xl font-bold">Admin Dashboard</h1>
      <p class="text-muted-foreground">
        Welcome to the admin panel. Manage your application from here.
      </p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
      <div class="p-6 rounded-lg border bg-card border-border">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-sm font-medium text-muted-foreground">Total Users</p>
            <p class="text-2xl font-bold">1,234</p>
          </div>
          <Icon name="mdi:account-group" size="24" class="text-primary" />
        </div>
        <div class="mt-4">
          <Badge variant="success" size="sm">
            <Icon name="mdi:trending-up" size="14" class="mr-1" />
            +12% from last month
          </Badge>
        </div>
      </div>

      <div class="p-6 rounded-lg border bg-card border-border">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-sm font-medium text-muted-foreground">
              Active Sessions
            </p>
            <p class="text-2xl font-bold">89</p>
          </div>
          <Icon name="mdi:account-check" size="24" class="text-green-500" />
        </div>
        <div class="mt-4">
          <Badge variant="info" size="sm">
            <Icon name="mdi:clock" size="14" class="mr-1" />
            Real-time
          </Badge>
        </div>
      </div>

      <div class="p-6 rounded-lg border bg-card border-border">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-sm font-medium text-muted-foreground">Revenue</p>
            <p class="text-2xl font-bold">$12,345</p>
          </div>
          <Icon name="mdi:currency-usd" size="24" class="text-green-500" />
        </div>
        <div class="mt-4">
          <Badge variant="success" size="sm">
            <Icon name="mdi:trending-up" size="14" class="mr-1" />
            +8% from last month
          </Badge>
        </div>
      </div>

      <div class="p-6 rounded-lg border bg-card border-border">
        <div class="flex justify-between items-center">
          <div>
            <p class="text-sm font-medium text-muted-foreground">
              System Health
            </p>
            <p class="text-2xl font-bold">99.9%</p>
          </div>
          <Icon name="mdi:heart-pulse" size="24" class="text-green-500" />
        </div>
        <div class="mt-4">
          <Badge variant="success" size="sm">
            <Icon name="mdi:check-circle" size="14" class="mr-1" />
            All systems operational
          </Badge>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="p-6 rounded-lg border bg-card border-border">
      <h2 class="mb-4 text-xl font-semibold">Recent Activity</h2>
      <div class="space-y-4">
        <div class="flex gap-4 items-center p-3 rounded-lg bg-muted/50">
          <Icon name="mdi:account-plus" size="20" class="text-green-500" />
          <div class="flex-1">
            <p class="font-medium">New user registered</p>
            <p class="text-sm text-muted-foreground">
              john.doe@example.com joined the platform
            </p>
          </div>
          <span class="text-sm text-muted-foreground">2 minutes ago</span>
        </div>

        <div class="flex gap-4 items-center p-3 rounded-lg bg-muted/50">
          <Icon name="mdi:login" size="20" class="text-blue-500" />
          <div class="flex-1">
            <p class="font-medium">User login</p>
            <p class="text-sm text-muted-foreground">
              jane.smith@example.com signed in
            </p>
          </div>
          <span class="text-sm text-muted-foreground">5 minutes ago</span>
        </div>

        <div class="flex gap-4 items-center p-3 rounded-lg bg-muted/50">
          <Icon name="mdi:settings" size="20" class="text-orange-500" />
          <div class="flex-1">
            <p class="font-medium">System update</p>
            <p class="text-sm text-muted-foreground">
              Application updated to version 2.1.0
            </p>
          </div>
          <span class="text-sm text-muted-foreground">1 hour ago</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Admin dashboard page using admin layout
definePageMeta({
  layout: "admin",
});

// SEO meta
useSeoMeta({
  title: "Admin Dashboard - Nuxt 4 Starter Kit",
  description: "Administrative dashboard for managing the application",
});
</script>
