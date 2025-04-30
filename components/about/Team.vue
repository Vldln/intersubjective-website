<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'
import TeamCard from '@/components/team/Card.vue'

const route = useRoute()
const { locale } = useI18n()

const { data: team } = await useAsyncData(
  'team',
  async () => {
    const collection = ('team_' + locale.value) as keyof Collections
    return (await queryCollection(
      collection,
    ).all()) as Collections['team_en'][]
  },
  {
    watch: [locale],
  },
)

const slug = computed(() => withLeadingSlash(String(route.params.slug)))
const { data: teamCategories } = await useAsyncData(
  'team-categories-' + slug.value,
  async () => {
    const collection = ('team_categories_' + locale.value) as keyof Collections
    return (await queryCollection(collection).first()) as
      | Collections['team_categories_en']
  },
  {
    watch: [locale],
  },
)

const items = computed(() => {
  return teamCategories.value?.teamCategories.map((teamCategory) => {
    return {
      label: teamCategory.title,
      key: teamCategory.title.toLowerCase(),
      items: team.value?.filter(team => team.status === teamCategory.type),
    }
  })
})
</script>

<template>
  <Tabs
    v-if="items"
    :items="items"
    :component="TeamCard"
  />
</template>
