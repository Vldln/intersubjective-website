<script lang="ts" setup>
import type { Collections } from "@nuxt/content";
import { withLeadingSlash, joinURL } from "ufo";

const route = useRoute();
const { locale, localeProperties } = useI18n();

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

const img = useImage();
</script>

<template>
  <div v-if="page" class="sm:mt-20">
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
      class="article mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
    >
      <div class="flex flex-wrap gap-4 sm:gap-8 mb-8">
        <div
          class="group relative flex w-full sm:w-auto flex-col gap-1 rounded-lg bg-purple-900/10 p-1"
        >
          <div
            class="flex h-56 justify-center overflow-hidden rounded-lg w-full"
          >
            <NuxtImg
              :placeholder="`${page.image ?? `/project_placeholder.webp`}`"
              :alt="page.title + ' project image'"
              class="h-full w-full rounded-lg object-cover"
              :src="page.image"
              :aria-label="page.title + ' project image'"
            />
          </div>
        </div>
        <div>
          <h1 class="text-2xl font-bold normal-case mb-4">
            {{ page?.title }}
          </h1>
          <div class="flex flex-col gap-2">
            <ULink
              v-if="page.lightPaper"
              :href="page.lightPaper"
              :aria-label="`Go to ${page.title} project`"
              target="_blank"
              class="block text-muted"
            >
              {{ $t("project.lightPaper") }}
            </ULink>
            <ULink
              v-if="page.whitePaper"
              :href="page.whitePaper"
              :aria-label="`Go to ${page.title} project`"
              target="_blank"
              class="block text-muted"
            >
              {{ $t("project.whitePaper") }}
            </ULink>
          </div>
        </div>
      </div>
      <Divider class="mb-8 mt-2" />
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
