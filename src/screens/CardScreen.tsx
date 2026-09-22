import { useEffect, useState } from "react";
import { drawCard } from "../lib/random";
import { CARDS } from "../data/cards";

interface Props {
  onComplete: (result: string) => void;
}

export default function CardScreen({ onComplete }: Props) {
  const [result] = useState(() => drawCard(CARDS));
  const [phase, setPhase] = useState<"hidden" | "flipping" | "revealed">("hidden");

  useEffect(() => {
    const flip = setTimeout(() => setPhase("flipping"), 500);
    const reveal = setTimeout(() => setPhase("revealed"), 1100);
    const complete = setTimeout(() => onComplete(result), 2400);
    return () => {
      clearTimeout(flip);
      clearTimeout(reveal);
      clearTimeout(complete);
    };
  }, [onComplete, result]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-10 px-6" style={{ perspective: "1000px" }}>
      <div
        className={`flex h-72 w-48 items-center justify-center rounded-2xl border-2 border-gold p-6 text-center shadow-[0_0_50px_rgba(212,175,55,0.2)] ${
          phase === "flipping" || phase === "revealed" ? "animate-card-reveal" : ""
        } ${phase === "hidden" ? "bg-surface-raised" : "bg-gradient-to-br from-surface-raised to-ink"}`}
      >
        {phase === "hidden" ? (
          <div className="h-20 w-20 rounded-full border border-gold/50" />
        ) : (
          <p className="font-serif text-xl leading-snug text-gold-light">{result}</p>
        )}
      </div>
    </div>
  );
}
