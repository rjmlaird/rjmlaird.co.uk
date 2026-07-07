import { z } from 'astro/zod';

import { projectItemSchema, type ProjectItem } from '@/lib/schemas/project.schema';
import { skillItemSchema, type SkillItem } from '@/lib/schemas/skill.schema';
import { toolItemSchema, type ToolItem } from '@/lib/schemas/tool.schema';

const API_BASE = 'https://api.rjmlaird.co.uk/api';

type ApiCollectionName = 'projects' | 'skills' | 'tools';

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

const projectsResponseSchema = z.array(projectItemSchema);
const skillsResponseSchema = z.array(skillItemSchema);
const toolsResponseSchema = z.array(toolItemSchema);

export function getProjects(): Promise<ProjectItem[]> {
  return fetchAndParse('projects', projectsResponseSchema);
}

export function getSkills(): Promise<SkillItem[]> {
  return fetchAndParse('skills', skillsResponseSchema);
}

export function getTools(): Promise<ToolItem[]> {
  return fetchAndParse('tools', toolsResponseSchema);
}
