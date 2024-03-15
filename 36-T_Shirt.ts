function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`You've ordered a ${size} shirt with the message: "${message}"`);
}

// Making a large shirt with the default message
make_shirt();

// Making a medium shirt with the default message
make_shirt("medium");

// Making a small shirt with a custom message
make_shirt("small", "JavaScript is awesome!");
