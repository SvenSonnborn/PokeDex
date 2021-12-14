let currentPokemon;
let pokemonnumber = 0;
let id;
let classcolor;

async function loadPokemon() {
    for (let i = 0; i < 50; i++) {
        pokemonnumber++;
        id = i;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonnumber}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        document.getElementById('pokedex-complete').innerHTML += `
        <div id="pokemon-singlecard${id}" class="pokemon-singlecard">
        <h1 id="pokemonName${id}">Name</h1>
        <div class="types">
            <span id="type1${id}" class="type-single">Type1</span>
            <span id="type2${id}" class="type-single d-none">Type2</span>
        </div>
        <img id="pokemonImg${id}" class="pokemonImg">
    </div>
        `;
        console.log('loaded pokemon', currentPokemon);
        renderPokemonInfo(id);
        background(id);
    }
}
function renderPokemonInfo(id) {
    document.getElementById(`pokemonName${id}`).innerHTML = currentPokemon['name'];
    document.getElementById(`pokemonImg${id}`).src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById(`type1${id}`).innerHTML = currentPokemon['types'][0]['type']['name'];
    type2(id);
}

function type2(id){
    if (currentPokemon['types'].length > 1) {
        document.getElementById(`type2${id}`).classList.remove('d-none');
        document.getElementById(`type2${id}`).innerHTML = currentPokemon['types'][1]['type']['name'];
    }
}
function background(id){
    classcolor = document.getElementById(`type1${id}`).innerHTML;
    document.getElementById(`pokemon-singlecard${id}`).classList.add(`${classcolor}`);
}
