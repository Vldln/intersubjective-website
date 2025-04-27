<script setup lang="ts">
onMounted(() => {
  console.log("a", tsParticles);

  // Загружаем фоновые частицы
  tsParticles.load({
    id: "background-particles",
    options: {
      autoPlay: true,
      background: {
        color: { value: "#000000" },
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
        opacity: 1,
      },
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: {
            enable: true,
            mode: "repulse",
            parallax: { enable: false, force: 2, smooth: 10 },
          },
          resize: { delay: 0.5, enable: true },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#9370DB",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 2,
          straight: false,
        },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: { min: 0.1, max: 0.5 } },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
    },
  });

  // Загружаем частицы с маской логотипа
  tsParticles.load({
    id: "tsparticles",
    options: {
      autoPlay: true,
      background: {
        color: { value: "transparent" },
        opacity: 0,
      },
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: false, mode: "push" },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: { enable: false, force: 2, smooth: 10 },
          },
          resize: { delay: 0.5, enable: true },
        },
        modes: {
          bubble: {
            distance: 40,
            duration: 2,
            opacity: 8,
            size: 6,
          },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: { value: "#ffffff" },
          distance: 30,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 1,
          straight: false,
        },
        number: { value: 200 },
        opacity: {
          value: { min: 0.05, max: 0.4 },
          animation: {
            enable: true,
            speed: 2,
            sync: false,
          },
        },
        shape: { type: "circle" },
        size: { value: 1 },
      },
      polygon: {
        draw: {
          enable: true,
          stroke: { color: { value: "#fff" }, width: 1, opacity: 0.2 },
        },
        enable: true,
        move: { radius: 10, type: "path" },
        scale: 0.5,
        type: "inline",
        url: "/logo.svg",
        position: { x: 50, y: 50 },
      },
    },
  });
  console.log("ab");
});
</script>

<template>
  <section class="relative">
    <div class="absolute w-full h-screen" id="background-particles"></div>
    <div class="absolute w-full h-screen z-10" id="tsparticles"></div>
    <div
      class="font-geist bg-cover md:bg-center bg-no-repeat h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-900/20 to-purple-900/0 pointer-events-none"
      data-animate
    >
      <Logo class="mx-auto mb-8 size-18 md:size-30 pointer-events-auto" />
      <div
        class="mx-auto lg:max-w-3xl px-4 flex flex-col items-center pointer-events-auto"
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
          class="w-fit rounded-md mt-4 text-xl bg-purple-900/30 text-white/90 hover:bg-purple-900/90 px-4 border-2 border-purple-900 py-2 flex group pointer-events-auto"
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
