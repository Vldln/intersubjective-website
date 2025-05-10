<script setup lang="ts">
// Используем более общий тип для page
const props = defineProps<{
  page: any;
  isProject?: boolean;
  isTeam?: boolean;
  isWriting?: boolean;
}>();

const route = useRoute();
const appConfig = useAppConfig();
const seo = appConfig.seo;
const baseUrl = seo.fields?.url?.default || 'https://intersubjective.space/';

const pageSEO = computed(() => ({
  title: props.isWriting ? props.page?.title : props.page?.title || seo.title,
  description: props.isWriting
    ? props.page?.description
    : props.page?.description || seo.description,
  // Используем изображение страницы, если оно есть, или соответствующее изображение-заполнитель
  image: props.page?.image || 
    (props.isProject ? '/project_placeholder.webp' : 
     props.isTeam ? '/team_placeholder.webp' : '/og.png')
}));

const getTitleTemplate = (title: string | undefined) => {
  if (route.path === "/") return title || `${seo.title}`;
  if (props.isWriting) return title;
  return `${title} | ${seo.title}`;
};

// Используем useSeoMeta для установки всех метаданных
useSeoMeta({
  ogSiteName: seo.title,
  ogTitle: pageSEO.value.title,
  ogDescription: pageSEO.value.description,
  ogType: props.isProject || props.isTeam ? "article" : "website",
  ogUrl: `${baseUrl}${route.fullPath}`,
  ogImage: {
    url: pageSEO.value.image,
    width: 1200,
    height: 630,
    alt: pageSEO.value.title,
  },
  title: pageSEO.value.title,
  description: pageSEO.value.description,
  twitterTitle: pageSEO.value.title,
  twitterDescription: pageSEO.value.description,
  twitterCard: "summary_large_image",
  twitterImage: {
    url: pageSEO.value.image,
    width: 1200,
    height: 630,
    alt: pageSEO.value.title,
  },
});

// Дополнительные мета-теги
useHead({
  titleTemplate: getTitleTemplate as (
    title: string | undefined
  ) => string | null,
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "charset", content: "utf-8" },
    { name: "robots", content: "index, follow" },
    { name: "color-scheme", content: "light dark" },
  ],
});
</script>

<template>
  <slot />
</template>
