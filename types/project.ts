export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  stacks: string[];
  category: string;
  overview: string;
  features: string[];
  focus: string;
  kind: string;
  url: string;
  github?: string;
  appUrl?: string;
  videoUrl?: string;
  previewUrl?: string;
}
