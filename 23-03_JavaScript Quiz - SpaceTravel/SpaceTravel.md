# JavaScript Coding Quiz Space Travel

In der Datei **SpaceTravel.js** findest Du den JavaScript Source Code mit einer möglichen Lösung für unser Code-Puzzle Space Travel. 

## Und so sieht die **Aufgabe zu unserem Code-Quiz** aus:

### Requirements:

Du sind ein(e) Entwickler*in, die/der an einer Weltraumsimulation arbeitet. In dem Spiel steuern die Spieler ein Raumschiff und navigieren durch den Weltraum, besuchen verschiedene Raumstationen und interagieren mit Astronauten. Deine Aufgabe ist es, eine Schleife zu schreiben, die die Reise des Spielers durch den Weltraum simuliert.

Die Schleife sollte die folgenden Aktionen ausführen:

Initialisiere eine Variable namens distanceTraveled auf 0.

Führe eine Schleife durch ein Array namens spaceStations, das die Namen der verschiedenen Raumstationen enthält.

Für jede Raumstation sollte die Schleife Folgendes tun:

* Initialisiere eine Variable namens distanceToStation auf eine Zufallszahl zwischen 1 und 10.
* Protokolliere die Meldung „Reise nach [Name der Raumstation]…“ auf der Konsole.
* Führe eine Schleife durch ein Array namens astronauts, das die Namen der verschiedenen Astronauten enthält. Für jeden Astronauten sollte die Schleife Folgendes tun:- Initialisiere eine Variable namens timeToInteract auf eine Zufallszahl zwischen 1 und 5.
* Gib die Meldung „Interaktion mit [Astronautenname]…“ auf der Konsole aus.
* Erhöhe die distanceTraveled um timeToInteract.
* Erhöhe distanceTraveled um distanceToStation.
* Gib die Meldung „Angekommen bei [space station name]!“ über die Konsole aus.

Protokolliere die Meldung „Reise beendet! Zurückgelegte Gesamtstrecke: [distanceTraveled] light years.“ auf der Konsole.
Kannst Du eine Schleife schreiben, die diese Aufgaben erfüllt? Dieses Rätsel fordert Dein Wissen über verschachtelte Schleifen heraus und wie Du sie effektiv einsetzt, um über Arrays zu iterieren und komplexe Aktionen durchzuführen.

## Erläuterung zu unserer Musterlösung:

Unsere Lösung ist eine bereits optimierte Version in der wir eine while-Schleife verwenden, um über das Array der Raumstationen zu iterieren, und wir berechnen die Gesamtinteraktionszeit an jeder Raumstation im Voraus mit der Methode reduce().

Diese Optimierungen können den Code effizienter machen und seine Leistung beim Umgang mit großen Arrays und komplexen Berechnungen verbessern.