<script setup lang="ts">
defineProps<{
  item: {
    title: string;
    release: string;
    image: string;
    link: string;
  };
}>();
const img = useImage();
</script>

<template>
  <NuxtLink
    :aria-label="item.title + ' project link'"
    :to="item.link"
    class="group relative flex cursor-pointer flex-col gap-1 rounded-lg bg-zinc-900/80 p-1"
  >
    <div class="flex h-56 justify-center overflow-hidden rounded-lg">
      <NuxtImg
        :placeholder="img(`${item.image}`)"
        width="1536"
        :alt="item.title + ' project image'"
        class="h-full rounded-lg object-cover transition-all duration-300 hover:scale-105"
        :src="item.image"
        :aria-label="item.title + ' project image'"
      />
    </div>
    <div class="absolute bottom-0 flex w-full justify-center">
      <div class="rounded-t-lg px-4 py-[5px] backdrop-blur-md sm:w-2/3">
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
            class="flex items-center justify-center rounded-full border border-transparent p-1 backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:border-white/10"
          >
            <UIcon name="heroicons:arrow-right" class="size-3 text-white" />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
