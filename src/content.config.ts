import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectLinksSchema = z.object({
  github: z.string().optional(),
  live: z.string().optional(),
  demo: z.string().optional(),
  docs: z.string().optional(),
  video: z.string().optional(),
  store: z.string().optional(),
  api: z.string().optional(),
});

const projectSchema = z.object({
  id: z.number().optional(),
  slug: z.string().optional(),
  title: z.string().optional(),
  type: z.string().optional(),
  status: z.string().optional(),
  description: z.string().optional(),
  date: z.string().optional(),
  draft: z.boolean().optional(),
  tools_tech: z.array(z.string()).optional(),
  features: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  links: projectLinksSchema.optional(),
  impact: z.record(z.string(), z.unknown()).optional(),
});

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
  schema: projectSchema,
});

export const collections = { blog, projects };
