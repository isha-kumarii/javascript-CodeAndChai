function sayMyName(){
    console.log("I");
}

//sayMyName();

function addTwoNUmbers(number1,number2){
    let result = number1 + number2;
    return result;
}

let r = addTwoNUmbers(3,"7");
//console.log(addTwoNUmbers(4,5));

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`;
}
//console.log(loginUserMessage());    //Undefined just logged in.

function calculateCartPrice(...num1){ //
    return num1;
}

console.log(calculateCartPrice(200,400, 1000)); 

const user = {
    username: "ISha",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.username}`);

}
//handlesObject(user);