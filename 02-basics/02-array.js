const marvelHeros =["thor","ironman","spiderman"]
const dcHeros =["superman","flash","batman"]

// marvelHeros.push(dcHeros)

// console.log( marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const allHeros1 = [...marvelHeros, ...dcHeros ]
// console.log(allHeros1);

const anotherArray =[1,2,3,[4,5,6],7,[4,5,4,3,7]]

const realAnotherArray = anotherArray.flat(Infinity)

console.log(realAnotherArray);

console.log(Array.isArray("vaibahv"))
console.log(Array.from("vaibahv"))
console.log(Array.from({name:"vaibahv"}))   //ineresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));