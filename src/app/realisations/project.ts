export interface Screenshot {
  imageUrl: string;
  alt: string;
  label: string;
}

export interface Difficulty {
  difficulty: string;
  solution: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  period: string;
  mainTags: string[];
  imageUrl: string;
  imageAlt: string;
  screenshots: Screenshot[];
  context: string;
  features: string[];
  stack: string[];
  difficulties: Difficulty[];
  lessons: string[];
  githubUrl: string;
  demoUrl: string;
  isPlaceholder: boolean;
}
