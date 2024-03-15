function makeSandwich(...items) {
    console.log("You've ordered a sandwich with the following items:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

// Calling the function with different numbers of arguments
makeSandwich("ham", "cheese", "lettuce", "tomato");
makeSandwich("turkey", "bacon");
makeSandwich("peanut butter", "jelly");
