import { useEffect, useState } from "react";
import { flipCoin } from "../lib/random";
import type { CoinMeaning } from "./PrepareScreen";

interface Props {
  onComplete: (result: string, note?: string | null) => void;
  coinMeaning?: CoinMeaning;
}

export default function CoinScreen({ onComplete, coinMeaning }: Props) {
  const [result] = useState(flipCoin);
  const [phase, setPhase] = useState<"spinning" | "revealed">("spinning");

  const meaning =
    result === "Kopf" ? coinMeaning?.heads : coinMeaning?.tails;
  const note = meaning ? meaning : null;

  useEffect(() => {
    const reveal = setTimeout(() => setPhase("revealed"), 1600);
    const complete = setTimeout(() => onComplete(result, note), 2500);
    return () => {
      clearTimeout(reveal);
      clearTimeout(complete);
    };
  }, [onComplete, result, note]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-10 px-6" style={{ perspective: "800px" }}>
      <div
        className={phase === "spinning" ? "animate-coin-flip" : ""}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="flex h-40 w-40 items-center justify-center rounded-full border border-gold-dark shadow-[0_0_36px_rgba(201,166,98,0.25),inset_0_-6px_14px_rgba(0,0,0,0.35),inset_0_4px_10px_rgba(248,236,201,0.5)]"
          style={{
            background:
              "radial-gradient(circle at 34% 28%, var(--color-gold-shine) 0%, var(--color-gold-light) 28%, var(--color-gold) 62%, var(--color-gold-dark) 100%)",
          }}
        >
          {phase === "revealed" ? (
            <span className="font-serif text-4xl font-bold text-ink">{result}</span>
          ) : (
            <div className="h-12 w-12 rounded-full border border-ink/25" />
          )}
        </div>
      </div>

      <div className={`text-center ${phase === "revealed" ? "animate-fade-up" : "opacity-0"}`}>
        <p className="font-serif text-3xl text-gold-light">
          {phase === "revealed" ? result : " "}
        </p>
        {note && <p className="mt-1 text-sm text-muted">{note}</p>}
      </div>
    </div>
  );
}
