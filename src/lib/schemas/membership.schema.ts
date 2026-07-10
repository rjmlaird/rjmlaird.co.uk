export type MembershipType =
  | "chartered_body"
  | "professional_body"
  | "scientific_body"
  | "security_body"
  | "industry_association"
  | "climate_network"
  | "research_network"
  | "media_network"
  | "creative_network"
  | "space_network"
  | "urban_network"
  | "sustainability_network"
  | "business_association"
  | "startup_network"
  | "community_network"
  | "ethics_framework"
  | "education_network"
  | "framework_network"
  | "economic_network"
  | "advocacy_network"
  | "climate_lab"
  | "industry_initiative"
  | "nonprofit_network"
  | "ethics_network"
  | "business_climate_network"
  | "urban_innovation_network";

export type MembershipRole =
  | "Member"
  | "Associate Member"
  | "Certified Member"
  | "Fellow"
  | "Chartered Marketer (CMktr)"
  | "Supporter"
  | string;

export type MembershipItem = {
  organisation: string;
  slug: string;
  organisationSlug: string;
  role: MembershipRole;
  type: MembershipType;
  description?: string;
  keywords?: string[];
  links?: {
    website?: string;
    profile?: string;
  };
  activeFrom?: string;
  activeTo?: string;
  verified?: boolean;
};

export type MembershipGroup = {
  title: string;
  items: MembershipItem[];
};

export type MembershipSchema = {
  memberships: MembershipGroup[];
};
