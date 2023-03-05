const spaceStations = ["Alpha Station", "Beta Station", "Gamma Station"];
const astronauts = ["Bob", "Alice", "Charlie"];

let distanceTraveled = 0;

let i = 0;
while (i < spaceStations.length) {
    const distanceToStation = Math.floor(Math.random() * 10) + 1;
    console.log(`Traveling to ${spaceStations[i]}...`);

    const interactionTime = astronauts.reduce((total, astronaut) => total + Math.floor(Math.random() * 5) + 1, 0);
    distanceTraveled += interactionTime * astronauts.length;

    distanceTraveled += distanceToStation;
    console.log(`Arrived at ${spaceStations[i]}!`);
    i++;
}

console.log(`Journey complete! Total distance traveled: ${distanceTraveled} light years.`);