//Primitive (call by value : copy change not original value)

//7types : String, Number, Boolean, null, undefined, symbol, BigInt
const name="Sonal Ghinaiya"

const score = 100
const scoreValue = 100.5

const isLoggedIn = false

const outsideTemp = null //empty

let userEmail;

//symbol - unique define return value different
const id = Symbol('123')
const anotherid = Symbol('123')
//console.log(id === anotherid);

const bigNumber = 42333947584759340n


//Non Primitive(Reference) object

//Array, Object, Function

//Arrays
const heros = ["Doraemon", "Chota Bheem", "Doga"] 

//Object
let myObj = {
    name: "Sonal",
    age: 20
}

//Function
const myFunction = function(){
    console.log("Hello World...")
} //typeof function object 



//*****************************************************
//Memory 2types: 1.Stack 2.Heap

let myName = "Sonal Ghinaiya"

let anotherName = myName
anotherName = "SONU GHINAIYA"

console.log(myName);
console.log(anotherName);

//object 
let user = {
    email : "user@google.com",
    upi : "user@ypl"
}

let user2 = user

user2.email = "user2@gmail.com"
console.log(user.email)
console.log(user2.email)
