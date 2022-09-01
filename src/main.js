// import { example } from './data.js';
import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';

// console.log(data);

const content = document.querySelector('.cards-main');
const medalluta = document.querySelector('#medalhasluta');

const arrAthletes = data.athletes

// Filtro por medalhas 
medalluta.addEventListener('change', (event) => {
    console.log(event.target.value)
    let medallutaType = event.target.value

    if (medallutaType == "") {
        arrAthletes.map((filterluta) => {
            if (filterluta.sport == "Wrestling") {
                const template = `
        <div class="card-atleta" id="card-atleta">
            <div class="atributos-atleta">
                <p class="nome">${filterluta.name}</p>
                <p class="genero">${filterluta.gender}</p>
                <p class="esporte">${filterluta.sport}</p>
                <p class="esporte">${filterluta.medal}</p>
    </div>
    </div>  
    `
                content.innerHTML += template
            }

        })
    }

    else if (medallutaType == "Gold") {
        arrAthletes.map((filterluta) => {
            if (filterluta.medal == "Gold" && filterluta.sport == "Wrestling") {
                const template = `
        <div class="card-atleta" id="card-atleta">
            <div class="atributos-atleta">
                <p class="nome">${filterluta.name}</p>
                <p class="genero">${filterluta.gender}</p>
                <p class="esporte">${filterluta.sport}</p>
                <p class="esporte">${filterluta.medal}</p>
    </div>
    </div>  
    `
                content.innerHTML += template
            }


        })
    }

    else if (medallutaType == "Silver") {
        arrAthletes.map((filterluta) => {
            if (filterluta.medal == "Silver" && filterluta.sport == "Wrestling") {
                const template = `
        <div class="card-atleta" id="card-atleta">
            <div class="atributos-atleta">
                <p class="nome">${filterluta.name}</p>
                <p class="genero">${filterluta.gender}</p>
                <p class="esporte">${filterluta.sport}</p>
                <p class="esporte">${filterluta.medal}</p>
    </div>
    </div>  
    `
                content.innerHTML += template

            }

        })
    }

    else if (medallutaType == "Bronze") {
        arrAthletes.map((filterluta) => {
            if (filterluta.medal == "Bronze" && filterluta.sport == "Wrestling") {
                const template = `
        <div class="card-atleta" id="card-atleta">
            <div class="atributos-atleta">
                <p class="nome">${filterluta.name}</p>
                <p class="genero">${filterluta.gender}</p>
                <p class="esporte">${filterluta.sport}</p>
                <p class="esporte">${filterluta.medal}</p>
    </div>
    </div>  
    `
                content.innerHTML += template
            }
        })
    }
})