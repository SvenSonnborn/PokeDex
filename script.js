async function loadPokemon() {
    for (let i = 1; i < 50; i++) {
        id = i;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonnumber}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        addcontainer(id);
        renderPokemonInfo(id);
        background(id);
        pokemonnumber++;
    }
}
async function changeToShiny() {
    pokemonnumber = 1
    for (let i = 1; i < 50; i++) {
        id = i;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonnumber}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        changeImgShiny(id);
        pokemonnumber++;
    }
}
async function changeToNormal() {
    pokemonnumber = 1
    for (let i = 1; i < 50; i++) {
        id = i;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonnumber}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        changeImgNormal(id);
        pokemonnumber++;
    }
}
async function detailed(number) {
    if (nodetails === false) {
        url = `https://pokeapi.co/api/v2/pokemon/${number}`;
        response = await fetch(url);
        currentPokemon = await response.json();
        rendercard(number);
        renderDetailedInfo(number);
        numbersizeDetailed(number)
        showSecondType(number)
        nodetails = true;
    }
}
function changeImgShiny(id) {
    document.getElementById(`pokemonImg${id}`).src = currentPokemon['sprites']['front_shiny'];
    document.getElementById('colorchange').innerHTML = `<a class="navbar-brand" onclick="changeToNormal()">Change to normal</a>`;
}
function changeImgNormal(id) {
    document.getElementById(`pokemonImg${id}`).src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('colorchange').innerHTML = `<a class="navbar-brand" onclick="changeToShiny()">Change to shiny</a>`;
}
function renderPokemonInfo(id) {
    document.getElementById(`pokemonName${id}`).innerHTML = currentPokemon['name'];
    document.getElementById(`pokemonImg${id}`).src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById(`type1${id}`).innerHTML = currentPokemon['types'][0]['type']['name'];
    type2(id);
}
function type2(id) {
    if (currentPokemon['types'].length > 1) {
        document.getElementById(`type2${id}`).classList.remove('d-none');
        document.getElementById(`type2${id}`).innerHTML = currentPokemon['types'][1]['type']['name'];
    }
}
function addcontainer(id) {
    document.getElementById('pokedex-complete').innerHTML += `
    <div id="pokemon-singlecard${id}" class="pokemon-singlecard" onclick="detailed(${id})">
        <h1 id="pokemonName${id}">Name</h1>
        <div class="types">
            <span id="type1${id}" class="type-single">Type1</span>
            <span id="type2${id}" class="type-single d-none">Type2</span>
        </div>
        <img id="pokemonImg${id}" class="pokemonImg">
    </div>
    `;
}
function back(number) {
    nodetails = false;
    document.getElementById('detailed').classList.add('d-none');
    removeImg();
    document.getElementById(`top`).classList.remove(`${classcolor}`);
}
function removeImg() {
    let detailed = document.getElementById('detailed');
    detailed.removeChild(detailed.lastElementChild);
}
function renderDetailedInfo(number){
    document.getElementById(`pokemonNameDetailed${number}`).innerHTML = currentPokemon['name'];
    document.getElementById(`pokemonImg${number}Detailed`).src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById(`type1${number}Detailed`).innerHTML = currentPokemon['types'][0]['type']['name'];
}
function showSecondType(number) {
    if (currentPokemon['types'].length > 1) {
        document.getElementById(`type2${number}Detailed`).classList.remove('d-none');
        document.getElementById(`type2${number}Detailed`).innerHTML = currentPokemon['types'][1]['type']['name'];
    }
}
function numbersizeDetailed(number) {
    if (number < 10) {
        document.getElementById(`pokemonNumberDetailed${number}`).innerHTML = `#00${number}`
    } else if (number > 10 && number < 100) {
        document.getElementById(`pokemonNumberDetailed${number}`).innerHTML = `#0${number}`
    } else {
        document.getElementById(`pokemonNumberDetailed${number}`).innerHTML = `#${number}`
    }
}
function rendercard(number) {
    document.getElementById('detailed').classList.remove('d-none');
    addMiddlePart(number);
    document.getElementById('detailed').innerHTML += `
        <img id="pokemonImg${number}Detailed" class="DetailedImg">
    `;
    addProgressBar(number);
    classcolor = document.getElementById(`type1${number}`).innerHTML;
    document.getElementById(`top`).classList.add(`${classcolor}`);
}
function addMiddlePart(number) {
    document.getElementById('middlepart').innerHTML = `
        <div class="smallInfo" id="smallInfo">
            <h2 id="pokemonNameDetailed${number}"> Name </h2>
            <div class="typeDetailed" id="typedetailed${number}">
                <span id="type1${number}Detailed" class="type-single">Type1</span>
                <span id="type2${number}Detailed" class="type-single d-none">Type2</span>
            </div>
        </div>
        <span id="pokemonNumberDetailed${number}" class="numberDetailed">
        Testnumber
        </span>
    `;
}
function addProgressBar(number) {
    getHpValue();
    getAtkValue();
    getDefValue();
    getSpAtkValue();
    getspDefValue();
    getSpeedValue();
}
function filterNames() {
    //    let search = document.getElementById('search').value;
    //    search = search.toLowerCase();
    //    let complete = document.getElementById('pokedex-complete');
    //    complete.innerHTML = '';
    //    for (let index = 0; index < 50; index++) {
    //        let         
    //    }
    window.alert("Work in Progress");
}
function favorite(){
    window.alert("work in Progress");
}