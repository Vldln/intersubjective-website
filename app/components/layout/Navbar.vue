<script lang="ts" setup>
defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
});

const navigation = getNavigation("home") as Record<string, Navigation>;

const route = useRoute();
const localePath = useLocalePath();
</script>

<template>
  <div class="mx-auto my-2 flex w-full items-center justify-center">
    <header class="rounded-lg">
      <SpotlightButton
        transparent
        :animate="false"
        class="border border-white/10"
      >
        <nav
          class="z-10 flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4"
        >
          <NuxtLink
            v-for="item in navigation"
            :id="item.name.toLowerCase()"
            :key="item.name"
            :aria-label="item.name + ' navigation link'"
            :class="[
              localePath(item.to) === route.path
                ? 'text-white/75 shadow-2xl text-shadow-sm'
                : 'text-muted',
            ]"
            :to="localePath(item.to)"
            class="flex items-center rounded-lg border border-transparent px-4 py-1 transition-all duration-300 ease-in-out sm:px-6 hover:text-white/75"
          >
            <UIcon :name="item.icon" class="size-7 font-light sm:size-6" />
          </NuxtLink>
        </nav>
      </SpotlightButton>
    </header>
  </div>
</template>
