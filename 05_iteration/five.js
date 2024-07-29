//for each

const coding = ["js", "ruby", "java", "python", "cpp"]

//coding.forEach() //(callbackfunction)
// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

//[{},{}] array inside object
const myCoding = [
    {
        language: "javascript",
        filename: "js"
    },
    {
        language: "java",
        filename: "java"
    },
    {
        language: "python",
        filename: "py"
    }
]

myCoding.forEach((item) => {
    //console.log(item);
    console.log(item.language);
})