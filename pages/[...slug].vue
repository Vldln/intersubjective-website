<script setup lang="ts">
import type { Collections } from "@nuxt/content";
import type { ContentEnCollectionItem } from "@nuxt/content";
import { withLeadingSlash, joinURL } from "ufo";

const route = useRoute();
const { locale, localeProperties, t } = useI18n();
const { isWriting } = defineProps<{
  page: ContentEnCollectionItem;
  isWriting: boolean;
}>();

const slug = computed(() =>
  Array.isArray(route.params.slug)
    ? (route.params.slug as string[])
    : [route.params.slug as string]
);
const path = computed(() =>
  withLeadingSlash(joinURL(locale.value, ...slug.value))
);
const collection = computed(
  () => `content_${locale.value}` as keyof Collections
);

const { data: pageData } = await useAsyncData(
  path.value,
  async () =>
    (await queryCollection(collection.value).path(path.value).first()) as
      | Collections["content_en"]
      | Collections["content_fr"]
);

const { link, seo } = useAppConfig();

const page = computed(() => {
  if (pageData.value) return pageData.value;
  return pageData.value;
});

const pageSEO = computed(() => ({
  title: isWriting ? page.value?.title : page.value?.title || seo.title,
  description: isWriting
    ? page.value?.description
    : page.value?.description || seo.description,
}));

const getTitleTemplate = (title: string | undefined) => {
  if (route.path === "/") return title || `${seo.title}`;
  if (isWriting) return title;
  return `${title} | ${seo.title}`;
};

if (!page.value)
  throw createError({ statusCode: 404, statusMessage: "Page not found" });

defineShortcuts({
  meta_o: {
    usingInput: true,
    handler: () => {
      toast.success(t("global.email_copied"));
    },
  },
});

useSeoMeta({
  ogSiteName: seo.title,
  ogTitle: pageSEO.value.title,
  ogDescription: pageSEO.value.description,
  ogType: isWriting ? "article" : "website",
  ogUrl: seo.url,
  ogImage: {
    url: "/og-image.png",
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
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: pageSEO.value.title,
  },
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
</script>

<template>
  <div v-if="page">
    <ContentRenderer :dir="localeProperties?.dir ?? 'ltr'" :value="page" />
  </div>
</template>
