import { useEffect, useState } from "react";
import { swingPendulum, type PendulumAnswer } from "../lib/random";

interface Props {
  onComplete: (result: string) => void;
}

const SWING_ANGLE: Record<PendulumAnswer, string> = {
  Ja: "34deg",
  Nein: "-34deg",
  Unklar: "12deg",
};

export default function PendulumScreen({ onComplete }: Props) {
  const [result] = useState<PendulumAnswer>(swingPendulum);
  const [phase, setPhase] = useState<"swinging" | "revealed">("swinging");

  useEffect(() => {
    const reveal = setTimeout(() => setPhase("revealed"), 2200);
    const complete = setTimeout(() => onComplete(result), 3100);
    return () => {
      clearTimeout(reveal);
      clearTimeout(complete);
    };
  }, [onComplete, result]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-12 px-6">
      <svg viewBox="0 0 200 200" className="h-56 w-56 overflow-visible">
        <line x1="40" y1="20" x2="160" y2="20" stroke="#2a2620" strokeWidth="3" strokeLinecap="round" />
        <g
          className={phase === "swinging" ? "animate-pendulum" : ""}
          style={{
            transformOrigin: "100px 20px",
            transform: phase === "revealed" ? `rotate(calc(${SWING_ANGLE[result]} * 0.5))` : undefined,
            ["--swing-angle" as string]: SWING_ANGLE[result],
          }}
        >
          <line x1="100" y1="20" x2="100" y2="140" stroke="#d4af37" strokeWidth="2" />
          <circle cx="100" cy="152" r="14" fill="#d4af37" />
        </g>
      </svg>

      <p className={`font-serif text-3xl text-gold-light ${phase === "revealed" ? "animate-fade-up" : "opacity-0"}`}>
        {phase === "revealed" ? result : " "}
      </p>
    </div>
  );
}
