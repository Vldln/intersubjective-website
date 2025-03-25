export default defineAppConfig({
  global: {},
  socials: {
    // github: "https://github.com/HugoRCD",
    // twitter: "https://twitter.com/HugoRCD__",
    // linkedin: "https://www.linkedin.com/in/hugo-richard-0801",
    // instagram: "https://www.instagram.com/hugo.rcd_",
    // spotify:
    //   "https://open.spotify.com/user/yuvl0zpp3bpx4hne1ag7huten?si=df7ee2777c0c4fc4",
  },
  seo: {
    title: "Intersubjective",
    description:
      "is a web3 and sociotech R&D company based in the Netherlands.",
    url: "http://localhost:3000/",
  },
  ui: {
    colors: {
      primary: "emerald",
      neutral: "neutral",
    },
    notifications: {
      position: "top-0 bottom-auto",
    },
    notification: {
      progress: {
        base: "absolute bottom-0 end-0 start-0 h-0",
        background: "bg-transparent dark:bg-transparent",
      },
    },
    button: {
      slots: {
        base: "cursor-pointer",
      },
      defaultVariants: {
        color: "neutral",
      },
    },
    input: {
      defaultVariants: {
        color: "neutral",
      },
    },
    textarea: {
      defaultVariants: {
        color: "neutral",
      },
    },
    icons: {
      loading: "lucide:loader",
    },
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-icon",
      href: "/apple-icon.png",
    },
    {
      rel: "apple-icon",
      sizes: "180x180",
      href: "/apple-icon-180x180.png",
    },
    {
      rel: "apple-icon",
      sizes: "152x152",
      href: "/apple-icon-152x152.png",
    },
    {
      rel: "apple-icon",
      sizes: "144x144",
      href: "/apple-icon-144x144.png",
    },
    {
      rel: "apple-icon",
      sizes: "120x120",
      href: "/apple-icon-120x120.png",
    },
    {
      rel: "apple-icon",
      sizes: "114x114",
      href: "/apple-icon-114x114.png",
    },
    {
      rel: "apple-icon",
      sizes: "76x76",
      href: "/apple-icon-76x76.png",
    },
    {
      rel: "apple-icon",
      sizes: "72x72",
      href: "/apple-icon-72x72.png",
    },
    {
      rel: "apple-icon",
      sizes: "60x60",
      href: "/apple-icon-60x60.png",
    },
    {
      rel: "apple-icon",
      sizes: "57x57",
      href: "/apple-icon-57x57.png",
    },
    {
      rel: "apple-icon-precomposed",
      href: "/apple-icon-precomposed.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "msapplication-TileColor",
      content: "#ffffff",
    },
    {
      rel: "msapplication-TileImage",
      href: "/ms-icon-144x144.png",
    },
  ],
});
