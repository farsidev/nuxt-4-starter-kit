<template>
  <div>
    <div class="text-center">
      <h1 class="mb-4 text-6xl font-bold text-primary">404</h1>
      <h2 class="mb-4 text-2xl font-semibold">Page Not Found</h2>
      <p class="mx-auto mb-8 max-w-md text-muted-foreground">
        Sorry, we couldn't find the page you're looking for. It might have been
        moved, deleted, or you entered the wrong URL.
      </p>

      <div class="flex gap-4 justify-center">
        <Button @click="$router.back()">
          <Icon name="mdi:arrow-left" class="mr-2" />
          Go Back
        </Button>
        <Button variant="outline" @click="$router.push('/')">
          <Icon name="mdi:home" class="mr-2" />
          Go Home
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 404 page using minimal layout
definePageMeta({
  layout: "minimal",
});

// SEO meta
useSeoMeta({
  title: "404 - Page Not Found",
  description: "The page you are looking for could not be found",
  robots: "noindex, nofollow",
});

// Set status code for 404
setResponseStatus(404);
</script>
