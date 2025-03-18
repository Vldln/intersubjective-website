<script setup lang="ts">
import { withLeadingSlash } from "ufo";
import type { Collections } from "@nuxt/content";

const route = useRoute();
const { locale } = useI18n();

const { data: projects } = await useAsyncData(
  "projects",
  async () => {
    const collection = ("projects_" + locale.value) as keyof Collections;
    return (await queryCollection(collection).all()) as
      | Collections["projects_en"][]
      | Collections["projects_fr"][];
  },
  {
    watch: [locale],
  }
);

const slug = computed(() => withLeadingSlash(String(route.params.slug)));
const { data: projectCategories } = await useAsyncData(
  "project-categories-" + slug.value,
  async () => {
    const collection = ("project_categories_" +
      locale.value) as keyof Collections;
    return (await queryCollection(collection).first()) as
      | Collections["project_categories_en"];
  },
  {
    watch: [locale],
  }
);

const items = computed(() => {
  return projectCategories.value?.projectCategories.map((projectCategory) => {
    return {
      label: projectCategory.title,
      key: projectCategory.title.toLowerCase(),
      projects: projects.value?.filter(
        (project) => project.status === projectCategory.type
      ),
    };
  });
});

const ui = {
  root: "flex items-center gap-4 w-full",
  list: "relative flex bg-transparent dark:bg-transparent gap-2",
  indicator:
    "absolute top-[4px] duration-200 ease-out focus:outline-none rounded-full bg-white/10 dark:bg-neutral-900",
  trigger: [
    "relative inline-flex items-center justify-center flex-shrink-0 focus:outline-none transition-colors duration-200 ease-out border-white/10 border-2",
    "px-3 py-2 font-medium rounded-full",
    "hover:bg-neutral-900/80",
    "data-[state=active]:text-neutral-900 dark:data-[state=active]:text-white",
    "data-[state=inactive]:text-neutral-500 dark:data-[state=inactive]:text-neutral-400",
  ],
  label: "truncate",
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-center space-y-8 w-full sm:px-20 md:px-30"
  >
    <div class="flex flex-col items-center justify-center gap-2">
      <h3 class="font-newsreader italic text-white-shadow text-4xl">
        {{ projectCategories?.title }}
      </h3>
    </div>
    <UTabs :items orientation="horizontal" :ui>
      <template #content="{ item }">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <ProjectCard
            v-for="project in item.projects"
            :key="project.name"
            :project="project"
          />
        </div>
      </template>
    </UTabs>
  </div>
</template>
