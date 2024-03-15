// Define the array of magician names
let magicians = ["Harry", "David", "Chris"];

// Function to modify the array by adding "the Great" to each magician's name
function makeGreat(names) {
    for (let i = 0; i < names.length; i++) {
        names[i] += " the Great";
    }
}

// Function to display magician names
function showMagicians(names) {
    console.log("Magicians:");
    for (let name of names) {
        console.log("- " + name);
    }
}

// Call makeGreat() to modify the original array
makeGreat(magicians);

// Call showMagicians() to display the modified list
showMagicians(magicians);
