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

const obj1 = {1: "a", 2: "b"}
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
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //arrays
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//************************* Object DeStructure*********************************
const course = {
    coursename: "JS With Chai & Code",
    price: 999,
    courseStudent: "Sonal Ghinaiya"
}

// console.log(course.courseStudent);

const {courseStudent : student} = course
// console.log(courseStudent); 
console.log(student); 

//*************************** API JSON Format ******************************
// {
//     "name": "Sonal",
//     "age": 20,
//     "course": "JS with Chai and Code"
// }

//*************************** API Array Format *******************************
[
    {},
    {},
    {}
]

//*************************** API *******************************
//Google -> Random User Generator  copy 
// {"results":[{"gender":"male","name":{"title":"Mr","first":"Ronald","last":"Dunn"},"location":{"street":{"number":98,"name":"School Lane"},"city":"Bristol","state":"West Yorkshire","country":"United Kingdom","postcode":"T1W 2FD","coordinates":{"latitude":"-7.2959","longitude":"-36.4704"},"timezone":{"offset":"+5:00","description":"Ekaterinburg, Islamabad, Karachi, Tashkent"}},"email":"ronald.dunn@example.com","login":{"uuid":"d3a0b2f8-4497-4ee6-849c-5d183906e1b0","username":"organicrabbit388","password":"devo","salt":"qqLD54yc","md5":"1dfe5a64f97e68a23c56f9c281116cc9","sha1":"63e6a92dfe895e063ca0d8e5683035b40ef35400","sha256":"559bf94000580d686d35814dd6212a73bfaa5723fb7f7d6974dd9ac2de357b3d"},"dob":{"date":"1992-04-28T07:21:36.770Z","age":32},"registered":{"date":"2004-03-15T13:08:22.129Z","age":20},"phone":"019467 36322","cell":"07419 150028","id":{"name":"NINO","value":"ZP 13 58 84 C"},"picture":{"large":"https://randomuser.me/api/portraits/men/50.jpg","medium":"https://randomuser.me/api/portraits/med/men/50.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/50.jpg"},"nat":"GB"}],"info":{"seed":"8a047e614b51ab59","results":1,"page":1,"version":"1.4"}}


//paste JSON Formatter (tree) structure view

