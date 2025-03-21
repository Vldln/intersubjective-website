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

      <!-- subtitle -->
      <h2
        class="mx-auto mt-4 max-w-4xl text-center text-4xl antialiased text-white/90"
      >
        <slot name="hero_subtitle" mdc-unwrap="p" />
      </h2>
    </div>
    <div
      class="relative mx-auto flex max-w-7xl flex-col justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:py-16"
    >
      <div class="z-20 flex flex-col items-center justify-center">
        <!-- social -->
        <!-- <HomeSocial style="--stagger: 3" data-animate /> -->

        <HomeSubscribe style="--stagger: 3" data-animate />
        <Divider class="my-9" />

        <HomeProject style="--stagger: 6" data-animate />

        <HomeTeam style="--stagger: 6" data-animate />
      </div>
    </div>
  </section>
</template>
