# Promises
### Man starter en ny promis med "let" = new promise med en funktion resolve og reject, som bare er fuldført eller afvise. i linje 12 står der så "then" success besked, som den så udskriver resolve argu mentet 'Success'.


```javascript

let firstPromise = new Promise(function (resolve, reject) {
    resolve('success');
 });
 
 firstPromise.then(function (successMessage) {
    console.log(successMessage);
 });

```


## Promise 2
### SecondPromise er næsten det samme som den først, men den har en if-else som man kan ændre på true eller fasle, så true vil give "success" beskeden og false er else reject.

### på linje 36 har vi så en "then" hvor den udskriver en tag, og så catch'er den en error message som er fra else reject på linje 32.

```javascript

 let secondPromise = new Promise(function (resolve, reject) {
    // her kunne der være masser af kode der skulle udføres
    // og derefter afsluttes med at resolve eller reject
    // alt efter om alting lykkedes eller ej
    if (false) {
       resolve('success');
    } else {
       reject('Det var ikke en succes');
    }
 });
 
 secondPromise.then(successMessage => {
    console.log(successMessage);
 }).catch(errorMessage => {
    console.log(errorMessage);
 });

```


## Promise 3
### Vi giver thirdPromise en parametre "someBoolValue" og så retunere vi en new promises
### setter en time out som delay så scripten tager 2 sek før den køre. så er der en if-else med argumentet fra thirdPromises.

### På linje64  

```javascript
function thirdPromise(someBoolValue) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
          if (someBoolValue) {
             resolve('Denne besked kommer fra "resolve"');
          } else {
             reject(new Error('Det var ikke en succes, dette kommer fra "reject"'));
          }
       }, 2000);
    })
 }
 
 thirdPromise(true)
    .then((success) => {
       console.log(success);
       throw new Error('lad os sige noget gik galt!');
       return 'Information sendes videre';
    }).then((nextSuccess) => {
       console.log(nextSuccess);
    }).catch((error) => {
       console.log(error);
    })
    
```