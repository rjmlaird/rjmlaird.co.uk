import { defineCollection, z } from "astro:content";

export const blogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  excerpt: z.string().optional(),
  date: z.coerce.date(),
  tag: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  author: z.string().optional(),
  image: z.string().optional(),
  imageCredit: z.string().optional(),
  slug: z.string().optional(),
});
