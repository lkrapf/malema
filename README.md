<p align="center">
  <img src="logo.svg" alt="MaLeMa" width="220"/>
  <br/>
  <em>Mathe Lernen fuer Maja</em>
</p>

Mathe-Trainer Web-App fuer Grundschueler (3. Klasse). Laeuft im Browser, keine Installation noetig.

## Module

- **Addition** — bis 10.000, 20 Schwierigkeitsstufen
- **Subtraktion** — bis 10.000, 20 Schwierigkeitsstufen
- **Multiplikation** — kleines Einmaleins, Reihen werden schrittweise eingefuehrt
- **Division** — Umkehrung der Multiplikation, immer ganzzahlig
- **Zahlenstrahl** — Zahlen ablesen/abzaehlen, von 0-10 bis in die Zehntausender

## Features

- **Adaptive Schwierigkeit**: Pro Modul 20 Stufen, passt sich automatisch an (4/5 richtig = hoch, 1/5 = runter)
- **Avatar-System**: SVG-Charakter mit freischaltbaren Frisuren, Muetzen, Brillen, Augen, Muendern, Shirts und Hintergruenden
- **Kleiderschrank**: Items anprobieren bevor man kauft
- **Belohnungen**: Sterne sammeln (1-3 pro Runde), Streak-Tracking mit Katzenbildern alle 10 richtige
- **Komplett auf Deutsch**

## Starten

```bash
python3 server.py
```

Oeffnet auf `http://0.0.0.0:8080`. Im lokalen Netzwerk ueber die IP erreichbar. Port aenderbar:

```bash
python3 server.py 3000
```

Oder einfach `index.html` direkt im Browser oeffnen.

## Neues Modul hinzufuegen

1. Datei unter `modules/` erstellen
2. `registerModule({ id, name, icon, generate(level) })` aufrufen
3. `<script>` Tag in `index.html` einfuegen

```js
// modules/example.js
registerModule({
  id: 'example',
  name: 'Beispiel',
  icon: '?',
  generate(level) {
    return { text: '1 + 1', answer: 2 };
  }
});
```

## Tech

Vanilla HTML/CSS/JS, keine Dependencies. Speicherung in localStorage.
