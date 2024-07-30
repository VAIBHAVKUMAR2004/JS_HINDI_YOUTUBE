
function sayMyname (){
    console.log("v");
console.log("a");
console.log("i");
console.log("b");
console.log("h");
console.log("a");
console.log("v");
}

// sayMyname();

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }


function addTwoNumbers(num1,num2){
    // let result = num1+ num2
    // return result;
    return num1+num2
}
 const result = addTwoNumbers(3,5)

//  console.log("RESULT:",result);


function loginUserMessage (userName){
    if(!userName){
        console.log("Please entern a userName");
    }
return `${userName} just logged in`
}

console.log(loginUserMessage());

// console.log(loginUserMessage('vaibhav'));


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400));

const user ={
    userName:"vaibhav",
    price: 199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
}

handleObject(user)

const newArray = [200,300,400,500]

function returnSecondvalue(getArray) {
    return getArray[1]
}

console.log(returnSecondvalue(newArray));