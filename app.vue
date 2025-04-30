<script setup lang="ts">
import { Toaster } from "vue-sonner";
import * as locales from "@nuxt/ui/locale";
import { useI18n } from "vue-i18n";
import LoadingPage from "./components/LoadingPage.vue";

const { locale: i18nLocale } = useI18n();
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
}
</style>
