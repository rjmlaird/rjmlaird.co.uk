import { z } from 'astro/zod';

import { experienceItemSchema, type ExperienceItem } from '@/lib/schemas/experience.schema';
import { projectItemSchema, projectsSchema, type ProjectsSchema } from '@/lib/schemas/project.schema';
import { skillItemSchema, type SkillItem } from '@/lib/schemas/skill.schema';
import { toolItemSchema, type ToolItem } from '@/lib/schemas/tool.schema';

const API_BASE = 'https://api.rjmlaird.co.uk/api';

type ApiCollectionName = 'experience' | 'projects' | 'skills' | 'tools';

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}/${path}`, {
    headers: { accept: '*/*' },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

async function fetchAndParse<T>(path: string, schema: z.ZodType<T>): Promise<T> {
  const data = await fetchJson<unknown>(path);
  return schema.parse(data);
}

export function getCollection<T>(collection: ApiCollectionName) {
  return fetchJson<T>(collection);
}

export function getCollectionSafe<T>(collection: ApiCollectionName) {
  return fetchJson<T>(collection);
}

const experienceResponseSchema = z.array(experienceItemSchema);
const skillsResponseSchema = z.array(skillItemSchema);
const toolsResponseSchema = z.array(toolItemSchema);

export function getExperience(): Promise<ExperienceItem[]> {
  return fetchAndParse('experience', experienceResponseSchema);
}

export function getProjects(): Promise<ProjectsSchema> {
  return fetchAndParse('projects', projectsSchema);
}

export function getSkills(): Promise<SkillItem[]> {
  return fetchAndParse('skills', skillsResponseSchema);
}

export function getTools(): Promise<ToolItem[]> {
  return fetchAndParse('tools', toolsResponseSchema);
}
