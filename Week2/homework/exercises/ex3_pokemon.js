function main(){

    const buttonGetPokemon = document.getElementById("myButton")
    const repoSelect = document.getElementById("repo")
    const imageOfPokemon = document.getElementById('pokemonImage');
    

    function fetchData() {
        for (let i = 1; i <= 151; i++){
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`
            fetch(url)
            .then(response => response.json())
            .then((jsonData) => {
            const pokemonNames = jsonData.name
                
            const option = document.createElement('option')
            option.value = pokemonNames;
            option.innerText = pokemonNames;
            repoSelect.appendChild(option)
        })
    }
}
    buttonGetPokemon.addEventListener('click', fetchData);

    function fetchImage() {
        for (let i = 1; i <= 151; i++){
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`
            fetch(url)
                .then(response => response.json())
                .then(jsonData => {
                const theImageOfThePokemon = jsonData.sprites['front_default'];    
                if (repoSelect.value===jsonData.species.name){
                    imageOfPokemon.src = theImageOfThePokemon;
            
          }
      })
    }
}
window.onclick = function (){
    repoSelect.onchange = function(){
        fetchImage();
    }
}
}

window.onload = main()
