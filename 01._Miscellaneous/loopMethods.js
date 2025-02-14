// forEach, map, filter, reduce, findIndex, find

const myNumbers = [1, 2, 3, 4, 5, 6];

// assignment: get a list of the numbers doubled

const doubledNumbers = myNumbers.map(num => num * 2);
console.log(doubledNumbers);

const satellites = [
    {
        name: "International Space Station",
        height: 12.000
    },
    {
        name: "MIR",
        height: 0
    },
    {
        name: "James Webb",
        height: 27.000
    }
];

//assignment: lower the height for all satellites by 3.000 except for MIR

const adjustedSatellites = satellites.map((satellite) => ({
    height: satellite.name === "MIR" ? satellite.height : satellite.height - 3000,
    name: satellite.name
}));

console.log(adjustedSatellites);

// assignment: make a list that reacts as many times as above with thumbs up

const listOfReactions = ["thumbs down", "thumbs down", "thumbs down"];

const updatedReactions = listOfReactions.map((reaction) => "thumbs up");

console.log(listOfReactions);