import data from "../data.json";
import { Project } from "../types/project";
export const projects: Project[] = data.projects;
export const featuredProjects = projects.slice(0, 3);
export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
