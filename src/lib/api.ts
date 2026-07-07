import { z } from 'astro/zod';

import { certificationItemSchema, type CertificationItem } from '@/lib/schemas/certification.schema';
import { educationItemSchema, type EducationItem } from '@/lib/schemas/education.schema';
import { experienceItemSchema, type ExperienceItem } from '@/lib/schemas/experience.schema';
import { languageItemSchema, type LanguageItem } from '@/lib/schemas/languages.schema';
import { membershipItemSchema, type MembershipItem } from '@/lib/schemas/membership.schema';
import { projectItemSchema, type ProjectItem } from '@/lib/schemas/project.schema';
import { skillItemSchema, type SkillItem } from '@/lib/schemas/skill.schema';
import { toolItemSchema, type ToolItem } from '@/lib/schemas/tool.schema';

const API_BASE = 'https://api.rjmlaird.co.uk/api';

type ApiCollectionName =
  | 'certifications'
  | 'education'
  | 'experience'
  | 'languages'
  | 'memberships'
  | 'projects'
  | 'skills'
  | 'tools';

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

const certificationsResponseSchema = z.array(certificationItemSchema);
const educationResponseSchema = z.array(educationItemSchema);
const experienceResponseSchema = z.array(experienceItemSchema);
const languagesResponseSchema = z.array(languageItemSchema);
const membershipsResponseSchema = z.array(membershipItemSchema);
const projectsResponseSchema = z.array(projectItemSchema);
const skillsResponseSchema = z.array(skillItemSchema);
const toolsResponseSchema = z.array(toolItemSchema);

export function getAwards(): Promise<AwardItem[]> {
  return fetchAndParse('awards', awardsResponseSchema);
}

export function getCertifications(): Promise<CertificationItem[]> {
  return fetchAndParse('certifications', certificationsResponseSchema);
}

export function getEducation(): Promise<EducationItem[]> {
  return fetchAndParse('education', educationResponseSchema);
}

export function getExperience(): Promise<ExperienceItem[]> {
  return fetchAndParse('experience', experienceResponseSchema);
}

export function getLanguages(): Promise<LanguageItem[]> {
  return fetchAndParse('languages', languagesResponseSchema);
}

export function getMemberships(): Promise<MembershipItem[]> {
  return fetchAndParse('memberships', membershipsResponseSchema);
}

export function getProjects(): Promise<ProjectItem[]> {
  return fetchAndParse('projects', projectsResponseSchema);
}

export function getSkills(): Promise<SkillItem[]> {
  return fetchAndParse('skills', skillsResponseSchema);
}

export function getTools(): Promise<ToolItem[]> {
  return fetchAndParse('tools', toolsResponseSchema);
}
