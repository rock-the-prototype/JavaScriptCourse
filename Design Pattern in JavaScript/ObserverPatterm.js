// Observer Interface
class Observer {
    update(temperature) {
        throw new Error("Die Methode 'update' muss implementiert werden");
    }
}

// Concrete Observer - ein Display, das die Temperatur anzeigt
class TemperatureDisplay extends Observer {
    update(temperature) {
        console.log(`Temperature Display: Die aktuelle Temperatur ist ${temperature}°C`);
    }
}

// Concrete Observer - ein Logger, der die Temperaturänderungen protokolliert
class TemperatureLogger extends Observer {
    update(temperature) {
        console.log(`Temperature Logger: Die Temperatur wurde auf ${temperature}°C geändert`);
    }
}

// Subject Interface
class Subject {
    constructor() {
        this.observers = [];
    }

    attach(observer) {
        this.observers.push(observer);
    }

    detach(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(temperature) {
        this.observers.forEach(observer => observer.update(temperature));
    }
}

// Concrete Subject - eine Wetterstation, die die Temperatur verfolgt
class WeatherStation extends Subject {
    constructor() {
        super();
        this.temperature = 0;
    }

    setTemperature(value) {
        this.temperature = value;
        this.notify(value);
    }
}

// Nutzung des Observer Patterns
const weatherStation = new WeatherStation();

// Erstellen von Observern
const display = new TemperatureDisplay();
const logger = new TemperatureLogger();

// Observer registrieren
weatherStation.attach(display);
weatherStation.attach(logger);

// Temperatur ändern
weatherStation.setTemperature(25);
weatherStation.setTemperature(30);