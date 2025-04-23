export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/color-mode",
    //"nuxt-particles",
  ],

  app: {
    head: {
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.2/tsparticles.all.bundle.min.js",
          defer: true,
        },
      ],
    },
  },

  /*
  particles: {
    mode: "full", // 'full' | 'slim' | 'basic' | 'custom'
    lazy: true,
  },
*/
  image: {
    domains: [
      process.env.NUXT_PUBLIC_SITE_URL || "https://intersubjective.space/",
    ],
    format: ["jpg", "jpeg", "png", "webp"],
  },

  imports: {
    presets: [
      {
        from: "vue-sonner",
        imports: ["toast"],
      },
    ],
  },

  devtools: {
    enabled: true,
  },

  css: ["~/assets/style/main.css"],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    defaultLocale: "en",
    indexable: true,
  },

  runtimeConfig: {
    public: {
      site:
        process.env.NUXT_PUBLIC_SITE_URL || "https://intersubjective.space/",
      contactEmail: process.env.CONTACT_EMAIL,
      resend: !!process.env.NUXT_PRIVATE_RESEND_API_KEY,
    },
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
    classPrefix: "",
    classSuffix: "",
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
    preview: {
      api: "https://api.nuxt.studio",
      dev: true,
    },
  },

  mdc: {
    highlight: {
      theme: {
        dark: "github-dark",
        default: "github-dark",
        light: "github-light",
      },
    },
  },

  routeRules: {
    // Needed to activate preview on Nuxt Studio
    "/": { prerender: false },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    viewTransition: true,
  },

  compatibilityDate: "2025-01-05",

  nitro: {
    experimental: {
      websocket: true,
    },
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ["/"],
    },
  },

  hooks: {
    "nitro:config": (config) => {
      if (process.env.NUXT_PRIVATE_RESEND_API_KEY) {
        config.handlers?.push({
          method: "post",
          route: "/api/emails/send",
          handler: "~~/server/emails/send.ts",
        });
        config.handlers?.push({
          method: "post",
          route: "/api/emails/subscribe",
          handler: "~~/server/emails/subscribe.ts",
        });
      }
    },
  },

  i18n: {
    locales: [{ code: "en", name: "English", language: "en-US" }],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    strategy: "prefix_except_default",
    defaultLocale: "en",
    vueI18n: "~/i18n.config.ts",
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    provider: "iconify",
  },

  ogImage: {
    zeroRuntime: true,
  },
});
