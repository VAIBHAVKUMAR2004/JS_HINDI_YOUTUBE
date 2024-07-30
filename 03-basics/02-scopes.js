
var c =300                // global scope

if (true) {                    // 
let a = 10                     //local 
    const b =20                 //scope
    var c =30                    //
}

// console.log(a);

// console.log(b);

// console.log(c);


function one(){
    const username ="vaibhav"

    function two(){
        const website= "youtube"
        console.log(username)
    }
    // console.log(website);


    two()
}

one()

if(true){
    const username ="vaibhav"
    if(username === "vaibhav"){
      const website ="youtube"
        console.log(username+website);
    }
   // console.log(website);
   
}
// console.log(username);

// +++++++++++++++++  interesting  +++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num+1
}



addTwo(5)
const addTwo = function(num){
    return num+2
}