import { z } from "zod";

export const experienceSchema = z.object({
  organisation: z.string(),

  title: z.string(),

  location: z.string(),

  employmentType: z.string(),

  startDate: z.string(),

  endDate: z.string().optional(),

  current: z.boolean().default(false),

  description: z.string(),

  achievements: z.array(z.string()).default([]),

  skills: z.array(z.string()).default([]),
});

export type Experience = z.infer<typeof experienceSchema>;