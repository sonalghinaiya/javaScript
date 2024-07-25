let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString()); //toJSON Same
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

//let myCreatedDate = new Date(2003, 7 ,13)
//let myCreatedDate = new Date(2003, 7 ,13, 4, 45, 10)
//let myCreatedDate = new Date("2003-08-13")
let myCreatedDate = new Date("08-13-2003")

// console.log(myCreatedDate);
// console.log(myCreatedDate.toString());

// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // 0 to 11
console.log(newDate.getDay()); //Monday....Sunday

console.log(newDate.toLocaleString('default',{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
}))
