const user = {
    username : "Sonal",
    price : 399,
    
    welcomeMessage : function(){
        //console.log(`${this.username}, Welcome to Website`);
        //console.log(this);
    }
}

user.welcomeMessage()

user.username = "Sonuu"
user.welcomeMessage()

//console.log(this);

// ************************* Arrow Function *******************************

// function chai(){
//     let username = "Sonal"
//     console.log(this.username); //undefined now work
// }
// chai()

// const chai = function(){
//     let username = "Sonal"
//     console.log(this.username); //undefined 
// }
// chai()

const chai = () => {
    let username = "Sonal"
    console.log(this.username); //undefined 
}
// chai()

//syntax of arrow function:
//