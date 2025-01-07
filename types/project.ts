export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stacks: string[];
  url: string;
  github: string;
  prev?: string;
  next?: string;
} 