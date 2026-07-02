import { z } from "zod";

export const organisationSchema = z.object({
  name: z.string(),

  shortName: z.string().optional(),

  website: z.string().url().optional(),

  logo: z.string().optional(),

  description: z.string(),

  sector: z.string(),

  location: z.string(),

  memberships: z.array(z.string()).default([]),
});

export type Organisation = z.infer<typeof organisationSchema>;