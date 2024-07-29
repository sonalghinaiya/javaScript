//for of

// ["", "", ""]
// [{}, {}, {}]

//Array
const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    //console.log(i);
}

//String
const greetings = "Hello World!"

for (const i of greetings) {
    //console.log(i);
}

//Maps
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("FR", "France")
map.set("IN", "India")//unique value so not add again

//console.log(map);

for (const i of map) {
    //console.log(i);
}

for (const [key, value] of map) {
    //console.log(key, value);
}

//Object : not work in for of loop
// const myObj = {
//     game1: "Candy Crush",
//     game2: "Spiderman"
// }

// for (const iterator of myObj) {
//     //console.log(iterator);
// }