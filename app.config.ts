const description = "Intersubjective is a leading TrustTech, Web3, and R&D company based in the Netherlands, specializing in innovative blockchain solutions and cutting-edge social technology research.";

export default defineAppConfig({
  seo: {
    title: "Intersubjective",
    description,
    icon: "lucide:search",
    fields: {
      title: {
        type: "string",
        title: "Intersubjective",
        description,
        icon: "lucide:title",
        default: "Intersubjective",
      },
      description: {
        type: "string",
        title: "Description",
        description,
        icon: "lucide:description",
        default: description,
      },
      url: {
        type: "string",
        title: "URL",
        description: "https://intersubjective.space/",
        icon: "lucide:link",
        default: "https://intersubjective.space/",
      },
      lang: {
        type: "string",
        title: "Language",
        description: "The language that you want to use for your website.",
        icon: "lucide:language",
        default: "en",
        required: ["en"],
      },
      keywords: {
        type: "string",
        title: "Keywords",
        description: "Comma-separated keywords for SEO",
        icon: "lucide:tag",
        default: "MeritRank, Tentura, TrustTech, Web3, blockchain, Netherlands",
      },
      image: {
        type: "string",
        title: "Default OG Image",
        description: "Default Open Graph image for social sharing",
        icon: "lucide:image",
        default: "https://intersubjective.space/og-image.jpg",
      },
      canonicalUrl: {
        type: "string",
        title: "Canonical URL",
        description: "The preferred version of a page for SEO",
        icon: "lucide:link",
        default: "https://intersubjective.space/",
      },
    },
  },
  // Uncomment and configure social media fields if applicable
  // socials: group({
  //   title: "Socials",
  //   description: "Socials configuration",
  //   icon: "lucide:link",
  //   fields: {
  //     github: field({
  //       type: "string",
  //       title: "Github",
  //       description: "Your Github account.",
  //       icon: "lucide:github",
  //       default: "https://github.com/myusername",
  //     }),
  //     twitter: field({
  //       type: "string",
  //       title: "Twitter",
  //       description: "Your Twitter account.",
  //       icon: "lucide:twitter",
  //       default: "https://twitter.com/myusername",
  //     }),
  //     linkedin: field({
  //       type: "string",
  //       title: "Linkedin",
  //       description: "Your Linkedin account.",
  //       icon: "lucide:linkedin",
  //       default: "https://www.linkedin.com/in/myusername",
  //     }),
  //     instagram: field({
  //       type: "string",
  //       title: "Instagram",
  //       description: "Your Instagram account.",
  //       icon: "lucide:instagram",
  //       default: "https://www.instagram.com/myusername",
  //     }),
  //     spotify: field({
  //       type: "string",
  //       title: "Spotify",
  //       description: "Your Spotify account.",
  //       icon: "lucide:spotify",
  //       default: "https://open.spotify.com/user/myusername",
  //     }),
  //   },
  // }),
});
