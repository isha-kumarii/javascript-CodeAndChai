//singleton
Object.create
//object literals

const mySym = Symbol("key1")

const JsUSer = {
    name: "Isha",
    [mySym]: "mykey1",
    location: "Kolkata",
    email: "isha@google.com",
    isLoggedin: false,
}


console.log(JsUSer.email)
console.log(JsUSer["email"])    //preferred for string

console.log(JsUSer[mySym])

Object.freeze(JsUSer)

console.log(JsUSer)

