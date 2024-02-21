//const tinderUser = new object() //singleton object
const tinderUser = {}   //non-Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "isha"
tinderUser.isLoggedIn = false;

//console.log(tinderUser)

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Isha",
            lastname: "Kumari"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1,obj2)   //Merge tro objects and first object is the target so if we keep obj1 as first object then everything gets copied to obj1.

//const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const course = {
    coursename: "Js in Hindi",
    price:"999",
    courseInstructore :"Histesh"
}

//course.courseInstructore

//TO make the code a bit more clean we use JSON
//{}->Curly braces means destructuring

const{courseInstructore} = course
//console.log(courseInstructore)


//JSON
{
    "name": "Isha",
    "coursename":"JavaScript",
    "price": "free"
}




