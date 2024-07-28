// let a = 10
// const b = 20
// var c = 30

//{} scope of program
//var c = 300
let a = 100
if(true){
    let a = 10
    const b = 20

    //console.log("Inner:",a);
    //c = 30
    //var c = 30
} 

//console.log("Outer:",a);
// console.log(b);
//console.log(c); //30


// ******************* Nested Scope ************************************
function one(){
    const username = "Sonal"

    function two(){
        const websites = "Youtube"
        //console.log(username);
    }
    //console.log(websites);//error

    two()
}

one()

if(true){
    const username = "Sonu"
    if(username === "Sonu"){
        const websites = " Youtube"
        //console.log(username + websites);
    } 
    //console.log(websites); //error
}
//console.log(username); //error


//*******************************Mini Hoisting ***********************************

console.log(addOne(5))

function addOne(num){
    return num + 1
}


//variable
//console.log(addTwo(5)) //not use before declaration

const addTwo = function(num){
    return num + 2
}

