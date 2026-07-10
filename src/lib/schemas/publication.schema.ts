import { z } from "zod";
import { baseSchema } from "./base.schema";

export const publicationSchema = baseSchema.extend({
  outlet: z.string().trim(),
  type: z.enum(["Article", "Podcast", "Interview", "Paper", "Press Release"]),
  author: z.string().trim(),
  published: z.string().trim(),
  url: z.string().trim().pipe(z.url()),
});

export type Publication = z.infer<typeof publicationSchema>;
