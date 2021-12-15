let currentPokemon;
let pokemonnumber = 1;
let id;
let classcolor;
let nodetails = false;

async function loadPokemon() {
    for (let i = 1; i < 50; i++) {
        id = i;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonnumber}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        addcontainer(id);
        //        console.log('loaded pokemon', currentPokemon);
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
function changeImgShiny(id){
    document.getElementById(`pokemonImg${id}`).src = currentPokemon['sprites']['front_shiny'];
    document.getElementById('colorchange').innerHTML = `<a class="navbar-brand" onclick="changeToNormal()">Change to normal</a>`;
}
function changeImgNormal(id){
    document.getElementById(`pokemonImg${id}`).src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('colorchange').innerHTML = `<a class="navbar-brand" onclick="changeToShiny()">Change to shiny</a>`;
}

function type2(id) {
    if (currentPokemon['types'].length > 1) {
        document.getElementById(`type2${id}`).classList.remove('d-none');
        document.getElementById(`type2${id}`).innerHTML = currentPokemon['types'][1]['type']['name'];
    }
}
function background(id) {
    classcolor = document.getElementById(`type1${id}`).innerHTML;
    document.getElementById(`pokemon-singlecard${id}`).classList.add(`${classcolor}`);
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
function back() {
    nodetails = false;
}


async function detailed(number) {

    url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    response = await fetch(url);
    currentPokemon = await response.json();
    rendercard(number);
    document.getElementById(`pokemonNameDetailed${number}`).innerHTML = currentPokemon['name'];
    document.getElementById(`pokemonImg${number}Detailed`).src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById(`type1${number}Detailed`).innerHTML = currentPokemon['types'][0]['type']['name'];
    numbersizeDetailed(number)
    showSecondType(number)
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
    if (nodetails === false) {
        document.getElementById(`pokedex-complete`).innerHTML += `
        <div class="detailed" id="detailed">
            <div class="top">
                <nav class="navbar">
                    <img src="./img/back.png" onclick="back()">
                    <img src="./img/favoriteAdd.png" onclick="favorite()">
                </nav>
                <div class="middlepart">
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
                </div>
            </div>
            <img id="pokemonImg${number}Detailed" class="DetailedImg">
            <div class="bottom" id="bottomCard">

            </div>
        </div>
        `;
        addProgressBar(number);
    }
}

function addProgressBar(number) {
    document.getElementById('bottomCard').innerHTML = `
    <h2 class="statText"> Stats </h2>
    <div class="firstLine">
        <p>HP</p>
        <div class="progress">
            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" id="hp"></div>
        </div>
    </div>
    <div class="firstLine">
        <p>ATK</p>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" id="atk"></div>
        </div>
    </div>
    <div class="firstLine">
        <p>DEF</p>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" id="def"></div>
        </div>
    </div>
    <div class="firstLine">
        <p>SP-ATK</p>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" id="sp-atk"></div>
        </div>
    </div>
    <div class="firstLine">
        <p>SP-DEF</p>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" id="sp-def"></div>
        </div>
    </div>
    <div class="firstLine">
        <p>SPEED</p>
        <div class="progress">
            <div class="progress-bar progress-bar-striped bg-secondary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" id="speed"></div>
        </div>
    </div>
    `;
    progressBarNumbers();
}
function progressBarNumbers() {
    getHpValue();
    getAtkValue();
    getDefValue();
    getSpAtkValue();
    getspDefValue();
    getSpeedValue();
}
function getHpValue() {
    let hp = currentPokemon['stats'][0]['base_stat'];
    document.getElementById('hp').style = `width: ${hp}%`;
}
function getAtkValue() {
    let atk = currentPokemon['stats'][1]['base_stat'];
    document.getElementById('atk').style = `width: ${atk}%`;
}
function getDefValue() {
    let def = currentPokemon['stats'][2]['base_stat'];
    document.getElementById('def').style = `width: ${def}%`;
}
function getSpAtkValue() {
    let spAtk = currentPokemon['stats'][3]['base_stat'];
    document.getElementById('sp-atk').style = `width: ${spAtk}%`;
}
function getspDefValue() {
    let spDef = currentPokemon['stats'][4]['base_stat'];
    document.getElementById('sp-def').style = `width: ${spDef}%`;
}
function getSpeedValue() {
    let speed = currentPokemon['stats'][5]['base_stat'];
    document.getElementById('speed').style = `width: ${speed}%`;
}
function filterNames(){
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    let complete = document.getElementById('pokedex-complete');
    complete.innerHTML = '';
    for (let index = 0; index < 50; index++) {
        let 
        
    }
}