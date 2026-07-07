// tool.schema.ts

export interface ToolItem {
  name: string;
  url: string;
  logo: string;
  color: string;
  logoColor?: string;
}

export interface ToolCategory {
  name: string;
  items: ToolItem[];
}

export interface TechStack {
  categories: ToolCategory[];
}

export const techStackSchema = {
  categories: [
    {
      name: "Languages",
      items: [
        {
          name: "HTML",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
          logo: "html5",
          color: "E34F26",
        },
      ],
    },
  ],
} satisfies TechStack;
