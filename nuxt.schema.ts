import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    seo: group({
      title: 'SEO',
      description: 'SEO configuration',
      icon: 'lucide:search',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Intersubjective',
          icon: 'lucide:title',
          default: 'Intersubjective',
        }),
        description: field({
          type: 'string',
          title: 'Description',
          description:
            'Intersubjective is a web3 and sociotech R&D company based in the Netherlands.',
          icon: 'lucide:description',
          default:
            'Intersubjective is a web3 and sociotech R&D company based in the Netherlands.',
        }),
        url: field({
          type: 'string',
          title: 'URL',
          description: 'http://vldln-intersubjective-website.nuxt.space/',
          icon: 'lucide:link',
          default: 'http://vldln-intersubjective-website.nuxt.space/',
        }),
        lang: field({
          type: 'string',
          title: 'Language',
          description: 'The language that you want to use for your website.',
          icon: 'lucide:language',
          default: 'en',
          required: ['en'],
        }),
      },
    }),
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
  },
})
