<template>
  <section class="relative">
    <div
      class="font-geist bg-[url('/hero.webp')] bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center"
      style="
        background-image: linear-gradient(
            rgba(10, 10, 10, 0.3),
            rgba(10, 10, 10, 1)
          ),
          url('/hero.webp');
        --stagger: 1;
        --delay: 10ms;
      "
      data-animate
    >
      <Logo class="mx-auto mb-8 size-18 md:size-30" />
      <div
        class="mx-auto lg:max-w-3xl px-4 flex flex-col items-center sm:items-start"
      >
        <h1
          class="mx-auto mb-4 sm:mb-8 flex gap-3 text-center sm:text-left font-bold text-pretty bg-clip-text text-4xl text-white/75 lg:max-w-3xl lg:text-[100px]"
        >
          <slot name="hero_title" mdc-unwrap="p" />
        </h1>
        <h2
          class="text-white-shadow text-center sm:text-left text-base max-w-[300px] sm:max-w-none sm:text-xl mb-4"
        >
          <slot name="hero_about_title" mdc-unwrap="p" />
        </h2>

        <ULink
          class="w-fit rounded-md mt-4 text-xl bg-purple-900/30 text-white/90 hover:bg-purple-900/90 px-4 border-2 border-purple-900 py-2 flex group"
          to="/about"
        >
          <slot name="hero_button" mdc-unwrap="p" />
          <div
            class="flex text-xl ml-2 items-center justify-center rounded-full border border-transparent p-1 backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:border-purple-900"
          >
            <UIcon name="heroicons:arrow-right" class="size-4 text-white/90" />
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

        <HomeProject
          style="--stagger: 6"
          data-animate
          class="sm:px-20 md:px-30"
        />

        <Divider class="mb-9 mt-40" />
        <HomeSubscribe style="--stagger: 3" data-animate>
          <template #title>
            {{ $t("global.subscribe.label") }}
          </template>
        </HomeSubscribe>

        <Divider class="my-9" />
        <HomeArticle style="--stagger: 6" data-animate class="mt-40" />
      </div>
    </div>
  </section>
</template>
