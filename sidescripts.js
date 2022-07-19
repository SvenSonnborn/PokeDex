let currentPokemon;
let page = 1;
let pokemonnumber = 0 + page;
let id;
let classcolor;
let nodetails = false;
let shiny = false;


function background(id) {
    classcolor = document.getElementById(`type1${id}`).innerHTML;
    document.getElementById(`pokemon-singlecard${id}`).classList.add(`${classcolor}`);
}
function getHpValue() {
    let hp = currentPokemon['stats'][0]['base_stat'];
    document.getElementById('hp').style = `width: ${hp}%`;
    document.getElementById('hpText').innerHTML = `HP: ${hp}`;
}
function getAtkValue() {
    let atk = currentPokemon['stats'][1]['base_stat'];
    document.getElementById('atk').style = `width: ${atk}%`;
    document.getElementById('atkText').innerHTML = `ATK: ${atk}`;
}
function getDefValue() {
    let def = currentPokemon['stats'][2]['base_stat'];
    document.getElementById('def').style = `width: ${def}%`;
    document.getElementById('defText').innerHTML = `DEF: ${def}`;
}
function getSpAtkValue() {
    let spAtk = currentPokemon['stats'][3]['base_stat'];
    document.getElementById('sp-atk').style = `width: ${spAtk}%`;
    document.getElementById('spAtkText').innerHTML = `SP-ATK: ${spAtk}`;}
function getspDefValue() {
    let spDef = currentPokemon['stats'][4]['base_stat'];
    document.getElementById('sp-def').style = `width: ${spDef}%`;
    document.getElementById('spDefText').innerHTML = `SP-DEF: ${spDef}`;
}
function getSpeedValue() {
    let speed = currentPokemon['stats'][5]['base_stat'];
    document.getElementById('speed').style = `width: ${speed}%`;
    document.getElementById('speedText').innerHTML = `SPEED: ${speed}`;
}
