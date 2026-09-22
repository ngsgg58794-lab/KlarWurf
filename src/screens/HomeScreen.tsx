import type { Method } from "../types";
import { CoinIcon, PendulumIcon, CardIcon } from "../components/icons";

interface Props {
  onSelectMethod: (method: Method) => void;
  onShowHistory: () => void;
  hasHistory: boolean;
}

const METHODS: { method: Method; label: string; icon: typeof CoinIcon }[] = [
  { method: "coin", label: "Münze", icon: CoinIcon },
  { method: "pendulum", label: "Pendel", icon: PendulumIcon },
  { method: "card", label: "Karte", icon: CardIcon },
];

export default function HomeScreen({ onSelectMethod, onShowHistory, hasHistory }: Props) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-between px-6 py-12">
      <div className="animate-fade-up text-center">
        <h1 className="font-serif text-5xl font-semibold tracking-wide text-gold-light">
          KlarWurf
        </h1>
        <p className="mt-3 text-sm text-muted">
          Ein Moment der Klarheit für deine Frage
        </p>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-4">
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

      <button
        onClick={onShowHistory}
        disabled={!hasHistory}
        className="mt-10 text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 disabled:opacity-0 enabled:hover:text-gold"
      >
        Verlauf ansehen
      </button>
    </div>
  );
}
