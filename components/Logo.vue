<script setup lang="ts">
const { appName } = useAppConfig()

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <NuxtLinkLocale
    to="/"
    class="flex shrink-0 items-center"
    aria-label="Go back to home page"
  >
    <NuxtImg
      src="/logo.svg"
      class="transition-all duration-300 scale-250 opacity-85 hover:opacity-100 hover:scale-280"
    />
    <span
      v-if="isText"
      class="ml-1 text-xs font-semibold"
    >
      {{ appName }}
    </span>
  </NuxtLinkLocale>
</template>
