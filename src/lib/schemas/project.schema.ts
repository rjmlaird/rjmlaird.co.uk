import { z } from 'astro/zod';

export const projectTypeSchema = z.enum([
  'featured',
  'collaborative',
  'community',
  'other',
  'automation',
]);

export const projectStatusSchema = z.enum([
  'completed',
  'in_progress',
  'archived',
  'concept',
]);

export const mediaTypeSchema = z.enum([
  'article',
  'case_study',
  'award',
  'talk',
  'press',
  'documentation',
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
  description: z.string(),
  type: projectTypeSchema,
  status: projectStatusSchema,
  date: z.string(),
  tools_tech: z.array(z.string()),
  features: z.array(z.string()),
  tags: z.array(z.string()),
  links: projectLinksSchema,
  client: z.union([clientSchema, z.array(clientSchema)]).optional(),
  experience: z.union([experienceSchema, z.array(experienceSchema)]).optional(),
  case_studies: z.array(caseStudySchema).optional(),
  articles: z.array(articleSchema).optional(),
  awards: z.array(awardSchema).optional(),
  impact: z
    .object({
      users: z.number().optional(),
      stars: z.number().optional(),
      downloads: z.number().optional(),
      engagement: z.number().optional(),
      revenue: z.number().optional(),
      notes: z.string().optional(),
    })
    .passthrough()
    .optional(),
  related_projects: z.array(z.string()).optional(),
  related_people: z.array(z.string()).optional(),
  related_orgs: z.array(z.string()).optional(),
});

export const featuredProjectSchema = baseProjectSchema.extend({
  type: z.literal('featured'),
});

export const collaborativeProjectSchema = baseProjectSchema.extend({
  type: z.literal('collaborative'),
  collaborators: z.array(z.string()).optional(),
});

export const communityProjectSchema = baseProjectSchema.extend({
  type: z.literal('community'),
  community_role: z.string().optional(),
});

export const otherProjectSchema = baseProjectSchema.extend({
  type: z.union([z.literal('other'), z.literal('automation')]),
  automation_level: z.enum(['low', 'medium', 'high']).optional(),
});

export const projectSchema = z.discriminatedUnion('type', [
  featuredProjectSchema,
  collaborativeProjectSchema,
  communityProjectSchema,
  otherProjectSchema,
]);

export const projectItemSchema = projectSchema;

export const projectsSchema = z.object({
  featured_projects: z.array(featuredProjectSchema),
  collaborative_projects: z.array(collaborativeProjectSchema),
  community_projects: z.array(communityProjectSchema),
  other_projects: z.array(otherProjectSchema),
});

export type ProjectType = z.infer<typeof projectTypeSchema>;
export type ProjectStatus = z.infer<typeof projectStatusSchema>;
export type MediaType = z.infer<typeof mediaTypeSchema>;
export type ProjectLinks = z.infer<typeof projectLinksSchema>;
export type Client = z.infer<typeof clientSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type CaseStudy = z.infer<typeof caseStudySchema>;
export type Article = z.infer<typeof articleSchema>;
export type Award = z.infer<typeof awardSchema>;
export type BaseProject = z.infer<typeof baseProjectSchema>;
export type FeaturedProject = z.infer<typeof featuredProjectSchema>;
export type CollaborativeProject = z.infer<typeof collaborativeProjectSchema>;
export type CommunityProject = z.infer<typeof communityProjectSchema>;
export type OtherProject = z.infer<typeof otherProjectSchema>;
export type Project = z.infer<typeof projectSchema>;
export type ProjectItem = Project;
export type ProjectsSchema = z.infer<typeof projectsSchema>;
