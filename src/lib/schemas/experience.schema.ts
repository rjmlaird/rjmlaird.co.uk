export type ExperienceType =
  | "agency"
  | "company"
  | "freelance"
  | "programme"
  | "non_profit"
  | "network"
  | "research_organisation"
  | "university"
  | "education_programme"
  | "government"
  | "local_authority"
  | "media"
  | "consortium"
  | "school"
  | "internship"
  | "outreach";

export type CompanyType =
  | "agency"
  | "company"
  | "programme"
  | "contract"
  | "network"
  | "non_profit"
  | "research_centre"
  | "university"
  | "school"
  | "government"
  | "consortium"
  | "media"
  | "education_programme";

export interface ExperienceLink {
  label: string;
  url: string;
}

export interface ExperienceItem {
  /** Unique identifier for ordering and references */
  id: number | string;

  /** Date range (human readable for CV rendering) */
  date: string;

  /** Job title / role */
  title: string;

  /** Organisation name */
  company: string;

  /** Optional classification of organisation */
  companyType?: CompanyType;

  /** Optional sector classification */
  type?: ExperienceType;

  /** Location of role */
  location: string;

  /** Short summary of role */
  summary: string;

  /** Key responsibilities / outputs */
  responsibilities: string[];

  /** Skills demonstrated or used in role */
  skills: string[];

  /** Optional external links */
  links?: ExperienceLink[];

  /** Optional metadata for graph linking */
  organisationSlug?: string;

  /** Optional CMS / CRM integration */
  hubspotId?: string;

  /** Optional tags for search + filtering */
  keywords?: string[];

  /** Optional date parsing for analytics */
  startDate?: string; // ISO
  endDate?: string;   // ISO | "present"

  /** Optional impact metrics (future-proofing) */
  impact?: {
    metric: string;
    value: string | number;
  }[];

  /** Optional media references */
  media?: {
    type: "image" | "video" | "article";
    url: string;
    caption?: string;
  }[];
}

export interface ExperienceSchema {
  experience: ExperienceItem[];
}