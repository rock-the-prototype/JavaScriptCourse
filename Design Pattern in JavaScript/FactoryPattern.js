// Define the interface for creating space objects
class SpaceObject {
    constructor(name, size, color) {
        this.name = name;
        this.size = size;
        this.color = color;
    }

    fly() {
        console.log(`${this.name} is flying through space!`);
    }
}

// Define the concrete classes that will be created by the factory
class Star extends SpaceObject {
    constructor(name, size, color, temperature) {
        super(name, size, color);
        this.temperature = temperature;
    }

    shine() {
        console.log(`${this.name} is shining brightly at a temperature of ${this.temperature} Kelvin!`);
    }
}

class Planet extends SpaceObject {
    constructor(name, size, color, distanceFromSun) {
        super(name, size, color);
        this.distanceFromSun = distanceFromSun;
    }

    orbit() {
        console.log(`${this.name} is orbiting the sun at a distance of ${this.distanceFromSun} million kilometers!`);
    }
}

// Define the factory that will create the concrete classes
class SpaceObjectFactory {
    createObject(type, name, size, color, extraParams) {
        switch(type) {
            case 'star':
                return new Star(name, size, color, extraParams.temperature);
            case 'planet':
                return new Planet(name, size, color, extraParams.distanceFromSun);
            default:
                throw new Error(`Invalid space object type: ${type}`);
        }
    }
}

// Create some space objects using the factory
const factory = new SpaceObjectFactory();
const sun = factory.createObject('star', 'Sun', '109 times larger than Earth', 'yellow', { temperature: 5778 });
const earth = factory.createObject('planet', 'Earth', '12,742 km diameter', 'blue', { distanceFromSun: 149.6 });
sun.shine();
earth.orbit();