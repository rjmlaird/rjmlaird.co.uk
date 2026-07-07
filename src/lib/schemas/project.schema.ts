import { z } from "astro/zod";

export const projectTypeSchema = z.enum([
  "featured",
  "collaborative",
  "community",
  "other",
  "automation",
]);

export const projectStatusSchema = z.enum([
  "completed",
  "in_progress",
  "archived",
  "concept",
]);

export const projectLinksSchema = z
  .object({
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    demo: z.string().url().optional(),
    docs: z.string().url().optional(),
    video: z.string().url().optional(),
    store: z.string().url().optional(),
    api: z.string().url().optional(),
  })
  .passthrough();

export const clientSchema = z.object({
  name: z.string(),
  slug: z.string().optional(),
  url: z.string().url().optional(),
  sector: z.string().optional(),
});

export const experienceSchema = z.object({
  organisation: z.string(),
  role: z.string().optional(),
  period: z.string().optional(),
  context: z.string().optional(),
});

export const caseStudySchema = z.object({
  title: z.string(),
  slug: z.string(),
  url: z.string().url().optional(),
  summary: z.string().optional(),
});

export const articleSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  publisher: z.string().optional(),
  date: z.string().optional(),
});

export const awardSchema = z.object({
  title: z.string(),
  organisation: z.string().optional(),
  year: z.string().optional(),
  url: z.string().url().optional(),
});

export const baseProjectSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  type: projectTypeSchema,
  status: projectStatusSchema,
  description: z.string(),
  date: z.string(),
  tools_tech: z.array(z.string()),
  features: z.array(z.string()),
  tags: z.array(z.string()),
  links: projectLinksSchema,
  impact: z.object({}).passthrough().optional(),
  client: z.union([clientSchema, z.array(clientSchema)]).optional(),
  experience: z.union([experienceSchema, z.array(experienceSchema)]).optional(),
  case_studies: z.array(caseStudySchema).optional(),
  articles: z.array(articleSchema).optional(),
  awards: z.array(awardSchema).optional(),
  related_projects: z.array(z.string()).optional(),
  related_people: z.array(z.string()).optional(),
  related_orgs: z.array(z.string()).optional(),
});

export const featuredProjectSchema = baseProjectSchema.extend({
  type: z.literal("featured"),
});

export const collaborativeProjectSchema = baseProjectSchema.extend({
  type: z.literal("collaborative"),
  collaborators: z.array(z.string()).optional(),
});

export const communityProjectSchema = baseProjectSchema.extend({
  type: z.literal("community"),
  community_role: z.string().optional(),
});

export const otherProjectSchema = baseProjectSchema.extend({
  type: z.union([z.literal("other"), z.literal("automation")]),
  automation_level: z.enum(["low", "medium", "high"]).optional(),
});

export const projectItemSchema = z.discriminatedUnion("type", [
  featuredProjectSchema,
  collaborativeProjectSchema,
  communityProjectSchema,
  otherProjectSchema,
]);

export const projectsSchema = z.object({
  featured_projects: z.array(featuredProjectSchema),
  collaborative_projects: z.array(collaborativeProjectSchema),
  community_projects: z.array(communityProjectSchema),
  other_projects: z.array(otherProjectSchema),
});

export type ProjectItem = z.infer<typeof projectItemSchema>;
export type ProjectsSchema = z.infer<typeof projectsSchema>;
