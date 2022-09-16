//const medalIcon = [{ 'Gold': '🥇', 'Silver': '🥈', 'Bronze': '🥉' }]

/* ----------------FILTRO DAS MEDALHAS-------------------------- */

export function filterMedal(data, key, value) {
  const filter = data.filter((element) => element[key] === value);
  return filter;
}

/* ----------------FILTRO DOS DADOS-------------------------- */
export function filterData(data, key, value) {
  const filter = data.filter((element) => element[key] === value);
  return filter;
}

/* ----------------CÁLCULO AGREGADO--------------------------*/
export const computeStats = (data, key, value) => {
  let qtd = data.reduce((total, valor) => {
    if (valor[key] === value) {
      return total + 1;
    }
    return total;
  }, 0);
  return Number((qtd * 100 / data.length).toFixed(2));
}

/*-------------FUNÇÕES DE OREDENAÇÃO AZ e ZA-----------------*/
export const ascendingOrder = (data) => {
  const order = data.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    else {
      return -1;
    }
  })
  console.log(order)
  return order;
}

export const descendingOrder = (data) => {
  const order = data.sort(function (a, b) {
    if (a.name > b.name) {
      return -1;
    }
    else {
      return 1;
    }
  })
  console.log(order)
  return order;
}

/*----------------BARRA DE PESQUISA------------------------
export const userSearch = (data, condition) => {
  // ..
}
*/