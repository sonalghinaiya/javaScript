//reduce

const myNumbs = [1, 2, 3, 4, 5]
const myTotal = myNumbs.reduce(function (acc, currval){
    console.log(`Accumulator: ${acc} and Current Value:${currval}`);
    return acc + currval
},0)


console.log(myTotal);
