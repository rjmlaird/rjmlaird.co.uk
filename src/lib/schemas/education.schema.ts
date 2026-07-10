import { z } from "zod";

export const educationSchema = z.object({
  institution: z.string().trim(),
  qualification: z.string().trim(),
  field: z.string().trim(),
  startDate: z.string().trim(),
  endDate: z.string().trim().optional(),
  description: z.string().trim().default(""),
  achievements: z.array(z.string().trim()).default([]),
});

export type Education = z.infer<typeof educationSchema>;
