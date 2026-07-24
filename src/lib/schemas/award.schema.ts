import { z } from "zod";

export const awardSchema = z.object({
  title: z.string().trim(),
  issuer: z.string().trim(),
  date: z.string().trim(),
  description: z.string().trim().default(""),
  category: z.string().trim().optional(),
  url: z.url().optional(),
  featured: z.boolean().default(false),
});

export type Award = z.infer<typeof awardSchema>;
