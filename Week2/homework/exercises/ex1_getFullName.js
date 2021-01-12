function getFullName(firstName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (firstName) {
          const fullName = `${firstName} Doe`;
          resolve(console.log(fullName))
        } else {
          reject(console.log("You didn't pass in a first name!"))
        }
      }, 1000)
    })
  }
  getFullName() 