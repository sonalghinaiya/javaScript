//const myArr = [1,2,3,4]
//myArr  //run in browser and show the prototype

const marvel_heros = ["spiderman", "thor", "Ironman"]
const dc_heros = ["Doraemon", "Bheem", "Shinchen"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new = [...marvel_heros, ...dc_heros]
// console.log(all_new);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_array =  another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("Sonal"));
console.log(Array.from("Sonal"));
console.log(Array.from({name: "SONU"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
