/*Write a function that makes a HTTP Request to https://www.randomuser.me/api

Inside the JavaScript file write two functions: one with XMLHttpRequest, and the other with axios
Each function should make a HTTP Request to the given endpoint: https://www.randomuser.me/api
Log the received data to the console
Incorporate error handling: log to the console the error message*/

function funnyProgrammers(){
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function() {
        const funnyProgrammer = JSON.parse(xhr.responseText);
        console.log(funnyProgrammer)
        console.log(funnyProgrammer.img);

        const image = document.createElement('img');
        image.src = funnyProgrammer.img;
        document.body.append(image);

    
        
        
    }
    const url = "https://xkcd.now.sh/?comic=latest"
    xhr.open("GET", url);
    xhr.send()

    xhr.onerrror = function (error) {
        console.log(`There may be a network problem!`, error);
    }
    
    }

    //With Axios

    function myFunnyProgrammers(){
        const url = `https://xkcd.now.sh/?comic=latest`
        
        // Make a request for a user with a given ID
        axios.get(url)
          .then(function (response) {
            // handle success
            console.log(response)
            const image = document.createElement('img')
            image.src = response.data.img
            document.body.append(image)
            
            
          })
          .catch(function (error) {
            // handle error
            document.getElementById("tempInfo").innerText = error
            
          })
          
        }
        
       