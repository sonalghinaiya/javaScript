//Constructor(singleton)
//Object.create

//literals(not singleton)
//object literals

//symbol
const mySym = Symbol("Key1")

const jsUser = {
    name: "Sonal",
    "full name": "Sonal Ghinaiaya",
    [mySym]: "MyKey1",
    //mySym: "MyKey1",
    age: 20,
    location: "Ahmedabad",
    email: "sonal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//access
//console.log(jsUser.name);
//console.log(jsUser["name"]);

//console.log(jsUser.full name); //error
//console.log(jsUser["full name"]);


//console.log(jsUser.mySym); //not use
//console.log(jsUser[mySym]);

//Change
jsUser.age = 21
//console.log(jsUser.age);

//Not change (if you want)
//Object.freeze(jsUser)
jsUser.age = 22

//console.log(jsUser);

//Function add

jsUser.greeting = function(){
    console.log("Hello JS User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}

//console.log(jsUser.greeting); //[Function (anonymous)]
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());