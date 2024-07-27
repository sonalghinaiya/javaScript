//constructor (Singleton)

//const tinderUser = {} //same non singleton
const tinderUser = new Object()  //singleton

//console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "sonu"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "sonu@gmail.com",
    fullname: {
        usersfullname: {
            firstname: "Sonu",
            lastname: "Ghinaiya"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.usersfullname);
// console.log(regularUser.fullname.usersfullname.firstname);

//Object Merge

//const obj1 = {1: "a", 2: "b"}
//obj1 //go to browser and show more property in prototype
const obj2 = {3: "s", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

//const obj3 = Object.assign(obj1, obj2)
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

//database value - array of object
const user = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "sb@gmail.com"
    },
    {
        id: 3,
        email: "sonu@gmail.com"
    }
]

//console.log(user[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //arrays
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

