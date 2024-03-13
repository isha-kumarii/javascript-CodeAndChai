//Flasy values
//false, 0, -0, BigInt

username = [];
if(username.length === 0){
    console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

//Nullish Coaslescing Operator(??) : null undefined

let val1;
val1 = 5 ?? 10
//val1 = null?? 10

console.log(val1)