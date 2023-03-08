// Engine prototype object
const enginePrototype = {
    type: "basic",
    speed: 100,
    boost: function() {
        this.speed += 50;
    }
};

// Weapon prototype object
const weaponPrototype = {
    type: "basic",
    damage: 10,
    fire: function() {
        console.log("Firing weapon!");
    }
};

// Hull prototype object
const hullPrototype = {
    type: "basic",
    durability: 100,
    repair: function() {
        this.durability += 50;
    }
};

// Factory function to create new spaceship parts
function createPart(proto) {
    const part = Object.create(proto);
    return part;
}

// Create new spaceship parts
const newEngine = createPart(enginePrototype);
newEngine.type = "advanced";
newEngine.speed = 150;

const newWeapon = createPart(weaponPrototype);
newWeapon.type = "laser";
newWeapon.damage = 20;

const newHull = createPart(hullPrototype);
newHull.type = "titanium";
newHull.durability = 200;

// Create new spaceship object
const newSpaceship = {
    engine: newEngine,
    weapon: newWeapon,
    hull: newHull,
    fly: function() {
        console.log("Flying through space!");
    },
    shoot: function() {
        console.log("Firing weapons!");
    },
    repair: function() {
        console.log("Repairing hull!");
    }
};

// Test the spaceship object
console.log(newSpaceship.engine.speed); // Output: 150
console.log(newSpaceship.weapon.damage); // Output: 20
newSpaceship.fly(); // Output: Flying through space!
newSpaceship.shoot(); // Output: Firing weapons!
newSpaceship.repair(); // Output: Repairing hull!