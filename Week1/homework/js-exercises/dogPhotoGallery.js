//With XMLHttpRequest

function getImage(){
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function() {
        const dogImage = JSON.parse(xhr.responseText);
        
        console.log(dogImage);
        console.log(dogImage.message);
        const img = document.createElement('img')
        img.style.width = '200px';
        
        img.src = dogImage.message
        
       
        const ul = document.getElementById('dogPicture')
        const li = document.createElement('li')
        li.appendChild(img);
        ul.appendChild(li);
        
    
    }
    const url = "https://dog.ceo/api/breeds/image/random"
    xhr.open("GET", url);
    xhr.send()
    
    xhr.onerror = function (error) {
        console.log(`There may be a network problem!`, error);
    }

    // xhr.onload = function(){
    //     console.log("onload");
    //     if(xhr.status < 400){
    //         const dogImage = xhr.response;
    //         console.log(dogImage);  
    //     }
    //     else{
    //         console.log("HTTP Error", xhr.status);
    //     }
    // }
    
}
    window.onload = function (){
        document.getElementById("xmlButton").onclick = function(){
            getImage();
        }
    }


// //With Axios

function getPicture(){
    const url = `https://dog.ceo/api/breeds/image/random`
    
    
    axios.get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data.message);
        const img = document.createElement('img')
        img.style.width = '200px';
        
        img.src = response.data.message
        
       
        const ul = document.getElementById("dogPictureI")
        const li = document.createElement('li')
        li.appendChild(img);
        ul.appendChild(li);
    
      
      })
      .catch(function (error) {
        // handle error
        // document.getElementById("dogPicture").innerText = error
        const messageElement = document.getElementById("dogPictureI");
        messageElement.innerText = error;
        messageElement.style.color='red';
      })
      
    }
    
    window.onclick = function (){
        document.getElementById("axiosButton").onclick = function(){
            getPicture();
        }
    }
    




