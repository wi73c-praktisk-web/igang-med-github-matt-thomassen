// var sayHey = function sayHey(value){
//     console.log(value);
// }
// sayHey('Matt')



// sayHello('Matt');  // Udskriver "hello hoisting"
// sayHello('Thomassen');

// function sayHello(who) { // who er et argument
//     console.log(who);
// }
// sayHello('20'); // Udskriver "hello me"




// var sayHey = function sayHey(value) {
    
//     console.log(value);
// }
// sayHey('test for hoisting?'); // flyt ned under funktionen


// function udskriv(fornavn, efternavn, fodselsadag){
//     console.log(efternavn, fornavn, fodselsadag);
// }
//     udskriv('Matt', 'Thomassen', 1997);

// function add(tal1, tal2){
//     console.log(tal1 + tal2);
// }
// add(3, 5);

// var result = 0;
// function add(nummer){
//     // result = result + tal;
//     result += nummer; //pluser "add argument sammen"
// }
// add(2);
// add(2);
// console.log(result); //skriver det ned


// function sub(nummer){
//     result -= nummer; //minuser 
// }
// sub(2);
// console.log(result);

// function mult(nummer){
//     result *= nummer;
// }
// mult(3);
// console.log(result);

// function div(nummer){
//     result /= nummer;
// }
// div(2);
// console.log(result);

// var result = 0;
// function add(nummer){
//     // result = result + tal;
//     result += nummer; //pluser "add argument sammen"
// }
// add(2);
// add(2);
// sub(2);
// mult(5);
// div(5);
// console.log(result); //skriver det ned

// function sub(nummer){
//     result -= nummer; //minuser 
// }

// function mult(nummer){
//     result *= nummer;
// }

// function div(nummer){
//     result /= nummer;
// }

var langtekst = "Hej med dig.";
function afkorttekst(tekst){
    return tekst.substring(0, 6); //den starter fra talllet "0" efter tager den alt der fylder de "6";
    // return tekst.substr(2, 7); // den skære teksten 2 paldser frem, 
}
console.log(afkorttekst(langtekst));
