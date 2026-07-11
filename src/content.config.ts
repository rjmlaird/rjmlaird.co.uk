import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  id: z.number().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  excerpt: z.string().optional(),
  date: z.coerce.date(),
  draft: z.boolean().default(false),
  author: z.string().optional(),
  tag: z.string().optional(),
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
  imageCredit: z.string().optional(),
});

const projectLinksSchema = z.object({
  github: z.string().url().optional(),
  live: z.string().url().optional(),
  demo: z.string().url().optional(),
  docs: z.string().url().optional(),
  video: z.string().url().optional(),
  store: z.string().url().optional(),
  api: z.string().url().optional(),
});

const projectSchema = baseSchema.extend({
  type: z.string().optional(),
  status: z.string().optional(),
  tools_tech: z.array(z.string()).optional(),
  features: z.array(z.string()).optional(),
  links: projectLinksSchema.optional(),
  impact: z.record(z.string(), z.unknown()).optional(),
});

const authorSchema = z.object({
  name: z.string(),
  author: z.string().optional(),
  bio: z.string().optional(),
  avatar: z.string().optional(),
  role: z.string().optional(),
});

export const collections = {
  blog: defineCollection({
    loader: glob({
      base: "./src/content/blog",
      pattern: "**/*.md",
    }),
    schema: baseSchema,
  }),

  projects: defineCollection({
    loader: glob({
      base: "./src/content/projects",
      pattern: "**/*.md",
    }),
    schema: projectSchema,
  }),

  authors: defineCollection({
    loader: glob({
      base: "./src/content/authors",
      pattern: "**/*.md",
    }),
    schema: authorSchema,
  }),
};
