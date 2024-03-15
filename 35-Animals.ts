// Define a list of animals
let animals = ["Dog", "Cat", "Rabbit"];

// Print the names of each animal
console.log("Animals:");
for (let animal of animals) {
    console.log("- " + animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    switch(animal) {
        case "Dog":
            console.log(`A ${animal.toLowerCase()} would make a great pet.`);
            break;
        case "Cat":
            console.log(`A ${animal.toLowerCase()} is independent and affectionate.`);
            break;
        case "Rabbit":
            console.log(`A ${animal.toLowerCase()} is cute and can be litter-trained.`);
            break;
        default:
            console.log(`I don't know much about ${animal.toLowerCase()}s.`);
    }
}

// Print a statement about their common characteristic
console.log("\nAny of these animals would make a great pet!");
