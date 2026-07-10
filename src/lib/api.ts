import { z } from "astro:content";

import { experienceItemSchema, type ExperienceItem } from "@/lib/schemas/experience.schema";
import { skillItemSchema, type SkillItem } from "@/lib/schemas/skill.schema";
import { toolItemSchema, type ToolItem } from "@/lib/schemas/tool.schema";

type CollectionName = "experience" | "skills" | "tools";

const collectionSchemas = {
  experience: z.array(experienceItemSchema),
  skills: z.array(skillItemSchema),
  tools: z.array(toolItemSchema),
} as const;

type CollectionMap = {
  experience: ExperienceItem[];
  skills: SkillItem[];
  tools: ToolItem[];
};

async function fetchCollection<T>(collection: CollectionName, base: URL): Promise<T> {
  const res = await fetch(new URL(`/api/${collection}`, base), {
    headers: { accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${collection}: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as T;
}

async function fetchAndParse<K extends CollectionName>(
  collection: K,
  base: URL,
): Promise<CollectionMap[K]> {
  const data = await fetchCollection<unknown>(collection, base);
  return collectionSchemas[collection].parse(data) as CollectionMap[K];
}

export function getCollection<K extends CollectionName>(collection: K, base: URL) {
  return fetchCollection<CollectionMap[K]>(collection, base);
}

export function getCollectionSafe<K extends CollectionName>(collection: K, base: URL) {
  return fetchAndParse(collection, base);
}

export function getExperience(base: URL): Promise<ExperienceItem[]> {
  return fetchAndParse("experience", base);
}

export function getSkills(base: URL): Promise<SkillItem[]> {
  return fetchAndParse("skills", base);
}

export function getTools(base: URL): Promise<ToolItem[]> {
  return fetchAndParse("tools", base);
}
