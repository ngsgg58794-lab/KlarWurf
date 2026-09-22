import { useState } from "react";
import type { Method } from "../types";
import { CATEGORIES } from "../types";

interface Props {
  method: Method;
  onBack: () => void;
  onStart: (category: string, question: string) => void;
}

const START_LABEL: Record<Method, string> = {
  coin: "Wurf starten",
  pendulum: "Pendel starten",
  card: "Karte ziehen",
};

export default function PrepareScreen({ method, onBack, onStart }: Props) {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState<string>(CATEGORIES[3]);

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
          Denke fest an deine Frage, atme einmal tief ein und aus.
        </p>

        <div className="animate-fade-up w-full space-y-4">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Deine Frage (optional)"
            className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-center text-sm text-ivory placeholder:text-muted focus:border-gold focus:outline-none"
          />

          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full border px-4 py-1.5 text-xs transition-colors duration-300 ${
                  category === cat
                    ? "border-gold bg-gold/10 text-gold-light"
                    : "border-line text-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => onStart(category, question.trim())}
        className="w-full max-w-sm rounded-2xl bg-gold px-6 py-4 font-serif text-xl font-semibold text-ink transition-transform duration-300 active:scale-95"
      >
        {START_LABEL[method]}
      </button>
    </div>
  );
}
