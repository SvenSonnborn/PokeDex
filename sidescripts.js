let currentPokemon;
let pokemonnumber = 1;
let id;
let classcolor;
let nodetails = false;

function background(id) {
    classcolor = document.getElementById(`type1${id}`).innerHTML;
    document.getElementById(`pokemon-singlecard${id}`).classList.add(`${classcolor}`);
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