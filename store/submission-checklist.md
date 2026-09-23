# Checkliste: KlarWurf im App Store & Play Store veröffentlichen

Alles, was sich vorbereiten ließ, liegt in diesem Ordner (`store/`).
Was jetzt noch fehlt, kann nur du selbst erledigen — es braucht deine
eigene Identität, Zahlung bzw. manuelle Klicks in Apples/Googles
Weboberflächen.

## 1. Datenschutzerklärung online stellen

- `store/privacy-policy.html` öffnen, `REPLACE_WITH_YOUR_EMAIL` durch
  deine echte Kontakt-E-Mail ersetzen.
- Irgendwo mit fester URL hosten, z. B.:
  - **GitHub Pages** (kostenlos): Repo-Einstellungen → Pages → als
    Quelle den `main`-Branch + Ordner `/store` wählen (oder Datei nach
    `docs/index.html` verschieben, je nach GitHub-Pages-Konfiguration).
  - Alternativ: Notion-Seite veröffentlichen, eigene Website, o. Ä.
- Die fertige URL brauchst du gleich für beide Stores.

## 2. Apple App Store

1. **Apple Developer Program** beitreten: https://developer.apple.com/programs/
   (99 $/Jahr, eigene Apple-ID nötig, Freischaltung kann 24–48 h dauern)
2. In **App Store Connect** (appstoreconnect.apple.com) eine neue App
   anlegen:
   - Bundle-ID: `com.klarwurf.app` (in Xcode unter Signing &
     Capabilities identisch hinterlegt, bereits erledigt)
   - Name, Untertitel, Beschreibung, Keywords → siehe
     `store/app-store-listing.md`
   - Datenschutzerklärung-URL aus Schritt 1 eintragen
   - App Privacy-Fragebogen: "Keine Daten erhoben" (siehe Listing-Datei)
   - Altersfreigabe: 4+
3. **Screenshots hochladen**: `store/screenshots/ios/` enthält 5 fertige
   Screenshots in 1290×2796 (passt für alle aktuell geforderten
   iPhone-Displaygrößen als einzige Pflichtgröße).
4. **App-Icon**: wird automatisch aus dem Xcode-Projekt übernommen
   (bereits eingerichtet), keine zusätzliche Aktion nötig.
5. In Xcode: Gerät auf **Any iOS Device (arm64)** stellen → Product →
   Archive → im Organizer **Distribute App** → App Store Connect →
   Upload. Braucht ein gültiges Signing-Zertifikat (Xcode richtet das
   automatisch ein, wenn dein Apple-Developer-Team ausgewählt ist).
6. In App Store Connect den hochgeladenen Build der Version zuweisen,
   Export-Compliance-Frage mit "Nein" beantworten, zur Prüfung
   einreichen ("Submit for Review"). Prüfung dauert meist 1–3 Tage.

## 3. Google Play Store

1. **Google Play Console Account** anlegen: https://play.google.com/console/signup
   (einmalig 25 $)
2. Neue App anlegen, Sprache Deutsch, Name "KlarWurf".
3. **Store-Eintrag** ausfüllen mit Texten aus
   `store/play-store-listing.md`.
4. **Grafiken hochladen**:
   - App-Icon: `store/play-icon-512.png`
   - Feature-Grafik: `store/play-feature-graphic.png`
   - Screenshots: `store/screenshots/android/` (5 Stück, 1080×1920)
5. **Datenschutzerklärung-URL** aus Schritt 1 eintragen.
6. **Data Safety-Formular**: "Keine Daten erhoben/geteilt" (siehe
   Listing-Datei).
7. **Inhaltseinstufung**: Fragebogen ausfüllen → niedrigste Einstufung,
   da keine Gewalt/Chat/Käufe.
8. **Signierten Android App Bundle (.aab) erstellen**:
   - In Android Studio: Build → Generate Signed Bundle/APK → Android
     App Bundle
   - Beim ersten Mal einen neuen Keystore erstellen (Passwort sicher
     aufbewahren, ohne ihn sind spätere Updates nicht mehr möglich!)
   - Empfehlung: **Play App Signing** aktivieren, dann verwaltet Google
     den Signierschlüssel zusätzlich sicher mit.
9. Das `.aab` in einem Release-Track hochladen (am besten zuerst
   **Internes Testing**, dann nach erfolgreichem Test **Produktion**).
10. Zur Prüfung einreichen. Erstprüfung kann bei Google mehrere Tage
    dauern.

## 4. Danach

- Support-/Kontakt-E-Mail in beiden Store-Texten (`REPLACE_WITH_YOUR_EMAIL`)
  ersetzen, bevor du die Texte einträgst.
- Versionsnummern liegen aktuell bei `1.0` (Build 1) auf beiden
  Plattformen — für jedes weitere Update `CURRENT_PROJECT_VERSION`
  (iOS, in Xcode) bzw. `versionCode`/`versionName`
  (`android/app/build.gradle`) hochzählen.
