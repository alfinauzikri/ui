import type { UIEntry } from '@/types/entry';

const modules = import.meta.glob<true, string, UIEntry>('/data/*.json', {
  eager: true,
});

export const entries: UIEntry[] = Object.values(modules);
