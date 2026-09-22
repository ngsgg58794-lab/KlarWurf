export type Method = "coin" | "pendulum" | "card";

export type Reaction = "up" | "neutral" | "down" | null;

export interface Entry {
  id: string;
  category: string;
  question: string;
  method: Method;
  result: string;
  reaction: Reaction;
  note: string | null;
  timestamp: string;
}

