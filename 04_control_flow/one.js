// <, >, <=, >=, ==, !=, ===
//------------------------ if ------------------------
if(2 == "2"){
    //console.log("Executed");
}

//------------------------ if-else ------------------------
const temperature = 41
if(temperature < 50){
    //console.log("Less Than 50");
}
else{
    //console.log("Greater Than 50");
}

//Scope Problem
const score = 100
if(score > 100){
    const power = "fly"
    //console.log(`User Power: ${power}`);
}
//console.log(`User Power: ${power}`); //error becose power is inside scope{} not use outside scope

//Short hand - implicit scope(without {})
const balanc = 1000
//if(balanc > 500) console.log("Implicit Scope"), console.log("Testing...") //not prefer to use


//------------------------ if else-if (nesting) ------------------------
const balance = 1000

if(balance < 500){
    //console.log("Less Than 500");
}else if(balance < 750){
    //console.log("Less Than 750");
}else if(balance < 900){
    //console.log("Less Than 900");
}else{
    //console.log("Less Than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//&& - all condition check true than execute
// if one false than not go inside code
//if(userLoggedIn && debitCard && 2 == 3){
if(userLoggedIn && debitCard && 2 == 2){
    console.log("Allowed To Shopping");
}

// || - one or more true than execute
if(loggedInFromGoogle || loggedInFromEmail || debitCard){
    console.log("User Logged In");
}