<script setup lang="ts">
onMounted(() => {
  console.log("a", tsParticles);

  tsParticles.load({
    id: "tsparticles",
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
      backgroundMask: {
        composite: "destination-out",
        cover: { opacity: 1 },
        enable: false,
      },
      clear: true,
      defaultThemes: {},
      delay: 0,
      fullScreen: { enable: true, zIndex: 0 },
      detectRetina: true,
      duration: 0,
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: { enable: false, mode: "push" },
          onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: { enable: false, force: 2, smooth: 10 },
          },
          resize: { delay: 0.5, enable: true },
        },
        modes: {
          trail: { delay: 1, pauseOnStop: false, quantity: 1 },
          attract: {
            distance: 200,
            duration: 0.4,
            easing: "ease-out-quad",
            factor: 1,
            maxSpeed: 50,
            speed: 1,
          },
          bounce: { distance: 200 },
          bubble: {
            distance: 40,
            duration: 2,
            mix: false,
            opacity: 8,
            size: 6,
            divs: { distance: 200, duration: 0.4, mix: false, selectors: [] },
          },
          connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
          grab: {
            distance: 400,
            links: { blink: false, consent: false, opacity: 1 },
          },
          push: { default: true, groups: [], quantity: 4 },
          remove: { quantity: 2 },
          repulse: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            divs: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
              easing: "ease-out-quad",
              selectors: [],
            },
          },
          slow: { factor: 1, radius: 0 },
          particle: { replaceCursor: false, pauseOnStop: false, stopDelay: 0 },
          light: {
            area: {
              gradient: {
                start: { value: "#ffffff" },
                stop: { value: "#000000" },
              },
              radius: 1000,
            },
            shadow: { color: { value: "#000000" }, length: 2000 },
          },
        },
      },
      manualParticles: [],
      particles: {
        bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
        collisions: {
          absorb: { speed: 2 },
          bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
          enable: false,
          maxSpeed: 50,
          mode: "bounce",
          overlap: { enable: true, retries: 0 },
        },
        color: {
          value: "#ffffff",
          animation: {
            h: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            s: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
            l: {
              count: 0,
              enable: false,
              speed: 1,
              decay: 0,
              delay: 0,
              sync: true,
              offset: 0,
            },
          },
        },
        effect: { close: true, fill: true, options: {}, type: [] },
        groups: {},
        move: {
          angle: { offset: 0, value: 90 },
          attract: {
            distance: 200,
            enable: false,
            rotate: { x: 3000, y: 3000 },
          },
          center: { x: 50, y: 50, mode: "percent", radius: 0 },
          decay: 0,
          distance: {},
          direction: "none",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
          },
          path: {
            clamp: true,
            delay: { value: 0 },
            enable: false,
            options: {},
          },
          outModes: {
            default: "bounce",
            bottom: "bounce",
            left: "bounce",
            right: "bounce",
            top: "bounce",
          },
          random: false,
          size: false,
          speed: 1,
          spin: { acceleration: 0, enable: false },
          straight: false,
          trail: { enable: false, length: 10, fill: {} },
          vibrate: false,
          warp: false,
        },
        number: {
          density: { enable: false, width: 1920, height: 1080 },
          limit: { mode: "delete", value: 0 },
          value: 200,
        },
        opacity: {
          value: { min: 0.05, max: 0.4 },
          animation: {
            count: 0,
            enable: true,
            speed: 2,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        reduceDuplicates: false,
        shadow: {
          blur: 0,
          color: { value: "#000" },
          enable: false,
          offset: { x: 0, y: 0 },
        },
        shape: { close: true, fill: true, options: {}, type: "circle" },
        size: {
          value: 1,
          animation: {
            count: 0,
            enable: false,
            speed: 5,
            decay: 0,
            delay: 0,
            sync: false,
            mode: "auto",
            startValue: "random",
            destroy: "none",
          },
        },
        stroke: { width: 0 },
        zIndex: { value: 0, opacityRate: 1, sizeRate: 1, velocityRate: 1 },
        destroy: {
          bounds: {},
          mode: "none",
          split: {
            count: 1,
            factor: { value: 3 },
            rate: { value: { min: 4, max: 9 } },
            sizeOffset: true,
          },
        },
        roll: {
          darken: { enable: false, value: 0 },
          enable: false,
          enlighten: { enable: false, value: 0 },
          mode: "vertical",
          speed: 25,
        },
        tilt: {
          value: 0,
          animation: { enable: false, speed: 0, decay: 0, sync: false },
          direction: "clockwise",
          enable: false,
        },
        twinkle: {
          lines: { enable: false, frequency: 0.05, opacity: 1 },
          particles: { enable: false, frequency: 0.05, opacity: 1 },
        },
        wobble: { distance: 5, enable: false, speed: { angle: 50, move: 10 } },
        life: {
          count: 0,
          delay: { value: 0, sync: false },
          duration: { value: 0, sync: false },
        },
        rotate: {
          value: 0,
          animation: { enable: false, speed: 0, decay: 0, sync: false },
          direction: "clockwise",
          path: false,
        },
        orbit: {
          animation: {
            count: 0,
            enable: false,
            speed: 1,
            decay: 0,
            delay: 0,
            sync: false,
          },
          enable: false,
          opacity: 1,
          rotation: { value: 45 },
          width: 1,
        },
        links: {
          blink: false,
          color: { value: "#ffffff" },
          consent: false,
          distance: 30,
          enable: true,
          frequency: 1,
          opacity: 0.4,
          shadow: { blur: 5, color: { value: "#000" }, enable: false },
          triangles: { enable: false, frequency: 1 },
          width: 1,
          warp: false,
        },
        repulse: {
          value: 0,
          enabled: false,
          distance: 1,
          duration: 1,
          factor: 1,
          speed: 1,
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      responsive: [],
      smooth: false,
      style: {},
      themes: [],
      zLayers: 100,
      key: "polygonMask",
      name: "Polygon Mask",
      motion: { disable: false, reduce: { factor: 4, value: true } },
      polygon: {
        draw: {
          enable: true,
          stroke: { color: { value: "#fff" }, width: 1, opacity: 0.2 },
        },
        enable: true,
        inline: { arrangement: "equidistant" },
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
    <div class="absolute w-full h-[40%]" id="tsparticles"></div>
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
