import { defineCollection, schema } from "astro:content";
import { glob } from "astro/loaders";

const projectLinksSchema = schema.object({
  github: schema.string().optional(),
  live: schema.string().optional(),
  demo: schema.string().optional(),
  docs: schema.string().optional(),
  video: schema.string().optional(),
  store: schema.string().optional(),
  api: schema.string().optional(),
});

const projectSchema = schema.object({
  id: schema.number().optional(),
  slug: schema.string().optional(),
  title: schema.string().optional(),
  type: schema.string().optional(),
  status: schema.string().optional(),
  description: schema.string().optional(),
  date: schema.string().optional(),
  draft: schema.boolean().optional(),
  tools_tech: schema.array(schema.string()).optional(),
  features: schema.array(schema.string()).optional(),
  tags: schema.array(schema.string()).optional(),
  links: projectLinksSchema.optional(),
  impact: schema.record(schema.string(), schema.unknown()).optional(),
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
