//for in

//object
const myObj ={
    js: 'javaScript',
    cpp: 'C++',
    rb: "Ruby",
    swift: "Switch by apple"
}

for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
    //console.log(`${key} Shortcut is for ${myObj[key]}`)
}

//Array
const programming = ["js", "rb", "py", "java"]
for (const key in programming) {
    //console.log(programming[key]);
}

//Maps
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("FR", "France")
map.set("IN", "India")//unique value so not add again

for (const i in map) {
    console.log(i);
}
