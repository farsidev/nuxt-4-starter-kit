<template>
  <div class="flex items-center gap-2">
    <Icon name="logos:nuxt-icon" :size="size" class="text-primary" />
    <span v-if="showText" class="font-bold text-lg">Nuxt 4</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: string | number;
  showText?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "24",
  showText: true,
});
</script>
