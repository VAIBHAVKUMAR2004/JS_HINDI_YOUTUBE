// singleton
//Object.create
// object literals5

const mySym = Symbol("key1")

const Jsuser ={
 name: "Vaibhav",
 "full name": "vaibhav kumar",
 [mySym]:"mykey1",    //symbol [ syntax]
 age :10,
 location: "bijnor",
 email : "ksksk@gamil.com",
 isLoggedIn : false,
}

// console.log(Jsuser.email);    //bad method
// console.log(Jsuser["email"]);  //good method

// console.log(Jsuser["full name"])

// console.log(Jsuser[mySym]);

Jsuser.email ="ijejwjdw@gamil.com"
//Object.freeze(Jsuser)
Jsuser.email="ajifin@gmail.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello Js user");
}

Jsuser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());