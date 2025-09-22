<template>
  <div>
    <h1 class="mb-6 text-2xl font-bold">Sign In</h1>

    <form class="space-y-4">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          class="px-3 py-2 w-full rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label for="password" class="block mb-2 text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          class="px-3 py-2 w-full rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter your password"
        />
      </div>

      <div class="flex justify-between items-center">
        <label class="flex items-center">
          <input type="checkbox" class="mr-2" />
          <span class="text-sm">Remember me</span>
        </label>
        <NuxtLink
          to="/auth/forgot-password"
          class="text-sm text-primary hover:underline"
        >
          Forgot password?
        </NuxtLink>
      </div>

      <Button type="submit" class="w-full">
        <Icon name="mdi:login" class="mr-2" />
        Sign In
      </Button>
    </form>

    <div class="mt-6 text-center">
      <p class="text-sm text-muted-foreground">
        Don't have an account?
        <NuxtLink to="/auth/register" class="text-primary hover:underline">
          Sign up
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Login page using auth layout
definePageMeta({
  layout: "auth",
});

// SEO meta
useSeoMeta({
  title: "Sign In - Nuxt 4 Starter Kit",
  description: "Sign in to your account to access all features",
});
</script>
