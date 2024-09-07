let myName = "vaibhav"
console.log((myName.truelength));



let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
 Object.prototype.vaibhav = function(){
    console.log(`vaibhav is present in all objects`);
 }

 Array.prototype.heyvaibhav = function(){
    console.log(`Vaibhav says hello`);
 }
//heroPower.vaibhav()
myHeros.vaibhav()
myHeros.heyvaibhav()
// heroPower.heyvaibhav()


// inheritance
const User = {
    name: "vaibhav",
    email: "abc@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isaAvaible: false
}

const TASupport = {
makeAssignment: 'JS assignment',
fullTime: true,
__proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "vaibhav"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is :${this.trim().length}`);
}

anotherUsername.trueLength()