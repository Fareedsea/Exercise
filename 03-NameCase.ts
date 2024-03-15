// This is my First Exercise for AI 
// Exercise 01-  Q -03 - Change Text Case 
let pName03 = "fareed Ahmed";
console.log(pName03.toUpperCase());
console.log(pName03.toLowerCase());
function toTitleCase(str03) {
    return str03.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
  }
console.log(toTitleCase(pName03));