import type { Method } from "../types";
import { CoinIcon, PendulumIcon, CardIcon } from "../components/icons";
import { Logo } from "../components/Logo";

interface Props {
  onSelectMethod: (method: Method) => void;
}

const METHODS: { method: Method; label: string; icon: typeof CoinIcon }[] = [
  { method: "coin", label: "Münze", icon: CoinIcon },
  { method: "pendulum", label: "Pendel", icon: PendulumIcon },
  { method: "card", label: "Karte", icon: CardIcon },
];

export default function HomeScreen({ onSelectMethod }: Props) {
  return (
    <div className="relative flex min-h-dvh flex-col items-center overflow-hidden px-6 py-12">
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[880px] w-[880px] -translate-x-1/2 -translate-y-1/2"
        style={{ clipPath: "inset(0 0 50% 0)" }}
        viewBox="0 0 200 200"
      >
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="4"
          opacity="0.05"
          style={{ filter: "blur(6px)" }}
        />
        <circle cx="100" cy="100" r="90" fill="none" stroke="var(--color-gold)" strokeWidth="1" opacity="0.11" />
      </svg>

      <div className="animate-fade-up pt-4 text-center">
        <Logo className="mx-auto h-16 w-16" />
        <h1 className="mt-3 font-serif text-5xl font-semibold tracking-wide text-gold-light">
          KlarWurf
        </h1>
        <p className="mt-3 text-sm text-muted">
          Entscheidungshilfe für deine Frage
        </p>
      </div>

      <div className="flex w-full max-w-sm flex-1 flex-col justify-center gap-4">
        {METHODS.map(({ method, label, icon: Icon }, i) => (
          <button
            key={method}
            onClick={() => onSelectMethod(method)}
            style={{ animationDelay: `${i * 90}ms` }}
            className="animate-fade-up group flex items-center gap-5 rounded-2xl border border-line bg-surface px-6 py-5 text-left opacity-0 transition-colors duration-300 active:bg-surface-raised"
          >
            <Icon className="h-9 w-9 shrink-0 text-gold transition-transform duration-300 group-active:scale-90" />
            <span className="font-serif text-2xl text-ivory">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
