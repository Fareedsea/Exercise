// Define the array of magician names
let magicians = ["Harry", "David", "Chris"];

// Function to add "the Great" to each magician's name
function makeGreat(names) {
    let greatMagicians = [];
    for (let name of names) {
        greatMagicians.push(name + " the Great");
    }
    return greatMagicians;
}

// Function to display magician names
function showMagicians(names) {
    console.log("Magicians:");
    for (let name of names) {
        console.log("- " + name);
    }
}

// Call makeGreat() with a copy of the array of magician names
let greatMagicians = makeGreat([...magicians]);

// Call showMagicians() with each array
console.log("Original Magicians:");
showMagicians(magicians);

console.log("\nMagicians with 'the Great':");
showMagicians(greatMagicians);
