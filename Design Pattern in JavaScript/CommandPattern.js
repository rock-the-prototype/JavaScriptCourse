// Receiver object
class Light {
    turnOn = () => console.log("Light is on");
    turnOff = () => console.log("Light is off");
}

// Command interface
class Command {
    execute = () => {};
}

// Concrete command objects
class TurnOnCommand extends Command {
    constructor(light) {
        super();
        this.execute = () => light.turnOn();
    }
}

class TurnOffCommand extends Command {
    constructor(light) {
        super();
        this.execute = () => light.turnOff();
    }
}

// Invoker object
class Switch {
    command = null;
    setCommand = (command) => (this.command = command);
    executeCommand = () => this.command.execute();
}

// Usage example
const light = new Light();
const switcher = new Switch();

switcher.setCommand(new TurnOnCommand(light));
switcher.executeCommand(); // "Light is on"

switcher.setCommand(new TurnOffCommand(light));
switcher.executeCommand(); // "Light is off"