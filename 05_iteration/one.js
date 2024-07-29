//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is best number")
    }
    //console.log(element)
}
//console.log(element); //error

for(let i = 1; i <= 10 ; i++){
    //console.log(`Outer Loop Value:${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner Loop Value:${j} and Outer Loop Value:${i}`);
        //console.log(i + '*' + j + '=' + i*j);
    }
}

//Array
let myArray = ["bheem", "nobita", "suniyo"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}