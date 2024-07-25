const name = "Sonal"
const age = 20

//console.log(name + age + " Hello");

//console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String("Sonal-Ghinaiya")

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

const newStr = gameName.substring(0, 4)
console.log(newStr);

// const anotherstr = gameName.slice(-7, 5)
const anotherstr = gameName.slice(0, 4)
console.log(anotherstr)

const str1 = "      Sonal      "
console.log(str1);
console.log(str1.trim());

const url = "https://google.com/sonal%20ghinaiaya"
console.log(url.replace('%20', '-'))

console.log(url.includes('sonal'))
console.log(url.includes('sonl'))

console.log(gameName.split(''));
console.log(gameName.split('-'));

