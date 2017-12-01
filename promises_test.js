

let firstPromise = new Promise(function (resolve, reject) {
    resolve('success');
 });
 
 firstPromise.then(function (successMessage) {
    console.log(successMessage);
 });




//---------------------------------Second Promises Start-------------------------------------
//Second pormises

//  let secondPromise = new Promise(function (resolve, reject) {
//     // her kunne der være masser af kode der skulle udføres
//     // og derefter afsluttes med at resolve eller reject
//     // alt efter om alting lykkedes eller ej
//     if (false) {
//        resolve('success');
//     } else {
//        reject('Det var ikke en succes');
//     }
//  });
 
//  secondPromise.then(successMessage => {
//     console.log(successMessage);
//  }).catch(errorMessage => {
//     console.log(errorMessage);
//  });

//---------------------------Second Promises end-------------------------------------------




//Third Promises

// function thirdPromise(someBoolValue) {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//           if (someBoolValue) {
//              resolve('Denne besked kommer fra "resolve"');
//           } else {
//              reject(new Error('Det var ikke en succes, dette kommer fra "reject"'));
//           }
//        }, 2000);
//     })
//  }
//  thirdPromise(true)
//     .then((success) => {
//        console.log(success);
//        throw new Error('lad os sige noget gik galt!');
//        return 'Information sendes videre';
//     }).then((nextSuccess) => {
//        console.log(nextSuccess);
//     }).catch((error) => {
//        console.log(error);
//     });