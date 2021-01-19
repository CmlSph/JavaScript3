// Exercise A
async function getData(url) {
  try {
   const response = await fetch(url);
   const json = await response.json();
   return json;
  }
  catch {
    console.log("Error!!!");
  }
}
getData('https://randomfox.ca/floof/').then(data=> {
  console.log(data);
  console.log("Done")
})


// Exercise B
const arrayOfWords = ['cucumber', 'tomatoes', 'avocado'];

async function makeAllCaps(array){
  let capsArray = array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        reject('Error: Not all items in the array are strings!');
      }
    });
    return capsArray;
  }

async function myFunction() {
  try {
    const result = await makeAllCaps(arrayOfWords);
    console.log(result);
    console.log("Done!")
  }
  catch {
    console.log('Error: Not all items in the array are strings!')
  }
}

myFunction();