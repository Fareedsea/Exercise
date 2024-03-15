// This is my First Exercise for AI 
// Exercise 01-  Q -18 - Print Array in Alphabatical Order and Reverser Order

function printReverseArray(arr: string[]): void {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
const usArray: string[] = ["London", "Paris", "Makkah", "Istanbul", "Hunza"];

function main() {
        const myArray: string[] = usArray;
        console.log(usArray);
        myArray.sort();

    console.log("Array in alphabetical order:");
    console.log(myArray);

    console.log("Array in reverse alphabetical order:");
    printReverseArray(myArray);
    console.log(usArray);
}
main();
