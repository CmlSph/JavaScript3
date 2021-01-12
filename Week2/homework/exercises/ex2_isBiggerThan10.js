/*Exercise 2: Is it bigger than 10?

Write a function called checkDoubleDigits that:

Takes 1 argument: a number
Returns a new Promise
If the number is bigger than 10, resolve with the string: "The number is bigger than 10!"
If the number is smaller than 10, reject with the error: "Error! The number is smaller than 10..."*/

// function promiseTimeout(number) {
//     const promise = new Promise((resolve, reject) => {
      
//         if (number > 10) {
//             resolve ("done");
//         }
//         else{
//             reject(new Error("smaller than 10"));
//         }
     
//   })
  
//   const checkIfDone = () => {
//     promiseTimeout
//       .then(ok => {
//         console.log(ok)
//       })
//       .catch(err => {
//         console.error(error)
//       })
//   }

// }

function checkDoubleDigits (number) {
    document.getElementById("para").innerHTML = number;
  }
  
  const myPromise = new Promise(function(myResolve, myReject) {
    
    let x = 7;
  
  
    if (x >= 10) {
      myResolve("The number is bigger than (or equal to) 10!");
    } else {
      myReject("Error! The number is smaller than 10...");
    }
  });
  
  myPromise.then(
    function(result) {
      checkDoubleDigits (result);
    },
    function(error) {
      checkDoubleDigits (error);
    }
  );