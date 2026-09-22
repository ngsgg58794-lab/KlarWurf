import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Entry, Method, Reaction } from "./types";
import { saveEntry, updateEntry } from "./lib/storage";
import HomeScreen from "./screens/HomeScreen";
import PrepareScreen from "./screens/PrepareScreen";
import CoinScreen from "./screens/CoinScreen";
import PendulumScreen from "./screens/PendulumScreen";
import CardScreen from "./screens/CardScreen";
import ResultScreen from "./screens/ResultScreen";

type Screen =
  | { name: "home" }
  | { name: "prepare"; method: Method }
  | { name: "action"; method: Method; category: string; question: string }
  | { name: "result"; entry: Entry };

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: "home" });

  function goHome() {
    setScreen({ name: "home" });
  }

  function handleSelectMethod(method: Method) {
    setScreen({ name: "prepare", method });
  }

  function handleStart(category: string, question: string) {
    if (screen.name !== "prepare") return;
    setScreen({ name: "action", method: screen.method, category, question });
  }

  function handleActionComplete(result: string) {
    if (screen.name !== "action") return;
    const entry: Entry = {
      id: uuidv4(),
      category: screen.category,
      question: screen.question,
      method: screen.method,
      result,
      reaction: null,
      note: null,
      timestamp: new Date().toISOString(),
    };
    saveEntry(entry);
    setScreen({ name: "result", entry });
  }

  function handleReact(reaction: Reaction) {
    if (screen.name !== "result") return;
    updateEntry(screen.entry.id, { reaction });
  }

  switch (screen.name) {
    case "home":
      return <HomeScreen onSelectMethod={handleSelectMethod} />;

    case "prepare":
      return (
        <PrepareScreen method={screen.method} onBack={goHome} onStart={handleStart} />
      );

    case "action":
      if (screen.method === "coin") {
        return <CoinScreen onComplete={handleActionComplete} />;
      }
      if (screen.method === "pendulum") {
        return <PendulumScreen onComplete={handleActionComplete} />;
      }
      return <CardScreen onComplete={handleActionComplete} />;

    case "result":
      return (
        <ResultScreen entry={screen.entry} onReact={handleReact} onRestart={goHome} />
      );
  }
}
