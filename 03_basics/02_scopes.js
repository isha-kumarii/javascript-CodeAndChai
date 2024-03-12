var c = 200
if (true) {
    let a = 10;
    const b =20;
    var c = 30;
    //console.log("INNER: ",a)
}
//

//console.log(a);
//console.log(b);
//console.log(c);

//Nested scope
function one(){
    const username = "Isha"

    function two(){
        const website = "YouTube"
        console.log(username);
    }
    //console.log(website);
    two()
}

//one()

if(true) {
    const username = "Isha"
    if(username === "Isha") {
        const website = "YouTube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log("Isha");
