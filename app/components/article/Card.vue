<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="path"
    external
    target="_blank"
    :aria-label="title"
    class="flex cursor-pointer flex-col gap-2 group"
  >
    <div class="flex flex-col">
      <h3 class="text-lg font-semibold">
        {{ title }}
      </h3>
      <div
        class="text-sm flex items-center gap-1 group-hover:text-purple-600 transition-all duration-500"
      >
        {{ $t("article.Read") }}
        <div
          class="flex items-center justify-center rounded-full border border-transparent p-1 backdrop-blur-md"
        >
          <UIcon name="heroicons:arrow-right" class="size-3" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
