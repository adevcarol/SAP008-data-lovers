import { computeStats, filterData, filterMedal, ascendingOrder, descendingOrder, userSearch} from './data.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
const medalSelector = document.querySelector('#medalhas'); // imputs de medalha
const sportSelector = document.querySelector('#modalidades');
const orderSelector = document.querySelector('#ordenacao');
const statistic = document.querySelector('#calculo-agregado');
const inptSearch = document.querySelector('#barra-pesquisar');

const arrayAthletes = data.athletes;

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
    sportSelector.innerHTML = selectInfo(arrayAthletes, "sport");
    const filtered = filterData(arrayAthletes, "sport", sportSelector.value);
    content.innerHTML = createCards(filtered);

    const percent = (computeStats(arrayAthletes, "gender", "F"))
    statistic.innerHTML = createCardStats(percent)
}

startPage()

function createCardStats(element) {
    return `
            <h2 class="estatistica"><i>A porcentagem de atletas mulheres medalhistas foi de: <strong>${element}%</strong></i></h2>
            `
}

/* ----------------SELECT DAS MODALIDADES--------------------*/
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

sportSelector.onchange = () => {
    const filtered = filterData(arrayAthletes, "sport", sportSelector.value);
    content.innerHTML = createCards(filtered);
}

medalSelector.onchange = () => {
    const filtered = filterData(arrayAthletes, "sport", sportSelector.value);
    const filteredMedal = filterMedal(filtered, "medal", medalSelector.value);
    content.innerHTML = createCards(filteredMedal);
}

orderSelector.onchange = () => {
    const filtered = filterData(arrayAthletes, "sport", sportSelector.value);
    if (orderSelector.value == 'a-z') {
        const filterAZ = ascendingOrder(filtered);
        content.innerHTML = createCards(filterAZ);
    }
    else if (orderSelector.value == 'z-a') {
        const filterZA = descendingOrder(filtered);
        content.innerHTML = createCards(filterZA);
    }
}

/*inptSearch.onkeyup = function () {
    let input = inptSearch.value
    input = input.toLowerCase();
    let element = document.getElementsByClassName('nome');

    for (let i = 0; i < element.length; i++) {
        if (!element[i].innerHTML.toLowerCase().includes(input)) {
            element[i].style.display = "none";
        }
        else {
            element[i].style.display = "list-item";
        }
    }
};*/

function agoraVai(){
    let filtrado = userSearch(arrayAthletes, inptSearch.value)
    content.innerHTML = createCards(filtrado)
}

inptSearch.addEventListener("keypress", agoraVai)