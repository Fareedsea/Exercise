// This is my First Exercise for AI 
// Exercise 01-  Q -16 - Invitation more friend for dinner

let guests = ["Abdullah", "Basit", "Mehtab"];
guests.unshift("Fareed");
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Summy");
guests.push("Qasim");
console.log("You are invited to dinner:");
guests.forEach(guest => {
    console.log(`- ${guest}`);
});

console.log("We've found a bigger dinner table!");
