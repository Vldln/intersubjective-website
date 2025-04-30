<script lang="ts" setup>
import type { Collections } from '@nuxt/content'
import { withLeadingSlash, joinURL } from 'ufo'

const route = useRoute()
const { locale, localeProperties } = useI18n()

const slug = computed(() =>
  Array.isArray(route.params.slug)
    ? (route.params.slug as string[])
    : [route.params.slug as string],
)
const path = computed(() =>
  withLeadingSlash(joinURL(locale.value, 'team', ...slug.value)),
)
const collection = computed(() => `team_${locale.value}` as keyof Collections)

const { data: page } = await useAsyncData(
  path.value,
  async () =>
    (await queryCollection(collection.value)
      .path(path.value)
      .first()) as Collections['team_en'],
)

if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })

defineOgImage({
  url: page.value.image,
})

const img = useImage()
</script>

<template>
  <div
    v-if="page"
    class="sm:mt-20"
  >
    <FolioMeta
      :page
      :is-team="route.path.includes('/team/')"
    />
    <NuxtLinkLocale
      to="/"
      class="mx-auto my-8 flex cursor-pointer items-center gap-2 px-4 text-muted hover:text-primary transition-colors duration-200 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl"
    >
      <UIcon
        name="lucide:arrow-left"
        class="size-4"
      />
      <span class="text-sm font-extralight">
        {{ $t("navigation.home") }}
      </span>
    </NuxtLinkLocale>
    <article
      class="article mx-auto px-4 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mb-8"
    >
      <div class="flex flex-wrap gap-4 sm:gap-8 mb-8">
        <NuxtImg
          :placeholder="img(`${page?.image}`)"
          width="1536"
          :alt="page.title + ' team member image'"
          class="h-40 w-40 aspect-square rounded-full object-cover mb-4 border-4 border-purple-500/30 dark:border-purple-900/50 border"
          :src="page.image"
          :aria-label="page.title + ' team member image'"
        />
        <div>
          <h1 class="text-2xl font-bold normal-case">
            {{ page?.title }}
          </h1>
          <h4>
            {{ page?.position }}
          </h4>
        </div>
      </div>
      <Divider class="mb-8 mt-2" />
      <ContentRenderer
        :preview="false"
        :dir="localeProperties?.dir ?? 'ltr'"
        :value="page"
      />
    </article>
  </div>
</template>
