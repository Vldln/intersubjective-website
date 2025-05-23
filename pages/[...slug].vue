<script setup lang="ts">
import type { Collections } from "@nuxt/content";
import type { ContentEnCollectionItem } from "@nuxt/content";
import { withLeadingSlash, joinURL } from "ufo";

const route = useRoute();
const { locale, localeProperties, t } = useI18n();
const isWriting = false;

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

const page = computed(() => {
  if (pageData.value) return pageData.value;
  return pageData.value;
});

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
</script>

<template>
  <div v-if="page">
    <FolioMeta :page="page" :is-writing="false" />
    <ContentRenderer :dir="localeProperties?.dir ?? 'ltr'" :value="page" />
  </div>
</template>
