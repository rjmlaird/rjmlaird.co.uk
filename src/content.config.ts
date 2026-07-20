import { defineCollection, reference } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

// 1. Single source of truth for categories
export const CATEGORIES = [
  "space-data",
  "earth-observation",
  "sustainability",
  "technology",
  "marketing"
] as const;

// --- Reusable Schemas ---

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
  updatedDate: z.coerce.date().optional(),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  author: reference("authors").optional(), 
  tags: z.array(z.string()).default([]),
  // FLEXIBLE CATEGORY: Accepts a string OR an array of strings, 
  // then transforms it into an array for consistent consumption.
  category: z
    .union([z.string(), z.array(z.string())])
    .default([])
    .transform((val) => (Array.isArray(val) ? val : [val])),
});

// --- Collections Definition ---

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: ({ image }) => baseSchema.extend({
      pubDate: z.coerce.date(),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
    }),
  }),

  projects: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
    schema: baseSchema.extend({
      type: z.string().optional(),
      status: z.string().optional(),
      tools_tech: z.array(z.string()).optional(),
      features: z.array(z.string()).optional(),
      links: z.object({
        github: z.url().optional(),
        live: z.url().optional(),
        demo: z.url().optional(),
        docs: z.url().optional(),
        video: z.url().optional(),
        store: z.url().optional(),
        api: z.url().optional(),
      }).optional(),
      impact: z.record(z.string(), z.unknown()).optional(),
      caseStudy: z.string().optional(),
      client: z.string().optional(),
      organisation: z.string().optional(),
      institution: z.string().optional(),
    }),
  }),

  caseStudy: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/case-studies" }),
    schema: baseSchema.extend({
      status: z.string().optional(),
      client: z.string().optional(),
      organisation: z.string().optional(),
      institution: z.string().optional(),
      relatedProjects: z.array(reference("projects")).default([]),
      impact: z.record(z.string(), z.unknown()).optional(),
    }),
  }),

  authors: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/authors" }),
    schema: z.object({
      name: z.string(),
      bio: z.string().optional(),
      avatar: z.string().optional(),
      role: z.string().optional(),
      website: z.url().optional(),
    }),
  }),
};