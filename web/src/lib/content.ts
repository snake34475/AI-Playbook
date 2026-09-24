import library from '../../../data/prompts.json';

export type LibraryItem = (typeof library.items)[number];

export const items = library.items as LibraryItem[];
export const categories = [...new Set(items.map((item) => item.category))];
export const typeLabels: Record<string, string> = {
  prompt: 'Prompt',
  skill: 'Skill',
  workflow: 'Workflow'
};
