// let a = 10
// const b = 20
// var c = 30

//{} scope of program
//var c = 300
let a = 100
if(true){
    let a = 10
    const b = 20

    console.log("Inner:",a);
    //c = 30
    //var c = 30
} 

console.log("Outer:",a);
// console.log(b);
//console.log(c); //30
