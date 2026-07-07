// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.md",
  }),
});

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.md",
  }),
  schema: z.object({
    id: z.number(),
    slug: z.string(),
    title: z.string(),
    type: z.enum(["featured", "collaborative", "community", "other", "automation"]),
    status: z.enum(["completed", "in_progress", "archived", "concept"]),
    description: z.string(),
    date: z.string(),
    tools_tech: z.array(z.string()),
    features: z.array(z.string()),
    tags: z.array(z.string()),
    links: z.object({
      github: z.string().url().optional(),
      live: z.string().url().optional(),
      demo: z.string().url().optional(),
      docs: z.string().url().optional(),
      video: z.string().url().optional(),
      store: z.string().url().optional(),
      api: z.string().url().optional(),
    }).passthrough(),
    impact: z.object({}).passthrough().optional(),
  }),
});

export const collections = { blog, projects };
