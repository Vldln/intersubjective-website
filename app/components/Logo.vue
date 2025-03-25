<script setup lang="ts">
const { appName } = useAppConfig();

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "8",
  },
});
</script>

<template>
  <NuxtLinkLocale
    to="/"
    class="flex shrink-0 items-center"
    aria-label="Go back to home page"
  >
    <NuxtImg
      src="/logo.svg"
      :class="`size-${size}`"
      class="transition-all duration-300 hover:scale-105"
    />
    <span v-if="isText" class="ml-1 text-xs font-semibold">
      {{ appName }}
    </span>
  </NuxtLinkLocale>
</template>
