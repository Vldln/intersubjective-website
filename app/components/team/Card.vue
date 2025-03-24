<script setup lang="ts">
defineProps<{
  item: {
    title: string;
    image: string;
    link: string;
    position: string;
    status: string;
  };
}>();
const img = useImage();
</script>

<template>
  <NuxtLink
    :aria-label="item.title + ' team member link'"
    :to="item.link"
    class="group cursor-pointer"
  >
    <NuxtImg
      :placeholder="img(`${item.image}`)"
      width="1536"
      :alt="item.title + ' team member image'"
      class="h-40 w-40 aspect-square rounded-full object-cover transition-all duration-300 hover:scale-105 mx-auto mb-4 border-4 border-white/10 border"
      :src="item.image"
      :aria-label="item.title + ' team member image'"
    />
    <div class="text-center font-bold text-lg mb-2">
      {{ item.title }}
    </div>
    <div class="text-center">
      {{ item.position }}
    </div>
  </NuxtLink>
</template>
