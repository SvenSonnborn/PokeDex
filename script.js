async function loadPokemon() {
    for (let i = 1; i < 151 + page; i++) {
        id = i;
        pokemonnumber = i;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonnumber}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokemonnumber++;
    }
    if (page >= 151) {
        loadloop28();
    } else {
        for (let i = 0 + page; i <30 + page; i++) {
            id = i;
            pokemonnumber = i;
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemonnumber}`;
            let response = await fetch(url);
            currentPokemon = await response.json();
            addcontainer(id);
            renderPokemonInfo(id);
            background(id);
            showpage();
            pokemonnumber++;
        }
    }

}

async function loadloop28(){
    for (let i = 0 + page; i < 1 + page; i++) {
        id = i;
        pokemonnumber = i;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonnumber}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        addcontainer(id);
        renderPokemonInfo(id);
        background(id);
        showpage();
        pokemonnumber++;
    }
}

async function changeToShiny() {
    pokemonnumber = 0 + page;
    if (page >= 151) {
        shinyloop28();
    } else {
        for (let i = 0 + page; i < 30 + page; i++) {
            id = i;
            pokemonnumber = i;
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemonnumber}`;
            let response = await fetch(url);
            currentPokemon = await response.json();
            changeImgShiny(id);
            pokemonnumber++;
        }
    }
    shiny = true;
}

async function shinyloop28(){
    for (let i = 0 + page; i < 1 + page; i++) {
        id = i;
        pokemonnumber = i;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonnumber}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        changeImgShiny(id);
        pokemonnumber++;
    }
    shiny = true
}

async function changeToNormal() {
    pokemonnumber = 0 + page;
    if (page >= 151) {
        normalloop28();
    } else {
        for (let i = 0 + page; i < 30 + page; i++) {
        id = i;
        pokemonnumber = i;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonnumber}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        changeImgNormal(id);
        pokemonnumber++;
        }
    }
    shiny = false;
}

async function normalloop28() {
    for (let i = 0 + page; i < 1 + page; i++) {
        id = i;
        pokemonnumber = i;
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
    if (shiny == true) {
        document.getElementById(`pokemonImg${id}`).src = currentPokemon['sprites']['front_shiny'];
    }
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
    document.getElementById('pokedex-window').innerHTML += `
    <div id="pokemon-singlecard${id}" class="pokemon-singlecard" onclick="detailed(${id})">
        <h1 id="pokemonName${id}" class="name">Name</h1>
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
            <h2 id="pokemonNameDetailed${number}" class="pokemonNameDetailed"> Name </h2>
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

function darkmodeOn(){
    document.getElementById('body').classList.add('darkmodeOn');
    document.getElementById('darkmodeMenu').innerHTML = `
    <p id="darkmode" onclick=darkmodeOff()>Turn darkmode off</p>
    `;
    document.getElementById('nav1').style.color ="white";
    document.getElementById('nav2').style.color ="white";
    document.getElementById('darkmode').style.color ="white";
    document.getElementById('arrow-left').src = "img/arrow_left_white.png";
    document.getElementById('arrow-right').src = "img/arrow_right_white.png";
    document.getElementById('page').style.color = "white";
}

function darkmodeOff(){
    document.getElementById('body').classList.remove('darkmodeOn');
    document.getElementById('darkmodeMenu').innerHTML = `
    <p id="darkmode" onclick=darkmodeOn()>Change to darkmode</p>
    `;
    document.getElementById('nav1').style.color ="black";
    document.getElementById('nav2').style.color ="black";
    document.getElementById('darkmode').style.color ="black";
    document.getElementById('arrow-left').src = "img/arrow_left_black.png";
    document.getElementById('arrow-right').src = "img/arrow_right_black.png";
    document.getElementById('page').style.color = "black";

}

function showpage(){
    if (page >= 151) {
        document.getElementById('page').innerHTML = `
        ${0 + page} / 151
        `
    } else {
    document.getElementById('page').innerHTML = `
    ${0 + page} - ${29 + page} / 151
    `
    }
}

function addpage(){
    page += 30;
    render();
    loadPokemon();
    if (page >= 151) {
        document.getElementById('arrow-right').classList.add("hide");
    }
    if (page >=29) {
        document.getElementById('arrow-left').classList.remove("hide");
    }
}

function lowerpage(){
    page -= 30;
    render();
    loadPokemon();
    if (page <= 150) {
        document.getElementById('arrow-right').classList.remove("hide");
    }
    if (page <=30) {
        document.getElementById('arrow-left').classList.add("hide");
    }
}

function render(){
    document.getElementById("pokedex-window").innerHTML = ``;
}

function myFunction() {
    // Declare variables
    var input, filter, complete, div, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    complete = document.getElementById("pokedex-window");
    div = complete.getElementsByClassName('pokemon-singlecard');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < div.length; i++) {
      a = div[i].getElementsByTagName("h1")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        div[i].style.display = "";
      } else {
        div[i].style.display = "none";
      }
    }
  }