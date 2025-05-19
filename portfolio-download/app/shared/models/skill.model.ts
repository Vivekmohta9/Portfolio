export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'cloud' | 'tools' | 'other';
}
