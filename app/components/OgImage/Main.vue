<script setup lang="ts">
const { seo } = useAppConfig();

withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title: "Home",
    description:
      "Intersubjective is a web3 and sociotech R&D company based in the Netherlands.",
  }
);
</script>

<template>
  <div
    class="relative h-full w-full flex items-center justify-center bg-neutral-900 text-white"
    :style="{
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(${seo.url}hero.png)`,
    }"
  >
    <div class="relative z-10 flex flex-col justify-between w-full h-full">
      <div class="flex flex-col gap-3 justify-center">
        <p class="text-2xl pt-10 px-20 font-bold mb-0 text-white capitalize">
          <img
            :src="`${seo.url}logo.svg`"
            alt="Intersubjective"
            class="size-10 mr-2"
          />
          <span class="text-primary text-4xl">Intersubjective</span>
        </p>
        <h1
          class="text-[60px] pt-20 px-20 pb-8 text-white font-black text-left text-4xl"
        >
          {{ title }}
        </h1>
        <p class="text-2xl pb-10 px-20 font-bold mb-0 text-white capitalize">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
