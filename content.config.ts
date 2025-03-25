import { defineCollection, z } from "@nuxt/content";
import { asSeoCollection } from "@nuxtjs/seo/content";

const commonContentSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
});

const commonArticleSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
  date: z.string().nonempty(),
  image: z.string().url(),
  readingTime: z.string().nonempty(),
  tags: z.array(z.string().nonempty()),
});

const commonProjectSchema = z.object({
  title: z.string().nonempty(),
  image: z.string().url(),
  link: z.string().url(),
  status: z.string().nonempty(),
  whitePaper: z.string().url(),
  lightPaper: z.string().url(),
});

const commonTeamSchema = z.object({
  title: z.string().nonempty(),
  image: z.string().url(),
  link: z.string().url(),
  position: z.string().nonempty(),
  status: z.string().nonempty(),
});

export const collections = {
  content_en: defineCollection(
    asSeoCollection({
      type: "page",
      source: {
        include: "en/**/*.md",
        exclude: ["en/articles/*.md"],
        prefix: "/en",
      },
      schema: commonContentSchema,
    })
  ),
  content_fr: defineCollection(
    asSeoCollection({
      type: "page",
      source: {
        include: "fr/**/*.md",
        exclude: ["fr/articles/*.md"],
        prefix: "/fr",
      },
      schema: commonContentSchema,
    })
  ),
  articles_en: defineCollection(
    asSeoCollection({
      type: "page",
      source: {
        include: "en/articles/*.md",
        prefix: "/en/articles",
      },
      schema: commonArticleSchema,
    })
  ),
  articles_fr: defineCollection(
    asSeoCollection({
      type: "page",
      source: {
        include: "fr/articles/*.md",
        prefix: "/fr/articles",
      },
      schema: commonArticleSchema,
    })
  ),
  projects_en: defineCollection(
    asSeoCollection({
      type: "page",
      source: {
        include: "en/projects/*.md",
        prefix: "/en/projects",
      },
      schema: commonProjectSchema,
    })
  ),
  project_categories_en: defineCollection({
    type: "data",
    source: "en/project_categories.json",
    schema: z.object({
      title: z.string().nonempty(),
      projectCategories: z.array(
        z.object({
          title: z.string().nonempty(),
          type: z.string().nonempty(),
        })
      ),
    }),
  }),
  team_categories_en: defineCollection({
    type: "data",
    source: "en/team_categories.json",
    schema: z.object({
      title: z.string().nonempty(),
      teamCategories: z.array(
        z.object({
          title: z.string().nonempty(),
          type: z.string().nonempty(),
        })
      ),
    }),
  }),
  stack: defineCollection({
    type: "data",
    source: "stack.json",
    schema: z.object({
      items: z.array(
        z.object({
          name: z.string().nonempty(),
          link: z.string().url(),
          icon: z.string().nonempty(),
        })
      ),
    }),
  }),

  team_en: defineCollection(
    asSeoCollection({
      type: "page",
      source: {
        include: "en/team/*.md",
        prefix: "/en/team",
      },
      schema: commonTeamSchema,
    })
  ),
};
