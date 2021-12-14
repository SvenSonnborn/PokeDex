let currentPokemon;
let pokemonnumber = 1;
let id;
let classcolor;
let nodetails = fals;

async function loadPokemon() {
    for (let i = 1; i < 50; i++) {
        id = i;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonnumber}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        addcontainer(id);
        console.log('loaded pokemon', currentPokemon);
        renderPokemonInfo(id);
        background(id);
        pokemonnumber++;
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
function addcontainer(id){
    document.getElementById('pokedex-complete').innerHTML += `
    <div id="pokemon-singlecard${id}" class="pokemon-singlecard" onclick="detailed(id)">
    <h1 id="pokemonName${id}">Name</h1>
    <div class="types">
        <span id="type1${id}" class="type-single">Type1</span>
        <span id="type2${id}" class="type-single d-none">Type2</span>
    </div>
    <img id="pokemonImg${id}" class="pokemonImg">
</div>
    `;
}
function detailed(id){
    if (nodetails === fals){
        document.getElementById(`pokedex-complete`).innerHTML +=`
        <div class="detailed" id="detailed">
            <div class="top">
                <nav>
                    <img src="./img/back.img" onclick="back()">
                    <img src="./img/heart.img" onclick="favorite()">
                </nav>
                <div class="middlepart">
                    <div class="smallInfo" id="smallInfo">
                        <h2 id="pokemonNameDetailed${id}"> Name </h2>
                        <div class="typeDetailed" id="typedetailed${id}">
                            <span id="type1${id}Detailed" class="type-single">Type1</span>
                            <span id="type2${id}Detailed" class="type-single d-none">Type2</span>
                        </div>
                    </div>
                    <span id="pokemonNumberDetailed${id}" class="numberDetailed">
                        Testnumber
                    </span>
                </div>
            </div>
            <img id="pokemonImg${id}Detailed">
            <div class="bottom">
            
            </div>
        </div>
        `;
    }
}