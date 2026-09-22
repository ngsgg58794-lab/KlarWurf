export function flipCoin(): "Kopf" | "Zahl" {
  return Math.random() < 0.5 ? "Kopf" : "Zahl";
}

export type PendulumAnswer = "Ja" | "Nein" | "Unklar";

export function swingPendulum(): PendulumAnswer {
  const roll = Math.random();
  if (roll < 0.4) return "Ja";
  if (roll < 0.8) return "Nein";
  return "Unklar";
}

export function drawCard<T>(deck: readonly T[]): T {
  const index = Math.floor(Math.random() * deck.length);
  return deck[index];
}
