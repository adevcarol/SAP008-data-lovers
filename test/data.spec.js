import { filterData, descendingOrder, ascendingOrder, computeStats } from '../src/data.js';

const arrayTest = [
  {
    "name": "Giovanni Abagnale",
    "gender": "M",
    "sport": "Rowing",
    "team": "Italy",
    "medal": "Bronze"
  },
  {
    "name": "Patimat Abakarova",
    "gender": "F",
    "sport": "Taekwondo",
    "team": "Iran",
    "medal": "Bronze"
  },
  {
    "name": "Luc Abalo",
    "gender": "M",
    "sport": "Taekwondo",
    "team": "France",
    "medal": "Silver"
  },
  {
    "name": "Saeid Morad Abdevali",
    "gender": "M",
    "sport": "Taekwondo",
    "team": "Iran",
    "medal": "Gold"
  }
]

describe('filterData', () => {
  it('é uma função', () => {
    expect(typeof filterData).toBe('function');
  })

  it('filtrar o país do atleta', () => {
    const paisEsperado = filterData(arrayTest, "team", "Iran")
    expect(paisEsperado.length).toEqual(2);
    expect(paisEsperado).toEqual([
      arrayTest[1],
      arrayTest[3]
    ]);
  })
  it('filtrar a modalidade do atleta', () => {
    const modalidadeEsperada = filterData(arrayTest, "sport", "Taekwondo")
    expect(modalidadeEsperada.length).toEqual(3);
    expect(modalidadeEsperada).toEqual([
      arrayTest[1],
      arrayTest[2],
      arrayTest[3]
    ]);
  })
  it('filtrar a medalha do atleta', () => {
    const medalhaEsperada = filterData(arrayTest, "medal", "Bronze")
    expect(medalhaEsperada.length).toEqual(2);
    expect(medalhaEsperada).toEqual([
      arrayTest[0],
      arrayTest[1]
    ]);
  })
});

describe('descendingOrder', () => {
  it('é uma função', () => {
    expect(typeof descendingOrder).toBe('function');
  });

  it('ordenar de z-a', () => {
    console.log(arrayTest);
    const ordemEsperada = descendingOrder(arrayTest);
    expect(ordemEsperada.length).toEqual(4);
    expect(ordemEsperada).toEqual([
      arrayTest[0],
      arrayTest[1],
      arrayTest[2],
      arrayTest[3],
    ]);
    console.log(arrayTest)
  })
});

describe('ascendingOrder', () => {
  it('é uma função', () => {
    expect(typeof ascendingOrder).toBe('function');
  });

  it('ordenar de a-z', () => {
    const ordemEsperada = ascendingOrder(arrayTest);
    expect(ordemEsperada.length).toEqual(4);
    expect(ordemEsperada).toEqual([
      arrayTest[0],
      arrayTest[1],
      arrayTest[2],
      arrayTest[3]
    ]);
  })
});

describe('computeStats', () => {
  it('é uma função', () => {
    expect(typeof computeStats).toBe('function');
  })
  it('porcentagem de medalhistas mulheres', () => {
    const porcentagemEsperada = computeStats(arrayTest, "gender", "F")
    expect(porcentagemEsperada).toEqual(25);
  })
  it('porcentagem de medalhistas brasileiros', () => {
    const porcentagemEsperada = computeStats(arrayTest, "medal", "Brazil")
    expect(porcentagemEsperada).toEqual(0);
  })
  it('porcentagem de medalhistas de bronze', () => {
    const porcentagemEsperada = computeStats(arrayTest, "medal", "Bronze")
    expect(porcentagemEsperada).toEqual(50);
  })
});