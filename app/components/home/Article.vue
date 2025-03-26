<script setup lang="ts">
import type { Collections } from "@nuxt/content";

const { locale } = useI18n();

const { data: articles } = await useAsyncData(
  "articles-" + locale.value,
  async () => {
    const collection = ("articles_" + locale.value) as keyof Collections;
    return (await queryCollection(
      collection
    ).all()) as Collections["articles_en"][];
  },
  {
    watch: [locale],
  }
);

if (!articles.value)
  throw createError({ statusCode: 404, statusMessage: "Page not found" });

const articlesList = computed(() => articles.value ?? []);
</script>

<template>
  <div class="z-10">
    <div class="flex flex-col items-center justify-center gap-2 mb-8">
      <h3 class="font-bold text-white-shadow text-4xl">
        {{ $t("article.title") }}
      </h3>
    </div>
    <TransitionGroup name="list" tag="ul" class="flex flex-col gap-4">
      <li v-for="article of articlesList" :key="article.path">
        <ArticleCard :title="article.title" :path="article.link" />
      </li>
    </TransitionGroup>
  </div>
</template>
