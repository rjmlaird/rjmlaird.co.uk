import { z } from "astro/zod";

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

function resolveBase(base: string | URL): URL {
  if (base instanceof URL) return base;
  if (base.length > 0) return new URL(base);
  throw new Error("Missing base URL. Pass Astro.url or an absolute URL.");
}

async function fetchCollection<T>(collection: CollectionName, base: string | URL): Promise<T> {
  const url = new URL(`/api/${collection}`, resolveBase(base));

  const res = await fetch(url, {
    headers: { accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${collection}: ${res.status} ${res.statusText}`);
  }

  return (await res.json()) as T;
}

async function fetchAndParse<K extends CollectionName>(
  collection: K,
  base: string | URL,
): Promise<CollectionMap[K]> {
  const data = await fetchCollection<unknown>(collection, base);
  return collectionSchemas[collection].parse(data) as CollectionMap[K];
}

export function getCollection<K extends CollectionName>(
  collection: K,
  base: string | URL,
): Promise<CollectionMap[K]> {
  return fetchCollection<CollectionMap[K]>(collection, base);
}

export function getCollectionSafe<K extends CollectionName>(
  collection: K,
  base: string | URL,
): Promise<CollectionMap[K]> {
  return fetchAndParse(collection, base);
}

export function getExperience(base: string | URL): Promise<ExperienceItem[]> {
  return fetchAndParse("experience", base);
}

export function getSkills(base: string | URL): Promise<SkillItem[]> {
  return fetchAndParse("skills", base);
}

export function getTools(base: string | URL): Promise<ToolItem[]> {
  return fetchAndParse("tools", base);
}
