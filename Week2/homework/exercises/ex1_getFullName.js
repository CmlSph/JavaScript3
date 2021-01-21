function getFullName(firstName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        return reject()
} 
      const fullName = `${firstName} Doe`;
      return resolve(fullName);
    });
  }, 1000); 
}
getFullName()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log("You didn't provide a first name!");
    });