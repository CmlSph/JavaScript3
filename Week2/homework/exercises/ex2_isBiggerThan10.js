function checkDoubleDigits(number) {
  return new Promise((resolve, reject) => {
    if (number > 10) {
      return resolve();
    } else {
      return reject();
    }
  });
}

checkDoubleDigits(1)
  .then(result => {
    console.log('The number is bigger than 10!');
  })
  .catch(reject => {
    console.log('Error! The number is smaller than 10!...');
}) 