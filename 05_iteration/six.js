//Filter

//const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item)
//     return item //undefined because forEach not return anything
// })
//console.log(values); //undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
//const newNums = myNums.filter((num) => num > 4)

//scope {} than use return keyword
// const newNums = myNums.filter((num) => {
//    return num > 4
// })

//Array (for each)
const newNums = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums.push(num)
    }
} )
console.log(newNums);

const books = [
    {title:'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title:'Book Two', genre: 'Non-Fiction', publish: 2001, edition: 2005},
    {title:'Book Three', genre: 'History', publish: 1971, edition: 2007},
    {title:'Book Four', genre: 'Science', publish: 1983, edition: 2009},
    {title:'Book Five', genre: 'Non-Fiction', publish: 2003, edition: 2010},
    {title:'Book Six', genre: 'History', publish: 2002, edition: 2012},
    {title:'Book Seven', genre: 'Science', publish: 1999, edition: 2024},
]

let userBooks = books.filter((bk) => bk.genre === "History")
userBooks = books.filter( (bk) => bk.publish >= 2000 && bk.genre === "History")
console.log(userBooks);
