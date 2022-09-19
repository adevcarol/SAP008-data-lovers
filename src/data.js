export function filterMedal(data, key, value) {
  const filter = data.filter((element) => element[key] === value);
  return filter;
}

export function filterData(data, key, value) {
  const filter = data.filter((element) => element[key] === value);
  return filter;
}

export const computeStats = (data, key, value) => {
  let qtd = data.reduce((total, valor) => {
    if (valor[key] === value) {
      return total + 1;
    }
    return total;
  }, 0);
  return Number((qtd * 100 / data.length).toFixed(2));
}

export const ascendingOrder = (data) => {
  const order = data.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    else {
      return -1;
    }
  })
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
  return order;
}

export const userSearch = (data, condition) => {
  let test = data.filter(atleta =>atleta.name.toLowerCase().includes(condition.toLowerCase()))
  return test
}


