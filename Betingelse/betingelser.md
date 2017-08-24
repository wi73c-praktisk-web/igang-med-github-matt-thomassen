# Betingelser

### If er "true", så skriv "Hej Verden"


```javascript

if(true){
    console.log('Hej Verden');
}

```

### Øvelse 2
### Math.random laver en tal mellem 0 og 1.

```javascript

var tal = Math.floor(Math.random(tal) * 11);
        console.log(tal);
if(tal>5){
    console.log("Tallet er større end 5");
}else{
        console.log("Tallet er ikke større");
}

```
### Øvelse 3

```javascript

var tal = Math.floor(Math.random(svar) * 11);
var svar = tal ? "Højere end 5" : "Mindre end 5";
console.log(svar);

var tal = Math.floor(Math.random(tal) * 11);
console.log(tal);
var tal2 = (tal2<tal);
console.log(tal2)
tal2 = (tal2<5)  ? "Mindre end 5" : "Højere end 5";

```
### Øvelse 4

```javascript

var laskedrik = "Pepsi";
if (laskedrik == "Faxe"){
    console.log("Det er Faxekondi")
}else if(laskedrik == "Cola"){
    console.log("Det er Cola");
}else if(laskedrik == "Pepsi"){
    console.log("Hvorfor Pepsi? Der er for meget sukker i dem")
}else{
     console.log("Det er ikke Faxekondi, Cola eller Pepsi");
}

```
### Øvelse 5

```javascript

var farve = ["Rød", "Blå", "Grøn"];
    farve.forEach(function(item, index) {
        console.log(item + ' ' + index);
    });

var cars = "Volvo";
switch(cars){
    case "Volvo":
    console.log("Volvo er flotte");
    break;

    case "Ferrari":
    console.log("Farrari er hurtige");
    break;

    case "Fiat":
    console.log("Fiat er små");
    break;

    default:
    console.log("Ukendt bil");
    break;
}

```
### Øvelse 6

```javascript

var tal1 = 2;
var tal2 = 10;
var resultat = tal1 + tal2;
console.log(resultat);

```

### Øvelse 7

```javascript

var tal1 = 1;
    tal1--;
    console.log(tal1);

var tal1 = 1;
    tal1++;
    console.log(tal1);

var

```

### Øvelse 8

```javascript

var z = 17;
var x = 15;
if(z>x){
    console.log("Det er ikke større");

}else{
    console.log("Tallet er større");
}

var z = 1;
var x = 3;
if(z<x){
    console.log("Større");
}

for(var i = 0; i < 10; i++){
    console.log(i);
 }

var text = "";
var index = 0;

do{
    text += "\n Nummer er" + " " + index;
    index++;
    console.log(text);
}while(index<5);

var text = "";
var i = 1;
while(i<25){
    i++;
    console.log(i);
}    
    
for(var i = 2017; i > 1916; i--){
    console.log(i);
 }

```
### Øvelse 9

```javascript
var name = ["Abe1", "Abe2", "Abe3", "Abe4", "Abe5", "Abe6", "Abe7", "Abe8"];
name.forEach(function(name){
    console.log(name);
});

```

### Øvelse 10

```javascript

var musiker = ["Musiker1", "Kunstner1", "Musiker2", "Kunstner2"];
musiker.forEach(function(musiker, index, arr){
    console.log(musiker + ' Har placering ' + index);
});

```

### Øvelse 11

```javascript

var tal = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10];
tal.forEach(function(tal, index, arr){

})

```

