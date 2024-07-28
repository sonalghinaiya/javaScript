// console.log("S");
// console.log("O");
// console.log("N");
// console.log("U");

function myName() {
    console.log("S");
    console.log("O");
    console.log("N");
    console.log("U");
}
//myName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// addTwoNumbers(1, 3) //4

// const result = addTwoNumbers(30, 13)
// console.log(result); //undefined what function rerturn 

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

//return than store any variable
const result = addTwoNumbers(30, 13)
//console.log("Result Is:", result); 

function loginUser(username){
    if(username === undefined){
        console.log("Please enter userName");
        return
    }
    return `${username} Just logged in`
}  
// console.log(loginUser("Sonal"));
// console.log(loginUser()); //undefined

//******** shopping cart (e-commerce) don't know how much arguments came********* 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
 //val1 :100 val2:200 num1:500, 1000
console.log(calculateCartPrice(100, 200, 500, 1000));

//object pass in function
const user = {
    username: "Sonal",
    price: 199
    //prices: 199 undefined
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
}

//handleObject(user)
handleObject({
    username: "Sam",
    price: 499
})

//Array pass in Function
const myarray = [100, 200, 600, 400]

function returnsecondValue(getArray){
    return getArray[1]
}

// console.log(returnsecondValue(myarray))
console.log(returnsecondValue([200, 400, 600, 800]));