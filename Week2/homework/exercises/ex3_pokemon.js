function main(){

    const buttonGetPokemon = document.createElement('button')
    buttonGetPokemon.id = 'myButton'
    buttonGetPokemon.innerText = 'Get Pokemon'
    document.body.appendChild(buttonGetPokemon);
    const pokemonSelect = document.createElement('select');
    pokemonSelect.id = 'pokemon';
    document.body.appendChild(pokemonSelect);
    const imageOfThePokemon = document.createElement('img');
    imageOfThePokemon.id = 'pokemonImage';
    document.body.appendChild(imageOfThePokemon);
    pokemonImage.style.display = 'block';

 
    let pokemonsArray;

    const url = ('https://pokeapi.co/api/v2/pokemon?limit=151')

    function addPokemonToDOM(array) {
        array.forEach((element, index) => {
          const pokemonOptions = document.createElement('option');
          pokemonOptions.innerText = element.name;
          pokemonSelect.appendChild(pokemonOptions);
          pokemonOptions.value = index;
        });
      };

    function fetchPokemon() {
        fetch(url)
          .then(response => response.json())
          .then(JSONdata => {
            pokemonsArray = JSONdata.results; 
            addPokemonToDOM(pokemonsArray);
          })
      };
    
    buttonGetPokemon.addEventListener('click', fetchPokemon);
    
    function fetchImage(event) {
        const urlOfThePokemonImages = pokemonsArray[event.target.value].url;
            fetch(urlOfThePokemonImages)
            .then(response => response.json())
            .then(data => {
            imageOfThePokemon.src = data.sprites.front_default;
          })
      };
    
    pokemonSelect.addEventListener('change', fetchImage);
}

window.onload = main();