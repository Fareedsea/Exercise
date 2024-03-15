// This is my First Exercise for AI 
// Exercise 01-  Q -17 - Invitation friend for dinner - Shrink Guest List
let guests = ["Abdullah", "Basit", "Kamran", "Qasim", "Ahmed", "Fareed"];

console.log("Sorry, the new dinner table won't arrive in time. You can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, you're no longer invited to dinner.`);
}
console.log(`${guests[0]} and ${guests[1]}, you're still invited to dinner.`);
// guests.pop();
// guests.pop();
// console.log("Guest list:", guests);
console.log(guests);