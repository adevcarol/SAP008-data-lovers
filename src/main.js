import { filterData } from './data.js';
import athletes from './data/athletes/athletes.js';
import data from './data/athletes/athletes.js';

const content = document.querySelector('#cards-main'); // impressão dos cards
const btnFilter = document.querySelector('#btn-filtro'); // botão de filtro
const medalSelector = document.querySelector('#medalhas'); // imputs de medalha
const sportSelector = document.querySelector('#modalidades');
const atletesSelector = document.querySelector('#atletas');
const orderPaises = document.querySelector("#input-order");
const btnFilterPaises = document.querySelector('#btn-filtro-paises'); 

const arrayAthletes = data.athletes
let arrayReturn = []



sportSelector.onclick = (event) => {
    arrayReturn = arrayAthletes.filter(medalFilter);
    cardsPrint();
}

btnFilter.onclick = (event) => {
    arrayReturn = arrayAthletes.filter(medalFilter);
    cardsPrint();
}

btnFilterPaises.onclick = (event) =>{
    if(orderPaises.value == 'a-z'){
        console.log(orderPaises.value + 'ordenando de a-z'); 
    }
 else if(orderPaises.value == 'z-a'){
    console.log(orderPaises.value + 'ordenando de z-a'); 
 }
}

/*function orderTeam(team, order){
    if (order == "a-z") {
        return team.sort(); 
        (function (a,b){
         if( a.team > b.team ){
           return 1 
           
         }
         if ( b.team > a.team) {
           
           return -1 
     
         }
        
        } ) 
     
       } 
     
      }*/


function medalFilter(atleta) {
    if (medalSelector.value == 'All') {
        return atleta.sport == sportSelector.value
    }
    return atleta.sport == sportSelector.value && atleta.medal == medalSelector.value;
}

// função para impressão dos cards
function cardsPrint() {
    content.innerHTML = filterData(arrayReturn);
}

/*orderPaises.addEventListener ("change", ordenator);
function ordenator () {
    console.log('olá');
}*/

/*showCityCards(data.city)
const ordenator = (e) =>{
  const orderSelec = e.target.value;
  if (orderSelec !== ""){
    const filterOrder = sortCity(city, orderSelec)
    showCityCards(filterOrder)
  }
}*/
