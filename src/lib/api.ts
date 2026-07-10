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

async function fetchCollection<T>(collection: CollectionName): Promise<T> {
  const res = await fetch(`/api/${collection}`, {
    headers: { accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${collection}: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as T;
}

async function fetchAndParse<K extends CollectionName>(
  collection: K,
): Promise<CollectionMap[K]> {
  const data = await fetchCollection<unknown>(collection);
  return collectionSchemas[collection].parse(data) as CollectionMap[K];
}

export function getCollection<K extends CollectionName>(collection: K) {
  return fetchCollection<CollectionMap[K]>(collection);
}

export function getCollectionSafe<K extends CollectionName>(collection: K) {
  return fetchAndParse(collection);
}

export function getExperience(): Promise<ExperienceItem[]> {
  return fetchAndParse("experience");
}

export function getSkills(): Promise<SkillItem[]> {
  return fetchAndParse("skills");
}

export function getTools(): Promise<ToolItem[]> {
  return fetchAndParse("tools");
}
