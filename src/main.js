// import { example } from './data.js';
import data from './data/athletes/athletes.js';

// console.log(data);

const content = document.querySelector('.cards-main');

// const data2 = [data.athletes[0], data.athletes[1], data.athletes[2]]
const arrSports = data.athletes

arrSports.forEach((filtersport, index) => { // inicio do forEach
    if (filtersport.sport === "Wrestling") {
        const template = `
            <div class="card-atleta" id="card-atleta">
                <div class="atributos-atleta">

                    <p class="esporte">${element.sport}</p>
                    
                </div>
            </div>
            `
        content.innerHTML += template
    }
    console.log(filtersport.name)

});


