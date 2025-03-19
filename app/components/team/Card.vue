<script setup lang="ts">
defineProps<{
  team: {
    name: string;
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
    :aria-label="team.name + ' team member link'"
    :to="team.link"
    target="_blank"
    class="group cursor-pointer"
  >
    <NuxtImg
      :placeholder="img(`${team.image}`)"
      width="1536"
      :alt="team.name + ' team member image'"
      class="h-40 w-40 aspect-square rounded-full object-cover transition-all duration-300 hover:scale-105 mx-auto mb-4"
      :src="team.image"
      :aria-label="team.name + ' team member image'"
    />
    <div class="text-center font-bold text-lg mb-2">
      {{ team.name }}
    </div>
    <div class="text-center">
      {{ team.position }}
    </div>
  </NuxtLink>
</template>
