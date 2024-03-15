function createCar(manufacturer, modelName, ...options) {
    const car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Adding optional properties
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car[key] = value;
    }

    return car;
}

// Calling the function with required information and additional properties
const myCar = createCar("Toyota", "Camry", "color", "red", "year", 2022);

console.log(myCar);
