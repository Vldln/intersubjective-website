<script setup lang="ts">
import { Toaster } from "vue-sonner";
import * as locales from "@nuxt/ui/locale";
import { useI18n } from "vue-i18n";
import LoadingPage from "./components/LoadingPage.vue";

const { locale: i18nLocale } = useI18n();
const appConfig = useAppConfig();
const seo = appConfig.seo;
const baseUrl = seo.fields?.url?.default || 'https://intersubjective.space/';

// Общие мета-теги для всего сайта, не дублирующие FolioMeta
useHead({
  meta: [
    // Технические мета-теги
    { name: 'theme-color', content: '#000000' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'charset', content: 'utf-8' },
    
    // Дополнительные мета-теги для социальных сетей
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    
    // Facebook (дополнительные теги, которых нет в FolioMeta)
    { property: 'fb:app_id', content: '' }, // Добавить ID приложения, если есть
    
    // Pinterest
    { name: 'pinterest-rich-pin', content: 'true' },
    
    // LinkedIn
    { property: 'linkedin:owner', content: 'Intersubjective' },
    
    // Schema.org меты для поисковых систем (вместо itemprop используем name или property)
    { name: 'schema:name', content: seo.title },
    { name: 'schema:description', content: seo.description },
    { name: 'schema:image', content: `${baseUrl}og.png` },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
  ]
})
</script>

<template>
  <Html
    :lang="i18nLocale"
    class="font-geist text-[var(--ui-text)] transition-colors duration-300 selection:bg-white/60 selection:text-zinc-800"
  >
    <Body>
      <LayoutScrollToTop />
      <Suspense>
        <template #default>
          <NuxtLayout>
            <UApp :locale="locales[i18nLocale]">
              <NuxtPage />
            </UApp>
          </NuxtLayout>
        </template>
        <template #fallback>
          <LoadingPage />
        </template>
      </Suspense>
      <Toaster :locale="locales[i18nLocale]" />
      <DotPattern
        class="absolute inset-0 -z-10 size-full fill-white/5 [mask-image:radial-gradient(white,transparent_85%)]"
      />
    </Body>
  </Html>
</template>

<style>
html {
  font-family: "Inter", sans-serif;
  transition: color 0.3s ease, background-color 0.3s ease;
  scroll-behavior: smooth;
}

/* Оптимизация производительности */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
