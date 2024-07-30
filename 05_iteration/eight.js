//reduce

const myNumbs = [1, 2, 3, 4, 5]

const myTotal = myNumbs.reduce(function (acc, curval){
    console.log(`Accumulator: ${acc} and Current Value: ${curval}`);
    return acc + curval
},0)
console.log(myTotal)

const sum = myNumbs.reduce( (accumulator, currentValue) => accumulator + currentValue,0)
console.log(sum);

const shopping_cart = [
    {
        itemName: "JS Course",
        price: 299
    },
    {
        itemName: "Java Course",
        price: 2999
    },
    {
        itemName: "React Course",
        price: 799
    }
]

const totalPrice = shopping_cart.reduce( (acc, item) => acc+ item.price,0)
console.log(totalPrice);