// var sayHey = function sayHey(value){
//     console.log(value);
// }
// sayHey('Matt')



// sayHello('Matt');  // Udskriver "hello hoisting"
// sayHello('Thomassen');

// function sayHello(who) { // who er et argument
//     console.log(who);
// }
// sayHello('20'); // Udskriver "20"




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

// var langtekst = "Hej med dig.";
// function afkorttekst(tekst){
//     // return tekst.substring(0, 6); //den starter fra talllet "0" efter tager den alt der fylder de "6";
//     return tekst.substr(0, 6); // den skære teksten 0 paldser frem til 6, 
// }
// console.log(afkorttekst(langtekst));W


// var dato = new Date();
// // console.log(Date.now());

// var birthday = new Date("01/04/97");
// console.log(dato.getFullYear() - birthday.getFullYear());

// function add(x = 3, y = 8) {
//     console.log(`x er lig med ${x} og y=${y}. Sum: `, x + y);
// }
 
// add(); //Udskriver "x er lig med 0 og y=0. Sum:  0"
// add(3, 8); //Udskriver "x er lig med 3 og y=8. Sum:  11"

// var profil = function (p) {
//     var dato = new Date();
//     dato = dato.getFullYear();   
   
//     var bday = new Date(p[2]);
//     bday = bday.getFullYear();
//     var age = dato - bday;    
    
//     return p[0] + " " + p[1] + ": is Born in " + p[2] +" age " +age;
//  }
 
//  var idol = ["Ronny", "W. G.",  "1996/12/29"];
//  console.log(profil(idol));

 var profil = function (p) { //profile har functionen p
    var dato = new Date();
    dato = dato.getFullYear();
    
    var bday = new Date(p[2]);
    bday = bday.getFullYear();
    var age = dato - bday;
     return p[0] + " " + p[1] + ": Født" + " " + p[2] + " " + "er " +age + " år"; // Returnerer tekst-strengen "Peter Pedal: Født 1941"

   // return p[0] + " " + p[1] + " " + p[2] + ": født i" + p[3]+ " age" +age;
}
var idol = ["Matt", "Thomassen", "01/04/97"];
console.log(profil(idol)); // Udskriver "Matt Thomassen 1997"