<script lang="ts" setup>
import type { Collections } from "@nuxt/content";
import { withLeadingSlash, joinURL } from "ufo";

const route = useRoute();
const { locale, t, localeProperties } = useI18n();

const slug = computed(() =>
  Array.isArray(route.params.slug)
    ? (route.params.slug as string[])
    : [route.params.slug as string]
);
const path = computed(() =>
  withLeadingSlash(joinURL(locale.value, "projects", ...slug.value))
);
const collection = computed(
  () => `projects_${locale.value}` as keyof Collections
);

const { data: page } = await useAsyncData(
  path.value,
  async () =>
    (await queryCollection(collection.value)
      .path(path.value)
      .first()) as Collections["projects_en"]
);

if (!page.value)
  throw createError({ statusCode: 404, statusMessage: "Page not found" });

defineOgImage({
  url: page.value.image,
});
</script>

<template>
  <div v-if="page">
    <FolioMeta :page :is-project="route.path.includes('/projects/')" />
    <NuxtLinkLocale
      to="/"
      class="mx-auto my-8 flex cursor-pointer items-center gap-2 px-4 text-muted hover:text-primary transition-colors duration-200 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
    >
      <UIcon name="lucide:arrow-left" class="size-4" />
      <span class="text-sm font-extralight">
        {{ $t("navigation.home") }}
      </span>
    </NuxtLinkLocale>
    <article
      class="writing mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
    >
      <h1>
        {{ page?.title }}
      </h1>
      <ContentRenderer
        v-if="page"
        :dir="localeProperties?.dir ?? 'ltr'"
        :value="page"
      />
    </article>
  </div>
</template>

<style scoped>
.info-section {
  font-weight: 200;
  color: #7d8084;
  text-decoration: none;
  text-align: left;
}
</style>
