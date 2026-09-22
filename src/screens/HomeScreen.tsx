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
    <div className="flex min-h-dvh flex-col items-center px-6 py-12">
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
