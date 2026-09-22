# KlarWurf

Eine kleine App für den klaren Moment: Münze werfen, Pendel befragen oder
eine Karte ziehen. Alles läuft lokal, ohne Backend – Verlauf wird im
`localStorage` des Geräts gespeichert.

Gebaut mit React + Vite + TypeScript + Tailwind CSS, verpackt für iOS und
Android mit [Capacitor](https://capacitorjs.com).

## Funktionen

- Startbildschirm mit drei Methoden: Münze, Pendel, Karte
- Vorbereitungsschritt mit Ansage, optionalem Fragetext und Kategorie
- Münze: Animation, Ergebnis "Kopf" oder "Zahl" (50/50)
- Pendel: SVG-Animation, Ergebnis "Ja" / "Nein" / "Unklar" (40/40/20)
- Karte: 14 kurze Impulssätze, animiert aufgedeckt
- Ergebnisbildschirm mit Feedback ("Gut" / "Schlecht")
- Verlauf aller Würfe, lokal gespeichert, einzeln oder komplett löschbar

## Entwicklung

```bash
npm install
npm run dev       # Dev-Server unter http://localhost:5173
npm run build      # Produktions-Build nach dist/
npm run preview    # Build lokal ansehen
```

## Native Apps (iOS & Android)

Die nativen Projekte liegen bereits unter `ios/` und `android/` und sind mit
Capacitor an die Web-App gekoppelt.

```bash
npm run cap:sync     # Web-App bauen + in beide native Projekte kopieren
npm run cap:android  # bauen, synchronisieren, Android Studio öffnen
npm run cap:ios      # bauen, synchronisieren, Xcode öffnen
```

Voraussetzungen zum tatsächlichen Bauen der Apps:

- **Android:** Android Studio + Android SDK
- **iOS:** macOS mit Xcode + CocoaPods (`cd ios/App && pod install` beim
  ersten Mal)

Nach jeder Codeänderung: `npm run cap:sync`, dann in Android
Studio/Xcode erneut ausführen.

## Datenmodell

Jeder Verlaufseintrag wird als JSON in `localStorage` (`klarwurf.entries`)
gespeichert:

```ts
{
  id: string;
  category: string;
  question: string;
  method: "coin" | "pendulum" | "card";
  result: string;
  reaction: "up" | "neutral" | "down" | null;
  note: string | null;
  timestamp: string; // ISO-8601
}
```
