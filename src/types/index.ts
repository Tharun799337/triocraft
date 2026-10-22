export type ProjectCategory = 
  | 'All Projects'
  | 'Web Development'
  | 'AI / Machine Learning'
  | 'Generative AI'
  | 'Agentic AI'
  | 'Chrome Extensions'
  | 'Automation';

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All Projects'>;
  shortDescription: string;
  overview: string;
  problemSolved: string;
  solutionImplemented: string;
  keyFeatures: string[];
  techStack: string[];
  architectureNote?: string;
  challengesAndSolutions: ProjectChallenge[];
  image: string;
  imageAlt: string;
  demoUrl?: string;
  githubUrl?: string;
  status: 'Live Demo Available' | 'Case Study & Architecture Breakdown' | 'Client Prototype' | 'Preview Available';
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  businessBenefit: string;
  deliverables: string[];
  techStack: string[];
  iconName: string;
  popular?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  category: string;
  content: string[];
  tags: string[];
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  verified: boolean;
}
