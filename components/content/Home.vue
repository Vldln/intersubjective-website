<script setup lang="ts">

import { useWindowSize, useScroll } from "@vueuse/core";

const { width, height } = useWindowSize(); // Get width and height
const { y } = useScroll();

const isMobile = computed(() => width.value < 768);
const isScrolled = computed(() => y.value > 100);


const particlesActive = ref(true);
const linksEnabled = ref(false);




// Define a constant density (e.g., 0.001 particles per pixel)
const PARTICLE_DENSITY = 0.0001; // You can tune this number

const stopParticles = () => {
  const backgroundContainer = document.getElementById("background-particles");
  const logoContainer = document.getElementById("tsparticles");

  if (backgroundContainer) {
    const backgroundInstance = tsParticles.domItem(backgroundContainer);
    if (backgroundInstance) backgroundInstance.pause();
  }

  if (logoContainer) {
    const logoInstance = tsParticles.domItem(logoContainer);
    if (logoInstance) logoInstance.pause();
  }

  particlesActive.value = false;
};

const startParticles = () => {
  const backgroundContainer = document.getElementById("background-particles");
  const logoContainer = document.getElementById("tsparticles");

  if (backgroundContainer) {
    const backgroundInstance = tsParticles.domItem(backgroundContainer);
    if (backgroundInstance) backgroundInstance.play();
  }

  if (logoContainer) {
    const logoInstance = tsParticles.domItem(logoContainer);
    if (logoInstance) logoInstance.play();
  }

  particlesActive.value = true;
};

watch(isScrolled, (scrolled) => {
  if (scrolled && particlesActive.value) {
    stopParticles();
  } else if (!scrolled && !particlesActive.value) {
    startParticles();
  }
});


const toggleParticleLinks = (enabled) => {
    const instances = tsParticles.dom();
    if (instances.length === 0) {
      console.warn("No tsParticles instances found.");
    } else {
      const instance = instances[0];
      instance.options.particles.links.enable = !instance.options.particles.links.enable;
      instance.refresh();
    }
};

onMounted(() => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const screenArea = screenWidth * screenHeight;

  // Total number of particles based on area
  const totalParticles = Math.round(screenArea * PARTICLE_DENSITY);

  const farCount = Math.round(totalParticles * 0.6);
  const midCount = Math.round(totalParticles * 0.3);
  const nearCount = totalParticles - farCount - midCount;
  
  const basicSpeed = 0.3 * (isMobile.value ? 0.5: 1.0); //to adjust to lower fps

  tsParticles.load({
    id: "background-particles",
    options: {
      autoPlay: true,
      background: {
        color: { value: "#000000" },
      },
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      detectRetina: true,
      fpsLimit: isMobile.value ? 30 : 60,
      particles: {
        number: {
          value: totalParticles,
        },
        groups: {
          far: {
            number: { value: farCount },
            move: { speed: basicSpeed * 1.2 },
            size: { value: { min: 1, max: 2 } },
            opacity: { value: 0.5 },
          },
          mid: {
            number: { value: midCount },
            move: { speed:  basicSpeed * 5 },
            size: { value: { min: 1, max: 2.5 } },
            opacity: { value: 0.7 },
          },
          near: {
            number: { value: nearCount },
            move: { speed:  basicSpeed * 12 },
            size: { value: { min: 2, max: 3 } },
            opacity: { value: 1 },
          },
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        move: {
          enable: true,
          direction: "bottom",
          straight: true,
          outModes: { default: "out" },
        },
links: {
  enable: false, // Start with no links
  distance: 200,
  color: "#ffffff",
  opacity: 0.4,
  width: 1
}      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: {
            delay: 0.5,
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 200,
            links: { opacity: 0.5 },
          },
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      smooth: true,
    },
  });
});



</script>

<template>
  <section class="relative">
    <div id="background-particles" class="absolute w-full h-screen" />
    <div id="tsparticles" class="absolute w-full h-screen z-0" />
    <div
      class="font-geist bg-cover md:bg-center bg-no-repeat h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-900/20 to-purple-900/0 pointer-events-none"
      data-animate
    >
      <Logo class="mx-auto mb-8 size-18 md:size-30 pointer-events-auto" 
      @click="toggleParticleLinks"  
      />
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
