import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.number().optional(),
  title: z.string(),
  description: z.string().optional(),
  tools_tech: z.array(z.string()).optional(),
  features: z.array(z.string()).optional(),
  github: z.string().optional(),
  live: z.string().optional(),
  outcome: z.string().optional(),
  variant: z.enum(["teal", "violet", "coral"]).optional()
});

// Optional: inferred TypeScript type
export type Project = z.infer<typeof ProjectSchema>;