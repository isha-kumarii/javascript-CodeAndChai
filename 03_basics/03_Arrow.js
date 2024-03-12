const user = {
    username: "Isha",
    price: 999,

    WelcomeMessage: function(){
        console.log(`${this.username} ,Welcome to website`);
        console.log(this)
    }
}
// user.WelcomeMessage()
// user.username = "Ram"
// user.WelcomeMessage()
// function chai(){
//     console.log(this.username)  //Cannot use this.Username isnside function.
// }
//chai()

// const chai = function(){
//     let username ="Isha"
//     console.log(this.username)
// }
//chai()
// const chai = () => {
//     let username ="Isha"
//     console.log(this)
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }        //if we use curly braces then we use return and if we dont use curly braces then 
            //we write below code

const addTwo = (num1,num2) => (num1 + num2)
console.log(addTwo(3,4));



