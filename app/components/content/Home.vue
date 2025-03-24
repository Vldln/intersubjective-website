<template>
  <section class="relative">
    <div
      class="font-geist bg-[url('/hero.webp')] bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center"
      style="
        background-image: linear-gradient(
            rgba(10, 10, 10, 0.2),
            rgba(10, 10, 10, 1)
          ),
          url('/hero.webp');
        --stagger: 1;
        --delay: 10ms;
      "
      data-animate
    >
      <h1
        class="mx-auto font-bold text-center text-pretty bg-clip-text text-4xl text-white/75 lg:max-w-3xl lg:text-[100px]"
      >
        <slot name="hero_title" mdc-unwrap="p" />
      </h1>
      <div>
        <h2 class="text-white-shadow font-bold text-xl mb-4">
          <slot name="hero_about_title" mdc-unwrap="p" />
        </h2>
        <h3 class="text-lg font-extralight">
          <slot name="hero_about_subtitle" mdc-unwrap="p" />
        </h3>
        <ULink
          class="w-fit rounded-md mt-4 bg-zinc-200/80 text-zinc-900 hover:bg-zinc-300/70 px-4 py-2 flex group"
          to="/about"
        >
          <slot name="hero_button" mdc-unwrap="p" />
          <div
            class="flex ml-2 items-center justify-center rounded-full border border-transparent p-1 backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:border-zinc-900"
          >
            <UIcon name="heroicons:arrow-right" class="size-3 text-zinc-900" />
          </div>
        </ULink>
      </div>
    </div>
    <div
      class="relative mx-auto flex max-w-7xl flex-col justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:py-16"
    >
      <div class="z-20 flex flex-col items-center justify-center">
        <!-- social -->
        <!-- <HomeSocial style="--stagger: 3" data-animate /> -->
        <!-- subtitle -->
        <h2
          class="mx-auto mt-4 max-w-4xl text-center text-4xl antialiased text-white/90"
        >
          <slot name="hero_subtitle" mdc-unwrap="p" />
        </h2>
        <HomeSubscribe style="--stagger: 3" data-animate>
          <template #title>
            {{ $t("global.subscribe.label") }}
          </template>
        </HomeSubscribe>
        <Divider class="my-9" />
        <HomeProject style="--stagger: 6" data-animate class="mt-40" />
        <Divider class="my-9" />
        <HomeTeam style="--stagger: 6" data-animate class="mt-40" />
        <Divider class="my-9" />
        <HomeArticle style="--stagger: 6" data-animate class="mt-40" />
      </div>
    </div>
  </section>
</template>
