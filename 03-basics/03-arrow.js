const user ={
    userName:"vaibhav",
    price:999,

 welcomeMessage : function(){
 console.log(`${this.userName}, welcome to website`);
console.log(this);
    }
}

// user.welcomeMessage()
// user.userName="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username ="vaibhav"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username ="vaibhav"  
//  console.log(this.username);

// }

// chai()

// const chai = () => {
//     let username ="vaibhav"  
//  console.log(this.username);

// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2              //explicit function
// }


//const addTwo = (num1,num2) =>  ( num1+num2 )    //implicit function
  
const addTwo = (num1,num2) =>  ({userName: "vaibahv"} )   
    
console.log(addTwo(3,44));