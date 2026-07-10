import { z } from "astro/zod";

export const experienceModeSchema = z.enum([
  "agency",
  "company",
  "freelance",
  "programme",
  "non_profit",
  "network",
  "research",
  "university",
  "education",
  "government",
  "local_authority",
  "media",
  "consortium",
  "school",
  "internship",
  "outreach",
  "independent",
]);

export const employmentTypeSchema = z.enum([
  "founder",
  "employee",
  "contract",
  "freelance",
  "internship",
  "research",
  "academic",
  "career_break",
]);

export const workModeSchema = z.enum(["remote", "hybrid", "onsite"]);

const urlField = () => z.string().trim().pipe(z.url());

export const experienceLinkSchema = z.object({
  label: z.string().trim(),
  url: urlField(),
});

export const organisationSchema = z.object({
  id: z.string().trim(),
  name: z.string().trim(),
  slug: z.string().trim(),
  type: experienceModeSchema.optional(),
  website: urlField().optional(),
});

export const experienceImpactSchema = z.object({
  metric: z.string().trim(),
  value: z.union([z.string(), z.number()]),
  context: z.string().trim().optional(),
});

export const experienceMediaSchema = z.object({
  type: z.enum(["image", "video", "article"]),
  url: urlField(),
  caption: z.string().trim().optional(),
});

export const experienceItemSchema = z.object({
  id: z.string().trim(),
  organisation: z.union([organisationSchema, z.string().trim()]),
  role: z.string().trim(),
  employmentType: employmentTypeSchema,
  organisationType: experienceModeSchema.optional(),
  location: z.string().trim(),
  workMode: workModeSchema,
  summary: z.string().trim(),
  responsibilities: z.array(z.string().trim()).default([]),
  skills: z.array(z.string().trim()).default([]),
  links: z.array(experienceLinkSchema).optional(),
  organisationSlug: z.string().trim().optional(),
  hubspotId: z.string().trim().optional(),
  keywords: z.array(z.string().trim()).optional(),
  startDate: z.string().trim(),
  endDate: z.string().trim().nullable().optional(),
  isCurrent: z.boolean().optional(),
  impact: z.array(experienceImpactSchema).optional(),
  media: z.array(experienceMediaSchema).optional(),
  order: z.number().int().optional(),
});

export const experienceResponseSchema = z.object({
  data: z.array(experienceItemSchema),
  meta: z
    .object({
      total: z.number().int(),
      generatedAt: z.string().trim(),
      version: z.string().trim(),
    })
    .optional(),
});

export type ExperienceMode = z.infer<typeof experienceModeSchema>;
export type EmploymentType = z.infer<typeof employmentTypeSchema>;
export type WorkMode = z.infer<typeof workModeSchema>;
export type ExperienceLink = z.infer<typeof experienceLinkSchema>;
export type Organisation = z.infer<typeof organisationSchema>;
export type ExperienceImpact = z.infer<typeof experienceImpactSchema>;
export type ExperienceMedia = z.infer<typeof experienceMediaSchema>;
export type ExperienceItem = z.infer<typeof experienceItemSchema>;
export type ExperienceResponse = z.infer<typeof experienceResponseSchema>;
