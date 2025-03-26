<script setup lang="ts">
import type { ContentEnCollectionItem } from "@nuxt/content";

// useScriptPlausibleAnalytics({
//   domain: "canvas.hrcd.fr",
//   scriptInput: {
//     src: "https://analytics.hrcd.fr/js/script.js",
//   },
// });

const { page, isWriting } = defineProps<{
  page: ContentEnCollectionItem;
  isWriting: boolean;
}>();

const route = useRoute();
const { link, seo } = useAppConfig();

const pageSEO = computed(() => ({
  title: isWriting ? page?.title : page?.title || seo.title,
  description: isWriting
    ? page?.description
    : page?.description || seo.description,
}));

const getTitleTemplate = (title: string | undefined) => {
  if (route.path === "/") return title || `${seo.title}`;
  if (isWriting) return title;
  return `${title} | ${seo.title}`;
};

useSeoMeta({
  ogSiteName: seo.title,
  ogTitle: pageSEO.value.title,
  ogDescription: pageSEO.value.description,
  ogType: isWriting ? "article" : "website",
  ogUrl: seo.url,
  title: pageSEO.value.title,
  description: pageSEO.value.description,
  twitterTitle: pageSEO.value.title,
  twitterDescription: pageSEO.value.description,
  twitterCard: "summary_large_image",
});

useHead({
  title: pageSEO.value.title,
  titleTemplate: getTitleTemplate as (
    title: string | undefined
  ) => string | null,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "charset", content: "utf-8" },
    { name: "robots", content: "index, follow" },
    { name: "color-scheme", content: "light dark" },
  ],
  link,
});

defineOgImageComponent("Main", {
  title: pageSEO.value.title,
  description: pageSEO.value.description,
  width: 1200,
  height: 630,
  alt: pageSEO.value.title,
});
</script>

<template>
  <slot />
</template>
