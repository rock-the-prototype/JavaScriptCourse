# Design Pattern

## Was sind Design Pattern?

Ein [Design Pattern](https://rock-the-prototype.com/software-architektur/design-pattern/) ist ein **Entwurfsmuster für Software** als eine abstrakte Beschreibung. 

In der Programmierung sind Design Patterns meist **objektorientierte Code-Entwürfe**.

Solche Entwurfsmuster bieten Dir als Programmierer*in immer eine allgemeine, wiederholbare Lösung für ein häufig auftretendes Problem beim Softwareentwurf. Es handelt sich dabei nicht um ein bestimmtes Stück Code, sondern vielmehr um eine Vorlage oder einen Entwurf, der in verschiedenen Situationen zur Lösung ähnlicher Probleme eingesetzt werden kann.
Wie Du ein Design Pattern erstellst, inklusive konkreter Design Empfehlungen erfährst Du **[hier](https://rock-the-prototype.com/software-architektur/design-pattern/)**.

## Wie lösen Entwurfsmuster Deine Probleme bei der Softwareentwicklung ?

Entwurfsmuster lösen Probleme, indem sie bewährte Lösungen für wiederkehrende Entwurfsprobleme bieten, die während des Softwareentwicklungsprozesses auftreten. Sie kapseln das Wissen und die Erfahrung erfahrener Software-Ingenieure und ermöglichen es Entwicklern, hochwertige, wartbare und erweiterbare Softwaresysteme zu erstellen.

So löst ein Entwurfsmuster ein Problem:
Im Folgenden werden einige Möglichkeiten aufgezeigt, wie Entwurfsmuster Probleme lösen:

### 1. Abstraktion: 
Entwurfsmuster bieten eine hohe Abstraktionsebene, die es Entwicklern ermöglicht, sich auf die wichtigsten Entwurfsaspekte eines Systems zu konzentrieren, ohne sich in Implementierungsdetails zu verzetteln.

### 2. Wiederverwendbarkeit: 
Entwurfsmuster bieten wiederverwendbare Lösungen für gängige Probleme, wodurch sich der Zeit- und Arbeitsaufwand für den Entwurf und die Implementierung eines Systems verringert.

### 2. Flexibilität: 
Entwurfsmuster erleichtern die Änderung und Erweiterung eines Systems, indem sie eine Reihe von gut definierten Schnittstellen und Implementierungsrichtlinien bereitstellen.

### 3. Wartbarkeit: 
Entwurfsmuster verbessern die Wartbarkeit eines Systems, indem sie die Modularität fördern und die Kopplung zwischen den Komponenten verringern.

### 4. Kommunikation: 
Entwurfsmuster bieten ein gemeinsames Vokabular und eine Reihe von Best Practices für Entwickler, um effektiv zu kommunizieren und zusammenzuarbeiten.

### 5. Leistung: 
Entwurfsmuster können die Leistung eines Systems verbessern, indem sie optimierte Lösungen für häufige Probleme bieten.

Insgesamt helfen Entwurfsmuster Entwicklern bei der Lösung von Problemen, indem sie eine Reihe gut definierter, wiederverwendbarer Lösungen bereitstellen, die sich in realen Szenarien bewährt haben. Sie erleichtern die Entwicklung qualitativ hochwertiger, wartbarer und erweiterbarer Softwaresysteme, die den Anforderungen von Benutzern und Interessengruppen gerecht werden.

## Command Pattern

Das **[Command Pattern](https://rock-the-prototype.com/software-architektur/command-pattern/)** ist ein Design Pattern für die Softwareentwicklung und fällt in die Kategorie der verhaltensorientierten Entwurfsmuster.

### Wie funktioniert ein Command Pattern?

Ein Command Pattern **kapselt eine Anfrage oder Aktion als Objekt** und ermöglicht es dadurch, Clients mit verschiedenen Anfragen zu parametrisieren, in eine Warteschlange zu stellen, zu protokollieren und rückgängig zu machende Operationen zu unterstützen.

Vereinfacht ausgedrückt, ermöglichen **Command Patterns** die Entkopplung von einem Objekt, das einen Vorgang aufruft. Wobei dieses Objekt weiß, wie dieses Event auszuführen ist, und fördern mittels Abstraktion die lose Kopplung zwischen Objekten.
Mehr Informationen zu diesem Design Pattern findest Du **[hier](https://rock-the-prototype.com/software-architektur/command-pattern/)**.

### Code Beispiel zum Design Pattern
In der Datei **CommandPattern.js** findest Du eine musterhafte **Implementierung des Command Pattern in JavaScript**.

Im diesem **Code-Beispiel** werden _Klassendefinitionen_ verwendet, um _Objekte_ zu erstellen, die einen Lichtschalter und Befehle zum Ein- und Ausschalten des Lichts darstellen. Die Klasse Light stellt eine Glühbirne dar, die ein- oder ausgeschaltet werden kann, und die Klasse Command stellt eine Aktion dar, die mit der Glühbirne durchgeführt werden kann. Die Klassen TurnOnCommand und TurnOffCommand sind Unterklassen der Klasse Command, die die spezifischen Aktionen zum Ein- bzw. Ausschalten der Glühbirne implementieren. Die Klasse Switch schließlich stellt den eigentlichen Schalter dar, der die Glühbirne mit den Befehlen verbindet.

Um den Schalter zu verwenden, erstellt der Client eine _Instanz der Switch-Klasse_ und übergibt ihr ein _Light-Objekt_, ein _TurnOnCommand-Objekt_ und ein _TurnOffCommand-Objekt_. Dann kann der Client die _press-Methode_ des Schalters aufrufen und ihm entweder das _TurnOnCommand-_ oder das _TurnOffCommand-Objekt_ übergeben, je nachdem, welche Aktion er ausführen möchte.

Diese Implementierung des Command Patterns folgt traditionellen **objektorientierten Entwurfsprinzipien** wie **Vererbung** und **Kapselung** und ist ein leicht verständliches und gutes Beispiel dafür, wie das Entwurfsmuster auf unkomplizierte implementiert werden kann.

## Factory-Pattern

Das **[Factory Pattern](https://rock-the-prototype.com/software-architektur/factory-pattern/)** ist ein Design Pattern, das ein Interface, also eine Schnittstelle für die Erstellung von Objekten bietet, es aber den Unterklassen überlässt, welche Klasse sie instanziieren.

### Code Beispiel zum Design Pattern
In der Datei **FactoryPattern.js** findest Du eine musterhafte **Implementierung des Factory Pattern in JavaScript**.

In diesem Beispiel definieren wir eine **Schnittstelle für die Erstellung von Raumobjekten**, die durch die **abstrakte Klasse** _SpaceObject_ repräsentiert wird. Dann definieren wir **zwei konkrete Klassen**, die von der **Factory** erstellt werden: _Stern_ und _Planet_.

Als nächstes definieren wir die Fabrik selbst, die durch die **Klasse** _SpaceObjectFactory_ dargestellt wird. Die Fabrik bietet eine **Methode** _createObject_, die ein **Typargument** entgegennimmt, das bestimmt, welche konkrete Klasse erstellt werden soll. Das **Argument** _extraParams_ ist ein Objekt, das alle zusätzlichen Parameter enthält, die zur Erstellung des Objekts erforderlich sind.

Schließlich erstellen wir mit der Fabrik einige Raumobjekte, indem wir die **Methode** _createObject_ mit den entsprechenden Argumenten aufrufen. Anschließend können wir für jedes Objekt **spezifische Methoden** aufrufen, z. B. _shine_ für einen **Stern** und _orbit_ für einen **Planeten**.

Wenn Du mehr über das Factory Pattern und seine Vorteile erfahren möchtest **[liest Du hier weiter](https://rock-the-prototype.com/software-architektur/factory-pattern/)**.

## Prototype Pattern

Das **[Prototype Pattern](https://rock-the-prototype.com/software-architektur/prototype-pattern/)** ist ein **Design Pattern** das die **Erstellung neuer Objekte durch Klonen** eines bestehenden Objekts ermöglicht, das als **Prototype** dient. Mit anderen Worten, das Entwurfsmuster beinhaltet die Erstellung eines neuen Objekts durch Kopieren eines bestehenden Objekts, anstatt es von Grund auf neu zu erstellen.

### Code Beispiel zum Prototype Pattern
In der Datei **PrototypePattern.js** findest Du eine musterhafte **Implementierung des Prototype-Pattern in JavaScript**.