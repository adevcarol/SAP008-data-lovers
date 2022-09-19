import { filterData, filterMedal, ascendingOrder, descendingOrder, computeStats, userSearch } from './data.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main');
const medalSelector = document.querySelector('#medalhas');
const teamSelector = document.querySelector('#pais');
const orderSelector = document.querySelector('#ordenacao');
const statistic = document.querySelector('#calculo-agregado');
const inptSearch = document.querySelector('#barra-pesquisar');

const arrayAthletes = data.athletes

function createCards(data) {
    const cards = data.map(createCardElement).join("")
    return cards;
}

function createCardElement(element) {
    return `
            <div class="card-atleta" id="card-atleta">
                <div class="card-efeito" >
                    <div class="card-frente">
                        <p class="nome"><strong>Nome:</strong> ${element.name}</p>
                    </div>
                    <div class="card-verso">    
                        <div class="atributos-atleta">
                            <p class="genero"><strong>Gênero:</strong> ${element.gender}</p>
                            <p class="esporte"><strong>Modalidade:</strong> ${element.sport}</p>
                            <p class="pais"><strong>País:</strong> ${element.team}</p>
                            <p class="medalha"><strong>Medalha:</strong> ${element.medal}</p>
                            <p class="evento"><strong>Categoria:</strong> ${element.event}</p>
                        </div>
                    </div>
                </div>
            </div>
        `
}

function startPage() {
    teamSelector.innerHTML = selectInfo(arrayAthletes, "team")
    const filtered = filterData(arrayAthletes, "team", teamSelector.value);
    content.innerHTML = createCards(filtered);

    const percent = (computeStats(arrayAthletes, "team", "Brazil"))
    statistic.innerHTML = createCardStats(percent)
}

startPage()

function createCardStats(element) {
    return `
            <h2 class="estatistica"><i>A porcentagem de atletas medalhistas brasileiros foi de: <strong>${element}%</strong></i></h2>
            `
}

function selectInfo(data, key) {
    const item = data.map((element) => {
        return `
            <option value="${element[key]}">${element[key]}</option>
            `
    });
    const noRepeat = new Set(item)
    const select = [...noRepeat]
    return select.join(""); 
}

teamSelector.onchange = () => {
    const filtered = filterData(arrayAthletes, "team", teamSelector.value);
    content.innerHTML = createCards(filtered);
}

medalSelector.onchange = () => {
    const filtered = filterData(arrayAthletes, "team", teamSelector.value);
    const filteredMedal = filterMedal(filtered, "medal", medalSelector.value);
    content.innerHTML = createCards(filteredMedal);
}

orderSelector.onchange = () => {
    const filtered = filterData(arrayAthletes, "team", teamSelector.value);
    if (orderSelector.value == 'a-z') {
        const filterAZ = ascendingOrder(filtered);
        content.innerHTML = createCards(filterAZ);
    }
    else if (orderSelector.value == 'z-a') {
        const filterZA = descendingOrder(filtered);
        content.innerHTML = createCards(filterZA);
    }
}

function searchInfo() {
    let filtrado = userSearch(arrayAthletes, inptSearch.value)
    content.innerHTML = createCards(filtrado)
}

inptSearch.addEventListener("keypress", searchInfo)