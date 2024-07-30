//Maps

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNumbes = myNumbers.map( (num) => num + 10)

//chianing
const newNumbes = myNumbers
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 31 )
console.log(newNumbes);