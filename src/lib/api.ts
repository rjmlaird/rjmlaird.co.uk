import { z } from 'astro/zod';

import { experienceItemSchema, type ExperienceItem } from '@/lib/schemas/experience.schema';
import { educationItemSchema, type EducationItem } from '@/lib/schemas/education.schema';
import { skillItemSchema, type SkillItem } from '@/lib/schemas/skill.schema';
import { certificationItemSchema, type CertificationItem } from '@/lib/schemas/certification.schema';
import { membershipItemSchema, type MembershipItem } from '@/lib/schemas/membership.schema';
import { awardItemSchema, type AwardItem } from '@/lib/schemas/award.schema';
import { languageItemSchema, type LanguageItem } from '@/lib/schemas/languages.schema';

const API_BASE = 'https://api.rjmlaird.co.uk/api';

type ApiCollectionName =
  | 'awards'
  | 'education'
  | 'memberships'
  | 'certifications'
  | 'experience'
  | 'languages'
  | 'skills';

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

const experienceResponseSchema = z.array(experienceItemSchema);
const educationResponseSchema = z.array(educationItemSchema);
const skillsResponseSchema = z.array(skillItemSchema);
const certificationsResponseSchema = z.array(certificationItemSchema);
const membershipsResponseSchema = z.array(membershipItemSchema);
const awardsResponseSchema = z.array(awardItemSchema);
const languagesResponseSchema = z.array(languageItemSchema);

export function getExperience(): Promise<ExperienceItem[]> {
  return fetchAndParse('experience', experienceResponseSchema);
}

export function getEducation(): Promise<EducationItem[]> {
  return fetchAndParse('education', educationResponseSchema);
}

export function getSkills(): Promise<SkillItem[]> {
  return fetchAndParse('skills', skillsResponseSchema);
}

export function getCertifications(): Promise<CertificationItem[]> {
  return fetchAndParse('certifications', certificationsResponseSchema);
}

export function getMemberships(): Promise<MembershipItem[]> {
  return fetchAndParse('memberships', membershipsResponseSchema);
}

export function getAwards(): Promise<AwardItem[]> {
  return fetchAndParse('awards', awardsResponseSchema);
}

export function getLanguages(): Promise<LanguageItem[]> {
  return fetchAndParse('languages', languagesResponseSchema);
}
