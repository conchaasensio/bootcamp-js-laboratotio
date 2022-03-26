'use strict';

const calculateButtonElement = document.getElementById('calculate');
const priceInputElement = document.getElementById('price');
const amountInputElement = document.getElementById('amount');

const money = [
  {
    name: '200 euros',
    value: 200,
  },
  {
    name: '100 euros',
    value: 100,
  },
  {
    name: '50 euros',
    value: 50,
  },
  {
    name: '20 euros',
    value: 20,
  },
  {
    name: '10 euros',
    value: 10,
  },
  {
    name: '5 euros',
    value: 5,
  },
  {
    name: '2 euros',
    value: 2,
  },
  {
    name: '1 euro',
    value: 1,
  },
  {
    name: '50 céntimos',
    value: 0.5,
  },
  {
    name: '20 céntimos',
    value: 0.2,
  },
  {
    name: '10 céntimos',
    value: 0.1,
  },
  {
    name: '5 céntimos',
    value: 0.05,
  },
  {
    name: '2 céntimos',
    value: 0.02,
  },
  {
    name: '1 céntimo',
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
