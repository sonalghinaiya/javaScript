const user = {
    username : "Sonal",
    price : 399,
    
    welcomeMessage : function(){
        //console.log(`${this.username}, Welcome to Website`);
        //console.log(this);
    }
}

user.welcomeMessage()

user.username = "Sonuu"
user.welcomeMessage()

//console.log(this);

// ************************* Arrow Function *******************************

// function chai(){
//     let username = "Sonal"
//     console.log(this.username); //undefined now work
// }
// chai()

// const chai = function(){
//     let username = "Sonal"
//     console.log(this.username); //undefined 
// }
// chai()

const chai = () => {
    let username = "Sonal"
    console.log(this.username); //undefined 
}
// chai()

//syntax of arrow function:
//() => {} 

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
//console.log(addTwo(5, 7))

//implicit return
//const add = (num1, num2) => num1 + num2

// const add = (num1, num2) => (num1 + num2)

//object return
const add = (num1, num2) => ({username: "Sonal"})
console.log(add(5, 7))

// const myArray = [2, 3, 5, 7, 9]
// myArray.forEach(() => {})

