export interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  fullDescription?: string;
  techStack?: string[];
}
