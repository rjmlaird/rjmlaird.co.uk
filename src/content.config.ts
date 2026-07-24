import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

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

const relatedItemSchema = z.object({
  id: z.union([z.string(), z.number()]).optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  guest: z.string().optional(),
  host: z.string().optional(),
  season: z.union([z.string(), z.number()]).optional(),
  episodeNumber: z.union([z.string(), z.number()]).optional(),
  publishedDate: z.coerce.date().optional(),
  duration: z.string().optional(),
  audioUrl: z.url().optional(),
  shareUrl: z.url().optional(),
  transcriptUrl: z.url().optional(),
  artwork: z.string().optional(),
  summary: z.string().optional(),
});

const baseSchema = seoSchema.extend({
  id: z.union([z.string(), z.number()]).optional(),
  slug: z.string().optional(),
  updatedDate: z.coerce.date().optional(),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  author: z.string().optional(),
  tags: z.array(z.string()).default([]),
  sectors: z.array(z.string()).default([]),
  youtubeId: z.string().optional(),
  category: z
    .preprocess(
      (val) => {
        if (val == null) return [];
        if (Array.isArray(val)) return val;
        return [val];
      },
      z.array(z.string())
    )
    .default([]),
  links: z
    .object({
      github: z.url().optional(),
      web: z.url().optional(),
      demo: z.url().optional(),
      docs: z.url().optional(),
      youtube: z.url().optional(),
      store: z.url().optional(),
      api: z.url().optional(),
    })
    .optional()
    .default({}),
  heroImage: z.string().optional(),
  heroAlt: z.string().optional(),
  relatedOrg: z.array(z.string()).default([]),
  relatedExperience: z.array(z.string()).default([]),
  relatedEducation: z.array(z.string()).default([]),
  relatedVolunteering: z.array(z.string()).default([]),
  relatedAwards: z.array(z.string()).default([]),
  relatedTools: z.array(z.string()).default([]),
  relatedSkills: z.array(z.string()).default([]),
  relatedVideos: z.array(z.string()).default([]),
  relatedCaseStudies: z.array(z.string()).default([]),
  relatedInitiatives: z.array(z.string()).default([]),
  relatedProjects: z.array(z.string()).default([]),
  client: z.string().optional(),
  organisation: z.string().optional(),
  institution: z.string().optional(),
});

const podcastSchema = seoSchema.extend({
  slug: z.string().optional(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  categories: z.array(z.string()).default([]),

  podcastTitle: z.string().optional(),
  podcastDescription: z.string().optional(),
  podcastWebsite: z.url().optional(),
  podcastFeedUrl: z.url().optional(),
  podcastPublisher: z.string().optional(),
  podcastLanguage: z.string().optional(),
  podcastCoverImage: z.string().optional(),
  podcastCategories: z.array(z.string()).default([]),
  podcastApplePodcasts: z.url().optional(),
  podcastSpotify: z.url().optional(),
  podcastYouTube: z.url().optional(),

  host: z.string().optional(),
  guest: z.string().optional(),
  season: z.union([z.string(), z.number()]).optional(),
  episodeNumber: z.union([z.string(), z.number()]).optional(),
  publishedDate: z.coerce.date().optional(),
  duration: z.string().optional(),
  transcriptUrl: z.url().optional(),
  shareUrl: z.url().optional(),
  audioUrl: z.url().optional(),
  artwork: z.string().optional(),
  summary: z.string().optional(),

  relatedEpisodes: z.array(relatedItemSchema).default([]),
  relatedPodcasts: z
    .array(
      z.object({
        id: z.union([z.string(), z.number()]).optional(),
        title: z.string().optional(),
        description: z.string().optional(),
        podcastTitle: z.string().optional(),
        podcastDescription: z.string().optional(),
        podcastWebsite: z.url().optional(),
        podcastFeedUrl: z.url().optional(),
        podcastPublisher: z.string().optional(),
        podcastLanguage: z.string().optional(),
        podcastCoverImage: z.string().optional(),
        podcastCategories: z.array(z.string()).default([]),
        podcastApplePodcasts: z.url().optional(),
        podcastSpotify: z.url().optional(),
        podcastYouTube: z.url().optional(),
      })
    )
    .default([]),
});

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: baseSchema.extend({
      pubDate: z.coerce.date(),
    }),
  }),

  projects: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
    schema: baseSchema.extend({
      type: z.string().optional(),
      status: z.string().optional(),
      tools_tech: z.array(z.string()).optional(),
      features: z.array(z.string()).optional(),
      impact: z.record(z.string(), z.unknown()).optional(),
    }),
  }),

  initiatives: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/initiatives" }),
    schema: baseSchema.extend({
      type: z.string().optional(),
      status: z.string().optional(),
      tools_tech: z.array(z.string()).optional(),
      features: z.array(z.string()).optional(),
      impact: z.record(z.string(), z.unknown()).optional(),
    }),
  }),

  caseStudies: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/case-studies" }),
    schema: baseSchema.extend({
      type: z.string().optional(),
      status: z.string().optional(),
      tools_tech: z.array(z.string()).optional(),
      features: z.array(z.string()).optional(),
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

  podcasts: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/podcasts" }),
    schema: podcastSchema,
  }),
};
