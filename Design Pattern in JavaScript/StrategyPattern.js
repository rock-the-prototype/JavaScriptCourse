// Strategy interface
class FightingStrategy {
    attack() {}
}

// Concrete Strategy classes
class SwordStrategy extends FightingStrategy {
    attack() {
        console.log("Elf attacks with a sword!");
    }
}

class AxeStrategy extends FightingStrategy {
    attack() {
        console.log("Dwarf attacks with an axe!");
    }
}

class MagicStrategy extends FightingStrategy {
    attack() {
        console.log("Mage attacks with magic!");
    }
}

// Context class
class Character {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    attack() {
        this.strategy.attack();
    }
}

// Usage
const elf = new Character(new SwordStrategy());
const dwarf = new Character(new AxeStrategy());
const mage = new Character(new MagicStrategy());

elf.attack(); // outputs "Elf attacks with a sword!"
dwarf.attack(); // outputs "Dwarf attacks with an axe!"
mage.attack(); // outputs "Mage attacks with magic!"

elf.setStrategy(new MagicStrategy());
elf.attack(); // outputs "Mage attacks with magic!"