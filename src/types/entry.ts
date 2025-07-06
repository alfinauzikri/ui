export interface FrameworkEntry {
  name: string;
  demo: string;
  repo: string;
}

export interface UIEntry {
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  frameworks: FrameworkEntry[];
  stargazers_count?: number;
}
