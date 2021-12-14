let currentPokemon;

async function loadPokemon(){
    let url = 'https://pokeapi.co/api/v2/pokemon/6';
    let response = await fetch(url);
    currentPokemon = await response.json();

    console.log('loaded pokemon', currentPokemon);

    renderPokemonInfo();
}

function renderPokemonInfo(){
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonImg').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('type1').innerHTML = currentPokemon['types'][0]['type']['name'];

    if (currentPokemon['types'].length > 1) {
        document.getElementById('type2').classList.remove('d-none');
    }
    document.getElementById('type2').innerHTML = currentPokemon['types'][1]['type']['name'];
}

