import { useState } from "react";
import type { Method } from "../types";

const DEFAULT_CATEGORY = "Allgemein";

export interface CoinMeaning {
  heads: string;
  tails: string;
}

interface Props {
  method: Method;
  onBack: () => void;
  onStart: (category: string, question: string, coinMeaning?: CoinMeaning) => void;
}

const START_LABEL: Record<Method, string> = {
  coin: "Wurf starten",
  pendulum: "Pendel starten",
  card: "Karte ziehen",
};

const ANSAGE: Record<Method, string> = {
  coin: "Denke fest an deine Frage, atme einmal tief ein und aus und starte dann den Wurf.",
  pendulum:
    "Denke fest an deine Frage, atme einmal tief ein und aus und starte dann das Pendel.",
  card: "Denke fest an deine Frage, atme einmal tief ein und aus und ziehe dann deine Karte.",
};

export default function PrepareScreen({ method, onBack, onStart }: Props) {
  const [question, setQuestion] = useState("");
  const [headsMeaning, setHeadsMeaning] = useState("");
  const [tailsMeaning, setTailsMeaning] = useState("");

  return (
    <div className="flex min-h-dvh flex-col items-center justify-between px-6 py-12">
      <button
        onClick={onBack}
        className="self-start text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-gold"
      >
        Zurück
      </button>

      <div className="flex w-full max-w-sm flex-1 flex-col items-center justify-center gap-8 text-center">
        <div className="animate-breathe h-20 w-20 rounded-full border border-gold/60" />

        <p className="animate-fade-up font-serif text-2xl leading-relaxed text-ivory">
          {ANSAGE[method]}
        </p>

        <div className="animate-fade-up w-full space-y-4">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Deine Frage (optional)"
            className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-center text-sm text-ivory placeholder:text-muted focus:border-gold focus:outline-none"
          />

          {method === "coin" && (
            <div className="flex gap-3">
              <input
                value={headsMeaning}
                onChange={(e) => setHeadsMeaning(e.target.value)}
                placeholder="Kopf bedeutet …"
                className="w-1/2 rounded-xl border border-line bg-surface px-3 py-2.5 text-center text-xs text-ivory placeholder:text-muted focus:border-gold focus:outline-none"
              />
              <input
                value={tailsMeaning}
                onChange={(e) => setTailsMeaning(e.target.value)}
                placeholder="Zahl bedeutet …"
                className="w-1/2 rounded-xl border border-line bg-surface px-3 py-2.5 text-center text-xs text-ivory placeholder:text-muted focus:border-gold focus:outline-none"
              />
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() =>
          onStart(
            DEFAULT_CATEGORY,
            question.trim(),
            method === "coin"
              ? { heads: headsMeaning.trim(), tails: tailsMeaning.trim() }
              : undefined,
          )
        }
        className="w-full max-w-sm rounded-2xl bg-gold px-6 py-4 font-serif text-xl font-semibold text-ink transition-transform duration-300 active:scale-95"
      >
        {START_LABEL[method]}
      </button>
    </div>
  );
}
