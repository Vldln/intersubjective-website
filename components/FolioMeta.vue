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
const { locale } = useI18n();
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
  // Основные мета-теги
  title: pageSEO.value.title,
  description: pageSEO.value.description,
  
  // Open Graph (Facebook, LinkedIn)
  ogSiteName: seo.title,
  ogTitle: pageSEO.value.title,
  ogDescription: pageSEO.value.description,
  ogType: props.isProject || props.isTeam ? "article" : "website",
  ogUrl: `${baseUrl}${route.fullPath}`,
  ogLocale: locale.value,
  ogImage: {
    url: pageSEO.value.image,
    width: 1200,
    height: 630,
    alt: pageSEO.value.title,
    type: 'image/jpeg',
  },
  
  // Twitter
  twitterTitle: pageSEO.value.title,
  twitterDescription: pageSEO.value.description,
  twitterCard: "summary_large_image",
  twitterCreator: "@intersubjective", // Замените на ваш Twitter аккаунт
  twitterSite: "@intersubjective", // Замените на ваш Twitter аккаунт
  twitterImage: {
    url: pageSEO.value.image,
    width: 1200,
    height: 630,
    alt: pageSEO.value.title,
  },
});

// Дополнительные мета-теги, которые не дублируются в app.vue
useHead({
  titleTemplate: getTitleTemplate as (
    title: string | undefined
  ) => string | null,
  meta: [
    // Удалены дублирующие теги viewport и charset, так как они в app.vue
    { name: "robots", content: "index, follow" },
    { name: "color-scheme", content: "light dark" },
  ],
  // Добавляем канонический URL для улучшения SEO
  link: [
    { rel: "canonical", href: `${baseUrl}${route.fullPath}` }
  ]
});
</script>

<template>
  <slot />
</template>
