<script setup lang="ts">
defineProps<{
  item: {
    title: string;
    release: string;
    image: string;
    link: string;
    short: string;
  };
}>();
const img = useImage();
</script>

<template>
  <NuxtLink
    :aria-label="item.title + ' project link'"
    :to="item.link"
    class="group relative flex cursor-pointer flex-col gap-1 rounded-lg bg-card/10 p-1"
  >
    <div class="flex h-70 justify-center overflow-hidden rounded-lg">
      <NuxtImg
        :placeholder="`${item.image ?? `project_placeholder.webp`}`"
        width="1536"
        :alt="item.title + ' project image'"
        class="h-full rounded-lg object-cover transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0"
        :src="item.image"
        :aria-label="item.title + ' project image'"
      />
    </div>
    <div class="absolute bottom-0 flex w-full justify-center pl-2">
      <div class="rounded-lg px-4 py-[5px] backdrop-blur-md bg-card/30">
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2">
              <span
                class="whitespace-nowrap text-sm font-semibold text-white/90"
              >
                {{ item.title }}
              </span>
            </div>
          </div>
          <div
            class="flex items-center justify-center rounded-full border border-transparent p-1 backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:border-white/30"
          >
            <UIcon name="heroicons:arrow-right" class="size-3 text-white" />
          </div>
        </div>
        <div class="text-xs text-white/90 mb-2 h-16 overflow-hidden">
          {{ item.short.split(" ").slice(0, 20).join(" ") + "..." }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
