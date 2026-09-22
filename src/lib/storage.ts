import type { Entry } from "../types";

const STORAGE_KEY = "klarwurf.entries";

function safeParse(raw: string | null): Entry[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveEntry(entry: Entry): void {
  const entries = safeParse(localStorage.getItem(STORAGE_KEY));
  entries.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function updateEntry(id: string, changes: Partial<Entry>): void {
  const entries = safeParse(localStorage.getItem(STORAGE_KEY));
  const next = entries.map((entry) =>
    entry.id === id ? { ...entry, ...changes } : entry,
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}
