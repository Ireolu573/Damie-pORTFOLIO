export type ThemeId = "rose" | "berry" | "lilac" | "peach" | "sage" | "night";

export interface Item {
  title?: string;
  image?: string;
  videoUrl?: string;
}

export interface Group {
  name: string;
  items: Item[];
}

export interface Site {
  brand: string;
  headline: string;
  tagline: string;
  instagram: string;
  linkedin: string;
  theme: ThemeId;
  avatar?: string;
  reel: { cover?: string; video?: string; link?: string };
  contact: { phone?: string; whatsapp?: string; email?: string };
  bio: string[];
  facts: { label: string; value: string }[];
  groups: Group[];
}
