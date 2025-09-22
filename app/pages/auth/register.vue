<template>
  <div>
    <h1 class="mb-6 text-2xl font-bold">Create Account</h1>

    <form class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="firstName" class="block mb-2 text-sm font-medium">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            class="px-3 py-2 w-full rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="John"
          />
        </div>
        <div>
          <label for="lastName" class="block mb-2 text-sm font-medium">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            class="px-3 py-2 w-full rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label for="email" class="block mb-2 text-sm font-medium">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          class="px-3 py-2 w-full rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="john@example.com"
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
          placeholder="Create a strong password"
        />
      </div>

      <div>
        <label for="confirmPassword" class="block mb-2 text-sm font-medium">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          class="px-3 py-2 w-full rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Confirm your password"
        />
      </div>

      <div>
        <label class="flex items-start">
          <input type="checkbox" class="mt-1 mr-2" />
          <span class="text-sm">
            I agree to the
            <a href="#" class="text-primary hover:underline"
              >Terms of Service</a
            >
            and
            <a href="#" class="text-primary hover:underline">Privacy Policy</a>
          </span>
        </label>
      </div>

      <Button type="submit" class="w-full">
        <Icon name="mdi:account-plus" class="mr-2" />
        Create Account
      </Button>
    </form>

    <div class="mt-6 text-center">
      <p class="text-sm text-muted-foreground">
        Already have an account?
        <NuxtLink to="/auth/login" class="text-primary hover:underline">
          Sign in
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Register page using auth layout
definePageMeta({
  layout: "auth",
});

// SEO meta
useSeoMeta({
  title: "Create Account - Nuxt 4 Starter Kit",
  description: "Create a new account to get started with our platform",
});
</script>
