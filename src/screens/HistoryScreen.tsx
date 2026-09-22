import type { Entry } from "../types";
import { CoinIcon, PendulumIcon, CardIcon } from "../components/icons";

interface Props {
  entries: Entry[];
  onBack: () => void;
  onDelete: (id: string) => void;
  onClearAll: () => void;
}

const METHOD_ICON = {
  coin: CoinIcon,
  pendulum: PendulumIcon,
  card: CardIcon,
};

const REACTION_LABEL: Record<string, string> = {
  up: "Gut",
  down: "Schlecht",
};

function formatTimestamp(iso: string): string {
  return new Date(iso).toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function HistoryScreen({ entries, onBack, onDelete, onClearAll }: Props) {
  return (
    <div className="flex min-h-dvh flex-col px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-gold"
        >
          Zurück
        </button>
        <h2 className="font-serif text-2xl text-gold-light">Verlauf</h2>
        {entries.length > 0 ? (
          <button
            onClick={onClearAll}
            className="text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-gold"
          >
            Leeren
          </button>
        ) : (
          <span className="w-12" />
        )}
      </div>

      {entries.length === 0 ? (
        <p className="mt-16 text-center text-sm text-muted">Noch keine Einträge.</p>
      ) : (
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto">
          {entries.map((entry) => {
            const Icon = METHOD_ICON[entry.method];
            return (
              <div
                key={entry.id}
                className="flex items-start gap-4 rounded-xl border border-line bg-surface px-4 py-4"
              >
                <Icon className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <div className="min-w-0 flex-1">
                  {entry.question && (
                    <p className="truncate text-sm text-ivory">„{entry.question}“</p>
                  )}
                  <p className="font-serif text-lg text-gold-light">{entry.result}</p>
                  <p className="mt-1 text-xs text-muted">
                    {entry.category} · {formatTimestamp(entry.timestamp)}
                    {entry.reaction && ` · ${REACTION_LABEL[entry.reaction] ?? ""}`}
                  </p>
                </div>
                <button
                  onClick={() => onDelete(entry.id)}
                  className="shrink-0 text-xs text-muted transition-colors duration-300 hover:text-gold"
                >
                  Entfernen
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
