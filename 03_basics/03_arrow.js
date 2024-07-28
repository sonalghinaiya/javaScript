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