import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const seoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  excerpt: z.string().optional(),
  image: z.string().optional(),
  imageCredit: z.string().optional(),
  canonical: z.url().optional(),
  noindex: z.boolean().default(false),
  nofollow: z.boolean().default(false),
});

const baseSchema = seoSchema.extend({
  id: z.number().optional(),
  date: z.coerce.date(),
  draft: z.boolean().default(true),
  featured: z.boolean().default(false),
  author: z.string().optional(),
  tags: z.array(z.string()).default([]),
  category: z.string().optional(),
  slug: z.string().optional(),
});

const projectLinksSchema = z.object({
  github: z.url().optional(),
  live: z.url().optional(),
  demo: z.url().optional(),
  docs: z.url().optional(),
  video: z.url().optional(),
  store: z.url().optional(),
  api: z.url().optional(),
});

const projectSchema = baseSchema.extend({
  type: z.string().optional(),
  status: z.string().optional(),
  tools_tech: z.array(z.string()).optional(),
  features: z.array(z.string()).optional(),
  links: projectLinksSchema.optional(),
  impact: z.record(z.string(), z.unknown()).optional(),
  caseStudy: z.string().optional(),
  client: z.string().optional(),
  organisation: z.string().optional(),
  institution: z.string().optional(),
});

const authorSchema = z.object({
  name: z.string(),
  author: z.string().optional(),
  bio: z.string().optional(),
  avatar: z.string().optional(),
  role: z.string().optional(),
  website: z.url().optional(),
});

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: baseSchema,
  }),
  projects: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: projectSchema,
  }),
  authors: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/authors" }),
    schema: authorSchema,
  }),
};
