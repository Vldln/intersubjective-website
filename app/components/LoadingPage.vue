<template>
  <div class="loading">
    <div id="tsparticles" />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  tsParticles.load({
    id: 'tsparticles',
    options: {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#8b5cf6',
        },
        shape: {
          type: 'circle',
        },
        opacity: {
          value: 0.8,
          random: true,
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.3,
            maximumValue: 0.8,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 2,
            maximumValue: 4,
            sync: false,
          },
        },
        links: {
          enable: true,
          distance: 100,
          color: '#8b5cf6',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          outModes: {
            default: 'bounce',
          },
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detectOn: 'canvas',
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
          onClick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          push: {
            quantity: 4,
          },
        },
      },
      background: {
        color: 'transparent',
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
    },
  })
})
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.particles-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
