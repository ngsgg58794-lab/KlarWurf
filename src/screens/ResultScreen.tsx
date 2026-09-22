import { useRef, useState } from "react";
import type { Entry, Reaction } from "../types";

interface Props {
  entry: Entry;
  onReact: (reaction: Reaction) => void;
  onNoteChange: (note: string | null) => void;
  onRestart: () => void;
}

const FEEDBACK: Record<"up" | "down", string> = {
  up: "Deine Intuition ist bestätigt.",
  down: "Dann kanntest du die Antwort wohl schon.",
};

const FEEDBACK_UNKLAR: Record<"up" | "down", string> = {
  up: "Auch eine unklare Antwort ist eine Antwort.",
  down: "Dann ist es vielleicht noch zu früh dafür.",
};

export default function ResultScreen({ entry, onReact, onNoteChange, onRestart }: Props) {
  const [reaction, setReaction] = useState<Reaction>(entry.reaction);
  const [note, setNote] = useState(entry.note ?? "");
  const [noteOpen, setNoteOpen] = useState(Boolean(entry.note));
  const noteRef = useRef<HTMLTextAreaElement>(null);
  const feedback = entry.result === "Unklar" ? FEEDBACK_UNKLAR : FEEDBACK;

  function handleReact(next: "up" | "down") {
    setReaction(next);
    onReact(next);
  }

  function openNote() {
    setNoteOpen(true);
    requestAnimationFrame(() => noteRef.current?.focus());
  }

  function commitNote() {
    onNoteChange(note.trim() || null);
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-between px-6 py-12">
      <div className="w-full max-w-sm flex-1 flex flex-col items-center justify-center gap-6 text-center">
        {entry.question && (
          <p className="animate-fade-up text-sm text-muted">„{entry.question}“</p>
        )}

        <div>
          <p className="animate-fade-up font-serif text-5xl font-semibold leading-tight text-gold-light">
            {entry.result}
          </p>
          {noteOpen ? (
            <textarea
              ref={noteRef}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onBlur={commitNote}
              placeholder="Notiz hinzufügen …"
              rows={2}
              className="animate-fade-up mt-2 w-full resize-none rounded-lg border border-transparent bg-transparent px-2 py-1 text-center text-base text-muted placeholder:text-muted focus:border-line focus:bg-surface focus:outline-none"
            />
          ) : (
            <button
              onClick={openNote}
              className="animate-fade-up mt-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-gold"
            >
              + Notiz hinzufügen
            </button>
          )}
        </div>

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
              {feedback[reaction]}
            </p>
          )}
        </div>
      </div>

      <button
        onClick={onRestart}
        className="w-full max-w-sm rounded-2xl bg-gold px-6 py-4 font-serif text-xl font-semibold text-ink transition-transform duration-300 active:scale-95"
      >
        Neue Frage
      </button>
    </div>
  );
}
