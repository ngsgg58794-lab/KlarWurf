import { useEffect, useState } from "react";
import { flipCoin } from "../lib/random";

interface Props {
  onComplete: (result: string) => void;
}

export default function CoinScreen({ onComplete }: Props) {
  const [result] = useState(flipCoin);
  const [phase, setPhase] = useState<"spinning" | "revealed">("spinning");

  useEffect(() => {
    const reveal = setTimeout(() => setPhase("revealed"), 1600);
    const complete = setTimeout(() => onComplete(result), 2500);
    return () => {
      clearTimeout(reveal);
      clearTimeout(complete);
    };
  }, [onComplete, result]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-10 px-6" style={{ perspective: "800px" }}>
      <div
        className={phase === "spinning" ? "animate-coin-flip" : ""}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-gold bg-gradient-to-br from-gold-light via-gold to-gold-dark shadow-[0_0_40px_rgba(212,175,55,0.35)]">
          <span
            className={`text-4xl font-bold text-ink ${
              phase === "revealed" ? "font-serif" : "font-sans"
            }`}
          >
            {phase === "revealed" ? result : "?"}
          </span>
        </div>
      </div>

      <p className={`font-serif text-3xl text-gold-light ${phase === "revealed" ? "animate-fade-up" : "opacity-0"}`}>
        {phase === "revealed" ? result : " "}
      </p>
    </div>
  );
}
