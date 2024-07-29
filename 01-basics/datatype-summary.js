// primitive 

// 7 types : String, Number , Boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


//const bigNumber = 5754786923714734453n


// reference (non primitive)

//Array , Object, Functions

const heros = ["ironMan","ShaktiMan"];
let myObj ={
    name : "vaibhav",
    age : 11,
}

const myFunction = function(){

}


//********************************************* */
// Stack(Primitive), Heap(non-Primitive)


let myYoutubename = "vaibhavkumar04"

let anotherName = myYoutubename

anotherName="chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);


let userOne ={
    email: "abs@gmail.com",
    upi: "abc@sbi"

}

let userTwo = userOne;

userTwo.email="vaibhav@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);