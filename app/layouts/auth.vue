<template>
  <div class="flex justify-center items-center min-h-screen bg-background">
    <div class="w-full max-w-md">
      <!-- Auth Header -->
      <div class="mb-8 text-center">
        <div class="flex gap-2 justify-center items-center mb-4">
          <Icon name="logos:nuxt-icon" size="32" class="text-primary" />
          <span class="text-2xl font-bold">Nuxt 4</span>
        </div>
        <p class="text-muted-foreground">
          {{ authTitle }}
        </p>
      </div>

      <!-- Auth Content -->
      <div class="p-8 rounded-lg border shadow-sm bg-card border-border">
        <slot />
      </div>

      <!-- Auth Footer -->
      <div class="mt-6 text-center">
        <p class="text-sm text-muted-foreground">
          <NuxtLink to="/" class="transition-colors hover:text-primary">
            ← Back to Home
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Auth layout for login, register, and other authentication pages
// This layout provides a centered, focused experience for auth flows

// Get the current route to determine the auth title
const route = useRoute();

const authTitle = computed(() => {
  if (route.path.includes("/login")) return "Sign in to your account";
  if (route.path.includes("/register")) return "Create your account";
  if (route.path.includes("/forgot-password")) return "Reset your password";
  return "Authentication";
});
</script>
