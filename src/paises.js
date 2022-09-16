import { filterData, filterMedal, ascendingOrder, descendingOrder, computeStats } from './data.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
const medalSelector = document.querySelector('#medalhas'); // imputs de medalha
const teamSelector = document.querySelector('#pais');
const orderSelector = document.querySelector('#ordenacao');
const statistic = document.querySelector('#calculo-agregado')

const arrayAthletes = data.athletes

// geração dos cards
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

/* ----------------SELECT DOS PAÍSES--------------------*/
function selectInfo(data, key) {
    const item = data.map((element) => {
        return `
            <option value="${element[key]}">${element[key]}</option>
            `
    });
    //const x = new Set(item)
    //const y = [...x]
    return item.join(""); // ...new Set para remover itens repedidos do array mas dá erro nos testes
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
