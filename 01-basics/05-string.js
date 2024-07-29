const name ="vaibhav"
const repoCount = 50

//console.log(name+repoCount+"value");


console.log(`hello my name is ${name} and my repo ccount is ${repoCount}`);


const gameName = new String('vaibhaV-ku')

console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('V'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,4)
console.log(anotherString);

const newStringone = "  vaibhav  "
console.log(newStringone);
console.log(newStringone.trim());


const url = "https:vaibhav20&.com"

console.log(url.replace('&20','-'))