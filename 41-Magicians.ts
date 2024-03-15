// Define the array of magician names
let magicians = ["Harry", "David", "Chris"];

// Function to display magician names
function showMagicians(names) {
    console.log("Magicians:");
    for (let name of names) {
        console.log("- " + name);
    }
}

// Call showMagicians() to display the names
showMagicians(magicians);
