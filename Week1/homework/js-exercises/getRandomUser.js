/*Write a function that makes a HTTP Request to https://www.randomuser.me/api

Inside the JavaScript file write two functions: one with XMLHttpRequest, and the other with axios
Each function should make a HTTP Request to the given endpoint: https://www.randomuser.me/api
Log the received data to the console
Incorporate error handling: log to the console the error message*/

function getRandomUser(){
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function() {
        const randomUser = JSON.parse(xhr.responseText);
        console.log(randomUser)
        console.log(randomUser.results[0].gender)
        
    }
    const url = "https://www.randomuser.me/api"
    xhr.open("GET", url);
    xhr.send()

    xhr.onerrror = function (error) {
        console.log(`There may be a network problem!`, error);
    }
    
    }

    //With Axios

    function getTheRandomUser(){
        const url = `https://www.randomuser.me/api`
        
        // Make a request for a user with a given ID
        axios.get(url)
          .then(function (response) {
            // handle success
            console.log(response);
            
            
          })
          .catch(function (error) {
            // handle error
            document.getElementById("tempInfo").innerText = error
            
          })
          
        }
        
       