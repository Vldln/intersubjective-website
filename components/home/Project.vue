<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'
import ProjectCard from '@/components/project/Card.vue'

const route = useRoute()
const { locale } = useI18n()

const { data: projects } = await useAsyncData(
  'projects',
  async () => {
    const collection = ('projects_' + locale.value) as keyof Collections
    return (await queryCollection(
      collection,
    ).all()) as Collections['projects_en'][]
  },
  {
    watch: [locale],
  },
)

const slug = computed(() => withLeadingSlash(String(route.params.slug)))
const { data: projectCategories } = await useAsyncData(
  'project-categories-' + slug.value,
  async () => {
    const collection = ('project_categories_'
      + locale.value) as keyof Collections
    return (await queryCollection(collection).first()) as
      | Collections['project_categories_en']
  },
  {
    watch: [locale],
  },
)

const items = computed(() => {
  return projectCategories.value?.projectCategories.map((projectCategory) => {
    return {
      label: projectCategory.title,
      key: projectCategory.title.toLowerCase(),
      items: projects.value?.filter(
        project => project.status === projectCategory.type,
      ),
    }
  })
})
</script>

<template>
  <Tabs
    v-if="items"
    :items="items"
    :component="ProjectCard"
  >
    <template #title>
      {{ projectCategories?.title }}
    </template>
  </Tabs>
</template>
