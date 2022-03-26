'use strict';

const calculateButtonElement = document.getElementById('calculate');
const priceInputElement = document.getElementById('price');
const amountInputElement = document.getElementById('amount');

const money = [
  {
    name: 'doscientos euros',
    value: 200,
  },
  {
    name: 'cien euros',
    value: 100,
  },
  {
    name: 'ciencuenta euros',
    value: 50,
  },
  {
    name: 'veinte euros',
    value: 20,
  },
  {
    name: 'diez euros',
    value: 10,
  },
  {
    name: 'cinco euros',
    value: 5,
  },
  {
    name: 'dos euros',
    value: 2,
  },
  {
    name: 'un euro',
    value: 1,
  },
  {
    name: 'cincuenta centimos',
    value: 0.5,
  },
  {
    name: 'veinte centimos',
    value: 0.2,
  },
  {
    name: 'diez centimos',
    value: 0.1,
  },
  {
    name: 'cinco centimos',
    value: 0.05,
  },
  {
    name: 'dos centimos',
    value: 0.02,
  },
  {
    name: 'un centimos',
    value: 0.01,
  },
];

const getReturnAmount = () =>
  parseFloat(amountInputElement.value) - parseFloat(priceInputElement.value);

function showChange() {
  const change = [];

  let returnAmount = getReturnAmount();
  let amount = 0;
  for (let item of money) {
    amount = Math.floor(returnAmount / item.value);
    if (amount > 0) {
      change[item.name] = amount;
      returnAmount = returnAmount - amount * item.value;
    }
  }
  if (getReturnAmount() < 0) {
    console.log('Te faltan ', -1 * getReturnAmount(), ' euros');
  } else {
    console.log(change, 'Aquí tiene su cambio');
  }
}

calculateButtonElement.addEventListener('click', getReturnAmount);
calculateButtonElement.addEventListener('click', showChange);
