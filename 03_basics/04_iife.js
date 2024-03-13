// Immediately Invoked Function 

(function chai(){
    console.log(`DB Connected`);
})();   //We need to put ";" at the end of IIFE because if not
// then compiler doesn't know where to end the IIFE


//Global scope ke pollution se problem hota sometimes so to avoid that 
// we Use Immediately invoked function.
//chai()

(function aurcode() {   //named IIFE
    console.log(`DB coonected Two`);
})();


((name) => {    //Parameterized IIFE
    console.log(`DB coonected Two ${name}`);
})('Isha');

