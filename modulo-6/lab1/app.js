'use strict';

const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

const products = [
  {
    description: 'Goma de borrar',
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: 'Lápiz H2',
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: 'Cinta rotular',
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: 'Papelera plástico',
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: 'Escuadra',
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: 'Pizarra blanca',
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: 'Afilador',
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: 'Libro ABC',
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

const showProducts = () => {
  const container = document.getElementById('js-product-list-container');
  const productItems = document.createElement('ol');
  container.appendChild(productItems);
  productItems.setAttribute('class', 'product__list');

  for (let product of products) {
    const description = document.createElement('li');
    description.setAttribute('class', 'product__item');
    description.innerHTML =
      product.description + ' - ' + product.price + '€/unidad';
    productItems.appendChild(description);

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('id', 'input');
    input.setAttribute('required', 'required');
    input.setAttribute('value', product.units);
    input.setAttribute('min', 0);
    input.setAttribute('max', 'product.stock');
    input.setAttribute('class', 'product__input');
    description.appendChild(input);

    input.addEventListener('change', (ev) => {
      product.units = ev.target.value;
      enableCalculateButton();
    });
  }
};

const calculateBill = () => {
  let subtotalPrice = 0;
  let taxes = 0;
  for (let product of products) {
    subtotalPrice += getSubtotal(product);
    taxes += getTaxes(product);
  }
  let totalPrice = subtotalPrice + taxes;

  const subtotalElement = document.getElementById('js-subtotal');
  subtotalElement.innerHTML = `${subtotalPrice.toFixed(2)}€`;
  const taxTypeElement = document.getElementById('js-taxes');
  taxTypeElement.innerHTML = `${taxes.toFixed(2)}€`;
  const totalPriceElement = document.getElementById('js-total');
  totalPriceElement.innerHTML = `${totalPrice.toFixed(2)}€`;
};

const calculateButtonElement = document.getElementById(
  'js-calculate-cart-price'
);

calculateButtonElement.addEventListener('click', calculateBill);

const enableCalculateButton = () => {
  const hasUnits = products.some((product) => product.units > 0);
  calculateButtonElement.disabled = !hasUnits;
};

const getSubtotal = (product) => {
  return product.price * product.units;
};

const getTaxes = (product) => {
  return (getSubtotal(product) * product.tax) / 100;
};

showProducts();
enableCalculateButton();
