<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Intersubjective Space'
  },
  description: {
    type: String,
    default: 'Intersubjective Space - научное и философское сообщество'
  },
  image: {
    type: String,
    default: '/og.png'
  },
  url: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'website'
  }
});

// Получаем текущий URL
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const currentUrl = computed(() => 
  props.url || `${runtimeConfig.public.site}${route.path.substring(1)}`
);

// Установка метатегов через useHead
useHead({
  title: props.title,
  meta: [
    { name: 'description', content: props.description },
    // Open Graph
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
    { property: 'og:image', content: props.image },
    { property: 'og:url', content: currentUrl.value },
    { property: 'og:type', content: props.type },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: props.image },
  ],
  link: [
    { rel: 'canonical', href: currentUrl.value }
  ]
});
</script>

<template>
  <!-- Компонент не имеет визуального представления -->
</template> 