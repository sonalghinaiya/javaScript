//const userEmail = "sonu@gmail.com"
const userEmail = ""

if(userEmail){
    console.log("Got User Email");
}else{
    console.log("Don't Have User Email");
}

//falsy Values
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy Values
//"0", 'false', " ", [], {}, function(){}, 
const usermail = []
if(usermail.length === 0){
    console.log("Array is empty");
}

const emptyObj ={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//console (output true)
// false == 0
// false == ''
// 0 == ''

//Nullish Coalescing Operator (??) : null undefined
// if null than assign second
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 15

console.log(val1);

//Ternary Operator
//condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less Than 80") : console.log("More Than 80");