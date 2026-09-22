import { useState } from "react";
import type { Entry, Reaction } from "../types";

interface Props {
  entry: Entry;
  onReact: (reaction: Reaction) => void;
  onRestart: () => void;
  onShowHistory: () => void;
}

const FEEDBACK: Record<"up" | "down", string> = {
  up: "Deine Intuition ist bestätigt.",
  down: "Dann kanntest du die Antwort wohl schon.",
};

export default function ResultScreen({ entry, onReact, onRestart, onShowHistory }: Props) {
  const [reaction, setReaction] = useState<Reaction>(entry.reaction);

  function handleReact(next: "up" | "down") {
    setReaction(next);
    onReact(next);
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-between px-6 py-12">
      <div className="w-full max-w-sm flex-1 flex flex-col items-center justify-center gap-6 text-center">
        {entry.question && (
          <p className="animate-fade-up text-sm text-muted">„{entry.question}“</p>
        )}

        <p className="animate-fade-up font-serif text-5xl font-semibold leading-tight text-gold-light">
          {entry.result}
        </p>

        <div className="animate-fade-up mt-6 w-full">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">
            Wie fühlt sich das an?
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleReact("up")}
              className={`rounded-xl border px-6 py-3 text-sm transition-colors duration-300 ${
                reaction === "up"
                  ? "border-gold bg-gold/10 text-gold-light"
                  : "border-line text-ivory"
              }`}
            >
              Gut
            </button>
            <button
              onClick={() => handleReact("down")}
              className={`rounded-xl border px-6 py-3 text-sm transition-colors duration-300 ${
                reaction === "down"
                  ? "border-gold bg-gold/10 text-gold-light"
                  : "border-line text-ivory"
              }`}
            >
              Schlecht
            </button>
          </div>

          {(reaction === "up" || reaction === "down") && (
            <p className="animate-fade-up mt-4 text-sm text-muted">
              {FEEDBACK[reaction]}
            </p>
          )}
        </div>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-3">
        <button
          onClick={onRestart}
          className="w-full rounded-2xl bg-gold px-6 py-4 font-serif text-xl font-semibold text-ink transition-transform duration-300 active:scale-95"
        >
          Neue Frage
        </button>
        <button
          onClick={onShowHistory}
          className="text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-gold"
        >
          Verlauf ansehen
        </button>
      </div>
    </div>
  );
}
